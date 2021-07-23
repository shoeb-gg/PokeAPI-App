import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';


export default function Pokemons({pokemon}) {
    return (        
        <ListGroup variant="flush" >
            {pokemon.map(p=>(
                <ListGroup.Item action variant="success" className="d-flex justify-content-center">{p}</ListGroup.Item>
            ))}
        </ListGroup>
    )
}
