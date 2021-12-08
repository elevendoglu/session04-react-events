import './App.css';
import AddEvents from './components/addEvents/AddEvents';
import AddEventsClass from './components/addEventClass/AddEventsClass';
import EventBind from './components/eventBinding/EventBind';

function App() {
  return (
    <div className="App">
      <h1>Events in React Js</h1>
      {/* <AddEvents /> */}
      {/* <AddEventsClass /> */}
      <EventBind />
    </div>
  );
}

export default App;
