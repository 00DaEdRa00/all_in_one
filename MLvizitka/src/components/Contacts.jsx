import style from './Contacts.module.css'
import element from './elements/underlining_text.module.css'

import ModalWindow from '../components/elements/modalwindow/modalWindow'
import React, { useState } from 'react';

export default function Contacts(){
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('telegram');

  const handleOpenModal = (type) => {
    setModalType(type);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

    return(
        <section id="contacts">
            <div className={style.container}>
                <h2 className={element.underlining_text}>
                    <i></i>
                    Контакты
                    </h2>
                <p className={style.text}>
                    Свяжитесь со мной для обсуждения вашего проекта или сотрудничества.
                </p>
                <div className={style.contact_links}>
                    <button 
                      className={style.contact_link} 
                      onClick={() => handleOpenModal('telegram')}
                    >
                      <img src='/icons/telegram.svg' alt='telegramButton' width='25px' height='20px' />
                      Telegram
                    </button>
                    <button 
                      className={style.contact_link} 
                      onClick={() => handleOpenModal('discord')}
                    >
                      <img src='/icons/discord.svg' alt='discordButton' width='25px' height='20px' />
                      Discord
                    </button>
                    <ModalWindow 
                      show={showModal} 
                      onClose={handleCloseModal}
                      type={modalType}
                    />
                </div>
            </div>
        </section>
    )
}