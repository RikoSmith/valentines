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
      clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)"
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
          <h2 className='about' sx={{ color: `White`}}>How to?</h2>
          <p>get and share your valentine song online get and share your valentine song online get and share your valentine song online
          get and share your valentine song online get and share your valentine song onlineget and share your valentine song onlineget and share your valentine song online
          get and share your valentine song online
          </p>
          <ul>
            <li>Step 1</li>
            <li>Step 1</li>
            <li>Step 1</li>
            <li>Step 1</li>
            <li>Step 1</li>
          </ul>
        </div>
      </Inner>
    </Content>
  </div>
)

export default About
