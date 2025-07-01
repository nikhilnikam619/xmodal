import { useState } from 'react';
import './App.css';
import { Modal } from '@mui/material';

function App() {
  const [formdata, setFormdata] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const getdata = (e) => {
    const { id, value } = e.target;
    setFormdata((prev) => ({ ...prev, [id]: value }));
  };

  function datahandler(e) {
    e.preventDefault();
    if (Number(formdata.phone?.length) !== 10) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
      return;
    }

    if (!checkdob(formdata.dob)) {
      alert("Invalid date of birth. Date of birth cannot be in the future");
      return;
    }

    alert("Form submitted successfully!");
    setFormdata({});
    setIsModalOpen(false);
  }

  function checkdob(dob) {
    const today = new Date();
    const inputDate = new Date(dob);
    return inputDate.getTime() <= today.getTime();
  }

  return (
    <>
      <h1>User Details Modal</h1>
      <button data-testid="open-modal-button" onClick={openModal}>
        Open Form
      </button>

      <Modal
        open={isModalOpen}
        onClose={closeModal} // ✅ This must be called when clicking outside
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <div className="modal-content" data-testid="modal">
          <h1>Fill Details</h1>
          <form onSubmit={datahandler}>
            <label>Username</label>
            <input
              type="text"
              id="username"
              required
              value={formdata.username || ""}
              onChange={getdata}
            /><br />
            <label>Email Address</label>
            <input
              type="email"
              id="email"
              required
              value={formdata.email || ""}
              onChange={getdata}
            /><br />
            <label>Phone Number</label>
            <input
              type="number"
              id="phone"
              required
              value={formdata.phone || ""}
              onChange={getdata}
            /><br />
            <label>Date of Birth</label>
            <input
              type="date"
              id="dob"
              required
              value={formdata.dob || ""}
              onChange={getdata}
            /><br />
            <button className="submit-button">Submit</button>
          </form>
        </div>
      </Modal>
    </>
  );
}

export default App;
