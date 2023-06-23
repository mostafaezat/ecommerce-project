import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
// import postregister from "../api/postregister";
export default function Register() {
  const form = useForm();
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;
  //   const registeruser = async (data) => {
  //     console.log(data);
  //     let ss = await postregister(data);
  //     if (ss.status) {
  //       console.log(ss);
  //     } else {
  //       console.log(ss);
  //     }
  //   };
  const navigator = useNavigate();
  const OnSubmitus = (data) => {
    console.log(data);
    navigator("/");
    // registeruser(data);
  };
//   useEffect(() => {
//     OnSubmitus();
//   });
  return (
    <div className="register d-flex justify-content-center">
      <form
        className="form-control w-50 p-5"
        onSubmit={handleSubmit(OnSubmitus)}
        noValidate
      >
        <h1>CREATE AN ACCOUNT</h1>

        <div>
          <label className="form-label" htmlFor="name">
            name
          </label>
          <input
            className="form-control"
            type="name"
            id="name"
            {...register("name", {
              required: "username is required",
            })}
          />
          <span className="error">{errors.name?.message}</span>
        </div>
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
        <div className="text-center">
          <p>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </p>
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary text-center">
            Create
          </button>
        </div>
      </form>
    </div>
  );
}
