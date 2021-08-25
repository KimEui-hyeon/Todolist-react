import React from 'react';
import Item from './Item';

function ItemList({children}) {
  return(
    <ul>
      <Item text='test'/>
    </ul>
  );
}

export default ItemList;