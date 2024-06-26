import React from 'react';
import './Modais.css';

export default function App() {
  return (
    <div className="modal-container">
      <h1>Testando</h1>
      <div className="modal-content">
        <div className="image-upload-section box">
          <div className="image-placeholder">
            <img src="" alt="Placeholder" />
          </div>
          <button className="upload-button">Upload</button>
          <button className="delete-button">Delete</button>
        </div>
        
        <div className="general-information box">
          <h2>General Information</h2>
          <label>
            Name
            <input type="text" name="name" placeholder="Product" />
          </label>
          <label>
            Category
            <select name="category">
              <option value="productivity">Productivity</option>
              {/* Add more options as needed */}
            </select>
          </label>
          <label>
            Description
            <textarea name="description" placeholder="Description"></textarea>
          </label>
        </div>
        
        <div className="requirements box">
          <h2>Requirements</h2>
          <label>
            Operating System
            <input type="text" name="os" placeholder="Windows 10 64 bits" />
          </label>
          <label>
            Processor
            <input type="text" name="processor" placeholder="Multicore Intel" />
          </label>
          <label>
            RAM
            <input type="text" name="ram" placeholder="8 GB" />
          </label>
          <label>
            Hard Disk Space
            <input type="text" name="hdd" placeholder="" />
          </label>
          <label>
            Graphics Card
            <input type="text" name="gpu" placeholder="" />
          </label>
          <label>
            <input type="checkbox" name="internet-required" defaultChecked />
            This product needs internet connectivity to activate the software
          </label>
        </div>
      </div>
    </div>
  );
}