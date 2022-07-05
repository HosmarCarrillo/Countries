import React, { useState } from 'react';
import { useEffect } from 'react';
import {useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCountries, filterCountriesByRegion, orderByName, getActivities, filterCreated } from "../actions";
import Card from './Card'
import Paginado from './Paginado';
import SearchBar from './SearchBar';
import './Home.css';
import africa from "../pictures/africa.png";
import Asia from "../pictures/Asia.png";
import europa from "../pictures/europa.png";
import suramerica from "../pictures/suramerica.png";
import norteamerica from "../pictures/norteamerica.png";
import oceania from "../pictures/oceania.png";
import artantica from "../pictures/artantica.png";
import mundo from "../pictures/mundo.png";
// import travellingTheWorld from "../pictures/travellingTheWorld.gif"

export default function Home () {
    const dispatch = useDispatch()
    const activities = useSelector((state)=> state.activities)
    const allCountries = useSelector ((state)=> state.countries) // es lo mismo que hacer el MyStateToProps
    const [currentPage, setCurrentPage] = useState(1)
    const [orden, setOrden] = useState ('');
    const [countriesPrePage, setCountriesPrePage] = useState(10)
    const indexOfLastCountries = currentPage * countriesPrePage
    const indexOfFirstCountries = indexOfLastCountries - countriesPrePage
    const currentCountries = allCountries.slice(indexOfFirstCountries, indexOfLastCountries)
    
    const paginado = (pageNumber)=> {
        setCurrentPage(pageNumber)
 }

 useEffect(()=>{
    dispatch(getCountries());
    dispatch(getActivities());
   },[dispatch]);

     
function handleClick(el){
    el.preventDefault();
    dispatch(getCountries());
};

function handleSort (el){
    el.preventDefault();
    dispatch(orderByName(el.target.value))
    setCurrentPage(1);
    setOrden(`Ordenado ${el.target.value}`)
    
};
function handleSelec (el){
    el.preventDefault();
    dispatch(filterCreated(el.target.value))    
};

function handleFilterRegion(el){
    dispatch(filterCountriesByRegion(el.target.value))
    }


return(
<div>
<div className='encabe'>

    <div className='container barr'>
        <h1>Contries</h1>
        <div className='actividad'>
            <div>
                <Link to= '/activities' >Actividades</Link>
            </div>
                        
               
            <div>
                {/* <select name="Activities" id="activities"> */}
                

                    <select onChange={(el)=>handleSelec(el)}>
                    <option value = 'sin filtro'>Sin filtrar</option>
                    {activities.map((act)=>(
                        <option value={act.name}>{act.name}</option>
                        ))}
                </select>
            </div>
        </div>  
        <div>
        <select onClick={el=> {handleSort(el)}}>
            <option value = ''>Ordenar</option>
            <option value = 'asc'>Acendente</option>
            <option value = 'desc'>Descendente</option>
        </select> 
        </div>             
        
        <div className='barr2'>
            <button onClick={el=> {handleClick(el)}}>
            volver a cargar paises
            </button>
        </div>
        <div>
            <SearchBar/>
        </div>
    </div>
</div>
<div className='container app-cont'>
    <div className='barr3'>
        <Paginado
            countriesPerPage={countriesPrePage}
            allCountries = {allCountries.length}
            paginado = {paginado}
            />
    </div>
    
    <div className= "container grid">
        {currentCountries.map(c=>{
            return ( 
                <div className='item' >
                    <Link to= {`/detail/${c.id}`} >              
                         <Card  key= {c.id} name= {c.name} img= {c.img} id={c.id} capital = {c.capital} />
                    </Link> 
                 
                </div>         
                );
            })}          

    </div>
            </div>
    <div className='form'>
        <div className='bloq1'>
            <div>
            <img src={mundo} alt=''></img>
                <input type= 'radio' name="continents" id="continents" onChange={(el)=> {handleFilterRegion(el)}} value='All'/>Todos
            </div>
            <div>
                <img src={europa} alt=''></img>
                <input type= 'radio' name="continents" id="continents" onChange={(el)=> {handleFilterRegion(el)}}  value={'Europe'}/> Europe
            </div>
            <div>
                <img src={Asia} alt=''></img>
                <input type= 'radio' name="continents" id="continents" onChange={(el)=> {handleFilterRegion(el)}}  value={'Asia'}/> Asia
            </div> 
            <div>
                <img src={africa} alt=''></img>
                <input type= 'radio' name="continents" id="continents" onChange={(el)=> {handleFilterRegion(el)}}  value={'Africa'}/> Africa
            </div>
        
            <div className='suramerica'>
                <img src={suramerica} alt=''></img>
                <input type= 'radio' name="continents" id="continents" onChange={(el)=> {handleFilterRegion(el)}}  value={'South America'}/> Sur America
            </div>
            <div>
                <img src={norteamerica} alt=''></img>
                <input type= 'radio' name="continents" id="continents" onChange={(el)=> {handleFilterRegion(el)}}  value={'North America'}/> Norte America
            </div>
            <div>
                <img src={oceania} alt=''></img>
                <input type= 'radio' name="continents" id="continents" onChange={(el)=> {handleFilterRegion(el)}}  value={'Oceania'}/> Oceania
            </div>
            <div>
                <img src={artantica} alt=''></img>
                <input type= 'radio' name="continents" id="continents" onChange={(el)=> {handleFilterRegion(el)}}  value={'Antarctica'}/> Antartida
            </div>
        </div>

    </div>
</div>

    

)
}

