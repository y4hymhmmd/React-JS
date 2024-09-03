import FormRegister from "../components/Fragments/FormRegister";
import AuthLayout from "../components/Layout/AuthLayouts";
import { Link } from "react-router-dom";

const RegisterPage = () => {
    return (
        <AuthLayout title="Register">
            <FormRegister/>
            <p className="mt-5 text-sm text-center">
                Have an account?{" "}
                <Link to="/login" className="font-bold text-blue-600">
                    Login
                </Link>
            </p>
        </AuthLayout>
    )
}

export default RegisterPage;