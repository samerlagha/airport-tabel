import React ,{useState} from 'react';
import * as flightsActions from '../../store/flights.actions';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './header.scss';

const Header =()=>{

    const [searchValue, setValue] =useState('');
    return(
        <header className='header'>
       <h2 className="title">ПОШУК РЕЙСУ</h2>
       <form className='search-form'>
           <div className='icon'>
               <i className='fa fa-search fa-2x' aria-hidden='true'></i>
               </div>
               <input
                   name='saerch'
                   className='search-value'
                   type ='text'
                   value={searchValue}
                   onChange={()=>setValue(event.target.value)}
                   placeholder='Номер рейсу або місто' />
                   <Link
                   
                   to={`/departure?search=${searchValue}`}
                   style={{textDecoration:'none',color:'read'}} >

                       <button className ='search-btn' type='submit'>
                       Знайти
                       </button>


                   </Link>
       </form>
       
        </header>
    )
}

export default connect(null,flightsActions)(Header);