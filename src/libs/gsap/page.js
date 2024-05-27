import { gsap } from "gsap";

export const HeroTextAniamtion = (element) => {
    const tl = gsap.timeline();
    gsap.fromTo(
        element, {
        opacity: 0,
        y: 100,
    },
        {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scale: 1.05
        }
    )
}

export const NavAnimation = (element) => {
    gsap.fromTo(
        element, {
        opacity: 0,
        y: -50,
    },
        {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
        }
    )
}

export const CardAnimation = (element) => {
    gsap.fromTo(
        element,
        {
            opacity: 0,
            scale: 0.8
        },
        {
            delay: 0.3,
            opacity: 1,
            duration: 0.4,
            scale: 1,
        }
    )
}

export const PjCardAnimation = (element) => {
    gsap.fromTo(
        element,
        {
            opacity: 0,
            scale: 0.8
        },
        {
            delay: 0.3,
            opacity: 1,
            duration: 0.4,
            scale: 1,
        }
    )
}

export const AbCardAnimation = (element) => {
    gsap.fromTo(
        element,
        {
            opacity: 0,
            scale: 0.8
        },
        {
            delay: 0.3,
            opacity: 1,
            duration: 0.4,
            scale: 1,
        }
    )
}