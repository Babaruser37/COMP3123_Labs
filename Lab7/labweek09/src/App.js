import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="flex flex-col justify-center min-h-screen bg-white">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className='text-3xl'>
          Welcome to Fullstack Development - I
        </h1>
        <h2 className='text-2xl'>
          React JS Programming Week09 Lab exercise
        </h2>
        <p className='text-xl'>Student Id: 101543437</p>
        <p className='text-lg'>Name: Christian Garcia Flores</p>
        <p className='text-base'>George Brown College, Toronto</p>
      </header>
    </div>
  );
}

export default App;
