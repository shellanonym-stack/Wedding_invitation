import React, { useState, useEffect } from 'react';
import '../styles/DateSection.css';
import { Calendar, Clock, Heart } from 'lucide-react';
import floralDivider from '../assets/gambar/floral-divider.png';
import FloralDecoration from './FloralDecoration';

const DateSection = () => {
    const calculateTimeLeft = () => {
        // Set target date to January 25, 2026 08:00:00
        const weddingDate = new Date("2026-01-25T08:00:00");
        const difference = weddingDate - new Date();

        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const formatNumber = (num) => {
        return num !== undefined ? num.toString().padStart(2, '0') : '00';
    };

    const addToGoogleCalendar = () => {
        const startDate = '20260125T080000';
        const endDate = '20260125T150000';
        const title = encodeURIComponent('Pernikahan Romeo & Juliet');
        const location = encodeURIComponent('Grand Ballroom Hotel, Jl. Sudirman No. 123, Jakarta Selatan');
        const details = encodeURIComponent('Kami mengundang Anda untuk merayakan pernikahan kami.');

        const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startDate}/${endDate}&details=${details}&location=${location}`;
        window.open(url, '_blank');
    };

    return (
        <section className="section date-section" id="date">
            <FloralDecoration position="top-right" className="small" />
            <FloralDecoration position="bottom-left" className="small" />

            <div className="container">
                <div className="date-content">
                    <img src={floralDivider} alt="" className="section-floral-divider" />
                    <h2 className="section-title">Save The Date</h2>
                    <p className="section-subtitle">Kami mengundang Anda untuk berbagi kebahagiaan kami</p>

                    <div className="date-display">
                        <div className="date-item">
                            <Calendar className="icon" />
                            <div className="date-text">
                                <span className="date-day-name">Minggu</span>
                                <span className="date-full">25 Januari 2026</span>
                            </div>
                        </div>
                        <div className="date-separator">
                            <Heart size={20} fill="var(--accent-gold)" color="var(--accent-gold)" />
                        </div>
                        <div className="date-item">
                            <Clock className="icon" />
                            <div className="date-text">
                                <span className="date-day-name">Pukul</span>
                                <span className="date-full">08:00 WIB - Selesai</span>
                            </div>
                        </div>
                    </div>

                    <div className="countdown-timer">
                        <div className="time-box">
                            <span className="time-value">{formatNumber(timeLeft.days)}</span>
                            <span className="time-label">Hari</span>
                        </div>
                        <div className="time-separator">:</div>
                        <div className="time-box">
                            <span className="time-value">{formatNumber(timeLeft.hours)}</span>
                            <span className="time-label">Jam</span>
                        </div>
                        <div className="time-separator">:</div>
                        <div className="time-box">
                            <span className="time-value">{formatNumber(timeLeft.minutes)}</span>
                            <span className="time-label">Menit</span>
                        </div>
                        <div className="time-separator">:</div>
                        <div className="time-box">
                            <span className="time-value">{formatNumber(timeLeft.seconds)}</span>
                            <span className="time-label">Detik</span>
                        </div>
                    </div>

                    <div className="add-to-calendar">
                        <button className="btn-primary" onClick={addToGoogleCalendar}>
                            <Calendar size={18} />
                            Tambah ke Google Calendar
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DateSection;
