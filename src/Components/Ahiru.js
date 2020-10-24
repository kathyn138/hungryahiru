import React from 'react';
import { useDispatch } from "react-redux";
import { changeScreen } from '../Actions/screens';
import './Ahiru.css';

function Ahiru(props) {
  const dispatch = useDispatch();

  return (
    <div className="ahiru-container">
      {props.jump ? <img src="https://cdn.discordapp.com/attachments/709643259789705317/769354247175012392/ahiru-jump.png"
        className="ahiru-jump" alt="player jump"></img>
        : <img src="https://cdn.discordapp.com/attachments/709285942430531650/768257906876612608/ahiru-gif.gif"
          className="ahiru-walk-gif" alt="player"></img>}
    </div>
  );
}

export default Ahiru;