import styles from "../modules/NavBar.module.css";
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { useLayoutEffect, useRef } from 'react';

function NavBar() {
    const navRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline();

            // 1. Anima a nav principal
            tl.fromTo(navRef.current,
                { opacity: 0, y: -20 },
                { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
            )
                // 2. Anima os 'li' que estão dentro da ul
                // Usamos "ul li" como seletor dentro do contexto da navRef
                .from("ul li", {
                    y: 30,
                    opacity: 0,
                    scale: 0.5,
                    duration: 0.5,
                    stagger: 0.15,
                    ease: "back.out(1.7)"
                }, "-=0.3");
            // Adicione isso dentro do seu gsap.context se quiser um hover profissional
            gsap.utils.toArray("ul li").forEach(li => {
                li.addEventListener("mouseenter", () => gsap.to(li, { scale: 1.1, borderColor: "#4CAF50", duration: 0.3 }));
                li.addEventListener("mouseleave", () => gsap.to(li, { scale: 1, borderColor: "#ccc", duration: 0.3 }));
            });

        }, navRef);

        return () => ctx.revert();
    }, []);

    return (
        <nav ref={navRef} className={styles.nav}>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
}

export default NavBar;