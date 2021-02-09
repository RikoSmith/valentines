/** @jsx jsx */
import { jsx } from "theme-ui"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import SVG from "./svg"
import Logo from "./logo"
import styled from "@emotion/styled"
import { UpDown, UpDownWide, waveAnimation} from "../styles/animations"
// @ts-ignore
import Intro from "../sections/intro"
import './fonts.css';

const InnerWave = styled.div`
  path {
    ${waveAnimation(`20s`)};
  }
`

const Hero = ({ offset, factor = 1 }: { offset: number; factor?: number }) => (
  <div>
    <Divider 
      speed={0.2} 
      offset={offset} 
      factor={factor}
      fill="divider" 
      bg="#E75286"
      clipPath="polygon(0 20%, 100% 5%, 100% 75%, 0 90%)"
    > 
      <UpDown>
        <SVG icon="triangle" hiddenMobile width={48} stroke color="icon_brightest" left="10%" top="20%" />
        <SVG icon="hexa" width={48} stroke color="icon_brightest" left="60%" top="70%" />
        <SVG icon="box" width={6} color="icon_brightest" left="60%" top="15%" />
      </UpDown>
      <UpDownWide>
        <Logo opacity={0.8} width="30%" left="70%" top="10%"/>
        <SVG opacity={0}icon="arrowUp" hiddenMobile width={16} color="icon_brightest" left="80%" top="10%" />
        <SVG icon="triangle" width={12} stroke color="icon_brightest" left="90%" top="50%" />
        <SVG icon="circle" width={16} color="icon_brightest" left="70%" top="90%" />
        <SVG icon="triangle" width={16} stroke color="icon_brightest" left="30%" top="65%" />
        <SVG icon="cross" opacity={0.5} width={16} color="icon_brightest" left="28%" top="15%" />
        <SVG icon="upDown" opacity={0.7} width={6} color="icon_brightest" left="35%" top="10%" />
        <SVG icon="upDown" hiddenMobile width={8} color="icon_brightest" left="45%" top="10%" />
      </UpDownWide>
      <SVG icon="upDown" hiddenMobile width={24} color="icon_brightest" left="5%" top="70%" />
      <SVG icon="upDown" opacity={0.0} width={6} color="icon_brightest" left="4%" top="20%" />
      <SVG icon="upDown" opacity={0.5} width={12} color="icon_brightest" left="50%" top="60%" />
      <SVG icon="upDown" width={8} color="icon_brightest" left="95%" top="90%" />
      <SVG icon="upDown" hiddenMobile width={24} color="icon_brightest" left="40%" top="80%" />
      <SVG icon="upDown" width={8} stroke color="icon_brightest" left="25%" top="5%" />
      <SVG icon="upDown" width={64} color="icon_brightest" left="95%" top="5%" />
      <SVG icon="upDown" hiddenMobile width={64} color="icon_brightest" left="5%" top="90%" />
      <SVG icon="upDown" width={6} color="icon_brightest" left="10%" top="10%" />
      <SVG opacity={0.4} icon="upDown" width={12} color="icon_brightest" left="40%" top="30%" />
    </Divider>
    <Content sx={{ variant: `texts.bigger`, color: `White` }} speed={0.4} offset={offset} factor={factor}>
      <Inner>
        <h1 className='hero' sx={{ color: `White`, fontSize: `80px`}}>Singing Valentines</h1>
        <p className='under'>Order yours online!</p>
        {/* <Intro /> */}
      </Inner>
    </Content>
  </div>
)

export default Hero
