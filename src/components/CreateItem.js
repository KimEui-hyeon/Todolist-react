import React, { useState } from 'react';
import './CreateItem.scss'

function CreateItem({addItem}) {

  const [value, setValue] = useState('');


  const changeValue = (e) =>{
    setValue(e.target.value);
  }

  const onCreate = (e) => { 
    e.preventDefault();
    const text = value.trim();
    if(text.length===0){
      return( null );
    }
    addItem(text);
    setValue('');
  }

  return (
    <div>
    <form onSubmit={onCreate} id='itemInput'>
    <input type='text' onChange={changeValue}
      value={value}></input>
    </form>
    </div>
  );
}

export default CreateItem;