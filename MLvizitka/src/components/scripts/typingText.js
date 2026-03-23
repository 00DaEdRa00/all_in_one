import { useEffect } from "react";

export const useTypingAnimation = () => {
    useEffect(() => {
        const typingText = document.getElementById('typing_text'); 
        if (!typingText) return;

        const texts = [ 
            'type about.txt',
            'sudo apt update && sudo apt upgrade -y',
            'whoami',
            'rm -rf',
            '"Нашему поколению осталось мало времени, чтобы спасти свободный Интернет"',
            'cd ~/projects',
            'help'
        ];
        
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let isPaused = false;
        let animationTimer;

        function typeEffect() {
            if (!typingText || isPaused) return;

            const currentText = texts[textIndex];

            if (isDeleting) {
                typingText.textContent = currentText.slice(0, charIndex - 1);
                charIndex--;
            } else {
                typingText.textContent = currentText.slice(0, charIndex + 1);
                charIndex++;
            }

            if (!isDeleting && charIndex === currentText.length) {
                isPaused = true;
                setTimeout(() => {
                    isPaused = false;
                    isDeleting = true;
                    typeEffect();
                }, 5000);
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                setTimeout(typeEffect, 10000);
            } else {
                const speed = isDeleting ? 70 : 200;
                animationTimer = setTimeout(typeEffect, speed); 
            }
        }
        
        const timer = setTimeout(typeEffect, 3000);

        return () => {
            clearTimeout(timer);
            clearTimeout(animationTimer);
        };
    }, []);
};