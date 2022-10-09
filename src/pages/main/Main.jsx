import React from 'react'
import AboutSection from './about/AboutSection'
import Causes from './causes/Causes'
import Events from './events/Events'
import "./main.scss"
import News from './news/News'
import Partners from './Partners/Partners'
import Requisites from './Requisites/Requisites'
import Stats from './stats/Stats'
import Team from './Team/Team'
import TopBanner from './topBanner/TopBanner'

export default function Main() {
  return (
    <main className="main">
      <TopBanner/>
      <AboutSection/>
      <Causes/>
      <Requisites/>
      <Stats/>
      <Events/>
      <News/>
      <Team/>
      <Partners/>
    </main>
  )
}