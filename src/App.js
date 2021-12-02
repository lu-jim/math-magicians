import React from 'react';
import './App.css';
import Calculator from './components/Calculator';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Calculator text='Calculator' />
      </div>
    );
  }
}

export default App;
