import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const AuthLayout = (PropTypes) => {
    const { children, title, type } = PropTypes;
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="w-full max-w-xs">
                <h1 className="mb-2 text-3xl font-bold text-blue-600">{title}</h1>
                <p className="font-medium text-slate-500">Welcome, Please enter your details</p>
                {children}
                <Navigation type={type}/>
            </div>
        </div>
    );
};

const Navigation = ({ type }) => {
    
    if (type === "login") {
        return (
            <p className="mt-5 text-sm text-center">
                Don&apos;t have an account?{" "}
                <Link to="/register" className="font-bold text-blue-600">
                    Register
                </Link>
            </p>
        );
    } else {
        return (
            <p className="mt-5 text-sm text-center">
                Already have an account?
                <Link to="/login" className="font-bold text-blue-600">
                    Login{" "}
                </Link>
            </p>
        );
    }
}
Navigation.propTypes = {
    type: PropTypes.string.isRequired,
};

export default AuthLayout;
