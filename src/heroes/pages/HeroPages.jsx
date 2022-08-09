import React from 'react'
import { useMemo } from 'react';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import { getHeroById } from '../helper/getHeroById';

export const HeroPages = () => {

  const {id} = useParams();
  const navigate=useNavigate()

  const hero = useMemo(()=>getHeroById(id),[id]); 

  const onNavigateBack=()=>{
    navigate(-1)
  }

  if ( !hero){
    return <Navigate to='/marvel'/>
  }


  return (
   <div className="row mt-5">
    <div className="col-4">
      <img 
      className='img-thumbnail'
      src={`/asset/heroes/${id}.jpg`}
      alt={hero.superhero} />
    </div>
    <div className="col-8">
      <h3>{hero.superhero} </h3>
      <ul className='list-group list-group-flush'>
        <li><b>Alter Ego :{hero.alter_ego} </b></li>
        <li><b>Publisher :{hero.publisher} </b></li>
        <li><b>First Apparence :{hero.first_appearance} </b></li>
      </ul>
      <h5 className='mt-3'>Charactaer </h5>
      <p>{hero.characters} </p>

      <button
      onClick={onNavigateBack}
      className='btn btn-primary'>
        BACK
      </button>
    </div>
   </div>
  )
}
