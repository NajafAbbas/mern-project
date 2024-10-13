import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true); // State to toggle between login and sign-up
  const { register, handleSubmit } = useForm(); // Initialize react-hook-form

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  const onSubmit = (data) => {
    // Handle form submission
    console.log(data); // You can replace this with your login/signup logic
  };

  return (
    <div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{isLogin ? 'Login' : 'Sign Up'}</h3>
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {isLogin ? (
              <>
                <div className="py-4">
                  <label htmlFor="username" className="label">Username</label>
                  <input
                    type="text"
                    id="username"
                    {...register('username', { required: true })} // Register input
                    className="input input-bordered w-full"
                    placeholder="Enter your username"
                  />
                </div>
                <div className="py-4">
                  <label htmlFor="password" className="label">Password</label>
                  <input
                    type="password"
                    id="password"
                    {...register('password', { required: true })} // Register input
                    className="input input-bordered w-full"
                    placeholder="Enter your password"
                  />
                </div>
              </>
            ) : (
              <>
                <div className="py-4">
                  <label htmlFor="fullName" className="label">Full Name</label>
                  <input
                    type="text"
                    id="fullName"
                    {...register('fullName', { required: true })} // Register input
                    className="input input-bordered w-full"
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="py-4">
                  <label htmlFor="email" className="label">Email</label>
                  <input
                    type="email"
                    id="email"
                    {...register('email', { required: true })} // Register input
                    className="input input-bordered w-full"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="py-4">
                  <label htmlFor="signupPassword" className="label">Password</label>
                  <input
                    type="password"
                    id="signupPassword"
                    {...register('signupPassword', { required: true })} // Register input
                    className="input input-bordered w-full"
                    placeholder="Enter your password"
                  />
                </div>
              </>
            )}
            <div className="modal-action">
              <button type="submit" className="btn">{isLogin ? 'Login' : 'Sign Up'}</button>
              <button type="button" className="btn" onClick={handleToggle}>
                {isLogin ? 'Switch to Sign Up' : 'Switch to Login'}
              </button>
              <button type="button" className="btn">Close</button>
            </div>
          </form>
          {/* Sign-up option below the login form */}
          {isLogin && (
            <div className="py-4">
              <p>Don't have an account? <button className="link" onClick={handleToggle}>Sign Up</button></p>
            </div>
          )}
          {/* Login option below the sign-up form */}
          {!isLogin && (
            <div className="py-4">
              <p>Already have an account? <button className="link" onClick={handleToggle}>Login</button></p>
            </div>
          )}
        </div>
      </dialog>
    </div>
  );
};

export default Login;
