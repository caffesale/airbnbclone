import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function NotFoundPage() {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate('/');
        }, 1000)
    })
    return <h1>Not Found</h1>
}

export default NotFoundPage;