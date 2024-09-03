import FormLogin from "../components/Fragments/FormLogin";
import AuthLayout from "../components/Layout/AuthLayouts";
import { Link } from "react-router-dom";

const LoginPage = () => {
    return (
        <AuthLayout title="Login">
            <FormLogin />
            <p className="mt-5 text-sm text-center">
                Don&apos;t have an account?{" "}
                <Link to="/register" className="font-bold text-blue-600">
                    Register
                </Link>
            </p>
        </AuthLayout>
    )
}

export default LoginPage;