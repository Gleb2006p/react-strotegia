import './App.css';
import Politics from "./PoliticsPage/Politics";
import {createEndTaskAction} from "./store/politics-reducer";
import WorldMap from "./PoliticsPage/WorldMap/WorldMap";

function App(props) {
  function endTurn() {
      props.store.dispatch(createEndTaskAction());
  }
  return (
    <div className="App">
        <Politics store={props.store}/>
        <WorldMap store={props.reigionStore}/>
        <button className={"end-turn"} onClick={endTurn}>
            End Turn
        </button>
    </div>
  );
}

export default App;
