import FormLogin from "../components/Fragments/FormLogin";
import AuthLayout from "../components/Layout/AuthLayouts";

const LoginPage = () => {
    return (
        <AuthLayout title="Login" type="login">
            <FormLogin />
        </AuthLayout>
    )
}

export default LoginPage;