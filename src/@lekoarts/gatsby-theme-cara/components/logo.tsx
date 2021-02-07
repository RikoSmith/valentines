/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import { hidden } from "../styles/utils"
import logo from "../choir.png"


type SVGProps = {
  stroke?: boolean
  color?: string | number | any
  width: number
  left: string
  top: string
  hiddenMobile?: boolean,
  opacity: number
}

const Logo = ({ stroke = false, color = ``, width, left, top, hiddenMobile = false, opacity = 1 }: SVGProps) => (
  <img src={logo}
    sx={{
      position: `absolute`,
      stroke: stroke ? `currentColor` : `none`,
      fill: stroke ? `none` : `currentColor`,
      display: hiddenMobile ? hidden : `block`,
      color,
      width,
      left,
      top,
      opacity: opacity
    }}
    viewBox="0 500 500"
  >
  </img>
)

export default Logo
