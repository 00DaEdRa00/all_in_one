import React, {useState, useCallback, useEffect} from 'react';
import styles from './modalWindow.module.css'

const ModalWindow = ({show, onClose, type = 'telegram'}) => {
  const [isVisible, setIsVisible] = useState(false);

  const config = {
    telegram: {
      title: 'Telegram',
      url: 'https://t.me/DaniilSnejniy',
      icon: '/icons/telegram.svg',
      color: '#229ED9',
      description: 'Свяжитесь со мной в Telegram для быстрого общения'
    },
    discord: {
      title: 'Discord',
      url: 'https://discord.com/users/507874360619433984',
      icon: '/icons/discord.svg',
      color: '#5865F2',
      description: 'Добавьте меня в друзья в Discord'
    }
  };

  const currentConfig = config[type] || config.telegram;

  const handleKeyDown = useCallback((event) => {
    if (event.key === 'Escape'){
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    if (show){
      setIsVisible(true);
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300);
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
      return () => clearTimeout(timer);
    }
  }, [show, handleKeyDown]);

  useEffect(() => {
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [handleKeyDown]);

  if (!isVisible && !show) return null;

  return(
    <div 
      className={`${styles.modalBackdrop} ${show ? styles.show : ''}`}
      onClick={onClose}
    >
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button 
          onClick={onClose} 
          className={styles.modalCloseButton} 
          aria-label='Закрыть модальное окно'
        >
          ✕
        </button> 
        
        <div className={styles.modalHeader}>
          <div className={styles.modalTitleContainer}>
            <div className={styles.modalIconContainer} data-type={type}>
              <img 
                src={currentConfig.icon} 
                alt={currentConfig.title}
                className={styles.modalIcon}
              />
            </div>
            <h2 className={styles.modalTitle}>
              <span className={styles.modalTitleMain}>{currentConfig.title}</span>
            </h2>
          </div>
          <p className={styles.modalText}>{currentConfig.description}</p>
          <div className={styles.modalUrl}>
            <span className={styles.modalUrlLabel}>URL:</span>
            <span className={styles.modalUrlValue}>{currentConfig.url}</span>
          </div>
        </div>

        <div className={styles.modalActions}>
          <a 
            href={currentConfig.url} 
            target='_blank' 
            rel="noopener noreferrer" 
            className={styles.socialButton}
            data-type={type}
            style={{'--accent-color': currentConfig.color}}
          >
            <span className={styles.socialText}>Перейти</span>
          </a>
          <button 
            onClick={onClose}
            className={styles.cancelButton}
          >
            Отмена
          </button>
        </div>
      </div>
    </div>
  )
}

export default ModalWindow;