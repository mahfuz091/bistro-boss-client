import React, { useContext } from "react";
import img from "../../assets/others/authentication2.png";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          console.log("user profile info updated");
          reset();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "User created successfully.",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
        })
        .catch((error) => console.log(error));
    });
  };

  return (
    <div className=' login-wrapper'>
      <div className='login   lg:flex lg:flex-row-reverse items-center'>
        <div className=' '>
          <img className='w-[645px]' src={img} alt='' />
        </div>
        <div className='  w-[536px]'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1 className='text-center text-4xl font-bold mb-5'>Sign Up</h1>
            <div className='form-control'>
              <label className='label'>
                <span className='text-xl'>Name</span>
              </label>
              <input
                type='text'
                placeholder='name'
                {...register("name", { required: true })}
                className='input input-bordered'
              />
              {errors.name && (
                <span className='text-red-600'>Name is required</span>
              )}
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='text-xl'>Email</span>
              </label>
              <input
                type='text'
                placeholder='email'
                {...register("email", { required: true })}
                className='input input-bordered'
              />
              {errors.email && (
                <span className='text-red-600'>Email is required</span>
              )}
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='text-xl'>Password</span>
              </label>
              <input
                type='text'
                placeholder='password'
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                })}
                className='input input-bordered'
              />
              {errors.password?.type === "required" && (
                <p className='text-red-600'>Password is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className='text-red-600'>Password must be 6 characters</p>
              )}
              {errors.password?.type === "maxLength" && (
                <p className='text-red-600'>
                  Password must be less than 20 characters
                </p>
              )}
              {errors.password?.type === "pattern" && (
                <p className='text-red-600'>
                  Password must have one Uppercase one lower case, one number
                  and one special character.
                </p>
              )}
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='text-xl'>Photo URL</span>
              </label>
              <input
                type='text'
                placeholder='Photo Url'
                {...register("photoURL", { required: true })}
                className='input input-bordered'
              />
              {errors.photoURL && (
                <span className='text-red-600'>Photo URL is required</span>
              )}
            </div>

            <div className='form-control mt-6'>
              <input
                type='submit'
                className='btn border-none btn-login'
                value='Sign Up'
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
