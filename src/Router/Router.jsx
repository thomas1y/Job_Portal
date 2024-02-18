import { createBrowserRouter } from "react-router-dom"
import App from "../App";
import Home from "../Pages/Home";
import CreateJob from "../Pages/CreateJob";
import MyJobs from "../Pages/MyJobs";
import SalaryPage from "../Pages/SalaryPage";
import JobDetails from "../Pages/JobDetails";
//import About from "../Pages/About";

const router = createBrowserRouter([
    {
        path: "",
        element: <App/>,
        children: [
            {path: "/",element: <Home/>},
            {
             path: "/post-job",
             element: <CreateJob /> 
            },
            
            {
                path: "/my-job",
                element: <MyJobs /> 
               },
               {
                path: "/salary",
                element: <SalaryPage /> 
               },
               {
                path: "/job/:id",
                element:<JobDetails />
               }
        ]
    },
]);

export default router;