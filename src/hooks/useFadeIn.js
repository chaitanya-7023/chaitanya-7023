import { useEffect, useRef } from 'react';

const useFadeIn = (options = { threshold: 0.15 }) => {
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('appear');
                    obs.unobserve(entry.target);
                }
            });
        }, options);

        const currentRef = ref.current;
        
        if (currentRef) {
            // Also observe children that have animation classes if this is a container
            const animatedChildren = currentRef.querySelectorAll('.fade-in, .slide-up');
            if (animatedChildren.length > 0) {
                animatedChildren.forEach(child => observer.observe(child));
            } else {
                observer.observe(currentRef);
            }
        }

        return () => {
            if (currentRef) {
                const animatedChildren = currentRef.querySelectorAll('.fade-in, .slide-up');
                if (animatedChildren.length > 0) {
                    animatedChildren.forEach(child => observer.unobserve(child));
                } else {
                    observer.unobserve(currentRef);
                }
            }
        };
    }, [options.threshold]);

    return ref;
};

export default useFadeIn;
