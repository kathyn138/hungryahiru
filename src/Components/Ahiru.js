import React from 'react';
import { useDispatch } from "react-redux";
import { changeScreen } from '../Actions/screens';
import './Ahiru.css';

function Ahiru() {
  const dispatch = useDispatch();

  return (
    <div className="ahiru-container">
      <img src="https://cdn.discordapp.com/attachments/709285942430531650/768257906876612608/ahiru-gif.gif"
        className="ahiru-gif" alt="player"></img>
    </div>
  );
}

export default Ahiru;