import { useEffect } from 'react';

// плавная прокрутка
export const useHeroKeyboard = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 0;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };
// реакция на нажатие клавиш
  useEffect(() => {
    const handleKeyDown = (event) => {
      switch(event.keyCode) {
        case 112: // F1
          event.preventDefault();
          scrollToSection('about');
          break;
        case 113: // F2 и тд
          event.preventDefault();
          scrollToSection('skills');
          break;
        case 114: 
          event.preventDefault();
          scrollToSection('portfolio');
          break;
        case 115: 
          event.preventDefault();
          scrollToSection('contacts');
          break;
        default:
          break;
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return scrollToSection;
};