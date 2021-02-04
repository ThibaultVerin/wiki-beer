import react, { useState, useEffect } from 'react';
import './BeerDetail.scss';
import axios from 'axios';
import heart from '../Picture/heart.svg';
import { Link } from 'react-router-dom';

const BeerDetail = (props) => {
  const { match } = props;
  const data = match.params.id;

  const [beer, setBeer] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/beer/${data}`).then((response) => {
      setBeer(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <>
      {beer && (
        <div className='beer-detail-container'>
          <h1>{beer.name}</h1>
          <img src={beer.image_url} alt={beer.name} />
          <div className='beer-detail-info'>
            <p>Brand : {beer.brand}</p>
            <p>Type : {beer.type}</p>
            <p>Country : {beer.country}</p>
            <p>Price : ${beer.price}</p>
          </div>
          <div className='beer-detail-description'>
            <h2>Description</h2>
            <p>{beer.description}</p>
          </div>
          <div className='beer-detail-advice'>
            <h2>Advice</h2>
            <p>{beer.advice}</p>
          </div>
          <div className='beer-detail-button'>
            <img src={heart} alt='favorite' />
            <Link to='/beer-list'>
              {' '}
              <button type='button'>Back</button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default BeerDetail;
