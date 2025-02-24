import { createHashRouter, RouterProvider } from "react-router-dom";
import FrontLayout from "../pages/front/FrontLayout";
import Home from "../pages/front/Home";
import Products from "../pages/front/Products";
import ProductDetail from "../pages/front/ProductDetail";
import Login from "../pages/Login";
import Dashboard from "../pages/admin/DashBoard";
import AdminProduct from "../pages/admin/adminProduct";
import Cart from "../components/Cart";

const routers = createHashRouter([
    {
        path:'/',
        element: <FrontLayout/>,
        children:[
            {
                path:'',
                element:<Home/>,
            },
            {
                path:'products',
                element:<Products/>,
            },
            {
                path:'/products/:id',
                element:<ProductDetail/>
            },
            {
                path:'cart',
                element: <Cart />
            }
        ]
    },
    {
        path:'login',
        element:<Login/>,
    },
    {
        path:'/admin',
        element:<Dashboard/>,
        children:[
            {
                path:'products',
                element:<AdminProduct/>
            }
        ]
    }
])

const AppRouter = () =>{
    return <RouterProvider router={routers} />
}

export default AppRouter;



{/* <Routes>
<Route path='/' element={<FrontLayout />}>
  <Route path='' element={<Home />}></Route>
  <Route path='products' element={<Products/>}></Route>
  <Route path='products/:id' element={<ProductDetail />}></Route>
</Route>
<Route path="/login" element={<Login/>} > </Route>
<Route path='/admin' element={<Dashboard />}>
  <Route path='products' element={<AdminProduct />}></Route>
</Route>
</Routes> */}