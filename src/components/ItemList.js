import React from 'react';
import Item from './Item';

function ItemList({itemList}) {

  return(
    <ul>
      {itemList.map(text =>
      <Item text={text}/>
      )
      }
    </ul>
  );
}

export default ItemList;