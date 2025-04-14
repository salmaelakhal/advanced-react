import React from "react";
import "./Form.css"; // Pour le CSS personnalisé
import { useForm } from "react-hook-form"; 


const Form = () => {

  const {register, handleSubmit} = useForm({
    defaultValues: async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
      const user = await response.json()
      console.log(user);
      
     return {
       fullName: user.name,
      // age: parseInt(Math.random()*50),
      email: user.email,
      // country: user.address.city,
     }
    }
  });
  const submitForm = (data) => {
    console.log(data);
    
  }

  return (
    <div className="form-container">
      <div className="form-box">
        <h2 className="form-title">Create user</h2>
        <hr className="form-separator" />
        
        <form onSubmit = {handleSubmit(submitForm)}>
          <div className="form-group">
            <label  htmlFor="fullName">Full name</label>
            <input
              className="form-control"
              type="text"
              placeholder=""
              {...register('fullName')}
            />
          </div>

          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input
              className="form-control"
              type="text"
              placeholder=""
              {...register('age')}

            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              className="form-control"
              type="email"
              placeholder=""
              {...register('email')}

            />
          </div>

          <div className="form-group">
            <label htmlFor="country">Country</label>
            <select {...register('country')} className="form-control">
              <option value="">Select your country</option>
              <option value="Maroc">Maroc</option>
              <option value="France">France</option>
              <option value="Canada">Canada</option>
              <option value="USA">USA</option>
              <option value="Allemagne">Allemagne</option>
            </select>
          </div>

          <input 
            type="submit"
            value="Submit"
            className="btn-submit mt-3"
          />
        </form>
      </div>
    </div>
  );
};

export default Form;

