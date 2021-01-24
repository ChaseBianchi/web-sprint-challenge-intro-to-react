import React from 'react'
import CardCreator from './cardCreator'
import styled from 'styled-components'


const SpeciesBox = styled.div`
    // border: 1px solid red;
    width: 94%;
    margin: 0 3%;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
`

export default function Species(params){
    const {speciesArr} = params

    // const target = document.querySelector('.speciesBox');

    // speciesArr.forEach(obj => {
    //     const cardDiv = document.createElement('div');
    //     const h2 = document.createElement('h2');
    //     const infoDiv = document.createElement('div');
    //     infoDiv.classList.add('info', 'hide');
    //     const ul = document.createElement('ul');
    //     const li1 = document.createElement('li');
    //     const li2 = document.createElement('li');
    //     const li3 = document.createElement('li');
    //     const li4 = document.createElement('li');
    //     const li5 = document.createElement('li');
    //     const li6 = document.createElement('li');
    //     const li7 = document.createElement('li');

    //     cardDiv.appendChild(h2);
    //     cardDiv.appendChild(infoDiv);
    //     infoDiv.appendChild(ul);
    //     ul.appendChild(li1);
    //     ul.appendChild(li2);
    //     ul.appendChild(li3);
    //     ul.appendChild(li4);
    //     ul.appendChild(li5);
    //     ul.appendChild(li6);
    //     ul.appendChild(li7);

    //     h2.innerText=obj.name;
    //     li1.innerText=`average lifespan: ${obj.average_lifespan}`;
    //     li2.innerText=`classification: ${obj.classification}`;
    //     li3.innerText=`designation: ${obj.designation}`;
    //     li4.innerText=`avg height: ${obj.average_height}`;
    //     li5.innerText=`skil colors: ${obj.skin_colors}`;
    //     li6.innerText=`hair colors: ${obj.hair_colors}`;
    //     li7.innerText=`eye colors: ${obj.eye_colors}`;

    //     target.appendChild(cardDiv);
    // });

return(
    
    <SpeciesBox classList='speciesBox'>
       {speciesArr.map(species => {
           return(
               <CardCreator species={species}/>
           )})}
    </SpeciesBox>

)}




/* <div classList='card'>
            <h2>{speciesArr.name}</h2>
            <div classList='info hide'>
                <ul>
                    <li>average lifespan: {speciesArr.average_lifespan}</li>
                    <li>classification: {speciesArr.classification}</li>
                    <li>designation: {speciesArr.designation}</li>
                    <li>avg height: {speciesArr.average_height}</li>
                    <li>skin colors: {speciesArr.skin_colors}</li>
                    <li>hair colors: {speciesArr.hair_colors}</li>
                    <li>eye colors: {speciesArr.eye_colors}</li>
                </ul>
            </div>
        </div> */