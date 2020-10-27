import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const name = 'Clarisse Agbegnenou';
const element = <h1>Bonjour, {name}</h1>;

function Affichage(props){
  return(
    <div id="Infos">
       <img className="Avatar"
          src={props.avatarUrl}
          alt={props.name}
        />
        <div className="UserInfo-prenom">
          {props.prenom}
        </div>
        <div className="UserInfo-nom">
          {props.nom}
        </div>
        <div className="User-date">
        {props.date}
      </div>
    </div>
  );
}
const Jeanne = {
  prenom : 'Jeanne',
  nom: 'Jeannette',
  date:'23/10/1987',
  avatarUrl:'image 2.jpg',
}
const Claude= {
  prenom : 'Claude',
  nom: 'Clodo',
  date:'14/03/1967',
  avatarUrl:'./image 3.jpg',
}

const Martine = {
  prenom : 'Martine',
  nom: 'Martinie',
  date:'21/07/1970',
  avatarUrl:'image 1.jpg',
}
ReactDOM.render(
  <Affichage
  nom={Claude.prenom}
  prenom={Claude.nom}
  date={Claude.date}
  avatarUrl={Claude.avatarUrl}/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
