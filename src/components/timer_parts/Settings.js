import ReactSlider from 'react-slider';
import './Slider.css'
import SettingsContext from './SettingsContext';
import { useContext } from 'react';
import BackButton from './BackButton';

function Settings() {
    const settingInfo = useContext(SettingsContext);
    
    return(
        <div style={{textAlign:'left'}}>
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