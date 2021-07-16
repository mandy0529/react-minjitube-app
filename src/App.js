import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import Home from './routes/Home';
import Detail from './routes/Detail';
import About from './routes/About';
import Navigation from './routes/Navigation';

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route pathname="/" exact={true} component={Home} />
      <Route pathname="/about" component={About} />
      <Route pathname="/movie/:id" component={Detail} />
    </HashRouter>
  );
}

export default App;
