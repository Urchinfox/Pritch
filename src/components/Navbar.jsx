import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
export default function Navbar() {

    const [animate, setAnimate] = useState(false)
    const message = useSelector((state) => state.cartMsg.length)
    useEffect(() => {
        setAnimate(true);
        setTimeout(() => setAnimate(false), 2000);

    }, [message]);
    return (
        <header className="px-7">
            <nav>
                <ul className="list-unstyled d-flex align-items-center justify-content-between">
                    <li className="d-lg-block d-none">
                        <div>
                            <Link to='/products'>
                                <i className="bi bi-plus"></i>Go to Store
                            </Link>
                        </div>
                    </li>
                    <li>
                        <h1 className="fs-lg-2 fs-6"><NavLink to='/' className="d-block py-6">PRITCH</NavLink></h1>
                    </li>
                    <li>
                        <ul className="list-unstyled d-flex align-items-center">
                            <li className="me-5 ">
                                <NavLink to='cart' className="py-6">
                                    <i className="bi bi-bag position-relative">
                                        <span className={`cart-msg d-flex align-items-center justify-content-center ${animate ? "cart-animate" : ""}`}>
                                            {message}
                                        </span>
                                    </i>
                                </NavLink>
                            </li>
                            <li className="d-lg-block d-none me-5"><a href="#"><i className="bi bi-search"></i></a></li>
                            <li className="me-5"><a href="#"><i className="bi bi-person-circle"></i></a></li>
                            <li>
                                <i className="bi bi-list" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" style={{ cursor: 'pointer' }}></i>
                                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                                    <div className="offcanvas-header">
                                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                    </div>
                                    <div className="offcanvas-body">
                                        <div className="container">
                                            <ul className="list-unstyled d-flex flex-column test" style={{ height: '80vh' }}>
                                                <li className="mb-7"><NavLink className="d-block" to='/products'>New In</NavLink></li>
                                                <li className="mb-7"><NavLink className="d-block" to='/products'>Promotion</NavLink></li>
                                                <li className="mb-7"><NavLink className="d-block" to='/products'>Stockings</NavLink></li>
                                                <li className="mb-7"><NavLink className="d-block" to='/products'>Coat / Overcoat</NavLink></li>
                                                <li className="mb-7"><NavLink className="d-block" to='/products'>Top</NavLink></li>
                                                <li className="mb-7"><NavLink className="d-block" to='/products'>Bottom</NavLink></li>
                                                <li><NavLink className="d-block" to='/products'>Dress / Skirt</NavLink></li>
                                                <li className="mt-auto">
                                                    <div>
                                                        <NavLink to='/' className="d-block mb-7"><i className=" me-2 bi bi-person-circle"></i>Member</NavLink>
                                                        <NavLink to='/cart' className="d-block"><i className=" me-2 bi bi-cart"></i>Cart</NavLink>

                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>

                    </li>
                </ul>
            </nav>
        </header>
    )
}