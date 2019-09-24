import React from "react";
import { connect } from "react-redux";


const GameLibrary = ({auth}) => {

  let gamesInLibrary = auth.user.gameLibrary.map(game => {
     return (
       <div key={game._id} className='test'>
         <p>{game.title}</p>
         <p>{game.category}</p>
         <p>{game.rating}</p>
       </div>
     )
     // <p>{game.imgURL}</p>
  })
  return (
    <div className='singlegames'>
      {gamesInLibrary}
    </div>
  )
}

const mapStateToProps = state => ({
  auth: state.auth
});




export default connect(mapStateToProps)(GameLibrary);
