import React from "react";
import "./main.css";

const Result : React.FC<any> = (props) => {
    const {src,style, children} = props;
    return(
        <div className="row m-5">
                <div className="col-5 img">
                <div style={style} ></div>
                    <img src={src} className = "pic" alt="Not found"/>
                </div>
                <div className="col-7 ps-5 right">
                    {children}
                </div>
        </div>
    )
}
export default Result;