import React from "react";


// create a new variable with the components of the bots arrary and call the BotCard
function BotCollection(bots) {
  const BotsList = bots.map(bots => {
    return ( <botcard key={bots.id}
      )
  }
  
  // Your code here
  return (
    <div className="ui four column grid">
      <div className="row">
        {BotsList}
      </div>
    </div>
  );
}

export default BotCollection;
