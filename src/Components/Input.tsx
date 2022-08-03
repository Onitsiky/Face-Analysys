import React from "react"

const Input : React.FC<any> = (props) => {
    const {onChange, children} = props
    return(
        <>
        <div className="text-center">
        <div>
            <label htmlFor="inputImg">
                Select Image <br/>
            <i className="fa fa-2x fa-camera">
            <input type="file" name="oni" id="inputImg" accept="image/*" onChange={onChange}/>
            </i>
            </label>
        </div>
        <div>
            {children}
        </div>
        </div>
        </>
    )
}
export default Input;