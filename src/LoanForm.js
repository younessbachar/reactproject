import "./FormStyle.css"
import Modal from "./Modal"
import { useState } from "react"

export default function LoanForm(){
  const[errorMessage,seterrorMessage] = useState(null)
    const [loanInputs, setloanInputs] = useState({
      name:"",
      phoneNumber:"",
      age:"",
      isEmployee: false,
      salaryRange:""
    })
    const [showModel,setshowModel] = useState(false)
    function handleFormSubmit(event){
      event.preventDefault();
      seterrorMessage(null)
      const {age} = loanInputs
      const {phoneNumber} = loanInputs
      if(age < 18 || age > 100){
        
        seterrorMessage("the age is not allowed")
      }else if(phoneNumber.length < 10 || phoneNumber.length >12){
          seterrorMessage("Phone Number Format Is Incorrect")
      }
      setshowModel(true)
    }
    function btnisDisable(){
      return(
      loanInputs.name == "" ||
      loanInputs.phoneNumber == "" ||
       loanInputs.age == ""
    )}

    function handleDivClick(){
        if(showModel){
        setshowModel(false)
        }
  }

   

    return(
      <div onClick={handleDivClick} className="flex" style={{flexDirection:"column"}}>
        <form className="flex" id="loanform" style={{display:"flex", flexDirection:"column"}}>
            <h1>Requesting a loan</h1>
            <hr></hr>
            <label>Name:</label>
            <input value={loanInputs.name} onChange={(event)=>{
                setloanInputs({...loanInputs, name: event.target.value})
            }}/>
            <label>Phone Number:</label>
            <input value={loanInputs.phoneNumber} onChange={(event)=>{
                setloanInputs({...loanInputs, phoneNumber: event.target.value})
            }} />
            <label>Age:</label>
            <input value={loanInputs.age} onChange={(event)=>{
                setloanInputs({...loanInputs, age: event.target.value})
            }} />
            <label>Are you an employee?</label>
            <input type="checkbox" value={loanInputs.isEmployee} onChange={(event)=>{
              setloanInputs({...loanInputs, isEmployee: event.target.checked})
            }}/>
            <select value={loanInputs.salaryRange} onChange={(event)=>{
                setloanInputs({...loanInputs, salaryRange: event.target.value})
            }}>
                <option>less than 500$</option>
                <option>between 500$ and 2000$</option>
                <option>above 2000$</option>
            </select>
            <button className={btnisDisable() ?  "disabled" : ""} onClick={handleFormSubmit} disabled={btnisDisable()} id="submitbtn">Submit</button>
        </form>

        <Modal errorMessage={errorMessage} isVisible={showModel}/>

      </div>  
    )
}