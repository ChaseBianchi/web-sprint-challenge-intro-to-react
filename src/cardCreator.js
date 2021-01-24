import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
        // border: 1px solid white;
        width: 60%;
        height: auto;
        h2{
            border: 4px solid #A8A7A5;
            font-size: 2rem;
            margin: 0;
            margin-top: 10px;
            padding: 5px;
            background-color: rgba(175, 78, 33, .4);
            
        }
        button {
            margin-bottom: 10px;
            margin-top: 0;
        }
        ul {
            margin: 0;
            padding-bottom: 20px;
            padding-top: 10px;
        }
        li {
            text-align: left;
        }
        .info {
            background-color: rgba(128, 169, 183, .4);
        }
    `
export default function CardCreator(params){
    const {species} = params
   
    

    return(
    <Card className='card'>
        <h2>{species.name}</h2>
        <button onClick={()=>{
            document.querySelector(`#${species.name}`).classList.toggle('hide')
        }}>+</button>
        <div id={species.name} className='info hide'>
            <ul>
                <li>average lifespan: {species.average_lifespan}</li>
                <li>classification: {species.classification}</li>
                <li>designation: {species.designation}</li>
                <li>avg height: {species.average_height}</li>
                <li>skin colors: {species.skin_colors}</li>
                <li>hair colors: {species.hair_colors}</li>
                <li>eye colors: {species.eye_colors}</li>
            </ul>
        </div>
    </Card>


    )}