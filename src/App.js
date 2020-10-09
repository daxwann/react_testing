import React from 'react';
import Header from './components/header';
import Headline from './components/headline';
import './app.scss';

const tempArr = [{
  fName: 'Joe',
  lName: 'Bloggs',
  email: 'jb@mailinator.com',
  age: 24,
  onlineStatus: true
}]

function App() {
  return (
    <div className="App">
      <Header />
      <section className="main-section">
        <Headline header="Posts" desc="Click the button to render posts" tempArr={tempArr} />
      </section>
    </div>
  );
}

export default App;
