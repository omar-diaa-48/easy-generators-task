import { createBrowserRouter } from "react-router-dom";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Home from "../pages/Home";
import CheckAuth from "../components/layout/CheckAuth";

const router = createBrowserRouter([
    {
        path: "/",
        element: <CheckAuth><Home /></CheckAuth>,
    },
    {
        path: "/sign-in",
        element: <SignIn />,
    },
    {
        path: "/sign-up",
        element: <SignUp />,
    },
]);

export default router;