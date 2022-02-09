/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import './fonts.css';

type ProjectCardProps = {
  link: string
  title: string
  children: React.ReactNode
  bg: string,
  video: string
}

const ProjectCard = ({ link, title, children, bg, video }: ProjectCardProps) => (
  <a
    href={link}
    target="_blank"
    rel="noreferrer noopener"
    sx={{
      width: `100%`,
      boxShadow: `lg`,
      position: `relative`,
      textDecoration: `none`,
      borderRadius: `lg`,
      color: `#FFF`,
      backgroundSize: `100% auto`,
      backgroundColor: `rgba(0,0,0,.55)`,
      overflow: `hidden`,
      transition: `all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important`,
      "&:hover": {
        color: `#FFF !important`,
        transform: `translateY(-5px)`,
        boxShadow: `xl`,
      },
    }}
  >
    <img src={bg} sx={{ pointerEvents: `none`, position: `absolute`, width: `100%`, minWidth: `400px`, height: `100%`, zIndex: `-1`, }}></img>
    <div sx={{ px: 4, py: [4, 5] }}>
      <div sx={{ opacity: 0.85, textShadow: `0 2px 10px rgba(0, 0, 0, 0.3)` }}>{children}</div>
      <div className='card-title'
        sx={{
          textTransform: `uppercase`,
          letterSpacing: `wide`,
          pt: 4,
          fontSize: [4, 5],
          fontWeight: `medium`,
          lineHeight: 1,
        }}
      >
        {title}
      </div>
    </div>
  </a >
)

export default ProjectCard
