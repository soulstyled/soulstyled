import React from 'react';
import './App.css';
import Portrait from './components/portrait';

function App() {
  return (
    <div className="App">
      <div className="content-card">
      <h1>Hey there,</h1>
        <p>my name is <strong>Michael.</strong> I know a lot about creating, optimizing and maintaining websites of any scale and type.</p>
        <p>I am currently leading a team at <b><a href="https://www.clickconcepts.de" target="_blank" rel="noopener noreferrer">clickconcepts</a></b>,
        transforming an sluggish ecommerce monolith into something highly scaleable based on <b>Shopify</b> and <b>Frontastic</b>.<br /></p>
        <p><i>Wanna talk?</i> <a href="https://twitter.com/soulstyled_de" target="_blank" rel="noopener noreferrer">@soulstyled_de on twitter</a>.</p>
      </div>
      <Portrait />
    </div>
  );
}

export default App;
