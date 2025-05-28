from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import tensorflow as tf
import pandas as pd
import json

app = Flask(__name__)
CORS(app)

# Load model dan preprocessor (pastikan path benar sesuai lokasi file)
model = tf.keras.models.load_model('model_preferensi_tensorflow.h5')
label_encoder = joblib.load('label_encoder.pkl')
preprocessor = joblib.load('preprocessor.pkl')

# Load data destinasi
with open('data_destinasi.json', encoding='utf-8') as f:
    destinasi_data = json.load(f)

@app.route('/')
def index():
    return "ML API berjalan. Gunakan POST /predict untuk prediksi."

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.json
        kategori = data.get('kategori')
        kabupaten_kota = data.get('kabupaten_kota')
        rating_min = data.get('rating_min')

        # Validasi input
        if not kategori or not kabupaten_kota or rating_min is None:
            return jsonify({'error': 'kategori, kabupaten_kota dan rating_min harus diisi'}), 400

        # Siapkan data input dalam DataFrame untuk preprocessing
        input_df = pd.DataFrame([[kategori.lower(), kabupaten_kota.lower(), rating_min]], 
                                columns=['kategori', 'kabupaten_kota', 'rating'])

        # Preprocessing input
        input_processed = preprocessor.transform(input_df)

        # Prediksi
        prediction = model.predict(input_processed)
        predicted_class_idx = prediction.argmax(axis=1)[0]

        # Decode label hasil prediksi
        preferensi = label_encoder.inverse_transform([predicted_class_idx])[0]

        # Filter destinasi sesuai input dan preferensi
        hasil = [
            d for d in destinasi_data
            if d.get('kategori', '').lower() == kategori.lower()
            and d.get('kabupaten_kota', '').lower() == kabupaten_kota.lower()
            and float(d.get('rating', 0)) >= float(rating_min)
            # and preferensi.lower() in d.get('preferensi', '').lower()  # opsional, bisa diaktifkan jika ingin filter preferensi
        ]

        # Jika hasil kosong, tampilkan semua destinasi sesuai filter tanpa preferensi
        if not hasil:
            hasil = [
                d for d in destinasi_data
                if d['kategori'] == kategori.lower()
                and d['kabupaten_kota'] == kabupaten_kota.lower()
                and d['rating'] >= float(rating_min)
            ]

        return jsonify(hasil)

    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(port=7000, debug=True)
