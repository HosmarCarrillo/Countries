import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameCountries } from "../actions";
import '../components/SearchBar.css';


export default function SeaechBar(){
    const dispatch = useDispatch()
    const [name, setName] = useState("")

    function handleImputCountries(el){
        el.preventDefault()
        setName(el.target.value)
        console.log(name)
        
        
    }
    function handleSubmit(el){
        el.preventDefault()
        dispatch(getNameCountries(name))
        setName ("")// ojo con esto si no funsiona
        
    }

    return(
        <div>
            
            {/* <input
            type= 'text'
            placeholder = 'Buscar...'
            onChange={(el) => handleImputCountries(el)}
            />
            <div>
            <button type="submit" onClick={(el)=> handleSubmit(el)}>Buscar</button>

            </div> */}
        <div className="containerr">
          
        <input type= 'text' placeholder = 'Buscar...' onChange={(el) => handleImputCountries(el)}/>
            <div className="btnn">
                <button className="search" type="submit" onClick={(el)=> handleSubmit(el)}>Buscar</button>
            </div>
        </div>
        </div>

    )
}