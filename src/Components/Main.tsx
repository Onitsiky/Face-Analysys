import React, {  useState } from "react";
import AWS from "aws-sdk";
import anonlog from "./anonlog";
import Input from "./Input";
import Values from "./Values";
import Loader from "./Loader";


const Main : React.FC<any> = () => {
    const [pic, setPic] = useState<string>("");
    const [temp, setTemp] = useState<any>([]);


    function DetectFaces(imageData : any){
        AWS.config.region = "eu-west-2";
        let rekognition = new AWS.Rekognition();
        let params = {
            Image : {
                Bytes : imageData
            },
            Attributes : [
                'ALL',
            ]
        }
        rekognition.detectFaces(params, function (err, data : any){
            if(err){
                console.log(err, err.stack);
            }
            else{
                setTemp(data.FaceDetails);              
            }
        })
    }

    function ProcessImage(event : any){
        const file: any = event.target.files[0];
        setPic(URL.createObjectURL(file));
        anonlog();
        var reader = new FileReader();
      reader.onload = (function (theFile) {
        return function (e: any) {
          var image: any = null;      
          var jpg = true;
          try {
            image = atob(e.target.result.split("data:image/jpeg;base64,")[1]);
  
          } catch (e) {
            jpg = false;
          }
          if (!jpg) {
            try {
              image = atob(e.target.result.split("data:image/png;base64,")[1]);
            } catch (e) {
              alert("Not an image file Rekognition can process");
              return;
            }
          }

          var length = image.length;
          var imageBytes: any = new ArrayBuffer(length);
          var ua = new Uint8Array(imageBytes);
          for (var i = 0; i < length; i++) {
            ua[i] = image.charCodeAt(i);
          }
          DetectFaces(imageBytes);
        };
      })(file);      
      reader.readAsDataURL(file);
    }
    
    return (
        <>
        <Input onChange={ProcessImage}>
              {temp.length != 0 ? <Values info={temp} pics={pic}/>  : <Loader/>}
          </Input>
        </>
    )
}

export default Main;