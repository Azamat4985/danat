const tl = gsap.timeline();
tl.from("header", {
    duration: 1,
    delay: 0.5,
    opacity: 0,
    y: 50,
    stagger: {
      amount: 0.4,
    },
  });

tl.from(
    "header a",
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
    ".container",
    {
      y: 100,
      duration: 1,
      opacity: 0,
      amount: 0.4,
    },
    "-=.5"
  );