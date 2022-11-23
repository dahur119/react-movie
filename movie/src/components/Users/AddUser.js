import React, { useState, useRef } from 'react';

import ErrorModal from '../UI/ErrorModal';
import Card from '../UI/Card';
import Button from '../UI/Button';
import Wrapper from '../Helpers/Wrapper';
import classes from './AddUser.module.css';

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  // const [userName, setUserName] = useState('');
  // const [ageNum, setAgeNum] = useState('');
  const [error, setError ] = useState(false)

  // const userNameValue = (event) =>{
  //   setUserName(event.target.value)
  // }

  // const setAgeNumValue = (event) =>{
  //   setAgeNum(event.target.value)
  //   console.log(event.target.value)
  // }

  const addUserHandler = (event) =>{
    event.preventDefault()
    const enteredUsername = nameInputRef.current.value;
    const enterAge = ageInputRef.current.value;
    if(enteredUsername.trim().length === 0 || enterAge.trim().length ===0 ){
      setError ({
        title : "invalid input",
        message: "please enter a valid username and age"
      })
      return;

      
    }

    if(+enterAge < 1){
      setError({
        title: 'invalid Age',
        message :"please enter a valid age"
      })
      return;
    }
    props.addOnUser(enteredUsername, enterAge)
    // setAgeNum('');
    // setUserName('');
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';

  };
  const errorHandler =()=>{
    setError(prev =>!prev)
    console.log('hello')
  
  }
 



 

  return (
    <Wrapper>
        {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username"
         type="text" 
        //  value={userName}  
        //  onChange={userNameValue } 
         ref={nameInputRef}/>
        <label htmlFor="age" >Age (Years)</label>
        <input id="age" 
        type="number" 
        // value={ageNum} 
        // onChange={setAgeNumValue} 
        ref={ageInputRef}/>
        <Button type="submit">Add User</Button>
      </form>
    </Card>

    </Wrapper>
   
  );
};

export default AddUser;
