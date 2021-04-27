import './App.css';
import CardList from './CardList';

function App() {
  const tasks = ['correr', 'leitura', 'exercícios', 'almoço', 'jantar'];

  return (
    <div>
      <ul>
        { tasks.map((tarefa) => <li>{tarefa}</li>) }
      </ul>
      <CardList />
    </div>
  );
}

export default App;
