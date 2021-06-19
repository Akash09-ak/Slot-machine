import React from 'react';

const SlotM=(props)=>{
    /*  let x= ':O';
      let y= ':O';
      let z= ':p';*/
    
      
    /* destructuring of objects
      let x= props.x;
      let y= props.y;
      let z= props.z; 
      we can also do it with the method below*/

      let{x,y,z}=props.item;
      if((x==y) && (y==z))
      {
        return(
          <>
          <div className='slot_inner'>
            <h1 className="upper-h">
              {x} {y} {z}
            </h1>
            <h1 className="lower-h">This is matching.</h1>
          </div>
          </>
        );
      }
      else
      {
        return(
          <>
          <div className='slot_inner'>
            <h1 className="upper-h">
              {x} {y} {z}
            </h1>
            <h1 className="lower-h">This is not matching.</h1>
          </div>
          </>
        );
      }
    };
    

    export default SlotM;