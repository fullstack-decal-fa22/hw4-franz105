import React from 'react';
/* Add any imports you think you might need here! */
import Color from './Color.js'
import Feed from './Feed.js';

const Menu = ({handleClick}) => { 
    const colorsList = ['red', 'pink', 'blue', 'green'];
    return (
      <div className="colorOptions">
          {colorsList.map((item) => 
          <Color color = {item} handleClick = {handleClick}></Color>
          )}
      </div>
    );
}

export default Menu;