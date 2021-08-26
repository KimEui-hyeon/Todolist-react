import React, { useState } from 'react';

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
    <form onSubmit={onCreate}>
    <input type='text' onChange={changeValue} value={value}></input>
    <input type='submit' value='추가'></input>
    </form>
    </div>
  );
}

export default CreateItem;