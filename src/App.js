import React from 'react';
import './App.scss';
import ItemList from './components/ItemList';
import Template from './components/Template';
import Title from './components/Title';

function App() {


  return(
    <div>
      <Template>
        <Title/>
        <ItemList/>
      </Template>
    </div>
  );
}

export default App;