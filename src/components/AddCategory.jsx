import {use, useState} from 'react'

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = () =>{
        setInputValue(event.target.value);

    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1 ) return;
        onNewCategory(inputValue.trim());
        //setCategorias(categories => [inputValue, ...categories]);
        setInputValue('');

    }


  return (

    <form onSubmit={(event) => onSubmit(event)}>



    <input type="text" 
    placeholder="Buscar Personaje"
    value={inputValue}
    onChange={(event) => onInputChange (event)}
    
    />
       </form>
  )
}
