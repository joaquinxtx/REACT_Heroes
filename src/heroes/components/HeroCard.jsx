import { Link } from "react-router-dom";
import './HeroCard.css'

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
}) => {
   const heroImagesUrl= `/asset/heroes/${id}.jpg`

   const CharactarByHero=({alter_ego,characters})=>{
    return (alter_ego===characters)?
    (<></>)
    :
     <p>{characters} </p>
   }

  return (
    <div className='col '>
        
        <div className="row no-gutters containerCard">
            <div className="col-4">
                <img src={heroImagesUrl} className='card-img' alt={superhero} />
            </div>
            <div className="col-8">
                <div className="card-body">
                    <h5 className='card-title'>
                        {superhero}
                    </h5>
                    <p >{alter_ego}</p>
                    <CharactarByHero characters={characters} alter_ego={alter_ego}/>
                    
                    <p >
                        <small >{first_appearance} </small>
                    </p>
                     

                    <Link to={`/hero/${id}`}>
                        Mas...
                    </Link>

                </div>
            </div>
        </div>

    </div>
  )
}
