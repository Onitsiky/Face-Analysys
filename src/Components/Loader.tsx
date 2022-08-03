import React from "react";
import "./load.css";

const Loader : React.FC<any> = () => {
    return(
        <>
            <div className="lds-ellipsis">
                <div></div>
                <div></div><div></div>
                <div></div>
            </div>
            <h4>Waiting for you to upload your photo</h4>
            <p>By Onitsiky ©</p>
        </>
    )
}
export default Loader;