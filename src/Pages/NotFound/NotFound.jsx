import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/', { replace: true })
        }, 3000)

        return() => clearTimeout(timer)
    }, [])
    return (
        <div>
            <h1>Page not found!</h1>
            <h2>Error 404</h2>
        </div>
    );
};

export default NotFound;