import Root from "../Layout/Root";
import { createBrowserRouter} from 'react-router-dom'
import Home from "../Pages/Home/Home";

//  export const router = createBrowserRouter({
//     Path: '/',
//     element: <Root></Root>,
//     children: [
//         {
//             path: '/',
//             element: <Home></Home>
//         }
//     ]

// })

export const router = createBrowserRouter([
    {path:'/',
    element:<Root></Root>,
    children:[
        {
            path:'/',
            element:<Home></Home>,
            
        }
    ]
}

])