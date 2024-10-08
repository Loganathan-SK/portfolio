import './App.css';
import Main from './components/Main.jsx';
import Profile from './components/Profile.jsx';

function App() {
  return (
    <div className='app'>
      <div className="column left-column column-70">
      <Main/>
      </div>
      <div className="column right-column column-30">
      <Profile />
      </div>
    </div>
  );
}

export default App;
