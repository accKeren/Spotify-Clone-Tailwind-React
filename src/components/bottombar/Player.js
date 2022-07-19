import { Icon } from "Icons"
import { useAudio } from 'react-use';
import { secondsToTime } from "Utils";
import CustomRange from "components/CustomRange";
import { useMemo, useState } from "react";

function Player() {

const [audio, state, controls, ref] = useAudio({
    src: 'https://www.kozco.com/tech/organfinale.mp3'
  });

  const volumeIcon =  useMemo(()=> {
    if(state.volume == 0 || state.muted)
        return 'volumemute'
    if(state.volume > 0 && state.volume < 0.33 )
        return 'volumelow'
    if(state.volume >= 0.33 && state.volume < 0.66)
        return'volumenormal'

    return 'volumefull'
  },[state.volume, state.muted])
  

    return(
        <div className="flex justify-between px-4 items-center h-full">
            <div className="min-w-[11.25rem] w-[30%]">
               sol
            </div>
            <div className="max-w-[45.125rem] w-[40%] flex flex-col items-center">
                <div className="flex items-center gap-x-2">
                <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100"><Icon size={16} name="switch" /></button>
                <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100"><Icon size={16} name="playerprev"/></button>
                <button onClick={controls[state?.playing ? 'pause':'play']} className="w-8 h-8 bg-white flex items-center justify-center text-black rounded-full hover:scale-[1.06]"><Icon size={16} name={state?.playing ? 'pause' : 'play'}/></button>
                <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100"><Icon size={16} name="playernext"/></button>
                <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100"><Icon size={16} name="loop" /></button>
                </div>
                <div className="w-full flex items-center gap-x-2">
                    {audio}
                    <div className="text-[0.688rem] text-white text-opacity-70">
                         {secondsToTime(state?.time)}
                    </div>
                    <CustomRange 
                        step={0.1}
                        min={0}
                        max={state?.duration || 1}
                        value={state?.time}
                        onChange={value => controls.seek(value)}
                    />
                    <div className="text-[0.688rem] text-white text-opacity-70">
                         {secondsToTime(state?.duration)}
                    </div>    
                </div>
            </div>
            <div className="min-w-[11.25rem] w-[30%] flex items-center justify-end">
                <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                    <Icon size={16} name="microphone" />
                </button>
                <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                    <Icon size={16} name="list" />
                </button>
                <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                    <Icon size={16} name="computer" />
                </button>
                <button onClick={controls[state.muted ? 'unmute' : 'mute']} className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                    <Icon size={16} name={volumeIcon} />
                </button>
                <div className="w-[5.813rem] max-w-full">
                <CustomRange 
                        step={0.01}
                        min={0}
                        max={1}
                        value={state.muted ? 0 : state?.volume}
                        onChange={value => {
                            controls.unmute()
                            controls.volume(value)
                        }}
                    />
                </div>
                <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                    <Icon size={16} name="screen" />
                </button>
            </div>
        </div>
    )
}
export default Player
