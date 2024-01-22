import React from "react";
import { useSelector } from "react-redux";
import { auth } from "../firebase/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate=useNavigate()

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate('/')
      })
      .catch((error) => {
        navigate('/error')
      });
  };
  return (
    <div className="absolute bg-gradient-to-b from-black px-8 py-2 z-10 w-screen flex justify-between">
      <img
        className="w-40 "
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {user && (
        <div className="flex p-2 items-center">
          <img
            className=" h-12 w-12 rounded-full mr-2"
            src={user?.photoURL}
            alt="userImage"
          />
          <button className="text-white font-bold" onClick={handleLogout}>
            sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
