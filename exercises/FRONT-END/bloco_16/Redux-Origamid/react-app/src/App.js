import { useSelector, useDispatch } from "react-redux";

function App() {
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Total: <span>{state.reducer}</span></h1>
      <button onClick={() => dispatch({type: 'INCREMENTAR'})}>Incrementar</button>
    </div>
  );
}

export default App;
