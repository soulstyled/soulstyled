import React from 'react';
import './App.css';
import Portrait from './components/portrait';

function App() {
  return (
    <div className="App">
      <div className="content-card">
      <Portrait />

      <h1>Hey there,</h1>
        <p>my name is <strong>Michael.</strong> I know a lot about creating, optimizing and maintaining websites of any type and scale.</p>
        <p>I am currently leading a team at <b><a href="https://www.clickconcepts.de" target="_blank" rel="noopener noreferrer">clickconcepts</a></b>,
        transforming an sluggish ecommerce stack into something highly scaleable and modern based on <b>Shopify</b> and <b>Frontastic</b>.<br /></p>
        <p><i>Wanna talk?</i><br />
          	<a href="https://twitter.com/soulstyled_de" target="_blank" rel="noopener noreferrer">@soulstyled_de on twitter</a> 
            or find me on <a href="https://twitter.com/soulstyled_de" target="_blank" rel="noopener noreferrer">linked.in</a>.</p>
      </div>
    </div>
  );
}

export default App;
