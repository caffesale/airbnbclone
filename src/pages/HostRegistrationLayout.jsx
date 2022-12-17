import React, { useState } from "react";
import { Outlet } from "react-router-dom";

const HostRegistrationLayout = () => {
    const [submitValue, setSubmitValue] = useState();
    
    return <>
        <Outlet context={[submitValue, setSubmitValue]}/>
    </>
};

export default HostRegistrationLayout;
