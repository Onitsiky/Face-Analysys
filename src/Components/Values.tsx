import React, { useState } from "react";
import Items from "./Item";
import Result from "./Result";

const Values : React.FC<any> = (props) => {
    const {info, pics} = props;
     const style : { [key: string]: React.CSSProperties } ={
      box: {
        border: "2px solid yellow",
         position : "absolute",
        height: `${info[0].BoundingBox.Height * 400}px`,
        top: `${info[0].BoundingBox.Top * 400}px`,
        width: `${info[0].BoundingBox.Width * 600}px`,
        left: `${info[0].BoundingBox.Left * 500}px`,
        zIndex: 1
      }
    }    
    return(
        <>
        <Result src={pics} style={style.box}>
            <div className="row">
            <div className="col-md-6 ">
            <Items title="AgeRange" subtitle="Low" value={info[0].AgeRange.Low} 
                sub="High" val={info[0].AgeRange.High}/>

            <Items title="BoundingBox" subtitle="Width" value={info[0].BoundingBox.Width} 
                sub="Height" val={info[0].BoundingBox.Height} sub1="Left" val1={info[0].BoundingBox.Left}
                 sub2="Top" val2={info[0].BoundingBox.Top} conf={info[0].BoundingBox.Confidence}/>

            {info[0].Emotions.map((key : any, value : any) => (
                            <Items title={key.Type} subtitle="Confidence" value={key.Confidence}/>
                        ))}

            <Items title="Beard" subtitle="Value" value={(info[0].Beard.Value).toString()} 
                conf={info[0].Beard.Confidence}/>


            <Items title="Eyeglasses" subtitle="Value" value={(info[0].Eyeglasses.Value).toString()} 
                conf={info[0].Eyeglasses.Confidence}/>
            <Items title="Gender" subtitle="Value" value={(info[0].Gender.Value).toString()} 
                            conf={info[0].Gender.Confidence}/>

            <Items title="EyesOpen" subtitle="Value" value={(info[0].EyesOpen.Value).toString()} 
                conf={info[0].EyesOpen.Confidence}/>


            <Items title="MouthOpen" subtitle="Value" value={(info[0].MouthOpen.Value).toString()} 
                conf={info[0].MouthOpen.Confidence}/>

            <Items title="Mustache" subtitle="Value" value={(info[0].Mustache.Value).toString()} 
                conf={info[0].Mustache.Confidence}/>
            </div>
            <div className="col-md-6 ">
            {info[0].Landmarks.map((key : any, value : any) => (
                            <Items title={key.Type} subtitle="X" value={key.X}
                            sub="Y" val={key.Y} />
                            ))}
            </div>
            </div>
        </Result>
        </>
    )
}
export default Values;