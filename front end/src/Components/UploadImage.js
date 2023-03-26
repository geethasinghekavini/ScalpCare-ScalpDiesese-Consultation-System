import React, { useState } from "react";
import "./UploadImage.css";
import upload from './Images/upload.png';
import axios from 'axios';

const UploadImage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [prediction, setPrediction] = useState(null);

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
    setPrediction(null);
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedFile) return;
  
    const formData = new FormData();
    console.log(selectedFile)
    formData.append("image", selectedFile);
  
    try {
      // const response = await axios.post("http://172.27.24.181:5000/predict", formData);
      const response = await axios({
        method:"post",
        url:"http://127.0.0.1:5000/predict",
        data: formData,
        headers: {'Content-Type': 'multipart/form-data', 'Content-Disposition': 'attachment'}
      }).then((res) =>{return res});

      console.log(response.data)
      setPrediction(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  
  
  return (
    <div className="card">
      <div className="card-header">
        <h5 className="card-title">Image Upload</h5>
      </div>
      <div className="card-body">
        {selectedFile ? (
          <>
            <img
              src={URL.createObjectURL(selectedFile)}
              alt="Uploaded File"
              style={{ maxWidth: "100%", marginBottom: "10px" }}
            />
            {prediction !== null ? (
              <p className="prediction-text">Prediction: {prediction}</p>
            ) : (
              <button className="predict-button" onClick={handleSubmit}>Predict</button>
            )}
          </>
        ) : (
          <img
            src={upload}
            className="upload-image"
            alt="upload image"
          />
        )}
        <button
          className="upload-image-button"
          onClick={() => document.getElementById("filePicker").click()}
        >
          Upload Image
        </button>
        <input
          id="filePicker"
          type="file"
          accept="image/*"
          onChange={handleFileSelect}
          style={{ display: "none" }}
        />
      </div>
    </div>
  );
};

export default UploadImage;
