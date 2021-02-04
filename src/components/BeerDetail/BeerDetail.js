import react, { useState, useEffect } from 'react';
import './BeerDetail.scss';
import axios from 'axios';

const BeerDetail = (props) => {
  const data = props.match.params;

  const [beer, setBeer] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/beer/${data.id}`).then((response) => {
      setBeer(response.data);
    });
  }, [data]);
  return <div>Wala</div>;
};

export default BeerDetail;

{
  /* <div className='beer-card'>
<img src={beer.image_url} alt={beer.name} />
<p>{beer.name}</p>
<div className='beer-description'>
  <p>{beer.description}</p>
</div> */
}
