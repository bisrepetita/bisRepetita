import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

// Grammaire de mouvement : sorties exponentielles, faibles amplitudes, contenu visible
// par défaut (GSAP part de l'état final en reduced-motion : rien n'est animé).
const EASE = "expo.out";
let mm: gsap.MatchMedia | undefined;

export function initGsapReveal() {
  mm?.revert();
  mm = gsap.matchMedia();

  mm.add("(prefers-reduced-motion: no-preference)", () => {
    const once = (trigger: Element, start = "top 88%") => ({ trigger, start, once: true });

    // Blocs génériques (API historique conservée : data-animation, data-delay…)
    document.querySelectorAll<HTMLElement>(".gsap-reveal").forEach((el) => {
      const animation = el.dataset.animation || "fadeUp";
      const delay = parseFloat(el.dataset.delay || "0");
      const stagger = parseFloat(el.dataset.stagger || "0");
      const base = { duration: 1.2, delay, ease: EASE, scrollTrigger: once(el) };

      if (stagger > 0 && el.children.length) {
        gsap.from(el.children, { ...base, y: 24, opacity: 0, stagger });
        return;
      }
      if (animation === "clipReveal") {
        gsap.from(el, { ...base, duration: 1.4, clipPath: "inset(0 0 100% 0)" });
      } else if (animation === "fadeIn") {
        gsap.from(el, { ...base, opacity: 0 });
      } else {
        gsap.from(el, { ...base, y: 24, opacity: 0 });
      }
    });

    document.querySelectorAll(".gsap-stagger-cards").forEach((container) => {
      if (!container.children.length) return;
      gsap.from(container.children, {
        y: 28,
        opacity: 0,
        duration: 1.2,
        stagger: 0.08,
        ease: EASE,
        scrollTrigger: once(container),
      });
    });

    // Titres : chaque ligne monte dans son masque.
    document.querySelectorAll<HTMLElement>("[data-split]").forEach((el) => {
      const split = SplitText.create(el, { type: "lines", mask: "lines", linesClass: "split-line" });
      gsap.from(split.lines, {
        yPercent: 105,
        duration: 1.3,
        stagger: 0.07,
        ease: EASE,
        delay: parseFloat(el.dataset.delay || "0"),
        scrollTrigger: once(el, "top 92%"),
      });
      return () => split.revert();
    });

    // Photo qui se dévoile de bas en haut, avec un léger dézoom.
    document.querySelectorAll<HTMLElement>("[data-photo-reveal]").forEach((el) => {
      const media = el.querySelector("img, video");
      const tl = gsap.timeline({ scrollTrigger: once(el, "top 90%") });
      tl.from(el, { clipPath: "inset(100% 0 0 0)", duration: 1.5, ease: "expo.inOut" });
      if (media) tl.from(media, { scale: 1.15, duration: 2, ease: EASE }, 0.1);
    });

    // Signature : la bande photo/vidéo s'élargit jusqu'au plein écran au scroll.
    document.querySelectorAll<HTMLElement>("[data-clip-grow]").forEach((el) => {
      // --gutter est un clamp() : on lit la valeur résolue en px sur un .wrap pour que GSAP puisse interpoler.
      const wrap = document.querySelector(".wrap");
      const inset = `${wrap ? parseFloat(getComputedStyle(wrap).paddingLeft) : 40}px`;
      gsap.fromTo(
        el,
        { clipPath: `inset(0 ${inset} 0 ${inset})` },
        {
          clipPath: "inset(0 0px 0 0px)",
          ease: "none",
          scrollTrigger: { trigger: el, start: "top 85%", end: "top 15%", scrub: 0.6 },
        },
      );
    });

    // Léger décalage vertical des photos larges.
    document.querySelectorAll<HTMLElement>("[data-parallax]").forEach((el) => {
      const media = el.querySelector("img, video");
      if (!media) return;
      gsap.fromTo(
        media,
        { yPercent: -6, scale: 1.12 },
        { yPercent: 6, scale: 1.12, ease: "none", scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true } },
      );
    });
  });

  initFollowPreview();
}

// Index en lignes : une photo suit le curseur au survol (pointeur fin uniquement).
function initFollowPreview() {
  if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
  document.querySelectorAll<HTMLElement>("[data-follow]").forEach((list) => {
    if (list.dataset.followReady) return;
    list.dataset.followReady = "1";
    const box = list.querySelector<HTMLElement>(".follow-box");
    if (!box) return;
    const yTo = gsap.quickTo(box, "y", { duration: 0.7, ease: "power3.out" });
    const imgs = box.querySelectorAll<HTMLElement>("[data-key]");

    list.addEventListener("pointermove", (e) => {
      const r = list.getBoundingClientRect();
      yTo(e.clientY - r.top);
    });
    list.querySelectorAll<HTMLElement>("[data-preview]").forEach((row) => {
      row.addEventListener("pointerenter", () => {
        imgs.forEach((img) => img.classList.toggle("is-on", img.dataset.key === row.dataset.preview));
        box.classList.add("is-on");
      });
    });
    list.addEventListener("pointerleave", () => box.classList.remove("is-on"));
  });
}

// Conservé pour compatibilité : les compteurs affichent directement leur valeur.
export function initCountUp() {}

export { gsap, ScrollTrigger };
