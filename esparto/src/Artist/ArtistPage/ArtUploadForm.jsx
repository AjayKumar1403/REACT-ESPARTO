// // ArtUploadForm.js
// import React, { useState } from 'react';
// import './style.css'; // Import the CSS file

// const ArtUploadForm = ({ onArtUpload }) => {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [basePrice, setBasePrice] = useState('');
//   const [image, setImage] = useState('');

//   const handleUpload = () => {
//     if (!title || !description || !basePrice || !image) {
//       alert('Please fill in all fields');
//       return;
//     }

//     const newArt = {
//       title,
//       description,
//       basePrice,
//       image,
//     };

//     onArtUpload(newArt);

//     setTitle('');
//     setDescription('');
//     setBasePrice('');
//     setImage('');
//   };

//   return (
//     <div className="art-upload-form">
//       <h2>Upload New Art</h2>
//       <form>
//         <label>Title:</label>
//         <input
//           type="text"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />

//         <label>Description:</label>
//         <textarea
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//         />

//         <label>Base Selling Price:</label>
//         <input
//           type="number"
//           value={basePrice}
//           onChange={(e) => setBasePrice(e.target.value)}
//         />

//         <label>Image URL:</label>
//         <input
//           type="text"
//           value={image}
//           onChange={(e) => setImage(e.target.value)}
//         />

//         <button type="button" onClick={handleUpload}>
//           Upload Art
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ArtUploadForm;

// ArtUploadForm.js




import React, { useState } from 'react';
import Modal from 'react-modal';
import './style.css'; // Import the CSS file

const ArtUploadForm = ({ onArtUpload }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [basePrice, setBasePrice] = useState('');
  const [image, setImage] = useState(null);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => {
    setModalIsOpen(false);
    // Reset form values when the modal is closed
    setTitle('');
    setDescription('');
    setBasePrice('');
    setImage(null);
  };

  const handleUpload = () => {
    if (!title || !description || !basePrice || !image) {
      alert('Please fill in all fields');
      return;
    }

    const newArt = {
      title,
      description,
      basePrice,
      image,
    };

    onArtUpload(newArt);
    closeModal();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="art-upload-form">
      <button className="open-modal-button" onClick={openModal}>
        Upload Art
      </button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <h2>Upload New Art</h2>
        <form style={{ textAlign: 'center', marginTop: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>
            Title:
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
          />
          <br />

          <label style={{ display: 'block', marginBottom: '5px' }}>
            Description:
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
          />
          <br />

          <label style={{ display: 'block', marginBottom: '5px' }}>
            Base Selling Price:
          </label>
          <input
            type="number"
            value={basePrice}
            onChange={(e) => setBasePrice(e.target.value)}
            style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
          />
          <br />

          <label style={{ display: 'block', marginBottom: '5px' }}>
            Upload Image:
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{ marginBottom: '10px' }}
          />

          {image && (
            <img
              className="preview-image"
              src={image}
              alt="Preview"
              style={{ maxWidth: '100%', height: 'auto', marginBottom: '10px' }}
            />
          )}
          <br />

          <button
            type="button"
            onClick={handleUpload}
            style={{
              padding: '10px',
              backgroundColor: '#4caf50',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
              marginRight: '5px',
            }}
          >
            Upload Art
          </button>

          <button
            type="button"
            onClick={closeModal}
            style={{
              padding: '10px',
              backgroundColor: '#ccc',
              color: 'black',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Cancel
          </button>
        </form>
        ;
      </Modal>
    </div>
  );
};

export default ArtUploadForm;
