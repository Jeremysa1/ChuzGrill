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
        const sections = document.querySelectorAll('section[id], footer[id]');

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
            <Footer onNavigate={handleNavigate} />
            <BottomNav activeSection={activeSection} onNavigate={handleNavigate} />
            <WhatsAppFab />
        </div>
    );
}
