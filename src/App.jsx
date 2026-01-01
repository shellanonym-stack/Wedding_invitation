import React, { useState } from 'react';
import Hero from './components/Hero';
import Couple from './components/Couple';
import DateSection from './components/DateSection';
import Location from './components/Location';
import Gallery from './components/Gallery';
import RSVP from './components/RSVP';
import Footer from './components/Footer';
import FallingPetals from './components/FallingPetals';
import OpeningModal from './components/OpeningModal';
import MusicPlayer from './components/MusicPlayer';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isInviteOpen, setIsInviteOpen] = useState(false);

  const handleOpenInvite = () => {
    setIsInviteOpen(true);
    setIsPlaying(true);
  };

  const toggleMusic = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="App">
      <OpeningModal onOpen={handleOpenInvite} />

      {isInviteOpen && (
        <>
          <MusicPlayer isPlaying={isPlaying} toggleMusic={toggleMusic} />
          <FallingPetals count={12} />
          <Hero />
          <Couple />
          <DateSection />
          <Location />
          <Gallery />
          <RSVP />
          <Footer />
        </>
      )}

      {/* 
         Note: We render sections conditionally or keep them hidden? 
         Keeping them unmounted until open is better for performance initially,
         but rendering them hidden allows images to preload.
         However, the simple conditional render is cleanest for now.
         The OpeningModal handles its own exit animation.
      */}
      {!isInviteOpen && (
        /* Hidden preloader or just wait */
        <div style={{ display: 'none' }}>
          {/* Preload hero images if needed */}
        </div>
      )}
    </div>
  );
}

export default App;
