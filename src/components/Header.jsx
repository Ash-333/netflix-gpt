import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { auth } from "../firebase/firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGPTSearchView } from "../utils/gptSlice";

const Header = () => {
  const user = useSelector((store) => store.user);
  const gpt=useSelector(store=>store.gpt.showGPTSearch)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe=onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({uid: uid,email: email,displayName: displayName,photoURL: photoURL})
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate('/')
      }

      return ()=>unsubscribe()
    });
  }, []);

  const handleToggle=()=>{
    dispatch(toggleGPTSearchView())
  }

  const handleLogout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className="absolute bg-gradient-to-b from-black px-8 py-2 z-10 w-screen flex flex-col justify-center md:justify-between md:flex-row">
      <img
        className="w-40 mx-auto md:mx-0"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {user && (
        <div className="flex p-2 items-center">
          <button className="text-white bg-purple-600 py-2 px-4 my-2 mx-4 rounded hover:bg-purple-700" onClick={handleToggle}>{gpt?"Go to Home":"GPT Search"}</button>
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
