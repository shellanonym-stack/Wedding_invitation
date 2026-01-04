import React, { useState, useEffect } from 'react';
import '../styles/OpeningModal.css';
import '../styles/FloralDecoration.css'; // Re-use floral styles if needed
import floralImg from '../assets/gambar/floral-corner.png'; // Re-use existing asset

const OpeningModal = ({ onOpen }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [guestName, setGuestName] = useState('Di Tempat');

    useEffect(() => {
        // Get guest name from URL parameter "?to=Name"
        const params = new URLSearchParams(window.location.search);
        const to = params.get('to');
        if (to) {
            setGuestName(to);
        }

        // Prevent scrolling when modal is open
        document.body.style.overflow = 'hidden';
    }, []);

    const handleOpen = () => {
        setIsOpen(true);
        // Enable scrolling again
        document.body.style.overflow = 'auto';
        // Trigger parent callback (e.g. play music)
        if (onOpen) onOpen();
    };

    if (isOpen) return null; // Or keep it in DOM with class "closed" for exit animation

    return (
        <div className={`opening-modal ${isOpen ? 'closed' : ''}`}>
            <div className="modal-bg">
                {/* Use the same hero bg or specific cover bg */}
                <img
                    src="src/assets/gambar/hero-bg.png"
                    alt="Cover Background"
                    onError={(e) => {
                        e.target.src = "https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80";
                    }}
                />
            </div>

            <div className="floral-decoration top-left large" style={{ opacity: 0.8 }}>
                <img src={floralImg} alt="" />
            </div>
            <div className="floral-decoration bottom-right large" style={{ transform: 'rotate(180deg)', opacity: 0.8 }}>
                <img src={floralImg} alt="" />
            </div>

            <div className="modal-content">
                <div className="opening-title">The Wedding of</div>
                <h1 className="opening-couple">Edo Irawan <p>&</p>S Qhori Rafni Rivani</h1>

                <div className="guest-info">
                    <div className="guest-label">Kepada Yth. Bapak/Ibu/Saudara/i Tamu Undangan</div>
                    <div className="guest-name">{guestName}</div>
                    <div className="guest-label" style={{ fontSize: '0.8rem', fontStyle: 'italic' }}>
                        Mohon maaf apabila ada kesalahan penulisan
                    </div>
                </div>

                <button className="btn-open" onClick={handleOpen}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" />
                    </svg>
                    Buka Undangan
                </button>
            </div>
        </div>
    );
};

export default OpeningModal;
