import logo from './logo.svg';
import './App.css';
import Message from './components/Message';
import Team from './components/Team';

function App() {
  return (
    <div className="App">
      <h1>Hello Yaya</h1>
      < Message name="Yaya" job ="GLSI" age={121} />
      < Message name="Mane" job ="SRT" age={123} />
      < Message name="Jules" job ="SRT" age={124} />
      < Team name="Liverpool" trophies={5} />
      < Team name="Madrid" trophies={14} />
      < Team name="PSG" trophies={0} />
    </div>
  );
}

export default App;
