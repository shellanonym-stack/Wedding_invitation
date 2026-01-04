import React from 'react';
import '../styles/Couple.css';
import { Heart } from 'lucide-react';
import floralDivider from '../assets/gambar/floral-divider.png';

const Couple = () => {
    const handleImageError = (e, fallbackUrl) => {
        e.target.src = fallbackUrl;
    };

    return (
        <section className="section couple-section" id="couple">
            <div className="container">
                <div className="header-wrapper">
                    <img src={floralDivider} alt="" className="section-floral-divider" />
                    <h2 className="section-title">Wedding</h2>
                    <Heart className="heart-icon" fill="var(--accent-gold)" color="var(--accent-gold)" />
                </div>

                <div className="couple-grid">
                    <div className="couple-card groom">
                        <div className="image-frame">
                            <img
                                src="src/assets/gambar/groom.jpg"
                                alt="Groom"
                                onError={(e) => handleImageError(e, "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80")}
                            />
                        </div>
                        <h3>Edo Irawan</h3>
                        <p className="role">Mempelai Pria</p>
                        <p className="parents">Putra dari Bapak. Esanudin (Alm) & Ibu. Juarsih </p>
                    </div>

                    <div className="couple-divider">
                        <span className="ampersand">&</span>
                    </div>

                    <div className="couple-card bride">
                        <div className="image-frame">
                            <img
                                src="src/assets/gambar/bride.jpg"
                                alt="Bride"
                                onError={(e) => handleImageError(e, "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80")}
                            />
                        </div>
                        <h3>S Qhori Rafni Rivani</h3>
                        <p className="role">Mempelai Wanita</p>
                        <p className="parents">Putri dari Bapak. Idi Suganda & Ibu. Neneng Rosyidah </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Couple;
