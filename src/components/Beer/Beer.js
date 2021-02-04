/* eslint-disable */
import react, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Beer.scss';
import heart from '../Picture/heart.svg';
import BeerDetail from '../BeerDetail/BeerDetail';

const Beer = () => {
  const [getBeer, setGetBeer] = useState([]);
  const [isUser, setIsUser] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:5000/beer').then((response) => {
      console.log(response.data);
      setGetBeer(response.data);
    });
  }, []);

  return (
    <div className='beer-page-container'>
      <h1>Beer List</h1>
      <>
        {getBeer.map((beer) => {
          return (
            <div>
              <BeerDetail key={beer.id} beer={beer} />

              <div className='beer-card-button'>
                <img src={heart} alt='bookmarks' />
                <Link to='/beer/${beer.id}'>
                  <button type='button'>Learn more</button>
                </Link>
              </div>
            </div>
          );
        })}
      </>
    </div>
  );
};

export default Beer;
