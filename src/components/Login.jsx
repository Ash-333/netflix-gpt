import React, { useRef, useState } from "react";
import Header from "./Header";
import { validateForm } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { Bg_IMG } from "../utils/constants";

const Login = () => {
  const [isSignin, setIsSignin] = useState(true);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const handleToggle = () => {
    setIsSignin(!isSignin);
  };

  const handleSubmit = () => {
    const isValid = validateForm(email.current.value, password.current.value);
    setErrorMessage(isValid);
    if (isValid) return;

    if (!isSignin) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
        name.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              "https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    }
  };

  const handleTestUser=()=>{
    signInWithEmailAndPassword(
      auth,
      "test@user.com",
      "Apple.234"
    )
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorMessage);
      });
  }
  return (
    <div className="">
      <Header />
      <div className="absolute">
        <img className="h-screen w-screen object-cover" src={Bg_IMG} alt="bg" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute bg-black mx-4 md:w-1/3 my-20 md:mx-auto left-0 right-0 p-12 rounded bg-opacity-90"
      >
        <h1 className="text-white font-semibold text-3xl py-4">
          {isSignin ? "Login" : "Sign up"}
        </h1>
        {!isSignin && (
          <input
            ref={name}
            type="text"
            placeholder="Name"
            className="p-4 my-4 w-full rounded bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email"
          className="p-4 my-4 w-full rounded bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full rounded bg-gray-700"
        />
        <p className="text-red-700 font-bold">{errorMessage}</p>
        <button
          className="p-4 my-4 bg-red-600 text-white font-semibold w-full rounded hover:bg-red-700"
          onClick={handleSubmit}
        >
          {isSignin ? "Login" : "Sign up"}
        </button>
        <p className="text-white">
          {isSignin ? "New to Netflix?" : "Already an user?"}{" "}
          <span
            className="font-bold hover:cursor-pointer hover:underline"
            onClick={handleToggle}
          >
            {isSignin ? "Sign up now" : "Login"}
          </span>
          .
        </p>
        <button className="p-4 my-4 bg-white text-red-600 font-semibold w-full rounded hover:bg-red-700 hover:text-white" onClick={handleTestUser}>Test User</button>
      </form>
    </div>
  );
};

export default Login;
