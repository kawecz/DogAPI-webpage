import styles from "../modules/NavBar.module.css";
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { useLayoutEffect, useRef } from 'react';

function NavBar() {
    const navRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {

            const links = gsap.utils.toArray("ul a");

            const tl = gsap.timeline();

            // Nav animation
            tl.fromTo(
                navRef.current,
                { opacity: 0, y: -20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    ease: "power2.out"
                }
            )

            // Link animation
            .from(
                links,
                {
                    y: 30,
                    opacity: 0,
                    scale: 0.5,
                    duration: 0.5,
                    stagger: 0.15,
                    ease: "back.out(1.7)"
                },
                "-=0.3"
            );

            // Hover animations
            links.forEach(link => {

                link.addEventListener("mouseenter", () => {
                    gsap.to(link, {
                        scale: 1.1,
                        duration: 0.3,
                        ease: "power2.out"
                    });
                });

                link.addEventListener("mouseleave", () => {
                    gsap.to(link, {
                        scale: 1,
                        duration: 0.3,
                        ease: "power2.out"
                    });
                });

            });

        }, navRef);

        return () => ctx.revert();

    }, []);

    return (
        <nav ref={navRef} className={styles.nav}>
            <ul>
                <Link to="/"><li>Home</li></Link>
                <Link to="/about"><li>About</li></Link>
                <Link to="/contact"><li>Contact</li></Link>
            </ul>
        </nav>
    );
}

export default NavBar;