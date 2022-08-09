import { heroes } from "../Data/heroes";


export const getHeroesByPublisher=( publisher )=>{
    const validPlublisher =['DC Comics', 'Marvel Comics']
    if(!validPlublisher.includes( publisher )){
        throw new Error(`${ publisher } no existe`);
    }
    return heroes.filter( heroe => heroe.publisher === publisher)
}