import React from 'react';
import Header from './components/Header';
import Main from './pages/main';
// import api from './services/api';
import Routes from './routes';

import './styles.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes />
    </div>
  );
};

export default App;

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello</h1>
//     </div>
//   );
// }
