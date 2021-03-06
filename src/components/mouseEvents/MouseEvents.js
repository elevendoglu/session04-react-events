import { useState } from 'react';
import './styles.css';

const MouseEvents = () => {
  const [coordX, setCoordX] = useState();
  const [coordY, setCoordY] = useState(); 

  // click event
  const handleClick = (e) => {
    console.log('event', e);
    console.log('event type', e.type);
    console.log('target', e.target);
    console.log('current target', e.currentTarget);
  };
  // doubleClick event
  const handleDoubleClick = (e) => {
    console.log('event', e.target.id);
    console.log('text', e.target.innerText);
  };
  // mouseMove event
  const handleMouseMove = (e) => {
    setCoordX(e.pageX);
    setCoordY(e.pageY);  /* added for displaying the coordinates in any point of page but doesn't work */
   
    // setCoordX(e.nativeEvent.offsetX);  // only active on todo 3
    // setCoordY(e.nativeEvent.offsetY); 
  };

  return (
    <>
      <h2>MouseEvents</h2>
      <p>
        <span>{coordX}</span> and {coordY}
      </p>
      <p>
        <span></span> and
      </p>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <ul>
          <li id="todo-1" onClick={handleClick}> 
            todo item 1 <span>X</span>
          </li>
          <li id="todo-2 " onDoubleClick= {handleDoubleClick}>
            todo item 2 <span>X</span>
          </li>
          <li onMouseMove={handleMouseMove}>
            todo item 3 <span>X</span>
          </li>
          <li>
            todo item 4 <span>X</span>
          </li>
          <li>
            todo item 5 <span>X</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MouseEvents;
