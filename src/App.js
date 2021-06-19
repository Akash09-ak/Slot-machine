import React from 'react';
import SlotM from './SlotMachine';
  
class App extends React.Component {
  state={data:[]}

  emoji=['😄','🍎','😢','🍌','🍡','🎅','😄','🍎','😢','🍌','🍡','🎅','😄','🍎','😢','🍌','🍡','🎅','😄','🍎','😢','🍌','🍡','🎅','🍒','🍒','🍒','🍒',]

  getEmoji = () => {
    return this.emoji[Math.floor(Math.random()*28)];
  }
  
  refreshHandle = () => {
   let x=this.getEmoji();
   let y=this.getEmoji();
   let z=this.getEmoji(); 

   let newData = {x:x,y:y,z:z}

   this.setState({
    data:[newData,...this.state.data]
   })
 }

  render(){
    return(
      <>
      <h1 className="heading"> Welcome to <span style={{fontWeight:'bold'}}>Slot Machine Game</span></h1>
          <button onClick={this.refreshHandle}>Click to play</button>
          <p>You've played {this.state.data.length} times.</p>
        <div className="slot_machine">
          {this.state.data.map((item)=>{
              return <SlotM item={item} />
          })}

          </div>
      </>
      );
    }
};
export default App;