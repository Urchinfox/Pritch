import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useDispatch } from "react-redux";
import { cartHint } from "../../slices/cartMessageSlice";
import { useEffect } from "react";
import axios from "axios";


export default function FrontLayout(){

    const dispatch = useDispatch();
    const getCartItem = async() => {
        try {
            const res = await axios.get(`/v2/api/${import.meta.env.VITE_APP_API_PATH}/cart`);
            dispatch(cartHint(res.data.data.carts))
            
        } catch (error) {
            console.log(error)
        }
    }
    
    useEffect(()=>{
        getCartItem();
    },[])

    return (<>
        <div className="layout" style={{display:'flex',flexDirection:'column',minHeight:'100vh'}}>
            <Navbar />
        <main style={{flex:'1'}}>
            <Outlet/>
        </main>

            <Footer />

        </div>
    
    </>)
}