import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from '../modules/CardDog.module.css';

function CardDog({ dogLinkImg }) {
    const containerRef = useRef(null);
    const overlayRef = useRef(null);
    const spinnerRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            // Rotação infinita do spinner
            gsap.to(spinnerRef.current, {
                rotation: 360,
                duration: 1,
                repeat: -1,
                ease: "none"
            });

            // Pulsação suave do container de espera
            gsap.to(overlayRef.current, {
                opacity: 0.6,
                duration: 0.8,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    const handleImageLoad = (e) => {
        const tl = gsap.timeline();

        // 1. Esconde o overlay de espera
        tl.to(overlayRef.current, { 
            opacity: 0, 
            scale: 0.8, 
            duration: 0.3, 
            ease: "power2.in" 
        })
        // 2. Revela a imagem com efeito de zoom-out e fade
        .fromTo(e.target, 
            { opacity: 0, scale: 1.2 }, 
            { opacity: 1, scale: 1, duration: 0.7, ease: "power3.out" }
        )
        // 3. Dá um leve brilho no card ao finalizar
        .to(containerRef.current, { 
            boxShadow: "0 20px 40px rgba(0,0,0,0.15)", 
            duration: 0.4 
        }, "-=0.5");
    };

    return (
        <div ref={containerRef} className={styles.cardContainer}>
            {/* Estado de Espera */}
            <div ref={overlayRef} className={styles.waitingOverlay}>
                <div ref={spinnerRef} className={styles.spinner}></div>
                <p className={styles.waitingText}>Waiting for click...</p>
            </div>

            {/* Imagem da API */}
            {dogLinkImg && (
                <img 
                    src={dogLinkImg} 
                    alt="Dog" 
                    onLoad={handleImageLoad} 
                    className={styles.dogImg}
                    style={{ opacity: 0 }} // Começa invisível para o GSAP agir
                />
            )}
        </div>
    );
}

export default CardDog;