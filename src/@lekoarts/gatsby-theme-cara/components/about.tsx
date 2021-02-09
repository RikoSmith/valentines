/** @jsx jsx */
import { jsx } from "theme-ui"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import SVG from "./svg"
import { UpDown, UpDownWide } from "../styles/animations"
// @ts-ignore
import AboutMDX from "../sections/about"
import './fonts.css';

const About = ({ offset, factor = 1 }: { offset: number; factor?: number }) => (
  <div>
    <Divider
      bg="#E75286"
      clipPath="polygon(0 15%, 100% 0%, 100% 85%, 0 100%)"
      speed={0.2}
      offset={offset}
      factor={factor}
    />
    <Divider speed={0.1} offset={offset} factor={factor}>
      <UpDown>
        <SVG icon="box" hiddenMobile width={6} color="icon_pink" left="50%" top="75%" />
        <SVG icon="upDown" hiddenMobile width={8} color="icon_red" left="70%" top="20%" />
        <SVG icon="triangle" width={8} stroke color="icon_pink" left="25%" top="5%" />
        <SVG icon="upDown" hiddenMobile width={24} color="icon_red" left="80%" top="80%" />
        <SVG icon="upDown" hiddenMobile width={10} color="icon_red" left="70%" top="20%" />
      </UpDown>
      <UpDownWide>
        <SVG icon="arrowUp" hiddenMobile width={16} color="icon_red" left="5%" top="80%" />
        <SVG icon="triangle" width={12} stroke color="icon_brightest" left="95%" top="50%" />
        <SVG icon="circle" hiddenMobile width={6} color="icon_pink" left="85%" top="15%" />
        <SVG icon="upDown" hiddenMobile width={8} color="icon_pink" left="45%" top="10%" />
      </UpDownWide>
      <SVG icon="circle" hiddenMobile width={6} color="icon_pink" left="4%" top="20%" />
      <SVG icon="circle" width={12} color="icon_red" left="70%" top="60%" />
      <SVG icon="box" width={6} color="icon_pink" left="10%" top="10%" />
      <SVG icon="box" width={12} color="icon_red" left="20%" top="30%" />
      <SVG icon="hexa" width={8} stroke color="icon_pink" left="80%" top="70%" />
    </Divider>
    <Content speed={0.4} offset={offset} factor={factor}>
      <Inner>
        <div className='about-container'>
          <h2 className='about' sx={{ color: `White`}}>About</h2>
          <p>Dear friends, <br/>
            Nothing can stop us from spreading love, even this long lasting quarantine and miles that separate us!
            We are back with Singing Valentines, but this year it's going to be even bigger, because you can order an online Singing Valentine to anyone you want no matter where they are now!
            So go ahead and express your love and appreciation to your friends, colleagues, soulmates, family, professors, and students - to whomever you want!
          </p>
          <h3><b>How to?</b></h3>
          <ul>
            <li>Step 1: Fill in the form below</li>
            <li>Step 2: Choose a song</li>
            <li>Step 3: You can add a comment/wish/joke/whatever you want</li>
            <li>Step 4: Get the link to a Singing Valentine with your chosen song</li>
            <li>Step 5: Send the link to the recipient</li>
            <li>Step 6 (optional): In case you want to stay anonymous, fill in this <a href="https://docs.google.com/forms/d/e/1FAIpQLSf7Kxpt5T_BUsphtoj6gSUB7JUEf2qGWqeWsDyrs3AR9nNtyw/viewform?usp=sf_link">google form</a></li>
            <li>[ Deadline for the form is 12:00 PM, February 14 ]</li>
            <li>Step 7: Remember to keep spreading the love!</li>
          </ul>
        </div>
      </Inner>
    </Content>
  </div>
)

export default About
