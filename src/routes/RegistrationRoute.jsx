import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import HostRegistrationIntro from "../pages/HostRegistrationIntro";
import HostRegistrationLayout from "../pages/HostRegistrationLayout";
import HostRegistrationLocation from "../pages/HostRegistrationLocation";
import HostRegistrationPropertyTypeGroup from "../pages/HostRegistrationPropertyTypeGroup";
import HostRegistrationAmenities from "../pages/HostRegistrationAmenites"
import HostRegistrationPhotos from "../pages/HostRegistrationPhotos";
import HostRegistrationDescription from "../pages/HostRegistrationDescription";
import HostRegistrationPrice from "../pages/HostRegistrationPrice";

const RegistrationRoute = () => {
    return (
      <Routes>
        <Route element={<HostRegistrationLayout />}>
          <Route index element={<HostRegistrationIntro />} />
          <Route path="propertytype" element={<HostRegistrationPropertyTypeGroup />}/>
          <Route path="address" element={<HostRegistrationLocation />}/>
          <Route path="amenites" element={<HostRegistrationAmenities />}/>
          <Route path="photos" element={<HostRegistrationPhotos />}/>
          <Route path="description" element={<HostRegistrationDescription />}/>
          <Route path="price" element={<HostRegistrationPrice/>}/>
        </Route>
      </Routes>
      );
};

export default RegistrationRoute;
