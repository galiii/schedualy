import React from 'react';

const Login: React.FC = () => {
    // Add login logic here

    return (
        <form>
            <label>
                Username:
                <input type="text" />
            </label>
            <br />
            <label>
                Password:
                <input type="password" />
            </label>
            <br />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;