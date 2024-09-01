import React, { useRef, useState } from 'react'
import './Form.css'
function Form() {
  //usestates
  const [fname , setFirstName]=useState("");
  const [lname , setLastName]=useState("");
  const [age , setAge]=useState(0);
  const [score , setScore]=useState(0);
  const [grade , setGrade]=useState("");
  const [student , setStudent]=useState([]);
  //creting referance
  let firstName=useRef(null);
  let lastName=useRef(null);
  let Age=useRef(null);
  let Score=useRef(null);
  let Grade=useRef(null);
  function AddDetails() {
    let obj = {
      fname:firstName.current.value,
      lname:lastName.current.value,
      age:Age.current.value,
      score:Score.current.value,
      grade:Grade.current.value
    };
  setStudent([...student,obj]); // Correct way to update the state
  console.log(student); // Log the updated list 
}
  return (
    <div className='form'>
       <div className='input'>
       <label htmlFor="fName">FirstName:</label>
       <input type="text" name="fName" id=""  placeholder='Enter First Name' ref={firstName}/>
       </div> 
      <div className='input'>
      <label htmlFor="lName">LastName:</label>
      <input type="text" name="lName" id=""  placeholder='Enter Last Name' ref={lastName}/>
      </div>
      <div className='input'>
      <label htmlFor="age">Age:</label>
      <input type="number" name="age" id="" ref={Age}/>
      </div>
      <div className='input'>
      <label htmlFor="score">Score:</label>
      <input type="number" name="score" id="" ref={Score} />
      </div>
      <div className='input'>
      <label htmlFor="grade">Grade:</label>
      <input type="text" name="grade" id="" placeholder='Enter a grade' ref={Grade}/>
      </div>
      <div className='input'>
      <button onClick={
       ()=>{
       setFirstName(firstName.current.value);
       setLastName(lastName.current.value);
       setAge(Age.current.value);
       setScore(Score.current.value);
       setGrade(Grade.current.value);
       AddDetails() ;
       }}>Add</button>
      </div> 
      {
       student.map((ele) => {
        return (
            <div className='flex-box'>
                <p>{ele.fname}</p>
                <p>{ele.lname}</p>
                <p>{ele.age}</p>
                <p>{ele.score}</p>
                <p>{ele.grade}</p>
            </div>
        );
    })
     }
    </div>
  )
}

export default Form
