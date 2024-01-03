import './App.css';
import Header from './sections/Header';
import SubBoard from './components/SubBoard';
import HeaderButton from './components/HeaderButton';
import {DisplayProvider} from './context/Display';
import Dashboard from './sections/Dashboard';

const App = () => {
  return (
    <div className="App">
      <DisplayProvider>
        <Header>
          <HeaderButton/>
        </Header>
        <Dashboard>
          <SubBoard/>
        </Dashboard>
      </DisplayProvider>
    </div>
  )
}

export default App
