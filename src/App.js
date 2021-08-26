import React, { useState } from 'react';
import './App.scss';
import CreateItem from './components/CreateItem';
import ItemList from './components/ItemList';
import Template from './components/Template';
import Title from './components/Title';

function App() {

  const [itemList,setItemList] = useState([]
  );
  const addItem = (text) => {
    setItemList([...itemList, text]);
  }

  return(
    <div>
      <Template>
        <Title/>
        <CreateItem addItem={addItem}/>
        <ItemList itemList={itemList}/>
      </Template>
    </div>
  );
}

export default App;