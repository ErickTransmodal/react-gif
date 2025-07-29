import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import {GifGrid} from './components/GifGrid';


export const GifExpertApp = () => {


    const [categorias, setCategorias] = useState(['Queli']);

    const añadirCategoria =(newCategory) =>{

        if(categorias.includes(newCategory) ) return;

        
        //console.log(newCategory);
        setCategorias([newCategory, ...categorias])

    }
  return (

    <>
    <h1>Gif Expertos</h1>
   
     <AddCategory 
    // setCategorias={setCategorias}
     onNewCategory={(value) => añadirCategoria(value)}
     />
   
{
    categorias.map((categorias)=>(
        <GifGrid
        key={categorias}
        category={categorias} />
    ))
}

    </>


  )
}
