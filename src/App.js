import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import NavBar from './component/Navbar/NavBar';
import Content from './component/Content/Content';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Header />
      <Content />
    </div>

  );
}

export default App;
