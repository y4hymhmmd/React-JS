import Button from "../Elements/Button"
import InputForm from "../Elements/Input/"

const FormRegister = () => {

    return (
        <form action="">
            <InputForm label="Fullname" type="text" placeholder="Insert your name here..." name="fullname" />
            <InputForm label="Email" type="email" placeholder="example@mail.com" name="email" />
            <InputForm label="Password" type="password" placeholder="******" name="password" />
            <InputForm label="Confirm Password" type="password" placeholder="******" name="confirmPassword" />
            <Button classname="w-full bg-blue-600">Register</Button>
        </form>
    )
};

export default FormRegister;