import React, { useState } from 'react';
import '../styles/RSVP.css';
import { Send, CheckCircle, Mail, User, Users, MessageSquare } from 'lucide-react';
import floralDivider from '../assets/gambar/floral-divider.png';

// GANTI EMAIL_ADDRESS dengan email tujuan RSVP
const EMAIL_ADDRESS = 'edoirawwan0108@gmail.com';
const COUPLE_NAMES = 'Edo Irawan & S Qhori Rafni Rivani';

const RSVP = () => {
    const [formData, setFormData] = useState({
        name: '',
        guests: 1,
        attendance: 'yes',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const createEmailBody = () => {
        const attendanceText = formData.attendance === 'yes'
            ? '✅ Akan Hadir'
            : '❌ Tidak Dapat Hadir';

        const body = `
🎊 RSVP Undangan Pernikahan ${COUPLE_NAMES} 🎊

━━━━━━━━━━━━━━━━━━━━━━━━━━━━

👤 Nama: ${formData.name}

📋 Konfirmasi Kehadiran: ${attendanceText}

👥 Jumlah Tamu: ${formData.guests} orang

💌 Pesan/Ucapan:
${formData.message || '(Tidak ada pesan)'}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Dikirim melalui Wedding Invitation Website
Tanggal: ${new Date().toLocaleDateString('id-ID', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        })}
        `.trim();

        return body;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Create email subject and body
        const subject = `RSVP: ${formData.name} - ${formData.attendance === 'yes' ? 'Hadir' : 'Tidak Hadir'} - Undangan ${COUPLE_NAMES}`;
        const body = createEmailBody();

        // Create mailto link
        const mailtoLink = `mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        // Open email client
        window.location.href = mailtoLink;

        // Show success message after a short delay
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitted(true);
        }, 1000);
    };

    const handleReset = () => {
        setSubmitted(false);
        setFormData({
            name: '',
            guests: 1,
            attendance: 'yes',
            message: ''
        });
    };

    if (submitted) {
        return (
            <section className="section rsvp-section" id="rsvp">
                <div className="container">
                    <div className="success-message">
                        <div className="success-icon-wrapper">
                            <CheckCircle className="success-icon" size={64} />
                        </div>
                        <h2>Terima Kasih!</h2>
                        <p>Silakan kirim email yang sudah dibuat melalui aplikasi email Anda.</p>
                        <p className="success-note">Kami sangat menantikan kehadiran Anda di hari bahagia kami!</p>
                        <button className="btn-reset" onClick={handleReset}>
                            Kirim RSVP Lain
                        </button>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="section rsvp-section" id="rsvp">
            <div className="container">
                <img src={floralDivider} alt="" className="section-floral-divider" />
                <h2 className="section-title">Konfirmasi Kehadiran</h2>
                <p className="rsvp-subtitle">Kehadiran Anda adalah anugerah bagi kami</p>

                <form className="rsvp-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">
                            <User size={18} />
                            Nama Lengkap *
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Masukkan nama lengkap Anda"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="attendance">
                            <Mail size={18} />
                            Konfirmasi Kehadiran *
                        </label>
                        <select
                            id="attendance"
                            name="attendance"
                            value={formData.attendance}
                            onChange={handleChange}
                        >
                            <option value="yes">✨ Dengan senang hati akan hadir</option>
                            <option value="no">😔 Maaf, tidak dapat hadir</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="guests">
                            <Users size={18} />
                            Jumlah Tamu
                        </label>
                        <input
                            type="number"
                            id="guests"
                            name="guests"
                            min="1"
                            max="5"
                            value={formData.guests}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">
                            <MessageSquare size={18} />
                            Ucapan & Doa
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Berikan ucapan dan doa terbaik untuk mempelai..."
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className={`btn-submit ${isSubmitting ? 'loading' : ''}`}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? (
                            <>
                                <span className="spinner"></span>
                                Memproses...
                            </>
                        ) : (
                            <>
                                <Send size={18} />
                                Kirim RSVP via Email
                            </>
                        )}
                    </button>

                    <p className="email-note">
                        <Mail size={14} />
                        RSVP akan dikirim ke: <strong>{EMAIL_ADDRESS}</strong>
                    </p>
                </form>
            </div>
        </section>
    );
};

export default RSVP;
