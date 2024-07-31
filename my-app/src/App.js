import css from './App.module.css';
import HTTPRequest from './components/HTTPRequest';
import UseEffectCounterContainer from './components/UseEffectCounterContainer';

function App() {
  return (
    <div className={css.App}>
      <HTTPRequest />
    </div>
  );
}

export default App;