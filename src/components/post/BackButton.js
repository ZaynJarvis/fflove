import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as FF } from "../../assets/ff.svg";
import "./styles.scss";

const BackButton = () => (
  <div>
    <Link to="/">
      <div className='back'>
        <FF className='ff' />
      </div>
    </Link>
  </div>
);

export default BackButton;
