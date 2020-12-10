import './App.css';
import FruitContainer from './components/FruitContainer';

function App() {
  const fruits = ['banana', 'watermelon', 'apple', 'orange', 'kiwi', 'starfruit', 'mangos', 'grapefruit']
  return (
    <div>
      <FruitContainer fruits={fruits}/>
    </div>
  );
}

export default App;
