import react, { useState, useEffect } from 'react';
import './BeerDetail.scss';
import axios from 'axios';

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
        <div>
          <img src={beer.image_url} alt={beer.name} />
          <p>{beer.name}</p>
          <div>
            <p>{beer.description}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default BeerDetail;
