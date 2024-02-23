import NavBar from '../components/NavBar'
import Articles from './Articles'
import * as Sections from './ContentSections'
import React, { useEffect } from 'react'

function Body() {
  useEffect(() => {
    import('../assets/js/script.js')
  }, [])

  return (
    <div class="main-content">
      <nav class="navbar">
        <NavBar />
      </nav>
      <AboutTab />
      <ResumeTab />
      <SkillsTab />
      <AchievementsTab />
      <CreditTab />
    </div>
  )
}

function AboutTab() {
  return (
    <Articles
      title="About me"
      status="active"
      sections={Sections.AboutSections()}
    />
  )
}

function ResumeTab() {
  return (
    <Articles title="Résumé" status="" sections={Sections.ResumeSections()} />
  )
}
function SkillsTab() {
  return (
    <Articles title="Skills" status="" sections={Sections.SkillsSections()} />
  )
}
function AchievementsTab() {
  return (
    <Articles
      title="Achievements"
      status=""
      sections={Sections.AchievementsSections()}
    />
  )
}
function CreditTab() {
  return (
    <Articles title="Credit" status="" sections={Sections.CreditSections()} />
  )
}
export default Body
