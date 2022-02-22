import React from 'react';
import { useForm } from "react-hook-form";

const Form = () => {
    const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data);
    return (
      <div className="col-md-8">
        <div className="form">
          <h2 className="form-title">Add Event</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="register-form">
            <div className="row">
              <div className="col-md-6">
                <input
                  type="text"
                  placeholder="Event Title"
                  {...register("eventTitle", { required: true })}
                />
              </div>
              <div className="col-md-6">
                <input
                  type="date"
                  {...register("eventDate", { required: true })}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <input
                  type="text"
                  placeholder="Description"
                  {...register("description", { required: true })}
                />
              </div>
              <div className="col-md-6">
                <input
                  type="file"
                  {...register("image", { required: true })}
                />
              </div>
            </div>
            <button type="submit" className="primary-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
};

export default Form;