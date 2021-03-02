import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faUserPlus } from '@fortawesome/free-solid-svg-icons'
import './Player.css'

const Player = (props) => {
    const { name, email, phone, income, img } = props.player;
    const handleAddPlayer = props.handleAddPlayer;
    return (
        <div className="players">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="playerInfo text-center">
                <h3>Name: {name}</h3>
                <h5>Email: {email}</h5>
                <h5>Phone: {phone}</h5>
                <h4>Salary: ${income}</h4>
                <button className="btn-warning rounded px-5"
                 onClick={() =>handleAddPlayer(props.player)} 
                 ><FontAwesomeIcon icon={faUserPlus} />Add Player</button>
            </div>            
        </div>
    );
};

export default Player;