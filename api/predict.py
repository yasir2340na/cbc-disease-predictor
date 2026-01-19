from __future__ import annotations

from pathlib import Path
import pickle

import numpy as np
from flask import Flask, jsonify, request

app = Flask(__name__)

MODELS_DIR = Path(__file__).resolve().parent.parent / "backend"

_leukemia_model = None
_anemia_model = None
_anemia_scaler = None


def _load_models():
    global _leukemia_model, _anemia_model, _anemia_scaler
    if _leukemia_model is None:
        with open(MODELS_DIR / "leukemia_model.pkl", "rb") as file:
            _leukemia_model = pickle.load(file)
    if _anemia_model is None:
        with open(MODELS_DIR / "anemia_model.pkl", "rb") as file:
            _anemia_model = pickle.load(file)
    if _anemia_scaler is None:
        with open(MODELS_DIR / "anemia_scaler.pkl", "rb") as file:
            _anemia_scaler = pickle.load(file)


@app.route("/", methods=["POST"])
def predict():
    try:
        _load_models()
        data = request.get_json(silent=True) or {}
        disease = data.get("disease")
        inputs = data.get("inputs")

        if not disease or inputs is None:
            return jsonify({"error": "Missing input or disease"}), 400

        if disease == "anemia":
            if not isinstance(inputs, dict):
                return jsonify({"error": "Invalid anemia input format"}), 400
            gender_value = 1 if inputs.get("gender") == "Male" else 0
            values = [
                gender_value,
                float(inputs.get("haemoglobin")),
                float(inputs.get("mch")),
                float(inputs.get("mchc")),
                float(inputs.get("mcv"))
            ]
            scaled_values = _anemia_scaler.transform([values])
            prediction = _anemia_model.predict(scaled_values)[0]

        elif disease == "leukemia":
            if not isinstance(inputs, list) or len(inputs) != 10:
                return jsonify({"error": "Invalid leukemia input format"}), 400
            values = np.array(inputs, dtype=float)
            prediction = _leukemia_model.predict([values])[0]

        else:
            return jsonify({"error": "Invalid disease type"}), 400

        return jsonify({
            "disease": disease,
            "prediction": str(prediction),
            "inputSummary": inputs
        })

    except Exception as exc:
        return jsonify({"error": "Server error during prediction", "details": str(exc)}), 500
