import React from 'react'
import styled from 'styled-components'
import HeroImg from '../../assets/site_images/heropicture.webp'

    const HeroBase = styled.section`
    margin-top: 60px;
    justify-content: center;
    padding-top: 40px;
    padding-bottom: 10px;
    width: 830px;
    padding-left: 10px;
    padding-right: 30px;
    height: 400px;
    background-color: #32334d77;
    color: #ffb834;
    text-align: center;
    border-radius: 15px;`

    const HeroContainer = styled.section`
    display: flex;
    justify-content: center;
    `

    const HeroPicture = styled.img`
    float: left;
    height: auto;
    width: 350px;
    margin-top: 8px;
    margin-left: 20px;
    margin-right: 20px;
    border-radius: 15px;`

    const Herotext = styled.p`
        font-size: large;
        `
    const HeroTitle = styled.h1`
    font-size: xx-large;
    margin-bottom: 10px;
    `


const HeroBanner = () => {

    return(
        <>
        <HeroContainer>
            <HeroBase>
            <HeroPicture src={HeroImg}></HeroPicture>
            <HeroTitle>Welcome to PodHarbour!</HeroTitle>
            <Herotext>Hello, you have reached PodHarbour! Your one stop internet shop for all your Podcast needs!</Herotext><br />
            
            <Herotext>On this website you will find the only the best, hand-picked, selection of awesome audio to keep you entertained and informed, be it on the bus, in the car, 
            when exercising or just lounging around the house. Our team works day and night to provide the best content for your listening ears!</Herotext><br />

            <Herotext>So what are you waiting for? Take a look around and enjoy your stay here at our calm little corner of the internet.</Herotext>
        </HeroBase>
        </HeroContainer>
    </>)
    }


export default HeroBanner