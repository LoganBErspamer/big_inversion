import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div>
      <PersonCard firstName="Logan" 
      lastName="Erspamer" 
      age={20} 
      hairColor="Black"/>

      <PersonCard firstName="Sam" 
      lastName="Sotsky" 
      age={21} 
      hairColor="Blonde"/>

      <PersonCard firstName="Kyle" 
      lastName="Deato" 
      age={25} 
      hairColor="Black"/>

      <PersonCard firstName="Lexington" 
      lastName="Carey" 
      age={19} 
      hairColor="Red"/>
    </div>
  );
}

export default App;
