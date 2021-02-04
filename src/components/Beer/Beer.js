/* eslint-disable */
import react, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Beer.scss';
import heart from '../Picture/heart.svg';

const Beer = () => {
  const [getBeer, setGetBeer] = useState([]);
  const [searchItem, setSearchItem] = useState('');
  const [searchByName, setSearchByName] = useState(false);
  const [searchByBrand, setSearchByBrand] = useState(false);
  const [favorite, setFavorite] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/beer').then((response) => {
      console.log(response.data);
      setGetBeer(response.data);
    });
  }, []);

  const handleFilterdList = getBeer.filter((beer) => {
    if (searchByName) {
      return beer.name.toLowerCase().includes(searchItem.toLowerCase());
    } else if (searchByBrand) {
      return beer.brand.toLowerCase().includes(searchItem.toLowerCase());
    } else if (searchByBrand === false && searchByName === false) {
      return (
        beer.name.toLowerCase().includes(searchItem.toLowerCase()) ||
        beer.brand.toLowerCase().includes(searchItem.toLowerCase())
      );
    }
  });

  return (
    <div className='beer-page-container'>
      <h1>Beer List</h1>
      <div className='filter-container'>
        <input
          type='text'
          value={searchItem}
          placeholder='Search'
          onChange={(event) => setSearchItem(event.target.value)}
        />
        <input
          type='checkbox'
          name='name'
          id='name'
          onChange={() => setSearchByName(!searchByName)}
        />{' '}
        <label for='name'>Search by name</label>
        <input
          type='checkbox'
          name='brand'
          id='brand'
          onChange={() => setSearchByBrand(!searchByBrand)}
        />{' '}
        <label for='brand'>Search by brand</label>
      </div>
      <div className='beer-list-body'>
        {handleFilterdList.map((beer) => {
          return (
            <div className='beer-card'>
              <div className='beer-card-header'>
                <div onClick={() => setFavorite([...favorite, beer])}>
                  <img src={heart} alt='favorite' />
                </div>
                <div className='beer-list-image'>
                  <img src={beer.image_url} alt={beer.name} />
                </div>
                <Link to={{ pathname: `/beer/${beer.id}` }}>
                  <button type='button'>Learn more</button>
                </Link>
              </div>
              <h2>{beer.name}</h2>
              <div className='beer-info'>
                <p>Brand : {beer.brand}</p>
                <p>Country : {beer.country}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Beer;
