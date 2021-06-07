import { useDispatch, useSelector } from "react-redux";
import { incrementar, reduzir } from './reducers/contador';
import { abrir, fechar } from "./reducers/modal";

function App() {
  const { contador: { count }, modal } = useSelector(state => state);
  const dispatch = useDispatch();
  return (
    <div>
      { modal && <h1>Total: <span>{count}</span></h1> }
      
      <button 
        type="button"
        onClick={() => dispatch(incrementar())}
      >
        Incrementar
      </button>
      <button 
        type="button"
        onClick={() => dispatch(reduzir())}
      >
        Reduzir
      </button>
      <button 
        type="button"
        onClick={() => dispatch(abrir())}
      >
        Abrir
      </button>
      <button 
        type="button"
        onClick={() => dispatch(fechar())}
      >
        Fechar
      </button>
    </div>
  );
}

export default App;
