import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import Button from "../components/Button";
import CardDog from "../components/CardDog";

function Main() {
  const mainRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Create a timeline so animations happen in sequence
      const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 0.8 } });

      tl.from("h2", {
        y: -30,
        opacity: 0,
      })
      .from("div, .card-container", { // Target the wrapper inside CardDog
        scale: 0.8,
        opacity: 0,
      }, "-=0.4") // Start slightly before h2 finishes
      .from("button", {
        y: 20,
        opacity: 0,
      }, "-=0.4");

    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={mainRef}>  
      <h2>Welcome to the DOG API!</h2>
      <CardDog />
      <Button />
    </main>
  );
}

export default Main;