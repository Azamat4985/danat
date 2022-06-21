const tl = gsap.timeline();
tl.from(".logo, .menu-items li, .lang", {
    duration: 1,
    delay: 0.5,
    opacity: 0,
    y: 50,
    stagger: {
      amount: 0.4,
    },
  });

tl.from(
    ".google-maps",
    {
      y: 100,
      skewY: 5,
      duration: 1,
      stagger: {
      amount: 0.4,
      },
    },
    "-=1"
  );

tl.from(
    ".google-maps-title h1",
    {
      y: 100,
      duration: 1,
      opacity: 0,
      amount: 0.4,
    },
    "-=.5"
  );

tl.from(
    "iframe",
    {
      y: 100,
      duration: 1,
      opacity: 0,
      amount: 0.4,
    },
    "-=.5"
  );

