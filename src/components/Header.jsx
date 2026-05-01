import { gsap } from 'gsap'; // Use apenas 'gsap'
import { useLayoutEffect, useRef } from 'react';
import DogLogo from '../assets/dog.png';
import styles from "../modules/Header.module.css"
import NavBar from './Navbar.jsx';

function Header() {
  const headerRef = useRef(null);

  useLayoutEffect(() => {
    // Agora o headerRef.current aponta para a <header> abaixo
    let ctx = gsap.context(() => {
      
      gsap.fromTo(".header-container", 
        { opacity: 0, y: -50 }, 
        { opacity: 1, y: 0, duration: 1 }
      );

      gsap.fromTo(`.${styles.img}`, 
        { opacity: 0, scale: 0.5 }, 
        { opacity: 1, scale: 1, duration: 1, delay: 0.5 }
      );

    }, headerRef); 

    return () => ctx.revert(); 
  }, []);

  return (
    /* O segredo está aqui: ref={headerRef} */
    <header ref={headerRef}> 
      <div className={`${styles.header} header-container`}>
        <img src={DogLogo} alt="Dog Logo" className={styles.img} />
        <h1>DOG API Web Project</h1>
      </div>
      <NavBar />
    </header>
  );
}

export default Header;