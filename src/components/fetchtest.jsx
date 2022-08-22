import axios from "axios";
import React, { useEffect, useState } from "react";
import { apis } from "../api/api";

function FetchTest() {

    useEffect(async () => {
        const response = await axios.get('http://localhost:5001/reviews')
        console.log(response.data);
    }, [])
    
    return (
        <div>
            hi!
        </div>
    )
}

export default FetchTest;