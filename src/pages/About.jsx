import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

function About() {
    const sectionRef = useRef(null);

    useLayoutEffect(() => {
        // Create a context to handle cleanup automatically
        let ctx = gsap.context(() => {
            
            const tl = gsap.timeline();

            tl.from("h1", { 
                x: -100, 
                opacity: 0, 
                duration: 1, 
                ease: "back.out(1.7)" 
            })
            .from("p", { 
                y: 20, 
                opacity: 0, 
                duration: 0.8, 
                ease: "power1.out" 
            }, "-=0.4");

        }, sectionRef); // Scope the selectors to this ref

        return () => ctx.revert(); // Cleanup: kills animations and resets properties when component unmounts
    }, []);

    return (
        <section ref={sectionRef} style={{ padding: '2rem' }}>
            <h1>Project Idea</h1>
            <p>
                I created the project to practice my React skills, 
                API requests and response using AXIOS, and animations using GSAP.
            </p>
        </section>
    );
}

export default About;