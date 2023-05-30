import React, { useEffect, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import img from "../../assets/others/authentication2.png";

const Login = () => {
  const [disabled, setDisabled] = useState(true);
  console.log(disabled);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    console.log(user_captcha_value);
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
          <div className=''>
            <h1 className='text-center text-4xl font-bold mb-5'>Login</h1>
            <div className='form-control'>
              <label className='label'>
                <span className='text-xl'>Email</span>
              </label>
              <input
                type='text'
                placeholder='email'
                className='input input-bordered'
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='text-xl'>Password</span>
              </label>
              <input
                type='text'
                placeholder='password'
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
