import { useEffect, useState } from "react"
import { getToken } from "../services/localStorageService";
import {useNavigate} from "react-router-dom";
export default function Home() {
  const navigate = useNavigate();
  const [userDetail, setUserDetail] = useState();

  const getUserDetail = async (accessToken)=>{
    const response = await fetch(`http://localhost:8888/identity/api/v1/user/my-info`,{
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })

    const data = await response.json();
    setUserDetail(data);
    console.log("userDetail", data);
  }

  useEffect(()=>{
    const accessToken = getToken();
    if(!accessToken){
      navigate("/login")
    }
    getUserDetail(accessToken);
  },[navigate])


  return (
    <div>
      {userDetail ? (
        <div>
          <h1>{userDetail.result.userName}</h1>
          <h2>{userDetail.result.email}</h2>
          <img src={userDetail.result.avatar} alt="" />
        </div>
      ) : (
        <div>No Info</div>
      )}
    </div>
  );
}
