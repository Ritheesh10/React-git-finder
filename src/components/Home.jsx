
import React, { Fragment, useEffect, useState } from "react";
import MainContent from "./MainContent";
import Search from "./Search";
import  Axios  from "../apis/Axios";

const Home = () => {
  const [user, setUser] = useState("")
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(false)
    useEffect(() => {
    let fetchData = async () => {
       try {
         let client_id = "Iv1.8fab848122a7e6c5";
         let client_secret = "68ed8f7c00786dfb861b1cf63668e047b33392cf";
         let users = await Axios.get( `/users/shashikunal?Client_id${client_id}&Client_secret${client_secret}`);
          let ReposData = await Axios.get( `/users/shashikunal/repos?Client_id${client_id}&Client_secret${client_secret}` );
          setLoading(true);
          setUser(users.data);
          setRepos(ReposData.data);
        } catch (error) {console.log(error); }
        setLoading(false); };
      fetchData(); }, []);
  let onTermSubmit =  async(term) => {
    try {
      let client_id = "Iv1.faa7157a847c8047";
    let client_secret = "51bf182a17f0909d8839f8bffb40cc7f4d5f5fa6";
      let users = await Axios.get(`/users/${term}?Client_id${client_id}&Client_secret${client_secret}`)
      
      let ReposData = await Axios.get(
        `/users/${term}/repos?Client_id${client_id}&Client_secret${client_secret}`
      );
    setLoading(true)
      setUser(users.data)
      setRepos(ReposData.data)
    } catch (error) {
      console.log(error);
    }
    setLoading(false)
}
  
  return (
    <div id="mainblock">
      <article>
        <Search onTermSubmit={onTermSubmit} loading={loading} user={user} />
        <MainContent loading={loading} user={user} repos={repos} />
      </article>
    </div>
  );
};

export default Home;
