import AWS from "aws-sdk";

function anonlog(){
    AWS.config.region = process.env.REACT_APP_REGION;
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
        IdentityPoolId : process.env.REACT_APP_POOL_ID as string,
    })
}
export default anonlog;