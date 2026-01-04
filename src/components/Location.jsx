import React from 'react';
import '../styles/Location.css';
import { MapPin, Navigation, Clock, Calendar } from 'lucide-react';
import floralDivider from '../assets/gambar/floral-divider.png';
import FloralDecoration from './FloralDecoration';

const Location = () => {
    const openGoogleMaps = () => {
        window.open('https://goo.gl/maps/placeholder', '_blank');
    };

    return (
        <section className="section location-section" id="location">
            <FloralDecoration position="top-left" className="small" />
            <FloralDecoration position="bottom-right" className="small" />

            <div className="container">
                <img src={floralDivider} alt="" className="section-floral-divider" />
                <h2 className="section-title">Lokasi Acara</h2>
                <p className="section-subtitle">Kami akan sangat senang jika Anda dapat hadir</p>

                <div className="events-grid">
                    {/* Akad Nikah */}
                    <div className="event-card">
                        <div className="event-header">
                            <h3>Akad Nikah</h3>
                        </div>
                        <div className="event-details">
                            <div className="detail-item">
                                <Calendar size={18} />
                                <span>Minggu, 08 Februari 2026</span>
                            </div>
                            <div className="detail-item">
                                <Clock size={18} />
                                <span>09:00 - 11:00 WIB</span>
                            </div>
                            <div className="detail-item">
                                <MapPin size={18} />
                                <span>Masjid Al-Barokah</span>
                            </div>
                        </div>
                    </div>

                    {/* Resepsi */}
                    <div className="event-card">
                        <div className="event-header">
                            <h3>Resepsi</h3>
                        </div>
                        <div className="event-details">
                            <div className="detail-item">
                                <Calendar size={18} />
                                <span>Minggu, 08 Februari 2026</span>
                            </div>
                            <div className="detail-item">
                                <Clock size={18} />
                                <span>11:00 - 15:00 WIB</span>
                            </div>
                            <div className="detail-item">
                                <MapPin size={18} />
                                <span>Masjid Al-Barokah</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="location-card">
                    <div className="location-info">
                        <MapPin className="location-icon" />
                        <h3>Masjid Al-Barokah</h3>
                        <p className="address">
                            Jl. Karang Sari<br />
                           Neglasari, Kota Tangerang, Banten<br />
                            Indonesia 15129
                        </p>
                    </div>

                    <div className="map-container">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d305.7954952510171!2d106.64132394981576!3d-6.1610511779217365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f8b81ed053ef%3A0xe982bdec59a2a43f!2sMasjid%20Al-Barokah!5e0!3m2!1sen!2sid!4v1767523604866!5m2!1sen!2sid%22%20width=%22600%22%20height=%22450%22%20style=%22border:0;%22%20allowfullscreen=%22%22%20loading=%22lazy%22%20referrerpolicy=%22no-referrer-when-downgrade%22"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            title="Venue Map"
                        ></iframe>
                    </div>

                    <button className="btn-directions" onClick={openGoogleMaps}>
                        <Navigation size={18} />
                        Buka di Google Maps
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Location;
