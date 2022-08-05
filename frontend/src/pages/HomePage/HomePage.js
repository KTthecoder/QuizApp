import React, { useEffect, useState } from 'react'
import plusIcon from '../../assets/icons/plus.png'
import '../HomePage/HomePage.css'
import ReactLogo from '../../assets/images/react-logo.png'
import DrawerNav from '../../components/DrawerNav/DrawerNav'

const HomePage = () => {
    const slides = [
        {id: '1', img: ReactLogo, title: 'First Slide', lvl: 'hard'},
        {id: '2', img: ReactLogo, title: 'Second Slide', lvl: 'medium'},
        {id: '3', img: ReactLogo, title: 'Third Slide', lvl: 'easy'},
        {id: '4', img: ReactLogo, title: 'Fourth Slide', lvl: 'hard'},
        {id: '5', img: ReactLogo, title: 'Fivth Slide', lvl: 'hard'},
        {id: '6', img: ReactLogo, title: 'Sixth Slide', lvl: 'easy'},
        {id: '7', img: ReactLogo, title: 'Seventh Slide', lvl: 'medium'},
        {id: '8', img: ReactLogo, title: 'Eight Slide', lvl: 'easy'},
    ]

    const slides1 = [
        {id: '1', img: ReactLogo, title: 'First Slide', lvl: 'hard'},
        {id: '2', img: ReactLogo, title: 'Second Slide', lvl: 'medium'},
        {id: '3', img: ReactLogo, title: 'Third Slide', lvl: 'easy'},
        {id: '4', img: ReactLogo, title: 'Fourth Slide', lvl: 'hard'},
    ]

    return (
        <div className='HomeContainer'>
            <DrawerNav/>
            <div className="HomeHorizontalContainer">
                <div className='HomeContainer1'>
                    <div className='HomeHeader'>
                        <h1>My Quizes</h1>
                            <div className='HomeHeaderCreateDiv'>
                            <img src={plusIcon} className='HomeHeaderCreateBtn' />
                            {/* <a href="https://www.flaticon.com/free-icons/add" title="add icons">Add icons created by Pixel perfect - Flaticon</a> */}
                            <p>New Quiz</p>
                        </div>
                    </div>
                    <div className='HomeBlocksContainer'>
                        {slides1 && slides1.map((item) => (
                            <div className='HomeBlocksDiv' key={item.id}>
                                <div className='HomeBlocksImg' alt='React Logo' />
                                <div className='HomeBlockslInfo'>
                                    <h1>{item.title}</h1>
                                    <p className='HomeHorizontalInfoTopP'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut dolor tincidunt.</p>
                                    <p className='HomeHorizontalInfoBtmP'>&#x2022; 20 questions 
                                        <span style={item.lvl === 'easy' ? {color: 'green'} : item.lvl === 'medium' ? {color: 'yellow'} : item.lvl === 'hard' ?  {color: 'red'} : {color: 'white'}}>
                                            &#x2022; {item.lvl}
                                        </span>
                                    </p>
                                </div>
                            </div>
                        ))}         
                    </div>
                </div> 
                <div className='HomeContainer2'>
                    <div className='HomeHeader'>
                        <h1>Popular Quizes</h1>
                        <div className='HomeHeaderCreateDiv'>
                            <p>See more</p>
                        </div>
                    </div>
                    <div className='HomeBlocksContainer'>
                        {slides && slides.map((item) => (
                            <div className='HomeBlocksDiv' key={item.id}>
                                <div className='HomeBlocksImg' alt='React Logo' />
                                <div className='HomeBlockslInfo'>
                                    <h1>{item.title}</h1>
                                    <p className='HomeHorizontalInfoTopP'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut dolor tincidunt.</p>
                                    <p className='HomeHorizontalInfoBtmP'>&#x2022; 20 questions 
                                        <span style={item.lvl === 'easy' ? {color: 'green'} : item.lvl === 'medium' ? {color: 'yellow'} : item.lvl === 'hard' ?  {color: 'red'} : {color: 'white'}}>
                                            &#x2022; {item.lvl}
                                        </span>
                                    </p>
                                </div>
                            </div>
                        ))}         
                    </div>
                </div>
                <div className='HomeContainer2'>
                    <div className='HomeHeader'>
                        <h1>Popular Quizes</h1>
                        <div className='HomeHeaderCreateDiv'>
                            <p>See more</p>
                        </div>
                    </div>
                    <div className='HomeBlocksContainer'>
                        {slides && slides.map((item) => (
                            <div className='HomeBlocksDiv' key={item.id}>
                                <div className='HomeBlocksImg' alt='React Logo' />
                                <div className='HomeBlockslInfo'>
                                    <h1>{item.title}</h1>
                                    <p className='HomeHorizontalInfoTopP'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut dolor tincidunt.</p>
                                    <p className='HomeHorizontalInfoBtmP'>&#x2022; 20 questions 
                                        <span style={item.lvl === 'easy' ? {color: 'green'} : item.lvl === 'medium' ? {color: 'yellow'} : item.lvl === 'hard' ?  {color: 'red'} : {color: 'white'}}>
                                            &#x2022; {item.lvl}
                                        </span>
                                    </p>
                                </div>
                            </div>
                        ))}         
                    </div>
                </div>
                <div className='HomeContainer2'>
                    <div className='HomeHeader'>
                        <h1>Popular Quizes</h1>
                        <div className='HomeHeaderCreateDiv'>
                            <p>See more</p>
                        </div>
                    </div>
                    <div className='HomeBlocksContainer'>
                        {slides && slides.map((item) => (
                            <div className='HomeBlocksDiv' key={item.id}>
                                <div className='HomeBlocksImg' alt='React Logo' />
                                <div className='HomeBlockslInfo'>
                                    <h1>{item.title}</h1>
                                    <p className='HomeHorizontalInfoTopP'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut dolor tincidunt.</p>
                                    <p className='HomeHorizontalInfoBtmP'>&#x2022; 20 questions 
                                        <span style={item.lvl === 'easy' ? {color: 'green'} : item.lvl === 'medium' ? {color: 'yellow'} : item.lvl === 'hard' ?  {color: 'red'} : {color: 'white'}}>
                                            &#x2022; {item.lvl}
                                        </span>
                                    </p>
                                </div>
                            </div>
                        ))}         
                    </div>
                </div>
            </div>
           
        </div>
    )
}

export default HomePage