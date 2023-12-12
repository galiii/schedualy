import React from 'react';

const Register: React.FC = () => {
    // Add registration logic here

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
            <button type="submit">Register</button>
        </form>
    );
};

export default Register;