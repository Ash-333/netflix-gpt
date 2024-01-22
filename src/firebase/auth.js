import {createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth";
import {auth} from './firebase'

const signup = (email, password) => {
  
};

const login = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      return user
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      return errorMessage
    });
};

export {signup,login}
