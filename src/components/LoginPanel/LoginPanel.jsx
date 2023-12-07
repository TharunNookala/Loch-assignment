import React, { useState } from 'react';

const LoginPanel = () => {
  const [email, setEmail] = useState('');
  const [isCorrect, setIsCorrect] = useState(true);

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValidEmail(email)) {
      window.location.href = 'https://app.loch.one/welcome';
    } else {
      setIsCorrect(false);
    }
  };

  return (
    <div className='w-full h-full flex items-center justify-center z-30'>
      <div className='sm:w-[360px] flex flex-col gap-6 items-center justify-center p-4'>
        <h1 className='text-4xl text-slate-300 font-semibold'>Sign up for exclusive access.</h1>
        <form className='w-full flex flex-col items-center justify-start gap-6' onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            placeholder='Your email address'
            className='w-[90%] sm:w-full p-3 rounded-md text-sm border'
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className={`text-start text-xs font-medium text-red-500 ${isCorrect ? "hidden" : ""}`}>
            Please enter a correct email address.
          </span>
          <button type="submit" className='px-2 py-4 bg-black text-white text-sm w-[90%] sm:w-full rounded-md'>Get started</button>
        </form>
        <p className='text-sm font-bold w-full text-center'>You'll receive an email with an invite link to join.</p>
      </div>
    </div>
  );
};

export default LoginPanel;
