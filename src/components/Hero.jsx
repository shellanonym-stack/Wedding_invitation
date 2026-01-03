import React, { useEffect, useState } from 'react';
import '../styles/Hero.css';
import FloralDecoration from './FloralDecoration';

const Hero = () => {
    const [offset, setOffset] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
        const handleScroll = () => {
            setOffset(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className="hero" id="home">
            <FloralDecoration position="top-left" className="large" />
            <FloralDecoration position="top-right" className="large" />

            <div
                className="hero-background"
                style={{ transform: `translateY(${offset * 0.5}px)` }}
            >
                {/* Background image - replace with local image */}
                <img
                    src="/assets/gambar/hero-bg.jpg"
                    alt="Wedding Background"
                    onError={(e) => {
                        e.target.src = "https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80";
                    }}
                />
                <div className="overlay"></div>
            </div>

            <div className={`hero-content ${isLoaded ? 'loaded' : ''}`}>
                <div className="bismillah animate-up">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</div>
                <p className="save-the-date animate-up delay-1">The Wedding of</p>
                <h1 className="couple-names animate-up delay-2">Edo Irawan <p> & </p> Siti Markonah</h1>
                <div className="date-badge animate-up delay-3">
                    <span className="date-day">31</span>
                    <div className="date-details">
                        <span className="date-month">Februari</span>
                        <span className="date-year">2026</span>
                    </div>
                </div>
                <div className="scroll-indicator animate-bounce">
                    <div className="mouse">
                        <div className="wheel"></div>
                    </div>
                    <span>Scroll Down</span>
                </div>
            </div>

            <FloralDecoration position="bottom-left" className="small" />
            <FloralDecoration position="bottom-right" className="small" />
        </section>
    );
};

export default Hero;
