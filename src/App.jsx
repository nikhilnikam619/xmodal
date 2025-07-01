import { useState } from 'react';
import './App.css';

function App() {
  const [formdata, setFormdata] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const getdata = (e) => {
    const { id, value } = e.target;
    setFormdata((prev) => ({ ...prev, [id]: value }));
  };

  const checkdob = (dob) => {
    const today = new Date();
    const inputDate = new Date(dob);
    return inputDate.getTime() <= today.getTime();
  };

  const datahandler = (e) => {
    e.preventDefault();
    const { username, email, phone, dob } = formdata;

    if (!username || !email || !phone || !dob) {
      alert('Please fill out all fields.');
      return;
    }

    if (!email.includes('@')) {
      alert('Invalid email. Please check your email address.');
      return;
    }

    if (phone.length !== 10) {
      alert('Invalid phone number. Please enter a 10-digit phone number.');
      return;
    }

    if (!checkdob(dob)) {
      alert('Invalid date of birth. Date of birth cannot be in the future');
      return;
    }

    alert('Form submitted successfully!');
    setFormdata({});
    setIsModalOpen(false);
  };

  return (
    <>
      <h1>User Details Modal</h1>
      <button data-testid="open-modal-button" onClick={openModal}>
        Open Form
      </button>

      {isModalOpen && (
        <div className="modal" onClick={closeModal} data-testid="modal">
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h1>Fill Details</h1>
            <form onSubmit={datahandler}>
              <label>Username</label>
              <input
                type="text"
                id="username"
                required
                value={formdata.username || ''}
                onChange={getdata}
              /><br />
              <label>Email Address</label>
              <input
                type="email"
                id="email"
                required
                value={formdata.email || ''}
                onChange={getdata}
              /><br />
              <label>Phone Number</label>
              <input
                type="number"
                id="phone"
                required
                value={formdata.phone || ''}
                onChange={getdata}
              /><br />
              <label>Date of Birth</label>
              <input
                type="date"
                id="dob"
                required
                value={formdata.dob || ''}
                onChange={getdata}
              /><br />
              <button className="submit-button">Submit</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
