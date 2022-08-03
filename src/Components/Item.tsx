import React from "react";

const Items : React.FC<any> = (props : any) => {
    const {title, subtitle, value, sub, val, sub1, val1, sub2, val2, conf}= props;
    return(
        <>
        <div className="card bg-secondary text-light">
            <h5 className="card-header">{title}</h5>
            <div className="card-body">
                {subtitle && value && <p className="card-text">{subtitle} : {value}</p>}
                {sub && val && <p className="card-text">{sub} : {val}</p>}
                {sub1 && val1 && <p className="card-text">{sub1} : {val1}</p>}
                {sub2 && val2 && <p className="card-text">{sub2} : {val2}</p>}
                {conf && <p className="car-text">Confidence : {conf}</p>}
            </div>
        </div>
        <br/>
        </>
    )
}
export default Items;