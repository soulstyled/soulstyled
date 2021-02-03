import React from 'react';
import Portrait from './components/portrait';
import Icon from './components/icon';

function App() {
  return (
    <div className="App">
      <div className="max-w-2xl	m-auto">
        <Portrait />

        <div className="p-4 md:p-0 max-w-portrait">
        <h1>Hey there,</h1>
          <p>my name is <strong>Michael.</strong> I know a lot about creating, optimizing and maintaining websites of any type and scale.</p>
          <p>I am currently leading a team at <b><a href="https://www.clickconcepts.de" target="_blank" rel="noopener noreferrer">clickconcepts</a></b>,
          transforming an sluggish ecommerce stack into something highly scaleable and modern based on <b>Shopify</b> and <b>Frontastic</b>.<br /></p>
          <div className="p-5 bg-gray-200 rounded-lg flex content-start items-start max-w-portrait box-border my-8">
          <span className="pr-4 w-9 flex-shrink-0">
            <Icon type='talks' />
          </span>
          <p className="m-0 pt-2.5">I love to talk and chat on podcasts and conferences - or just for networking. If you are all into webdevelopment and headless ecommerce in particular, let's connect!</p>
        </div>
          <p><i>Wanna talk?</i> Follow <a href="https://twitter.com/soulstyled_de" target="_blank" rel="noopener noreferrer">@soulstyled_de on twitter</a> or send me an <a href="mailto:michael@soulstyled.de" rel="noopener noreferrer">email</a>.</p>
        </div>
        
        


      </div>
    </div>
  );
}

export default App;
