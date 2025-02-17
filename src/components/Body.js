import Login from "./Login"
import Browse from "./Browse"
import { createBrowserRouter } from "react-router-dom"
import { RouterProvider } from "react-router-dom";
import { useDispatch } from "react-redux";

const Body = () => {
    const dispatch=useDispatch();

    const appRouter=createBrowserRouter([
        {
            path: "/",
            element: <Login />,
        },
        {
            path: "/browse",
            element: <Browse />,
        }
    ]);

    // useEffect(()=>{
    //     onAuthStateChanged(auth, (user) => {
    //         if (user) {
            
    //           const {uid, email, displayName, photoURL} = user.uid;
    //           dispatch(addUser({uid:uid, email: email, displayName: displayName, photoURL:photoURL}));
    //               navigate("/browse");
    //               //window.location.href="/browse";
    //            } else {
    //              // User is signed out
    //              dispatch(removeUser());
    //             navigate("/");
    //         }
    //       });
    // },[]);

  return (
    <div>
        {/* <Login />
        <Browse /> */}

        <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body