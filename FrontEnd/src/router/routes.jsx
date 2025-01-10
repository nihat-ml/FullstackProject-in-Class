import AddPage from "../pages/User/AddPage";
import DetailPage from "../pages/User/DetailPage";
import Favorites from "../pages/User/Favorites";
import Home from "../pages/User/Home";
import Immigrations from "../pages/User/Immigrations";
import NoPage from "../pages/User/NoPage";
import { default as UserRoot } from "../pages/User/UserRoot";



const ROUTES = [
    {
        path:"/",
        element:<UserRoot/>,
        children:[
            {
                path: "",
                element:<Home/>
            },
            {
                path: "/immigrations",
                element:<Immigrations/>
            },
            {
                path: "/immigrations/:id",
                element:<DetailPage/>
            },
            {
                path: "/favorites",
                element:<Favorites/>
            },
            {
                path: "/addpage",
                element:<AddPage/>
            }
            

        ]
    },
    {
        path: "*",
        element:<NoPage/>
    },


]

export default ROUTES