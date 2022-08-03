import React from "react";

const Navbar : React.FC<any> = (props) => {
    const {label} = props;
    return(
        <>
        <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand ms-5" href="#">{label}</a>
        </nav>

        </>
    )
}
export default Navbar;