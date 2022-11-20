import { useEffect, useState, Fragment } from "react";
import axios from "axios";
import CardProfile from "../component/CardProfile";
import "./Profile.css";

export default function Profile() {
  const [data, setData] = useState([]);
  const githubUsernameList = [
    "hafizhzikry24","kshaultrya","adelia0602", "dwiseee"
  ];  
  
  useEffect(()=>{
    const githubDataTemp = [];
    async function fetchData() {
      for(let i=0;i<githubUsernameList.length;i++){
        await axios
        .get("https://api.github.com/users/" + githubUsernameList[i])
        .then((res) => {
          githubDataTemp.push(res.data)
        })
        .catch((err) => {
          throw `gagal ${err.message}`; 
        });
      }
    }
  
    fetchData()
      .then(
        ()=> setData(githubDataTemp)
      )
      .catch(err=>alert(err));
  },[]);


    return (
      <>      
        <div className="TitleProfile">
          <h1 className="textTitle">Profil Kelompok</h1>
        </div>
        <div className="Profilelist">
       {data.map((item) => (
          <Fragment key={item.id}>
            <CardProfile
              avatar={item.avatar_url}
              username={item.login}
              email={item.email}
              name={item.name}
              blog={item.blog}
              location={item.location}
              twitter={item.twitter_username}
            />
          </Fragment>
        ))}
          
        </div>
      </>

    );
  }
  