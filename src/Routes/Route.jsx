import {
    createBrowserRouter,

} from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import ComparePrice from "../Pages/ComparePrice/ComparePrice";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'comparePrice',
                element: <ComparePrice></ComparePrice>
            }
        ]
    }

]);