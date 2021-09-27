import './Form.css';
import React, { useState } from "react";




const Form = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    contactNumber:"",
    eid: "",
    birthDate: ""
  });

  

  const { firstName, lastName, emailAddress, contactNumber, eid, birthDate } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
    
  };
  const onSubmit = e => {
      if (firstName === '' ||
    lastName === '' ||
        emailAddress === '' ||
        contactNumber === '' ||
    eid === '' ||
    birthDate === ''
    ){
      alert('Invalid Input! Cannot be empty.');
      return;
    }
    if(!firstName.match(/^[a-zA-Z,.ñ ]+$/) ||
        firstName.length > 30) {
      alert('Please enter valid Full Name.');
      return;
    }
    if(!lastName.match(/^[a-zA-Z,.ñ ]+$/) ||
        lastName.length > 30) {
      alert('Please enter valid Full Name.');
      return;
    }
    if(emailAddress.length > 45) {
      alert('Please enter valid email.');
      return;
    }
    if (contactNumber.length !== 11) {
      alert('Please enter 11-digit number.');
      return;
    } else {
      console.log('submit')
      alert('New contact has been added.');
      // history.push("/");
    }
  
    
  };
  return (
    <div className="container">
      <div className="w-50 mx-auto shadow p-5">
        <h1 className="text-center mb-4">Enter Contact Details</h1>
        <form onSubmit = {onSubmit}>
          <div className="form-group">
                <label>First Name</label>
                    <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="First Name"
                    name="firstName"
                    value={firstName}
                    onChange={e => onInputChange(e)}
                    required
                            />
            </div>
            <div className="form-group">
                        <label>Last Name</label>
                            <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Last Name"
                            name="lastName"
                            value={lastName}
                            onChange={e => onInputChange(e)}
                            required
                            />                 
            </div>
          <div className="form-group">
                <label>Email Address</label>
                    <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="example@email.com"
                    name="emailAddress"
                    value={emailAddress}
                    onChange={e => onInputChange(e)}
                    required
                    />
          </div>
          <div className="form-group">
          <label>Contact Number</label>
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="09xxxxxxxxx"
              name="contactNumber"
              value={contactNumber}
              onChange={e => onInputChange(e)}
              required
            />
          </div>
          <div className="form-group">
                <label>EID</label>
                    <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="eid"
                    name="eid"
                    value={eid}
                    onChange={e => onInputChange(e)}
                    required
                    />
          </div>
          <div className="form-group">
          <label>Birthdate</label>
            <input
              type="date"
              className="form-control form-control-lg"
              placeholder="Select BirthDate"
              name="birthDate"
              value={birthDate}
              onChange={e => onInputChange(e)}
              required
                      />
          </div>
          <button className="btn btn-dark btn-block">Submit</button>

        </form>
      </div>
    </div>
  );
};


export default Form;
