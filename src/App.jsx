// import { useState } from 'react'
// import './App.css'
// import {  Modal } from '@mui/material'; 
// function App() {
//   const [formdata,setFormdata]=useState({})
//     const [isModalOpen, setIsModalOpen] = useState(false);

//   const openModal = () => setIsModalOpen(true);
//   const closeModal = () => setIsModalOpen(false);

// const getdata=(e)=>{

// const {id,value}=e.target



// setFormdata((prev)=>({

//  ...prev,
//  [id]:value

// }))



// }


//   function datahandler(e){
// //alert("csdc")
//     if(Number(formdata.phone.length)===10){
//       e.preventDefault()
//       //setFormdata({username:"",email:"",dob:"",phone:""})


//     }
 
//     else{
//       alert("Invalid phone number. Please enter a 10-digit phone number.")
//     }

//     if(checkdob(formdata.dob)){

//        e.preventDefault()

//     }

//     else{
//       alert("Invalid date of birth. Date of birth cannot be in the future")
//     }
    
    
   
    

//   }


//   function checkdob(dob){

//     const todate=new Date()
//     const indate=new Date(dob)

    

//     if(indate.getTime()>todate.getTime()) return false

//     return true


//   }


//   return (
//     <>
    
// <div className={isModalOpen?"modal":""}>
//       <h1>User Details Modal</h1>
//       <button onClick={openModal}>Open Form</button>
//      <Modal  open={isModalOpen} onClose={closeModal}   aria-labelledby="modal-title"
//   aria-describedby="modal-description"
//  ><div className="modal-content" onClick={(e) => e.stopPropagation()} >
//         <h1>Fill Details</h1>
//         <form action="" onSubmit={datahandler}>
//           <label htmlFor="">Username</label>
//           <input type="text"  id='username' required value={formdata.id}  onChange={getdata}/><br />
//           <label htmlFor="">Email Address</label>
//           <input type="email" id='email'required value={formdata.id}  onChange={getdata}/><br />
//           <label htmlFor="">Phone Number</label>
//           <input type="number" id='phone' required value={formdata.id}  onChange={getdata}/><br />
//           <label htmlFor="">Date of Birth</label>
//           <input type="date" id='dob' required value={formdata.id}  onChange={getdata}/><br />
//           <button className='submit-button' >Submit</button>
//         </form>


//       </div>
// </Modal>
// </div>

//     </>
//   )
// }

// export default App


import { useState } from 'react'
import './App.css'
import { Modal } from '@mui/material'

function App() {
  const [formdata, setFormdata] = useState({})
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  const getdata = (e) => {
    const { id, value } = e.target
    setFormdata((prev) => ({ ...prev, [id]: value }))
  }

  function datahandler(e) {
    e.preventDefault()

    if (Number(formdata.phone?.length) !== 10) {
      alert("Invalid phone number. Please enter a 10-digit phone number.")
      return
    }

    if (!checkdob(formdata.dob)) {
      alert("Invalid date of birth. Date of birth cannot be in the future")
      return
    }

   
    alert("Form submitted successfully!")
    setFormdata({})
    setIsModalOpen(false)
  }

  function checkdob(dob) {
    const today = new Date()
    const inputDate = new Date(dob)
    return inputDate.getTime() <= today.getTime()
  }

  return (
    <>
      <div className={isModalOpen ? "modal" : ""}>
        <h1>User Details Modal</h1>
        <button data-testid="open-modal-button" onClick={openModal}>Open Form</button>

        <Modal
  open={isModalOpen}
  onClose={closeModal}
  aria-labelledby="modal-title"
  aria-describedby="modal-description"
>
  <div className="modal-content" data-testid="modal">
    <h1>Fill Details</h1>
    <form onSubmit={datahandler}>
      <label>Username</label>
      <input type="text" id="username" required value={formdata.username || ""} onChange={getdata} /><br />
      <label>Email Address</label>
      <input type="email" id="email" required value={formdata.email || ""} onChange={getdata} /><br />
      <label>Phone Number</label>
      <input type="number" id="phone" required value={formdata.phone || ""} onChange={getdata} /><br />
      <label>Date of Birth</label>
      <input type="date" id="dob" required value={formdata.dob || ""} onChange={getdata} /><br />
      <button className="submit-button">Submit</button>
    </form>
  </div>
</Modal>
      </div>
    </>
  )
}

export default App
