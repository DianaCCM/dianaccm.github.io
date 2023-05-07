import anime from "animejs";
let sparks = [];

const circularRandom = (r) => {
  r = r * Math.sqrt(Math.abs(Math.random() - Math.random()));
  let theta = Math.random() * 2 * Math.PI;
  let x = r * Math.cos(theta);
  let y = r * Math.sin(theta);
  return { x: x, y: y, r: r };
};

const particles_starter = (fn) => {
  let container_sparks = document.querySelector(".anime-container");
  if (!container_sparks || window.innerWidth < 1000) return null;
  container_sparks.addEventListener("mousemove", fn, false);
  let sparkCount = 100;
  let sparkParticleCount = 6;

  function lerp(p1, p2, t) {
    return p1 + (p2 - p1) * t;
  }

  const ease = {
    linear: (t) => t,
    inQuad: (t) => t * t,
    outQuad: (t) => t * (2 - t),
    inOutQuad: (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t),
    inCubic: (t) => t * t * t,
    outCubic: (t) => --t * t * t + 1,
    inOutCubic: (t) =>
      t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
    inQuart: (t) => t * t * t * t,
    outQuart: (t) => 1 - --t * t * t * t,
    inOutQuart: (t) => (t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t),
    inQuint: (t) => t * t * t * t * t,
    outQuint: (t) => 1 + --t * t * t * t * t,
    inOutQuint: (t) =>
      t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t,
  };

  for (let i = 0; i <= sparkCount; i += 1) {
    let spark = { els: [] };

    for (let j = 0; j < sparkParticleCount; j++) {
      let dot = document.createElement("div");
      dot.classList.add("dot");
      container_sparks.appendChild(dot);
      spark.els.push(dot);

      let particleSize = anime.random(5, 20);
      let sparkRadius = 20;
      let { x, y, r } = circularRandom(sparkRadius);

      dot.style.width =
        lerp(particleSize, 1, ease.outQuad(r / sparkRadius)) + "px";
      dot.style.height =
        lerp(particleSize, 1, ease.outQuad(r / sparkRadius)) + "px";
      dot.style.opacity = "0";
      dot.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
      dot.style.position = "absolute";
      dot.style.borderRadius = "50%;";
      dot.style.backgroundColor = "hsl(60, 100%, 80%)";
    }

    spark.anime = new anime({
      targets: spark.els,
      loop: false,
      easing: "linear",
      autoplay: false,
      delay: anime.stagger(8),
      opacity: [
        { value: 0, duration: 0 },
        { value: 1, duration: 40 },
        {
          value: 0,
          duration: function () {
            return anime.random(500, 800);
          },
        },
      ],
      width: { value: 2, duration: 500 },
      height: { value: 2, duration: 500 },
      translateX: {
        value: function () {
          return anime.random(-30, 30);
        },
        duration: 800,
      },
      translateY: {
        value: function () {
          return anime.random(-30, 30);
        },
        duration: 800,
      },
    });
    sparks.push(spark);
  }
  return { sparks, anime };
};

export default particles_starter;
