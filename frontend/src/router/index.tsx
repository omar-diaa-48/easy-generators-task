import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "sign-in",
        element: <div>Sign In</div>,
    },
    {
        path: "sign-up",
        element: <div>Sign Up</div>,
    },
]);

export default router;