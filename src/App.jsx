import { useEffect, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import MobileNav from './components/MobileNav.jsx';
import BottomNav from './components/BottomNav.jsx';
import WhatsAppFab from './components/WhatsAppFab.jsx';
import Hero from './sections/Hero.jsx';
import History from './sections/History.jsx';
import Parrilla from './sections/Parrilla.jsx';
import Local from './sections/Local.jsx';
import Testimonials from './sections/Testimonials.jsx';
import CTA from './sections/CTA.jsx';
import Footer from './sections/Footer.jsx';

export default function App() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');

    useEffect(() => {
        const sections = document.querySelectorAll('section[id]');

        const updateActiveLink = () => {
            let current = 'hero';

            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                if (window.pageYOffset >= sectionTop - 200) {
                    current = section.getAttribute('id') || current;
                }
            });

            setActiveSection(current);
        };

        window.addEventListener('scroll', updateActiveLink, { passive: true });
        updateActiveLink();

        return () => window.removeEventListener('scroll', updateActiveLink);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries, instance) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        instance.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15 },
        );

        document.querySelectorAll('.reveal, .reveal-line, .testimonial-card').forEach((element) => observer.observe(element));

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const initCarousel = (id, progressId) => {
            const container = document.getElementById(id);
            if (!container) return () => { };

            const track = container.querySelector('.carousel-track');
            const slides = container.querySelectorAll('.carousel-slide');
            const progressBar = document.getElementById(progressId);
            const suffix = id.split('-')[1];
            const nextBtn = document.getElementById(`next-${suffix}`);
            const prevBtn = document.getElementById(`prev-${suffix}`);
            let currentIndex = 0;

            const update = () => {
                if (!track || slides.length === 0) return;

                const slideWidth = slides[0].offsetWidth + 48;
                track.style.transform = `translateX(${-currentIndex * slideWidth}px)`;

                slides.forEach((slide, index) => {
                    slide.classList.remove('active');
                    if (index === currentIndex) slide.classList.add('active');
                });

                if (progressBar) {
                    progressBar.style.width = `${((currentIndex + 1) / slides.length) * 100}%`;
                }
            };

            const next = () => {
                currentIndex = (currentIndex + 1) % slides.length;
                update();
            };

            const prev = () => {
                currentIndex = (currentIndex - 1 + slides.length) % slides.length;
                update();
            };

            nextBtn?.addEventListener('click', next);
            prevBtn?.addEventListener('click', prev);

            let startX = 0;

            const onTouchStart = (event) => {
                startX = event.touches[0].clientX;
            };

            const onTouchEnd = (event) => {
                const endX = event.changedTouches[0].clientX;
                if (startX - endX > 50) next();
                if (startX - endX < -50) prev();
            };

            container.addEventListener('touchstart', onTouchStart);
            container.addEventListener('touchend', onTouchEnd);
            update();

            return () => {
                nextBtn?.removeEventListener('click', next);
                prevBtn?.removeEventListener('click', prev);
                container.removeEventListener('touchstart', onTouchStart);
                container.removeEventListener('touchend', onTouchEnd);
            };
        };

        const cleanupParrilla = initCarousel('carousel-parrilla', 'progress-parrilla');
        const cleanupMenu = initCarousel('carousel-menu', 'progress-menu');

        return () => {
            cleanupParrilla();
            cleanupMenu();
        };
    }, []);

    const scrollToId = (id) => {
        const target = document.getElementById(id);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleNavigate = (event) => {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute('href')?.slice(1);
        if (targetId) {
            scrollToId(targetId);
        }
        setMobileOpen(false);
    };

    return (
        <div className="app-shell">
            <Navbar
                activeSection={activeSection}
                mobileOpen={mobileOpen}
                onToggleMobile={() => setMobileOpen((value) => !value)}
                onNavigate={handleNavigate}
            />
            <MobileNav open={mobileOpen} onNavigate={handleNavigate} />
            <main>
                <Hero onNavigate={scrollToId} />
                <History />
                <Parrilla />
                <Local />
                <Testimonials />
                <CTA />
            </main>
            <Footer />
            <BottomNav activeSection={activeSection} onNavigate={handleNavigate} />
            <WhatsAppFab />
        </div>
    );
}
