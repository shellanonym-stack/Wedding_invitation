import React, { useEffect, useState } from 'react';
import '../styles/FallingPetals.css';
import petalImg from '../assets/gambar/petal.png';

const FallingPetals = ({ count = 15 }) => {
    const [petals, setPetals] = useState([]);

    useEffect(() => {
        const newPetals = Array.from({ length: count }, (_, i) => ({
            id: i,
            left: Math.random() * 100,
            delay: Math.random() * 10,
            duration: 8 + Math.random() * 6,
            size: 15 + Math.random() * 25,
            rotation: Math.random() * 360,
            swayAmount: 20 + Math.random() * 40,
        }));
        setPetals(newPetals);
    }, [count]);

    return (
        <div className="falling-petals-container">
            {petals.map((petal) => (
                <div
                    key={petal.id}
                    className="petal"
                    style={{
                        left: `${petal.left}%`,
                        animationDelay: `${petal.delay}s`,
                        animationDuration: `${petal.duration}s`,
                        '--sway-amount': `${petal.swayAmount}px`,
                    }}
                >
                    <img
                        src={petalImg}
                        alt=""
                        style={{
                            width: `${petal.size}px`,
                            transform: `rotate(${petal.rotation}deg)`,
                        }}
                    />
                </div>
            ))}
        </div>
    );
};

export default FallingPetals;
