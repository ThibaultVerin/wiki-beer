import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';
import Modal from './HomeModal';
import './HomeModal.scss';

const Home = () => {
  const isModalOpen = true;

  return (
    <div className='home-page'>
      <Modal showModal={isModalOpen}>
        <div className='modalHeaderHome'>
          <h2>Hold on ...</h2>
        </div>
        <div className='modalBody'>
          <h3>
            You need to be over 18 to access this website
            <br />
          </h3>
        </div>
        <div className='modalFooterHome'>
          <button type='button' className='modalButton'>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.alcool-info-service.fr/?gclid=Cj0KCQiA0-6ABhDMARIsAFVdQv-qYqyfeaniSATWeQcUJXUE3qx2I0MmGOweodhxizo8KP_FdlMd6cAaAhdNEALw_wcB'
            >
              I am under 18
            </a>
          </button>
          <Link to='/beer-list'>
            {' '}
            <button type='button' className='modalButton'>
              I am over 18
            </button>
          </Link>
        </div>
      </Modal>
      <div className='logo-home'></div>
      <div className='title-home'>Wiki Qui Mousse</div>
    </div>
  );
};
export default Home;
