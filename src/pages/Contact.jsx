import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Contact() {
    const contactRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                defaults: { ease: "power3.out", duration: 0.8 }
            });

            tl.from("h1", { y: -20, opacity: 0 })
              .from(".contact-info", { y: 20, opacity: 0 }, "-=0.4")
              // Animando os links diretamente pela classe
              .from(".social-link", { 
                  scale: 0, 
                  opacity: 0, 
                  stagger: 0.2,
                  ease: "back.out(1.7)" 
              }, "-=0.2");

        }, contactRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={contactRef} style={{ padding: '2rem' }}>
            <h1>Contact Me</h1>
            <p className="contact-info">Feel free to reach out to me!</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '20px' }}>
                {/* Garantindo que o link do Github tenha a classe social-link */}
                <a 
                    href="https://github.com/kawecz" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="social-link" 
                    style={linkStyle}
                >
                    <FaGithub size={30} /> <span>Github</span>
                </a>

                <a 
                    href="https://www.linkedin.com/in/kawe-cezar/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="social-link" 
                    style={linkStyle}
                >
                    <FaLinkedin size={30} /> <span>LinkedIn</span>
                </a>
            </div>
        </section>
    );
}

const linkStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    textDecoration: 'none',
    color: 'inherit',
    fontSize: '1.2rem'
};

export default Contact;