import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const performLogout = () => {
            localStorage.removeItem('user');
            navigate('/');
        };

        performLogout();
    }, [navigate]);

    return (
        <div>Logging out...</div>
    );
};

export default Logout;
