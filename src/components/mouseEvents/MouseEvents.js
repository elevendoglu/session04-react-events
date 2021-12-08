import './styles.css';

const MouseEvents = () => {
  // click event
  // doubleClick event
  // mouseMove event
  return (
    <>
      <h2>MouseEvents</h2>
      <p>
        <span>X</span> and Y
      </p>
      <p>
        <span></span> and
      </p>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <ul>
          <li id="todo-1">
            todo item 1 <span>X</span>
          </li>
          <li id="todo-2 ">
            todo item 2 <span>X</span>
          </li>
          <li>
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
