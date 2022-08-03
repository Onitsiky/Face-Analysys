import React, { useState } from "react";
import Items from "./Item";
import Result from "./Result";

const Values : React.FC<any> = (props) => {
    const {info, pics} = props;
    const [emo, setEmo] = useState<any>([]);
     const style : { [key: string]: React.CSSProperties } ={
      box: {
        border: "2px solid yellow",
         position : "absolute",
        height: `${info[0].BoundingBox.Height * 400}px`,
        top: `${info[0].BoundingBox.Top * 400}px`,
        width: `${info[0].BoundingBox.Width * 800}px`,
        left: `${info[0].BoundingBox.Left * 400}px`,
        zIndex: 1
      }
    }
    for(let o of info[0].Emotions[0]){
        setEmo([...Object.entries(o)]);
        console.log(o);   
    }

    
    return(
        <>
        <Result src={pics} style={style.box}>
            <Items title="AgeRange" subtitle="Low" value={info[0].AgeRange.Low} 
                sub="High" val={info[0].AgeRange.High}/>
            <br/>
            <Items title="BoundingBox" subtitle="Width" value={info[0].BoundingBox.Width} 
                sub="Height" val={info[0].BoundingBox.Height} sub1="Left" val1={info[0].BoundingBox.Left}
                 sub2="Top" val2={info[0].BoundingBox.Top} conf={info[0].BoundingBox.Confidence}/>
            <br/>
            <Items title="Beard" subtitle="Value" value={(info[0].Beard.Value).toString()} 
                conf={info[0].Beard.Confidence}/>
            <br/>
            <Items title="Eyeglasses" subtitle="Value" value={(info[0].Eyeglasses.Value).toString()} 
                conf={info[0].Eyeglasses.Confidence}/>
            <br/>
            <Items title="EyesOpen" subtitle="Value" value={(info[0].EyesOpen.Value).toString()} 
                conf={info[0].EyesOpen.Confidence}/>
            <br/>
            <Items title="Gender" subtitle="Value" value={(info[0].Gender.Value).toString()} 
                conf={info[0].Gender.Confidence}/>
            <br/>
            <Items title="MouthOpen" subtitle="Value" value={(info[0].MouthOpen.Value).toString()} 
                conf={info[0].MouthOpen.Confidence}/>
            <br/>
            <Items title="Mustache" subtitle="Value" value={(info[0].Mustache.Value).toString()} 
                conf={info[0].Mustache.Confidence}/>
            <br/>
        </Result>
        </>
    )
}
export default Values;