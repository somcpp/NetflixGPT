import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import {auth} from "../Utils/firebase"
import {useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { LOGO, USER_AVTAR } from "../Utils/constants";
import { addUser, removeUser } from "../redux/userSlice";


const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(addUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
        }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);


  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/")
      })
      .catch((error) => {
        // An error happened.
        navigate("/error")
      });
  };

  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black w-full z-10 flex justify-between">
      <img
        className="w-44"
        src={LOGO}
        alt="logo"
      />
      <div className="flex p-2 gap-2">
        <img
          className="w-8 h-8 my-4"
          src={USER_AVTAR}
          alt=""
        />

        <button
          onClick={() => handleSignOut()}
          className="font-bold text-slate-50"
        >
          {user && "signOut"}
        </button>
      </div>
    </div>
  );
};

export default Header;
