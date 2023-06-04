import React, { useContext, useEffect, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import img from "../../assets/others/authentication2.png";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const Login = () => {
  const [disabled, setDisabled] = useState(true);

  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (event) => {
    console.log("clicked");
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password).then((result) => {
      const user = result.user;
      // console.log(user);
      Swal.fire({
        title: "User Login Successful.",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
      navigate(from, { replace: true });
    });
  };

  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    // console.log(user_captcha_value);
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
    <div className=' login-wrapper'>
      <div className='login   lg:flex items-center'>
        <div className=' '>
          <img className='w-[645px]' src={img} alt='' />
        </div>
        <div className='  w-[536px]'>
          <form onSubmit={handleLogin}>
            <h1 className='text-center text-4xl font-bold mb-5'>Login</h1>
            <div className='form-control'>
              <label className='label'>
                <span className='text-xl'>Email</span>
              </label>
              <input
                type='text'
                placeholder='email'
                name='email'
                className='input input-bordered'
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='text-xl'>Password</span>
              </label>
              <input
                type='password'
                placeholder='password'
                name='password'
                className='input input-bordered'
              />
              <label className='label'>
                <a href='#' className='label-text-alt link link-hover'>
                  Forgot password?
                </a>
              </label>
            </div>
            <div className='form-control'>
              <label className='label '>
                <LoadCanvasTemplate />
              </label>

              <input
                onBlur={handleValidateCaptcha}
                type='text'
                name='captcha'
                placeholder='type the captcha above'
                className='input input-bordered'
              />
            </div>
            <div className='form-control mt-6'>
              <input
                type='submit'
                disabled={disabled}
                className='btn border-none btn-login'
                value='Login'
              />
            </div>
          </form>
          <p className='text-center mt-8 text-[#D1A054] text-xl font-medium'>
            <small>
              New Here? <Link to='/signup'>Create an account</Link>{" "}
            </small>
          </p>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Login;
