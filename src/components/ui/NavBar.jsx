import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Lenis from "@studio-freight/lenis";

import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function NavBar({ sectionRefs }) {
  const navBar = useRef(null);
  const logo = useRef(null);
  const cta = useRef(null);
  const tl = gsap.timeline();
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  });

  useEffect(() => {
    tl.to(navBar.current, {
      y: 0,
      duration: 3,
      delay: 0.5,
      ease: "power4.inOut",
    });
  });


  useEffect(() => {
    sectionRefs.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top 375px",
        end: "bottom 300px",
        // markers: true,
        animation: gsap
          .timeline()
          .to(navBar.current, { color: "#DDDDD5" })
          .to(cta.current, { backgroundColor: "#D1D1C7", color: "#0E0E0C" }, 0)
          .to(".bg-secondary-100", { backgroundColor: "#0E0E0C" }, 0),

        toggleActions: "restart reverse restart reverse",
      });
    });

  });

  return (
    <header
      ref={navBar}
      className="fixed top-0 z-50 flex w-full -translate-y-full items-center justify-between bg-secondary-100 px-5 py-3"
    >
      {/* logo */}
      <a href="#hero" aria-label="Logo" className="z-50">
        <svg
          ref={logo}
          width="80"
          height="45"
          viewBox="0 0 121 45"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
           <defs>
        <g />
        <clipPath id="850a3d3fee">
            <path d="M 0.210938 7 L 20 7 L 20 30 L 0.210938 30 Z M 0.210938 7 " />
        </clipPath>
    </defs>
    <g >
        <g     fill="currentColor">
            <g transform="translate(-0.775263, 28.832607)">
                <g>
                    <path
                        d="M 16.46875 0 L 15.359375 -2.875 L 15.203125 -2.875 C 14.234375 -1.65625 13.234375 -0.804688 12.203125 -0.328125 C 11.171875 0.140625 9.832031 0.375 8.1875 0.375 C 6.144531 0.375 4.539062 -0.203125 3.375 -1.359375 C 2.207031 -2.523438 1.625 -4.179688 1.625 -6.328125 C 1.625 -8.578125 2.410156 -10.234375 3.984375 -11.296875 C 5.554688 -12.359375 7.925781 -12.945312 11.09375 -13.0625 L 14.765625 -13.171875 L 14.765625 -14.109375 C 14.765625 -16.253906 13.664062 -17.328125 11.46875 -17.328125 C 9.78125 -17.328125 7.796875 -16.816406 5.515625 -15.796875 L 3.59375 -19.6875 C 6.03125 -20.96875 8.734375 -21.609375 11.703125 -21.609375 C 14.546875 -21.609375 16.722656 -20.988281 18.234375 -19.75 C 19.753906 -18.507812 20.515625 -16.628906 20.515625 -14.109375 L 20.515625 0 Z M 14.765625 -9.8125 L 12.53125 -9.734375 C 10.851562 -9.679688 9.601562 -9.375 8.78125 -8.8125 C 7.96875 -8.257812 7.5625 -7.414062 7.5625 -6.28125 C 7.5625 -4.65625 8.492188 -3.84375 10.359375 -3.84375 C 11.691406 -3.84375 12.757812 -4.226562 13.5625 -5 C 14.363281 -5.769531 14.765625 -6.789062 14.765625 -8.0625 Z M 14.765625 -9.8125 " />
                </g>
            </g>
        </g>
    </g>
    <g     fill="currentColor">
        <g transform="translate(22.647063, 28.832607)">
            <g>
                <path
                    d="M 22.578125 0 L 16.796875 0 L 16.796875 -12.359375 C 16.796875 -13.890625 16.523438 -15.035156 15.984375 -15.796875 C 15.441406 -16.566406 14.578125 -16.953125 13.390625 -16.953125 C 11.773438 -16.953125 10.609375 -16.410156 9.890625 -15.328125 C 9.171875 -14.242188 8.8125 -12.453125 8.8125 -9.953125 L 8.8125 0 L 3.03125 0 L 3.03125 -21.171875 L 7.4375 -21.171875 L 8.21875 -18.46875 L 8.546875 -18.46875 C 9.179688 -19.488281 10.0625 -20.257812 11.1875 -20.78125 C 12.320312 -21.300781 13.609375 -21.5625 15.046875 -21.5625 C 17.515625 -21.5625 19.382812 -20.894531 20.65625 -19.5625 C 21.9375 -18.238281 22.578125 -16.316406 22.578125 -13.796875 Z M 22.578125 0 " />
            </g>
        </g>
    </g>
    <g     fill="currentColor">
        <g transform="translate(48.13328, 28.832607)">
            <g>
                <path
                    d="M 9.734375 0.375 C 7.242188 0.375 5.285156 -0.585938 3.859375 -2.515625 C 2.441406 -4.453125 1.734375 -7.128906 1.734375 -10.546875 C 1.734375 -14.015625 2.457031 -16.71875 3.90625 -18.65625 C 5.351562 -20.59375 7.347656 -21.5625 9.890625 -21.5625 C 12.546875 -21.5625 14.578125 -20.53125 15.984375 -18.46875 L 16.171875 -18.46875 C 15.878906 -20.039062 15.734375 -21.445312 15.734375 -22.6875 L 15.734375 -29.46875 L 21.53125 -29.46875 L 21.53125 0 L 17.09375 0 L 15.984375 -2.75 L 15.734375 -2.75 C 14.421875 -0.664062 12.421875 0.375 9.734375 0.375 Z M 11.765625 -4.21875 C 13.234375 -4.21875 14.3125 -4.644531 15 -5.5 C 15.6875 -6.363281 16.066406 -7.828125 16.140625 -9.890625 L 16.140625 -10.515625 C 16.140625 -12.785156 15.785156 -14.410156 15.078125 -15.390625 C 14.378906 -16.378906 13.242188 -16.875 11.671875 -16.875 C 10.378906 -16.875 9.375 -16.328125 8.65625 -15.234375 C 7.945312 -14.140625 7.59375 -12.550781 7.59375 -10.46875 C 7.59375 -8.382812 7.953125 -6.820312 8.671875 -5.78125 C 9.390625 -4.738281 10.421875 -4.21875 11.765625 -4.21875 Z M 11.765625 -4.21875 " />
            </g>
        </g>
    </g>
    <g     fill="currentColor">
        <g transform="translate(72.672758, 28.832607)">
            <g>
                <path
                    d="M 14.84375 -21.5625 C 15.625 -21.5625 16.273438 -21.503906 16.796875 -21.390625 L 16.359375 -15.984375 C 15.890625 -16.109375 15.320312 -16.171875 14.65625 -16.171875 C 12.8125 -16.171875 11.375 -15.695312 10.34375 -14.75 C 9.320312 -13.800781 8.8125 -12.476562 8.8125 -10.78125 L 8.8125 0 L 3.03125 0 L 3.03125 -21.171875 L 7.40625 -21.171875 L 8.25 -17.609375 L 8.546875 -17.609375 C 9.203125 -18.796875 10.085938 -19.75 11.203125 -20.46875 C 12.316406 -21.195312 13.53125 -21.5625 14.84375 -21.5625 Z M 14.84375 -21.5625 " />
            </g>
        </g>
    </g>
        </svg>
      </a>
      <nav className=" space-x-7 font-grotesk text-body-3 sm:block">
        <a href="#about" className="group relative hidden md:inline-block">
          <span>about</span>
          <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
        </a>
        <a href="#services" className="group relative hidden md:inline-block">
          <span>services</span>
          <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
        </a>
        <a href="#works" className="group relative hidden md:inline-block">
          <span>projects</span>
          <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
        </a>
        <a
          ref={cta}
          className="button group relative hover:bg-transparent"
          href="#contact"
        >
          <span className="relative w-fit">
            <span className="absolute bottom-2 h-[0.15em] w-0 bg-secondary-700 opacity-90 duration-300 ease-out group-hover:w-full"></span>
            <span>Let&apos;s Talk.</span>
          </span>
        </a>
      </nav>
    </header>
  );
}
