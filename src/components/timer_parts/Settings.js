import ReactSlider from 'react-slider';
import './Slider.css'
import SettingsContext from './SettingsContext';
import { useContext } from 'react';
import BackButton from './BackButton';
import icecube from "../../images/mascot.png";

function Settings() {
    const settingInfo = useContext(SettingsContext);
    
    return(
        <div style={{textAlign:'left'}}>
            <img src = {icecube} alt= "logo" width="350" height="350" align-item="center"/>
            <div className='pomo-exp'>
                The Pomodoro timer is a productivity and focus-enhancing time management technique. 
                It entails dividing your work or study sessions into intervals, usually lasting 25 minutes, 
                interspersed with brief breaks.
            </div>
            {/* sliders for users to adjust their working and break times */}
            <label>work: {settingInfo.workMinutes}:00</label>
            <ReactSlider 
                className={'slider'}
                thumbClassName={'thumb'}
                trackClassName={'track'}
                value={settingInfo.workMinutes}
                onChange={newValue => settingInfo.setWorkMinutes(newValue)}
                min={1}
                max={120}
            />
            <label>break: {settingInfo.breakMinutes}:00</label>
            <ReactSlider 
                className={'slider green'}
                thumbClassName={'thumb'}
                trackClassName={'track'}
                value={settingInfo.breakMinutes}
                onChange={newValue => settingInfo.setBreakMinutes(newValue)}
                min={1}
                max={120}
            />
            <div style={{textAlign:'center', marginTop:'20px'}}>
                <BackButton onClick={() => settingInfo.setShowSettings(false)} />
            </div>

        </div>
        
    );
}

export default Settings;