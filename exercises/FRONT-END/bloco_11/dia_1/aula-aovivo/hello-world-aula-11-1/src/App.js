// import logo from './logo.svg';
import './App.css';
import Header from  './Header';
import Button from './Button';

function App() {
  const now = new Date();
  return (
    <div className="App">
      <Header />
      <h4>Meu primeiro: Hello World</h4>
      <p>Data de hoje: {now.getDay()}/{now.getMonth()}/{now.getFullYear()} </p>
      <p>Bem-vindo ao módulo de front end</p>
      <Button />
    </div>
  );
}

export default App;
