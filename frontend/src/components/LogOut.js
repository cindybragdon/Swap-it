import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const performLogout = () => {
            sessionStorage.removeItem('user');
            navigate('/');
            window.location.reload();
        };

        performLogout();
    }, [navigate]);

    return (
        <div>Logging out...</div>
    );
};

export default Logout;
