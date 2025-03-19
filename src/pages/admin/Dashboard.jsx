import axios from "axios";
import { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import Message from "../../components/Message";
import { useNavigate } from "react-router-dom";
// import { initState, messageReducer } from "../../store/MessageStore";

export default function Dashboard() {
    // const reducer = useReducer(messageReducer, initState);
    const navigate = useNavigate();
    const logout = () => {
        document.cookie = 'hexToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
        navigate('/login')
    }
    const token = document.cookie.replace(
        /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
        "$1"
    );

    axios.defaults.headers.common['Authorization'] = token;

    useEffect(() => {
        if (!token) {
            return navigate('/login')
        }
        (async () => {
            try {
                await axios.post('/v2/api/user/check');
            } catch (error) {
                if (!error.response.data.success) {
                    navigate('/login')
                }
                console.log(error)
            }
        })()

    }, [navigate, token])



    return (<>
        <nav className='navbar navbar-expand-lg bg-dark'>
            <div className='container-fluid'>
                <h1 className='text-white mb-0'>Pritch Admin Panel</h1>
                <button
                    className='navbar-toggler'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#navbarNav'
                    aria-controls='navbarNav'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                >
                    <span className='navbar-toggler-icon' />
                </button>
                <div
                    className='collapse navbar-collapse justify-content-end'
                    id='navbarNav'
                >
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <button type='button' className='btn btn-sm btn-light' onClick={logout}>
                                Logout
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <Message />

        <div className="container ">
            <div className="row align-items-start mt-5">
                <div className="col-lg-4">

                    <div className="nav flex-column nav-pills profile-control me-3">
                        <Link to='/admin/products' className="text-start nav-link" type="button">ALL PRODUCT</Link>
                        <Link to='/admin/orders' className="text-start nav-link" type="button">ALL ORDER</Link>
                        <Link to='/admin/coupon' className="text-start nav-link" type="button">COUPON</Link>

                    </div>
                </div>

                <div className="col-lg-8 mt-lg-0 mt-5">
                    <div className="tab-content">
                        <div className="tab-pane fade show active" >
                            {token && <Outlet />}
                        </div>
                    </div>
                </div>
            </div>

        </div>


    </>)
}

