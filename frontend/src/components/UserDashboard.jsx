import React from "react";
import NavbarUserDashboard from "./NavbarUserDashboard";
import Footer from "./Footer";

const UserDashboard = () => {
    return (
        <div className="user-dashboard-container">
            <NavbarUserDashboard></NavbarUserDashboard>
            <h1>Hello, user!</h1>
            <Footer></Footer>
        </div>
    )
}

export default UserDashboard;