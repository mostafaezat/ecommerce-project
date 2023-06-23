import React from "react";
import { useForm } from "react-hook-form";
// import LoginUser from "../api/Login";
import { Link } from "react-router-dom";

export default function Login() {
  const form = useForm();
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;
  const OnSubmitus = (data) => {
    // const UserLogin = async (data) => {
    //   let sss = await LoginUser(data);
    //   if (sss.status) {
    //     console.log(data);
    //   } else {
    //     console.log(data);
    //   }
    // };
    // UserLogin(data);
    console.log(data);
  };
  return (
    <div className="register d-flex justify-content-center">
      <form
        className="form-control w-50 p-5"
        onSubmit={handleSubmit(OnSubmitus)}
        noValidate
      >
        <h1>SIGN IN</h1>
        <div>
          <label className="form-label" htmlFor="email">
            email address
          </label>
          <input
            className="form-control"
            type="email"
            id="email"
            {...register("email", {
              required: "enter your email",
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/,
                message: "inVaild email ",
              },
            })}
          />
          <span className="error">{errors.email?.message}</span>
        </div>
        <div>
          <label className="form-label" htmlFor="password">
            password
          </label>
          <input
            className="form-control"
            type="password"
            id="password"
            {...register("password", {
              required: "password is required",
            })}
          />
          <span className="error">{errors.password?.message}</span>
        </div>
        <div>
          <p>Forgot account?</p>
        </div>
        <div className="d-flex justify-content-between ">
          <button type="submit" className="btn btn-primary text-center">
            LOGIN
          </button>
          <Link to='/register'>Create account</Link>
        </div>
      </form>
    </div>
  );
}
