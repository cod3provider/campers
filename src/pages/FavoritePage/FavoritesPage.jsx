import { useState } from 'react';
import { useSelector } from 'react-redux';

import CardList from '../../components/CardList';
import Modal from '../../components/Modal';
import CamperDetail from '../../components/CamperDetail';
import Loader from '../../components/Loader';
import Notification from '../../components/common/Notification';

import { selectFavorites, selectIsLoading } from '@/store/selectors';

import styles from './FavoritesPage.module.scss';

const FavoritesPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [showMoreId, setShowMoreId] = useState(null);
  const isLoading = useSelector(selectIsLoading);
  const campers = useSelector(selectFavorites);

  const toggleModal = () => {
    setShowModal(prevShowModal => !prevShowModal);
  };

  const handelShowMoreClick = id => {
    setShowMoreId(id);
    toggleModal();
  };
  return (
    <div className={styles.wrapper}>
      {showModal && (
        <Modal onClose={toggleModal} onClick={toggleModal}>
          <CamperDetail id={showMoreId} onClick={toggleModal} />
        </Modal>
      )}
      {isLoading && <Loader />}
      {!isLoading && campers.length > 0 ? (
        <CardList campers={campers} showMoreClick={handelShowMoreClick} />
      ) : (
        <Notification message="No favorites yet" />
      )}
    </div>
  );
};

export default FavoritesPage;
