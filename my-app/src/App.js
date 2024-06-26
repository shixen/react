import css from './App.module.css';
import StatefulGreetingWithPrevState from './components/StatefulGreetingWIthPrevState';

function App() {
  return (
    <div className={css.App}>
      {/* Add your components here */}
      <StatefulGreetingWithPrevState />
    </div>
  );
}

export default App;