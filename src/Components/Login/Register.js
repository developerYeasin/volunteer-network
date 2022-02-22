import React from 'react';
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Register = () => {
     const {
       register,
       handleSubmit,
       watch,
       formState: { errors },
     } = useForm();
     const onSubmit = (data) => console.log(data);
    return (
      <div className="login-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="login-log">
                <Link to='/'>
                  <img src="./logos/Group 1329.png" alt="" />
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="login-card">
                <h4 className="login-card-title">Login With</h4>

                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="register-form"
                >
                  <input
                    type="text"
                    placeholder="Full Name"
                    {...register("name", { required: true })}
                  />
                  <input
                    type="email"
                    placeholder="Username or email"
                    {...register("email", { required: true })}
                  />
                  <input
                    type="date"
                    placeholder="Date"
                    {...register("date", { required: true })}
                  />
                  <input
                    type="text"
                    placeholder="Description"
                    {...register("description", { required: true })}
                  />

                  <input {...register("exampleRequired", { required: true })} />
                  {errors.exampleRequired && (
                    <span>This field is required</span>
                  )}

                  <button type="submit" className="primary-btn">
                    Registration
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Register;