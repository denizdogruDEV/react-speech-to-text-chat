import React, { useEffect, useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import './dictaphone.scss'
import record from './record.svg'
import stop from './stop.svg'
import reset from './reset.svg'

const Dictaphone = () => {
    const [message, setMessage] = useState('');
    const commands = [
        {
          command: 'reset',
          callback: () => resetTranscript()
        },
        {
          command: 'shut up',
          callback: () => setMessage('I wasn\'t talking.')
        },
        {
          command: 'Hello',
          callback: () => setMessage('Hi there!')
        },
    ]

    const {
        transcript,
        interimTranscript,
        finalTranscript,
        resetTranscript,
        listening,
    } = useSpeechRecognition({ commands });

    useEffect(() => {
        if (finalTranscript !== '') {
            console.log('Got final result:', finalTranscript);
        }
    }, [interimTranscript, finalTranscript]);

    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
        return null;
    }

    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
        console.log('Your browser does not support speech recognition software! Try Chrome desktop, maybe?');
    }

    const recordFunction = (event) => {
        const startButton = document.querySelector('.button--start');
        const stopButton = document.querySelector('.button--stop');

        if (event === 'start') {
            SpeechRecognition.startListening({
                continuous: true,
                language: 'en-GB',
            });

            startButton.classList.add('hide');
            stopButton.classList.remove('hide')
        } else {
            SpeechRecognition.stopListening();
            startButton.classList.remove('hide');
            stopButton.classList.add('hide')
        }
    }

    return (
        <div className='container'>
            <div className="main-content">
                <span className={listening ? 'main-content__recording on' : 'main-content__recording'}>
                    ON AIR
                </span>
                <div>
                    {message}
                </div>
                <div>
                    <span>{transcript}</span>
                </div>
            </div>
            <div className="btn-style">
                <button type="button" onClick={resetTranscript}>
                    <img src={reset} height={'40px'} width={'40px'}></img>
                </button>
                <button type="button" className='button--start' onClick={() => recordFunction('start')}>
                    <img src={record} height={'40px'} width={'40px'}></img>
                </button>
                <button type="button" className='button--stop hide' onClick={() => recordFunction('stop')}>
                    <img src={stop} height={'40px'} width={'40px'}></img>
                </button>
            </div>
        </div>
    );
};
   
export default Dictaphone;
