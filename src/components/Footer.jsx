import React from 'react';
import '../styles/Footer.css';
import { Heart } from 'lucide-react';
import floralDivider from '../assets/gambar/floral-divider.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <img src={floralDivider} alt="" className="footer-floral" />
                <p className="thank-you">Terima Kasih</p>
                <p className="couple-script">Edo Irawan & S Qhori Rafni Rivani</p>
                <div className="footer-quote">
                    <p>"Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu pasangan hidup dari jenismu sendiri, supaya kamu merasa tenteram kepadanya, dan dijadikan-Nya di antaramu rasa kasih dan sayang."</p>
                    <span className="quote-source">— Q.S. Ar-Rum: 21</span>
                </div>
                <p className="footer-message">
                    Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir memberikan doa restu
                </p>
                <div className="footer-hearts">
                    <Heart fill="var(--accent-gold)" color="var(--accent-gold)" size={16} />
                    <Heart fill="var(--accent-gold)" color="var(--accent-gold)" size={20} />
                    <Heart fill="var(--accent-gold)" color="var(--accent-gold)" size={16} />
                </div>
                <p className="copyright">© 2026 Agung.</p>
            </div>
        </footer>
    );
};

export default Footer;
