import { useRef } from 'react';
import gsap from 'gsap';
import styles from '../modules/Button.module.css';

function Button() {
    const btnRef = useRef(null);

    const handleMouseEnter = () => {
        gsap.to(btnRef.current, {
            scale: 1.1,
            backgroundColor: "#45a049", // Um tom de verde levemente mais escuro
            boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
            duration: 0.3,
            ease: "power2.out"
        });
    };

    const handleMouseLeave = () => {
        gsap.to(btnRef.current, {
            scale: 1,
            backgroundColor: "#4CAF50",
            boxShadow: "0px 0px 0px rgba(0,0,0,0)",
            duration: 0.3,
            ease: "power2.inOut"
        });
    };

    const handleMouseDown = () => {
        // Efeito de "apertar" o botão
        gsap.to(btnRef.current, {
            scale: 0.95,
            duration: 0.1
        });
    };

    const handleMouseUp = () => {
        gsap.to(btnRef.current, {
            scale: 1.1,
            duration: 0.1
        });
    };

    return (
        <button 
            ref={btnRef}
            className={styles.btn}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
        >
            Click Here
        </button>
    );
}

export default Button;