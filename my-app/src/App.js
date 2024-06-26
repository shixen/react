import css from './App.module.css';
import NavBarSimple from './components/NavBarSimple';
import StatefulGreetingWithPrevState from './components/StatefulGreetingWIthPrevState';
import Sidebar from './components/sidebar';

function App() {
  return (
    <div className={css.App}>
      {/* Add your components here */}
      <Sidebar />
      <NavBarSimple />
    </div>
  );
}

export default App;