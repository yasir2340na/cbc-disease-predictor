
from flask import Flask, request, jsonify
import pickle
import numpy as np
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Load models
with open('leukemia_model.pkl', 'rb') as f:
    leukemia_model = pickle.load(f)

with open('anemia_model.pkl', 'rb') as f:
    anemia_model = pickle.load(f)
with open('anemia_scaler.pkl', 'rb') as f:
    anemia_scaler = pickle.load(f)

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.json
        disease = data.get('disease')
        inputs = data.get('inputs')

        if not disease or not inputs:
            return jsonify({'error': 'Missing input or disease'}), 400

        if disease == 'anemia':
            # Backend processing required for anemia
            gender = 1 if inputs['gender'] == 'Male' else 0
            values = [
                gender,
                float(inputs['haemoglobin']),
                float(inputs['mch']),
                float(inputs['mchc']),
                float(inputs['mcv'])
            ]
            scaled_values = anemia_scaler.transform([values])
            prediction = anemia_model.predict(scaled_values)[0]

        elif disease == 'leukemia':
            # Inputs already preprocessed in frontend as numeric list
            if not isinstance(inputs, list) or len(inputs) != 10:
                return jsonify({'error': 'Invalid leukemia input format'}), 400
            scaled_values = anemia_scaler.transform([inputs])
            prediction = leukemia_model.predict([scaled_values])[0]

        else:
            return jsonify({'error': 'Invalid disease type'}), 400

        return jsonify({
            'disease': disease,
            'prediction': str(prediction),
            'inputSummary': inputs
        })

    except Exception as e:
        print("❌ Error during prediction:", str(e))
        return jsonify({'error': 'Server error during prediction', 'details': str(e)}), 500

if __name__ == '__main__':
    app.run(port=5000)
