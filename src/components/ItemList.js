import React from 'react';
import Item from './Item';

function ItemList({children}) {
  return(
    <ul>
      <li>
        <Item/>
      </li>
    </ul>
  );
}

export default ItemList;