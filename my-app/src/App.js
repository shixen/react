import css from './App.module.css';
import Sidebar from "./components/Sidebar";
import StatefulGreeting from './components/StatefulGreeting';

function App() {
  return (
    <div className={css.App}>
      {/* Add your components here */}
      <StatefulGreeting greeting="i'm a stateful class component!"
       name="Niklas"/>
    </div>
  );
}

export default App;