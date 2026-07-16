// GSAP ScrollTrigger and Modern Interactive UI Orchestration

document.addEventListener("DOMContentLoaded", () => {
    
    // Register GSAP Plugin
    gsap.registerPlugin(ScrollTrigger);

    // 1. DYNAMIC CUSTOM CURSOR ENGINE
    const cursor = document.querySelector(".custom-cursor");
    const cursorDot = document.querySelector(".custom-cursor-dot");
    
    document.addEventListener("mousemove", (e) => {
        gsap.to(cursor, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.15,
            ease: "power2.out"
        });
        
        gsap.to(cursorDot, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.05
        });
    });

    // Cursor Hover States
    const interactiveElements = document.querySelectorAll("a, button, .bento-card");
    interactiveElements.forEach(el => {
        el.addEventListener("mouseenter", () => {
            document.body.classList.add("hover-interactive");
        });
        el.addEventListener("mouseleave", () => {
            document.body.classList.remove("hover-interactive");
        });
    });

    // 2. HERO PAGE LOAD TRANSITION ORCHESTRATION
    const heroTimeline = gsap.timeline({ defaults: { ease: "power4.out" } });
    
    heroTimeline
        .from(".navbar", {
            y: -50,
            opacity: 0,
            duration: 1.2
        })
        .from(".reveal-item", {
            y: 50,
            opacity: 0,
            duration: 1.4,
            stagger: 0.15
        }, "-=0.8")
        .from(".hero-preview-container", {
            scale: 0.95,
            opacity: 0,
            duration: 1.5,
            boxShadow: "0 0px 0px rgba(0,0,0,0)"
        }, "-=1.2");

    // 3. ADVANCED MAGNETIC BUTTON EFFECT
    const magneticBtns = document.querySelectorAll(".magnetic-btn");
    magneticBtns.forEach(btn => {
        btn.addEventListener("mousemove", (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - (rect.width / 2);
            const y = e.clientY - rect.top - (rect.height / 2);
            
            gsap.to(btn, {
                x: x * 0.35,
                y: y * 0.35,
                scale: 1.05,
                duration: 0.3,
                ease: "power2.out"
            });
        });

        btn.addEventListener("mouseleave", () => {
            gsap.to(btn, {
                x: 0,
                y: 0,
                scale: 1,
                duration: 0.5,
                ease: "elastic.out(1, 0.3)"
            });
        });
    });

    // 4. BENTO CARDS SCROLL TRIGGER & MOUSE-TRACKING GLOW
    const bentoCards = document.querySelectorAll(".bento-card");
    
    // Bento entrance scroll triggers
    gsap.from(".bento-reveal", {
        scrollTrigger: {
            trigger: ".bento-grid",
            start: "top 75%",
            toggleActions: "play none none none"
        },
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out"
    });

    // Dynamic mouse position tracking for Card Glow Effect
    bentoCards.forEach(card => {
        card.addEventListener("mousemove", (e) => {
            const rect = card.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            
            card.style.setProperty("--mouse-x", `${x}%`);
            card.style.setProperty("--mouse-y", `${y}%`);
        });
    });

    // 5. TIMELINE WORKFLOW SCROLL-TRIGGER
    gsap.from(".step-reveal", {
        scrollTrigger: {
            trigger: ".timeline-container",
            start: "top 80%",
            toggleActions: "play none none none"
        },
        x: -40,
        opacity: 0,
        duration: 1,
        stagger: 0.25,
        ease: "power2.out"
    });
});
