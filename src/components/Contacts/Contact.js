import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import style from './Contacts.module.css';
import PropTypes from 'prop-types';
import Button from '../Button';
import Modal from '../Modal';
import ContactEditor from '../ContactEditor/ContactEditor';
import { phonebookOperations } from '../../redux/contacts';

export default function Contact({ id, name, number }) {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const onDeliteContact = () => dispatch(phonebookOperations.deleteContact(id));
  const toggleModal = useCallback(() => {
    setShowModal(prevShowModal => !prevShowModal);
  }, []);

  return (
    <>
      {name}: {number}
      <div className={style.actions}>
        <Button type={'button'} text={'Edit'} onClick={toggleModal} />
        <Button type={'button'} text={'Delete'} onClick={onDeliteContact} />
      </div>
      {showModal && (
        <Modal onClose={toggleModal}>
          <ContactEditor onSave={toggleModal} contact={{ id, name, number }} />
        </Modal>
      )}
    </>
  );
}

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
