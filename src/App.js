import React from 'react';
import './App.css';
import { withLDProvider } from 'launchdarkly-react-client-sdk';

import FeatureFlag from './featureFlag';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FeatureFlag />    
      </header>
    </div>
  );
}

export default withLDProvider({
  clientSideID: '605d53fb54f4ad0e53aaf7f5',
  user: {
    "key": "605d53fb54f4ad0e53aaf7f5",
    "name": "Johnny Parham",
    "email": "johnny.parham@gmail.com"
  },
  options: { /* ... */ }
})(App);
