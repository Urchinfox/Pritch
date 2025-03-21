import { Link } from 'react-router-dom';
const NotFound = () => {
    return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh', backgroundColor: '#f8f9fa' }}>
            <div className="text-center p-5 rounded shadow-lg" style={{ backgroundColor: '#ffffff' }}>
                <h1 className="display-1 text-danger fw-bold" style={{ fontFamily: '"Cursive", sans-serif' }}>404</h1>
                <p className="lead text-muted mb-4">Oops! The page you&apos;re looking for doesn&apos;t exist. Don&apos;t worry, we&apos;ll get you back on track.</p>
                <Link to="/">
                    <button size="lg" className="btn-lg btn-outline-dark border-2 p-3">
                        Go Back Home
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
