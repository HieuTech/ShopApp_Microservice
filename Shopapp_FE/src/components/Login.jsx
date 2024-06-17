
import { useEffect } from "react";
import {useNavigate} from "react-router-dom";
import { getToken } from "../services/localStorageService";
import { OauthConfig } from "../configuration/configuration";

export default function Login() {
    const navigate = useNavigate();
    
    const handleLoginGoogle = ()=>{
        const callbackUrl = OauthConfig.redirectUri;
        const clientId = OauthConfig.clientId;
        const authUrl = OauthConfig.authUri

        const targetUrl = `${authUrl}?redirect_uri=${encodeURIComponent(callbackUrl)}&response_type=code&client_id=${clientId}&scope=openid%20email%20profile`;

        console.log(targetUrl);
        window.location.href = targetUrl;
    }

    useEffect(()=>{
        const checkLogin = getToken();
        if(checkLogin){
            navigate("/")
        }
    },[navigate]) 



  return (
    <div>
      <button onClick={handleLoginGoogle}>
        Login With Google
      </button>
    </div>
  )
}
