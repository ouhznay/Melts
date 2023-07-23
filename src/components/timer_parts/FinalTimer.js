import './FinalTimer.css';
import './BackSettingsButton.css';
import Timer from "./Timer";
import Settings from './Settings';
import { useState } from 'react';
import SettingsContext from './SettingsContext';

function FinalTimer() {
  const [showSettings, setShowSettings] = useState(true);
  const [workMinutes, setWorkMinutes] = useState(25);
  const [breakMinutes, setBreakMinutes] = useState(15);
  return (
    <main>
      <div className='timer-background'>
      <SettingsContext.Provider value={{
         showSettings,
         setShowSettings,
         workMinutes,
         breakMinutes,
         setWorkMinutes,
         setBreakMinutes,
      }}>
        {/* switch between settings and timer page */}
        {showSettings ? <Settings /> : <Timer /> } 
      </SettingsContext.Provider>
      </div>
   </main>

  );
}

export default FinalTimer;