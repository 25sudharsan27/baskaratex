gsap.registerPlugin(ScrollTrigger);

        function animateOnScroll() {
            const experiencesElements = document.querySelectorAll('.experiences');
            const headingElements = document.querySelectorAll('.heading');

            const customEase = Power1.easeOut; 

            experiencesElements.forEach((el) => {
                gsap.fromTo(
                    el,
                    {
                        opacity: 0,
                        y: 50, 
                        scale: 0.9, 
                    },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 0.2, 
                        ease: customEase, 
                        scrollTrigger: {
                            trigger: el,
                            start: 'top 80%', 
                            end: 'bottom 20%', 
                            toggleActions: 'play none none reverse',
                        },
                    }
                );
            });

            headingElements.forEach((el) => {
                gsap.fromTo(
                    el,
                    {
                        opacity: 0,
                        y: 50, 
                    },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1, 
                        ease: customEase, 
                        scrollTrigger: {
                            trigger: el,
                            start: 'top 80%', 
                            end: 'bottom 20%', 
                            toggleActions: 'play none none reverse',
                        },
                    }
                );
            });
        }

        window.addEventListener('load', animateOnScroll); 

        animateOnScroll();

        const balls = document.querySelectorAll('.ball1, .ball2, .ball3, .ball4, .ball5');
        
        balls.forEach((ball, index) => {
            const duration = Math.random() * 15 + 5; 
            const delay = Math.random() * 10; 
            ball.style.animationDuration = `${duration}s`;
            ball.style.animationDelay = `${delay}s`;
        });