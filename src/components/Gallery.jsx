import React, { useState, useEffect, useRef } from 'react';
import '../styles/Gallery.css';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import floralDivider from '../assets/gambar/floral-divider.png';

// Using local images - place your images in assets/gambar folder
const photos = [
    { id: 1, src: 'src/assets/gambar/gallery1.jpg', alt: 'Moment 1' },
    { id: 2, src: 'src/assets/gambar/gallery2.jpg', alt: 'Moment 2' },
    { id: 3, src: 'src/assets/gambar/gallery3.jpg', alt: 'Moment 3' },
    { id: 5, src: 'src/assets/gambar/gallery5.jpg', alt: 'Moment 5' },
];

const Gallery = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);
    const sliderRef = useRef(null);
    const autoPlayRef = useRef(null);

    // Auto-play slider
    useEffect(() => {
        autoPlayRef.current = setInterval(() => {
            if (!lightboxOpen) {
                nextSlide();
            }
        }, 4000);

        return () => {
            if (autoPlayRef.current) {
                clearInterval(autoPlayRef.current);
            }
        };
    }, [lightboxOpen]);

    const nextSlide = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentIndex((prev) => (prev + 1) % photos.length);
        setTimeout(() => setIsAnimating(false), 600);
    };

    const prevSlide = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
        setTimeout(() => setIsAnimating(false), 600);
    };

    const goToSlide = (index) => {
        if (isAnimating || index === currentIndex) return;
        setIsAnimating(true);
        setCurrentIndex(index);
        setTimeout(() => setIsAnimating(false), 600);
    };

    const openLightbox = (index) => {
        setLightboxIndex(index);
        setLightboxOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
        document.body.style.overflow = '';
    };

    const lightboxNext = () => {
        setLightboxIndex((prev) => (prev + 1) % photos.length);
    };

    const lightboxPrev = () => {
        setLightboxIndex((prev) => (prev - 1 + photos.length) % photos.length);
    };

    return (
        <section className="section gallery-section" id="gallery">
            <div className="container">
                <img src={floralDivider} alt="" className="section-floral-divider" />
                <h2 className="section-title">Our Moments</h2>
                <p className="section-subtitle">Precious memories we cherish together</p>

                {/* Main Slider */}
                <div className="gallery-slider-container" ref={sliderRef}>
                    <button
                        className="slider-nav-btn prev"
                        onClick={prevSlide}
                        aria-label="Previous slide"
                    >
                        <ChevronLeft size={28} />
                    </button>

                    <div className="slider-viewport">
                        <div
                            className="slider-track"
                            style={{
                                transform: `translateX(-${currentIndex * 100}%)`,
                            }}
                        >
                            {photos.map((photo, index) => (
                                <div
                                    className={`slider-slide ${index === currentIndex ? 'active' : ''}`}
                                    key={photo.id}
                                    onClick={() => openLightbox(index)}
                                >
                                    <div className="slide-inner">
                                        <img
                                            src={photo.src}
                                            alt={photo.alt}
                                            loading="lazy"
                                        />
                                        <div className="slide-overlay">
                                            <span>Click to view</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        className="slider-nav-btn next"
                        onClick={nextSlide}
                        aria-label="Next slide"
                    >
                        <ChevronRight size={28} />
                    </button>
                </div>

                {/* Dot Indicators */}
                <div className="slider-dots">
                    {photos.map((_, index) => (
                        <button
                            key={index}
                            className={`dot ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => goToSlide(index)}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>

                {/* Thumbnail Preview */}
                <div className="thumbnail-strip">
                    {photos.map((photo, index) => (
                        <button
                            key={photo.id}
                            className={`thumbnail ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => goToSlide(index)}
                        >
                            <img
                                src={photo.src}
                                alt={photo.alt}
                            />
                        </button>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            {lightboxOpen && (
                <div className="lightbox" onClick={closeLightbox}>
                    <button className="lightbox-close" onClick={closeLightbox}>
                        <X size={32} />
                    </button>
                    <button
                        className="lightbox-nav prev"
                        onClick={(e) => { e.stopPropagation(); lightboxPrev(); }}
                    >
                        <ChevronLeft size={40} />
                    </button>
                    <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                        <img
                            src={photos[lightboxIndex].src}
                            alt={photos[lightboxIndex]?.alt}
                            className="lightbox-image"
                        />
                        <div className="lightbox-counter">
                            {lightboxIndex + 1} / {photos.length}
                        </div>
                    </div>
                    <button
                        className="lightbox-nav next"
                        onClick={(e) => { e.stopPropagation(); lightboxNext(); }}
                    >
                        <ChevronRight size={40} />
                    </button>
                </div>
            )}
        </section>
    );
};

export default Gallery;
