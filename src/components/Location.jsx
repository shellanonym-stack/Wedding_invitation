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
                                <span>Minggu, 31 Desember 2025</span>
                            </div>
                            <div className="detail-item">
                                <Clock size={18} />
                                <span>08:00 - 10:00 WIB</span>
                            </div>
                            <div className="detail-item">
                                <MapPin size={18} />
                                <span>Grand Ballroom Hotel</span>
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
                                <span>Minggu, 31 Desember 2025</span>
                            </div>
                            <div className="detail-item">
                                <Clock size={18} />
                                <span>11:00 - 15:00 WIB</span>
                            </div>
                            <div className="detail-item">
                                <MapPin size={18} />
                                <span>Grand Ballroom Hotel</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="location-card">
                    <div className="location-info">
                        <MapPin className="location-icon" />
                        <h3>Grand Ballroom Hotel</h3>
                        <p className="address">
                            Jl. Sudirman No. 123<br />
                            Jakarta Selatan, DKI Jakarta<br />
                            Indonesia 12190
                        </p>
                    </div>

                    <div className="map-container">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126920.24503279114!2d106.75659837941785!3d-6.229720935560943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x5371bf0fdad786a2!2sJakarta%2C%20Special%20Capital%20Region%20of%20Jakarta!5e0!3m2!1sen!2sid!4v1645520934821!5m2!1sen!2sid"
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
