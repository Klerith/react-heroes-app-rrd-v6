import { useNavigate } from 'react-router-dom';


export const LoginScreen = () => {

    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/marvel', {
            replace: true
        });
    }


    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr />

            <button 
                className="btn btn-primary"
                onClick={ handleLogin }
                >
                    Login
            </button>
        </div>
    )
}
