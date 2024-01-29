import { createBrowserRouter } from "react-router-dom";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Home from "../pages/Home";
import CheckAuth from "../components/layout/CheckAuth";
import Error from "../pages/Error";
import MainLayout from "../components/layout/MainLayout";
import ProtectedRoute from "../components/layout/ProtectedRoute";

const router = createBrowserRouter([
    {
        element: <CheckAuth><MainLayout /></CheckAuth>,
        children: [
            {
                path: "/",
                element: <ProtectedRoute><Home /></ProtectedRoute>
            }
        ],
        errorElement: <Error />
    },
    {
        element: <MainLayout />,
        children: [
            {
                path: "/sign-in",
                element: <SignIn />,
            },
            {
                path: "/sign-up",
                element: <SignUp />,
            },
        ]
    }
]);

export default router;