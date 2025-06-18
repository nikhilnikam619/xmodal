import { useState } from 'react'
import './App.css'
import {  Modal } from '@mui/material'; 
function App() {
  const [formdata,setFormdata]=useState({})
    const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

const getdata=(e)=>{

const {id,value}=e.target



setFormdata((prev)=>({

 ...prev,
 [id]:value

}))



}


  function datahandler(e){
//alert("csdc")
    if(Number(formdata.phone.length)===10){
      e.preventDefault()
      //setFormdata({username:"",email:"",dob:"",phone:""})


    }
 
    else{
      alert("Invalid phone number. Please enter a 10-digit phone number.")
    }

    if(checkdob(formdata.dob)){

       e.preventDefault()

    }

    else{
      alert("Invalid date of birth. Date of birth cannot be in the future")
    }
    
    
   
    

  }


  function checkdob(dob){

    const todate=new Date()
    const indate=new Date(dob)

    

    if(indate.getTime()>todate.getTime()) return false

    return true


  }

  return (
    <>
     
<div className="modal">
      <h1>User Details Modal</h1>
      <button onClick={openModal}>Open Form</button>
<div className="modal-content">
       <Modal  open={isModalOpen} onClose={closeModal}></Modal>
        <h1>Fill Details</h1>
        <form action="" onSubmit={datahandler}>
          <label htmlFor="">Username</label>
          <input type="text"  id='username' required value={formdata.id}  onChange={getdata}/><br />
          <label htmlFor="">Email Address</label>
          <input type="email" id='email'required value={formdata.id}  onChange={getdata}/><br />
          <label htmlFor="">Phone Number</label>
          <input type="number" id='phone' required value={formdata.id}  onChange={getdata}/><br />
          <label htmlFor="">Date of Birth</label>
          <input type="date" id='dob' required value={formdata.id}  onChange={getdata}/><br />
          <button className='submit-button' >Submit</button>
        </form>
</Modal>

      </div>

</div>
    </>
  )
}

export default App
