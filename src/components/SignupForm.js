 import React, { useState } from 'react'
 import Validation from "./Validation";
 const SignupForm = () => {
     const [values, setValues] =useState({
         fullname:"",
         email:"",
         password:"",
     })
     const [errors, setErrors]=useState({});
     const handleChange= (event)=>{
         setValues({
             ...values,
             [event.target.name]:event.target.value,
         })

     }
     const handleFormSubmit=(event)=>{
         event.preventDefault();
         setErrors(Validation(values));
     }
     return (
         
      <div className="container ">
            <div><img src="./flower.jpeg" alt=""/></div> 
        <div className="app-wrapper">
    
               <div> <h2 className="title">Create Account</h2> </div>

            <form className="form-wrapper">
                <div className="name">
                    <label className="label">Full Name</label>
                    <input className="input" type="text" name="fullname" 
                    value={values.fullname}
                    onChange={handleChange}/>
                    {errors.fullname && <p className="error">{errors.fullname}</p> }
                </div>
                <div className="email">
                    <label className="label">Email</label>
                    <input className="input" type="email" name="email" 
                    value={values.email}
                    onChange={handleChange}/>
                    {errors.email && <p className="error">{errors.email}</p>}
                </div>
                <div className="password">
                    <label className="label">Password</label>
                    <input className="input" type="password" name="password"
                     value={values.password} onChange={handleChange}/>
                    <button className= "submit" onClick={handleFormSubmit}>Sign Up</button>
                    {errors.password && <p className="error">{errors.password}</p>}
                </div>
            </form>
         </div>
     </div>
     );
 };
 
 export default SignupForm
 