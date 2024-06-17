import { useEffect, useState } from "react"
import {useNavigate} from "react-router-dom"
import { setToken } from "../services/localStorageService";
export default function Authenticate() {
  const navigate = useNavigate();


  const [isLogin, setIsLogin] = useState();

  useEffect(()=>{
    console.log(window.location.href);

    const regexUrl = /code=([^&]+)/;
  
    const isMatch = window.location.href.match(regexUrl);
    if(isMatch){
      const authCode = isMatch[1];
      fetch(
        `http://localhost:8888/identity/api/v1/auth/outbound/authentication?code=${authCode}`,
        {
          method: "POST",
        }
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log("data", data);

          setToken(data?.result.token);
          setIsLogin(true);
        });
    }
   
    
  },[])

  useEffect(()=>{
      if(isLogin){
        navigate("/");
      }
  },[isLogin, navigate])

  return (
    <div>
      Authenticate
    </div>
  )
}
