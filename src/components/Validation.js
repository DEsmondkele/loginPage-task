import React from 'react'

const Validation = (values) => {
    let errors={};
    if(!values.fullname){
        errors.fullname="Name is required.";
    }
    if(!values.email){
        errors.email="email is empty.";
    }
    else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email="Email is invalid.";
    }
    if(!values.password){
        errors.password="password is required.";
    }
    else if(values.password.length<6){
        errors.password="Password must be more than six characters"
    }

    return(errors
        )
    
};

export default Validation
