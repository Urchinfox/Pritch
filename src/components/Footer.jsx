export default function Footer() {
    return (<>
        <footer className="pt-7 bg-dark text-white pb-3">
            <div className="container">
                <div className="row justify-content-between mb-11">
                    <div className="col-lg-3 col-12 mb-7 mb-lg-0">
                        <h2>PRITCH</h2>
                    </div>
                    <div className="col-lg-3 col-12 mb-7 mb-lg-0">
                        <p className="fw-bold">Quick Links</p>
                        <div className="row">
                            <div className="col-6">
                                <div className="mt-3">
                                    <a href="#" className="text-white d-block">New Arrival</a>
                                    <a href="#" className="text-white d-block">Styling Consultation</a>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="mt-3">
                                    <a href="#" className="text-white d-block">Q&A</a>
                                    <a href="#" className="text-white d-block">Site Map</a>
                                </div>
                            </div>
                        </div>
                        {/* <div className="d-flex ">
                        <div className="mt-3">
                            <a href="#" className="d-block">新品上市</a>
                            <a href="#" className="d-block">預約造型諮詢</a>
                        </div>
                        <div className="mt-3">
                            <a href="#" className="d-block">常見問題</a>
                            <a href="#" className="d-block">網站地圖</a>
                        </div>
                    </div>  */}

                    </div>
                    <div className="col-lg-3 col-12 mb-7 mb-lg-0">
                        <p className="fw-bold">Contact</p>
                        <div className="row d-flex d-lg-none mt-3">
                            <div className="col-6">
                                <a href="mailto:info@pritch.com" className="d-block text-white">info@pritch.com</a>
                            </div>
                            <div className="col-6">
                                <a href="tel:+886 2 2256 1234" className="d-block text-white">+886 2 2256 1234</a>
                            </div>
                        </div>
                        <div className="mt-3 d-none d-lg-block">
                            <a href="mailto:info@pritch.com" className="d-block text-white">info@pritch.com</a>
                            <a href="tel:+886 2 2256 1234" className="d-block text-white">+886 2 2256 1234</a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-12">
                        <div>
                            <i className="me-3 bi bi-facebook"></i>
                            <i className="me-3 bi bi-twitter-x"></i>
                            <i className="bi bi-instagram"></i>
                        </div>
                    </div>
                </div>
                <div className="text-center fs-8">
                    <span>© 2024 PRITCH All Rights Reserved.</span>
                </div>


            </div>
        </footer>
    </>)
}
