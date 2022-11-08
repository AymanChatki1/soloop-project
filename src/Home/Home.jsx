import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import homeBgVideo from '../Media/homeBgVideo.mp4'
import SoloopLogo from '../Media/Soloop-Logo.png'
import TeaserBoutiqueVideo from '../Media/TeaserBoutique.mp4' 

export default class Home extends Component {
    render() {
        return <>
        <section className='Home-start'>
            <img className='soloopLogoVideo' src={SoloopLogo} alt="Soloop's Logo" />
            <Link className='Boutique-link'>Boutique</Link>
            <div className='start-video-container'>
                <video className='start-video' width="100%" autoPlay loop src={homeBgVideo}></video>
            </div>
            <div className='Gradiant-div'></div>
        </section>
        <section className='Home-section2'>
            <img className='soloopMainLogo' src={SoloopLogo} alt="Soloop's Logo" />
            <div className='Slogan'>
                <p>Les meilleurs rollers</p>
                <p>pour faire de l'art</p>
            </div>
        </section>
        <section className='Home-section3'>
            <div className='teaser-video-container'>
                <video className='teaser-video' src={TeaserBoutiqueVideo} autoPlay muted></video>
                <Link className='discover-boutique-btn-link'><button className='discover-boutique-btn'>Discover</button></Link>
            </div>
        </section>
        </>
    }
}