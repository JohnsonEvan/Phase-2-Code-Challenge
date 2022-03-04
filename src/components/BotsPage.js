import React, { useEffect,useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {

// declare both arrays we will be using using state
  const [bots, setBots] = useState ([]);
  const [botArmy, setbotArmy] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8002/bots")
    .then(response => response.json())
    .then(botsArray => setBots(botsArray))
  },[]);

  const handleDelete = (e) => {
    const name = e.target.getAttribute("name")
     updateList(list.filter(item => item.name !== name));
   };
//function handleOnClick


//pass in both state arrays into the components below to give vaiable access to the Bots and bots army array 
  return (
    <div>
      <YourBotArmy botArmy={botArmy} handleDelete={handleDelete} handleOnClick={handleOnClick}/>
      <BotCollection bots={bots} handleDelete={handleDelete} handleOnClick={handleOnClick}/>
    </div>
  )
}

export default BotsPage;
