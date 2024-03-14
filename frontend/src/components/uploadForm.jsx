import React, { useState } from 'react';
import axios from 'axios';
import "../assets/uploadForm.css";

/*   class UploadForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedBuilding: '',
            description: '',
            image: null,
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const { selectedBuilding, description, image } = this.state;

        // Handle form submission, e.g., send data to a server or perform an action

        console.log('Selected Building:', selectedBuilding);
        console.log('Description:', description);
        console.log('Selected Image:', image);
    };

    render() {
        return (
            <div className='uploadForm'>
                <h2>Upload Image</h2>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="selectedBuilding">Select a Playlist:</label>
                    <select
                        id="selectedBuilding"
                        name="selectedBuilding"
                        value={this.state.selectedBuilding}
                        onChange={this.handleInputChange}
                        required
                    >
                        <option value="">Select a Building</option>
                        <option value="oldMain">Old Main</option>
                        <option value="s&e">S&E</option>
                        <option value="northwood">Northwood</option>
                    </select>
                    <br />

                    <label htmlFor="description">Event Description:</label><br />
                    <textarea
                        id="description"
                        name="description"
                        value={this.state.description}
                        onChange={this.handleInputChange}
                        rows="4"
                        cols="50"
                        required
                    ></textarea>
                    <br />

                    <center><label htmlFor="image"></label>
                        <input
                            type="image"
                            id="image"
                            name="image"
                            accept="image/*"
                            onChange={this.handleFileChange}
                            required
                        /></center>
                    <br /> <br />

                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}


export default UploadForm;

*/


const UploadForm = () => {
    const [formData, setFormData] = useState({
      selectBuilding: '',
      description: '',
      image: '',
    });
    const [submitted, setSubmitted] = useState(false);
  
    const handleInputChange = (upload) => {
      setFormData({
        ...formData,
        [upload.target.name]: upload.target.value,
      });
    };
  
    const handleFileChange = (upload) => {
      setFormData({
        ...formData,
        image: upload.target.files[0], // Assuming you're uploading only one image
      });
    };
  
    const handleSubmit = async (upload) => {
      upload.preventDefault();
  
      const uploadData = {
        selectBuilding: formData.selectBuilding,
        description: formData.description,
        image: formData.image,
      };
  
      try {
        // http://127.0.0.1:8000/api/upload_images/
        // http://mrhaydenn.us.to:8000/api/upload_images/
        const response = await axios.post('http://127.0.0.1:8000/api/upload_images/', uploadData);
        console.log('Image Created', response.data);
        setSubmitted(true);
  
        setFormData({
          selectBuilding: '',
          description: '',
          image: '',
        });
      } catch (error) {
        console.error('Image Creation failed', error);
      }
    };
  
  
    return (
      <div className='uploadForm'>
        <h2>Upload Image</h2>
        {submitted && <div className="success-message">Upload submitted successfully!</div>}
        <form onSubmit={handleSubmit}>
          <div>
            <label>Building:</label>
  
           <label htmlFor="selectBuilding">Select a Playlist:</label>
            <select
              id="selectBuilding"
              name="selectBuilding"
              value={formData.selectBuilding}
              onChange={handleInputChange}
              required
            >
              <option value="">Select a Building</option>
              <option value="oldMain">Old Main</option>
              <option value="s&e">S&E</option>
              <option value="northwood">Northwood</option>
            </select> 
          </div>
          <div>
            <label>Description:</label>
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows="4"
              cols="50"
            />
          </div>
          <div>
            <label>image:</label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleFileChange}
            />
          </div>
          <button type="submit">Submit Image</button>
        </form>
      </div>
    );
  };
  
  export default UploadForm;