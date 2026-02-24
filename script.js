gsap.registerPlugin(ScrollTrigger);

/* =====================
   1. INTRO ANIMATION
===================== */

gsap.to(".headline span", {
  opacity: 1,
  y: 0,
  stagger: 0.05,
  duration: 0.8,
  ease: "power3.out"
});

gsap.to(".stat", {
  opacity: 1,
  y: 0,
  delay: 0.8,
  stagger: 0.2,
  duration: 1,
  ease: "power3.out"
});

/* =====================
   2. COUNTER ANIMATION
===================== */

document.querySelectorAll(".counter").forEach(counter => {
  let target = +counter.dataset.target;

  gsap.to(counter, {
    innerText: target,
    duration: 2,
    snap: { innerText: 1 },
    ease: "power1.out",
    delay: 1
  });
});

/* =====================
   3. SCROLL-DRIVEN HERO
===================== */

gsap.to(".hero-image", {
  y: -400,
  scale: 1.2,
  ease: "none",
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: 1
  }
});

gsap.to(".bg-layer", {
  scale: 1.3,
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: 1
  }
});