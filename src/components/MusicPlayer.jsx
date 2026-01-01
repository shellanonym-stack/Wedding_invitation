import React, { useState, useEffect, useRef } from 'react';
import '../styles/MusicPlayer.css';

const MusicPlayer = ({ isPlaying, toggleMusic }) => {
    // Standard wedding instrumental URL or local file
    const audioUrl = "src/assets/audio/thousand.mp3";
    const audioRef = useRef(new Audio(audioUrl));

    useEffect(() => {
        audioRef.current.loop = true;

        // Error handling if file not found
        audioRef.current.onerror = () => {
            console.log("Audio file not found, trying fallback");
            // Fallback content or behavior
        };

        return () => {
            audioRef.current.pause();
        };
    }, []);

    useEffect(() => {
        if (isPlaying) {
            const playPromise = audioRef.current.play();
            if (playPromise !== undefined) {
                playPromise.catch(error => {
                    console.log("Audio play failed (browser policy):", error);
                });
            }
        } else {
            audioRef.current.pause();
        }
    }, [isPlaying]);

    return (
        <div className="music-control">
            <button
                className={`btn-music ${isPlaying ? 'playing' : ''}`}
                onClick={toggleMusic}
                title={isPlaying ? "Pause Music" : "Play Music"}
            >
                <MusicIcon playing={isPlaying} />
            </button>
        </div>
    );
};

const MusicIcon = ({ playing }) => {
    if (playing) {
        // Equalizer / Pause icon
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" d="M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z" clipRule="evenodd" />
            </svg>
        );
    }
    // Music Note icon
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path fillRule="evenodd" d="M19.952 1.651a.75.75 0 01.298.599V16.303a3 3 0 01-2.176 2.884l-4.62 1.285a3 3 0 01-2.004-.075 2.997 2.997 0 01-1.428-1.574A2.99 2.99 0 0112 16.5v-6.383a.75.75 0 01.527-.715l6.577-2.043v-2.73l-6.577 2.043a.75.75 0 01-.978-.716v-2.73a.75.75 0 01.527-.715l7.323-2.275a.75.75 0 01.554.404z" clipRule="evenodd" />
        </svg>
    );
};

export default MusicPlayer;
