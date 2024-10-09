import { useLogin } from './../hooks/useLogin.jsx';


const ProfilePage = () => {
    const username = useLogin();
    return (
        <div>
            <h1>ProfilePage</h1>
            Username : {username}
        </div>
    )
}

export default ProfilePage