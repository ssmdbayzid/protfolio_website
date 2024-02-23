import { createBrowserRouter } from "react-router-dom";
import Home from "../page/Home";
import ProjectDetails from "../page/ProjectDetails/ProjectDetails";
import MainLayout from "../Layout/MainLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/home",
                element: <Home />
            },
            {
                path: "/projects/:id",
                element: <ProjectDetails />
            },
        ]
    }
    
])

export default router