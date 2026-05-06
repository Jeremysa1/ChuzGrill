import { useEffect, useState } from 'react';

export default function AnimatedTitle({ id, text }) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timer = window.setTimeout(() => setVisible(true), 100);
        return () => window.clearTimeout(timer);
    }, []);

    return (
        <h2 className="hero-title" id={id} aria-label={text}>
            {text.split('').map((char, index) => (
                <span
                    key={`${id}-${index}`}
                    style={{
                        opacity: visible ? 1 : 0,
                        transform: visible ? 'translateY(0)' : 'translateY(30px)',
                        transition: `all 0.6s var(--ease-bounce) ${index * 50}ms`,
                    }}
                >
                    {char === ' ' ? '\u00A0' : char}
                </span>
            ))}
        </h2>
    );
}
