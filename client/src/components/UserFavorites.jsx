import React from 'react';
import { Link } from 'react-router-dom';

const UserFavorites = ({ favorites }) => {
  return (
    <ul className='circle-bullets'>
      {favorites.map((drink, i) => {
        return drink.idDrink ? (
          <div key={i}>
            <Link
              to={{
                pathname: `/drink/${drink.idDrink}`,
                state: { drink },
              }}
            >
              <li key={i} className='favorite'>
                {drink.strDrink}
              </li>
            </Link>
          </div>
        ) : (
          <div key={i}>
            <Link
              to={{
                pathname: `/custom/${drink.drinkName || drink.name}`,
                state: { drink },
              }}
            >
              <li key={i} className='favorite'>
                {drink.drinkName || drink.name}
              </li>
            </Link>
          </div>
        );
      })}
    </ul>
  );
};

export default UserFavorites;
