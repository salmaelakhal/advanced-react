import React from "react";
import "./Form.css"; // Pour le CSS personnalisé
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = Yup.object().shape({
  fullName: Yup.string().required("Full name is required"),
  age: Yup.number().positive().integer().required("Age is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .test("value", "Invalid password", (value) => value === "123")
    .required("Password is required"),

  country: Yup.string().required("Country is required"),
});

const Form = () => {
  const { register, handleSubmit, control, formState } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
    defaultValues: async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1"
      );
      const user = await response.json();
      console.log(user);

      return {
        fullName: user.name,
        email: user.email,
        age: 30,
        password: "123",
      };
    },
  });

  const {
    errors,
    isSubmitted,
    isValid,
    dirtyFields,
    submitCount,
    isLoading,
    isSubmitSuccessful,
  } = formState;

  const submitForm = (data) => {
    console.log(data);
  };

  return (
    <div className="form-container">
      <div className="form-box">


      {submitCount > 3 ?
                <div className="alert alert-danger" role="alert">
                    <strong>You are blocked , please contact the administrator !!! </strong>
                </div>
                :
                <>
                        {isLoading && <div>Loading...</div>}

{isSubmitSuccessful && (
  <div className="alert alert-primary" role="alert">
    <strong>Success: </strong>
    Form submitted !
  </div>
)}

<h2 className="form-title">Create user</h2>
<hr className="form-separator" />

<form onSubmit={handleSubmit(submitForm)}>
  {/* ///// */}
  <div className="form-group">
    <label>Full name</label>
    <input
      className="form-control"
      type="text"
      placeholder=""
      {...register("fullName", {
        // required: true,
        // minLength: {
        //   value: 5,
        //   message: "Too many characters",
        // },
      })}
    />
    {errors.fullName && (
      <span className="text-danger">{errors.fullName.message}</span>
    )}
  </div>
  {/* ///// */}
  <div className="form-group">
    <label>Age</label>
    <input
      className="form-control"
      type="text"
      placeholder=""
      {...register("age", {
        // min: 18,
        // max: 120,
      })}
    />
    {errors.age && (
      <span className="text-danger">{errors.age.message}</span>
    )}
  </div>
  {/* ///// */}

  <div className="form-group">
    <label>Email</label>
    <input
      className="form-control"
      type="email"
      placeholder=""
      {...register("email", {
        // pattern: {
        //   value: /^\S+@\S+\.\S+$/,
        //   message: 'Invalid Email'
        // },
      })}
    />
    {errors.email && (
      <span className="text-danger">{errors.email.message}</span>
    )}
  </div>

  {/* ///// */}

  <div className="form-group">
    <label>Password</label>
    <input
      className="form-control"
      type="password"
      placeholder="password"
      {...register("password", {
        // validate: (value) => {
        //   return value === '123' || 'Invalid password'
        // }
      })}
    />
    {errors.password && (
      <span className="text-danger">{errors.password.message}</span>
    )}
  </div>

  {/* //// */}
  <div className="form-group">
    <label>Country</label>
    <select {...register("country")} className="form-control">
      <option value="">Select your country</option>
      <option value="Maroc">Maroc</option>
      <option value="France">France</option>
      <option value="Canada">Canada</option>
      <option value="USA">USA</option>
      <option value="Allemagne">Allemagne</option>
    </select>
  </div>
  <input
    disabled={!isValid || Object.keys(dirtyFields).length === 0}
    className="btn btn-primary"
    type="submit"
    value="Submit"
  />
</form>
<DevTool control={control} />
                </>
                
      }



      </div>
    </div>
  );
};

export default Form;
