import React from "react";
import { Outlet } from "react-router-dom";
import './layout.css'

const AddEventLayout = () => {
  return <div className="h-full glass2 "><Outlet /></div>;
};

export default AddEventLayout;
