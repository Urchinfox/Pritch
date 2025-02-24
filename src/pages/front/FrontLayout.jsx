import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
export default function FrontLayout(){
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