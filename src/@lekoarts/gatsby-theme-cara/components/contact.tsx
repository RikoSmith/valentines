/** @jsx jsx */
import { jsx } from "theme-ui"
import styled from "@emotion/styled"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import SVG from "./svg"
import { UpDown, UpDownWide, waveAnimation } from "../styles/animations"
import Footer from "./footer"
// @ts-ignore
import ContactMDX from "../sections/contact"
import './form.css';

const InnerWave = styled.div`
  path {
    ${waveAnimation(`20s`)};
  }
`

const Contact = ({ offset, factor = 1 }: { offset: number; factor?: number }) => (
  <div>
    <Content speed={0.4} offset={offset} factor={factor}>
      <Inner>
        <div sx={{display: `flex`, justifyContent: `start`}}>
          <div sx={{width: `100%`}}>
            <h1 sx={{color: `White`}}>GET LINK HERE</h1>
            <form action="/getUrl"> 
              <input name="name_target" type="text" className="feedback-input" placeholder="Name of Recipient" />   
              <input name="name_sender" type="text" className="feedback-input" placeholder="Name of Sender" />
              <textarea name="message" className="feedback-input" placeholder="Message"></textarea>
              <select className="select" name="song">
                <option value="0">Adore You</option>
                <option value="1">Diamonds</option>
                <option value="2">Я Это Ты</option>
                <option value="3">Just The Two of Us</option>
              </select>
              <input type="submit" value="GET LINK"/>
            </form>
          </div>
        </div>
      </Inner>
      <Footer />
    </Content>
    <Divider 
      fill="divider" 
      speed={-0.2} 
      factor={factor} 
      bg="#E75286"
      sx={{ clipPath: `polygon(0 5%, 100% 20%, 100% 100%, 0 100%)`}}
      offset={4}
    >
      <div sx={{ position: `absolute`, bottom: 0, width: `full`, transform: `matrix(1, 0, 0, -1, 0, 0)`}}>
        <InnerWave sx={{ position: `relative`, height: `full`, svg: { width: `100%`, height: `20vh`} }}>
          <svg xmlns="http://www.w3.org/2000/svg" id="contact-wave" viewBox="0 0 800 338.05" preserveAspectRatio="none">
            <path>
              <animate
                attributeName="d"
                values="M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z"
                repeatCount="indefinite"
                dur="20s"
              />
            </path>
          </svg>
        </InnerWave>
      </div>
    </Divider>
    
    <Divider speed={0.1} offset={offset} factor={factor}>
      <UpDown>
        <SVG icon="upDown" hiddenMobile width={8} color="icon_pink" left="70%" top="20%" />
        <SVG icon="triangle" width={8} stroke color="icon_red" left="25%" top="5%" />
      </UpDown>
      <UpDownWide>
        <SVG icon="triangle" width={12} stroke color="icon_pink" left="95%" top="50%" />
        <SVG icon="circle" width={6} color="icon_pink" left="85%" top="15%" />
        <SVG icon="upDown" hiddenMobile width={8} color="icon_red" left="45%" top="10%" />
      </UpDownWide>
      <SVG icon="circle" width={6} color="icon_pink" left="4%" top="20%" />
      <SVG icon="circle" width={12} color="icon_red" left="70%" top="60%" />
      <SVG icon="box" width={12} color="icon_pink" left="20%" top="30%" />
      <SVG icon="hexa" width={8} stroke color="icon_red" left="80%" top="70%" />
    </Divider>
  </div>
)

export default Contact
