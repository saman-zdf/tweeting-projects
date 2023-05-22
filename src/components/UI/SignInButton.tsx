"use client";

const SignInButton = () => {
  const a = false;

  if (a) {
    return (
      <div className='flex gap-4 ml-auto'>
        <p className='text-sky-600'>Name of the user</p>
        <button
          onClick={() => console.log("log out")}
          className='text-red-700 bg-transparent border rounded cursor-pointer hover:text-red-500 transition-all 300 ease-in py-2 px-3'
        >
          Sign Out
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={() => console.log("Sign in")}
      className='text-green-400 bg-transparent border rounded cursor-pointer  hover:text-green-600 transition-all 300 ease-in py-2 px-3 mx-2'
    >
      Sign In
    </button>
  );
};

export default SignInButton;
