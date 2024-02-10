import React from 'react';
import './landing.scss'
import Dictaphone from '../dictaphone/dictaphone';
import logo from './mic.svg'
import speakLogo from  './speak.svg'
import background from './background.svg'

const Landing = () => {
    const showDictaphone = () => {
        const contentsToHide = document.querySelectorAll('.container__content');
        contentsToHide.forEach(content => {
            content.classList.add('hide');
        });

        const dictaphone = document.querySelector('.dictaphone')
        dictaphone.classList.add('show')
    };
    
    return (
        <div className='container'>
            <div className='container__content'>
                <h1>Speech to Text</h1>
                <h2>Empowering Communication Through Transcripts and AI Responses</h2>
                <img className="mic" src={logo} alt="" />
            </div>
            <div className='dictaphone'>
                <Dictaphone />
            </div>
            <div className='container__content container__content__inner'>
                <p>Press <b>'Start Recording'</b> to start!</p>
                <button className='record-button' onClick={showDictaphone}>Start Recording</button>
                <div className='container__text'>
                    <div className='container__header'>
                        <img src={speakLogo} height={'20px'}></img>
                        <h3>Speak!</h3>
                    </div>
                    <p>Your words will be swiftly transcribed. After reviewing and editing the transcript as necessary, send your message to interact with our AI Chat Companion. Enjoy seamless communication</p>
                </div>
            </div>
            <img className='background-element' src={background}></img>
        </div>
    )
}

export default Landing;