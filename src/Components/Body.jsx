import React, { useEffect } from "react";
import { Login } from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useDispatch } from "react-redux";
import { removeUser } from "../redux/userSlice";
import Protected from "./Protected";


const Body = () => {
    const dispatch = useDispatch();

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: (
        <Protected>
          <Browse />
        </Protected>
    ),
    },
  ]);

  useEffect(()=> {
    onAuthStateChanged(auth, (user) => {
  if (!user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    dispatch(removeUser());
  }

});
  },[])

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
