import React from 'react'
import styled from 'styled-components'
import HeroImg from '../local_images/150.png'
import { Button } from './styles/Button.style'

    const HeroBase = styled.section`
    margin-top: 30px;
    justify-content: center;
    padding-top: 40px;
    padding-right: 10px;
    padding-bottom: 10px;
    padding-left: 5px;
    width: 800px;
    height: 400px;
    background-color: #32334d77;
    color: #ffb834;
    padding-right: 50px;
    text-align: center;
    border-radius: 15px;`

    const HeroContainer = styled.section`
    display: flex;
    justify-content: center;
    `

    const HeroPicture = styled.section`
    float: left;
    height: auto;
    width: 400px;
    padding-right: 50px;`

const HeroBanner = () => {

    return(
        <>
        <HeroContainer>
            <HeroBase>
            <HeroPicture><img src={HeroImg}></img></HeroPicture>
            <h2>Welcome to PodHarbour!</h2>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        </HeroBase>
        </HeroContainer>
    </>)
    }


export default HeroBanner