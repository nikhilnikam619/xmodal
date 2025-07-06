// import { useState } from 'react';
// import './App.css';

// function App() {
//   const [formdata, setFormdata] = useState({});
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const openModal = () => setIsModalOpen(true);
//   const closeModal = () => setIsModalOpen(false);

//   const getdata = (e) => {
//     const { id, value } = e.target;
//     setFormdata((prev) => ({ ...prev, [id]: value }));
//   };

//   const checkdob = (dob) => {
//     const today = new Date();
//     const inputDate = new Date(dob);
//     return inputDate.getTime() <= today.getTime();
//   };

//   const datahandler = (e) => {
//     e.preventDefault();
//     const { username, email, phone, dob } = formdata;

//     if (!username || !email || !phone || !dob) {
//       alert('Please fill out all fields.');
//       return;
//     }

//     if (!email.includes('@')) {
//       alert('Invalid email. Please check your email address.');
//       return;
//     }

//     if (phone.length !== 10) {
//       alert('Invalid phone number. Please enter a 10-digit phone number.');
//       return;
//     }

//     if (!checkdob(dob)) {
//       alert('Invalid date of birth. Date of birth cannot be in the future');
//       return;
//     }

//     alert('Form submitted successfully!');
//     setFormdata({});
//     setIsModalOpen(false);
//   };

//   return (
//     <>
//       <h1>User Details Modal</h1>
//       <button data-testid="open-modal-button" onClick={openModal}>
//         Open Form
//       </button>

//       {isModalOpen && (
//   <div
//     className="modal"
//     onClick={(e) => {
//       if (e.target === e.currentTarget) {
//         closeModal();
//       }
//     }}
//     data-testid="modal"
//   >
//     <div className="modal-content">
//       <h1>Fill Details</h1>
//       <form onSubmit={datahandler}>
//         <label>Username</label>
//         <input
//           type="text"
//           id="username"
//           required
//           value={formdata.username || ''}
//           onChange={getdata}
//         /><br />
//         <label>Email Address</label>
//         <input
//           type="email"
//           id="email"
//           required
//           value={formdata.email || ''}
//           onChange={getdata}
//         /><br />
//         <label>Phone Number</label>
//         <input
//           type="number"
//           id="phone"
//           required
//           value={formdata.phone || ''}
//           onChange={getdata}
//         /><br />
//         <label>Date of Birth</label>
//         <input
//           type="date"
//           id="dob"
//           required
//           value={formdata.dob || ''}
//           onChange={getdata}
//         /><br />
//         <button className="submit-button">Submit</button>
//       </form>
//     </div>
//   </div>
// )}

//     </>
//   );
// }

// export default App;
import React, { useState } from 'react';
import './App.css'; 

const XModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    dob: '',
  });
  const [errorMessage, setErrorMessage] = useState('');

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleOutsideClick = (e) => {
    if (e.target ===  e.currentTarget) {
      closeModal();
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, phone, dob } = formData;

    if (!username) {
      setErrorMessage('Please fill out the Username field.');
      return;
    }
    if (!email.includes('@')) {
      setErrorMessage('Invalid email. Please check your email address.');
      return;
    }
    if (phone.length !== 10 || isNaN(phone)) {
      setErrorMessage(
        'Invalid phone number. Please enter a 10-digit phone number.'
      );
      return;
    }
    const today = new Date();
    const birthDate = new Date(dob);
    if (birthDate > today) {
      setErrorMessage(
        'Invalid Date of Birth. You cannot select a future date.'
      );
      return;
    }

    setErrorMessage('');
    closeModal();
  };

  return (
    <div>
    <h1>User Details modal</h1>
      <button onClick={openModal}>Open Form</button>

      {isOpen && (
        
        <div className='modal' onClick={handleOutsideClick}>
          <div className='modal-content'>
            <form onSubmit={handleSubmit}>
            <h1>Fill Details</h1>
              <label>
                Username:
                <input
                  type='text'
                  id='username'
                  placeholder='Enter your username'
                  value={formData.username}
                  onChange={handleChange}
                />
              </label>
              <br />
              <label>
                Email Address:
                <input
                  type='email'
                  id='email'
                  placeholder='Enter your email'
                  value={formData.email}
                  onChange={handleChange}
                />
              </label>
              <br />
              <label>
                Phone Number:
                <input
                  type='text'
                  id='phone'
                  placeholder='Enter your phone number'
                  value={formData.phone}
                  onChange={handleChange}
                />
              </label>
              <br />
              <label>
                Date of Birth:
                <input
                  type='date'
                  id='dob'
                  value={formData.dob}
                  onChange={handleChange}
                />
              </label>
              <br />
              <button type='submit' className='submit-button'>
                Submit
              </button>
            </form>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
          </div>
        </div>
      )}
    </div>
  );
};

export default XModal;
