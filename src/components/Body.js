import NavBar from '../components/NavBar';
import Articles from './Articles';
import * as Sections from './Sections';

function Body() {
  return (
  <div class="main-content">
    <nav class="navbar">
      <NavBar />          
    </nav>
    <AboutTab />
    <ResumeTab />
    <SkillsTab />
    <ArchievementsTab />
    <ContactTab />
  </div>
  );
}

function AboutTab() {
  return (
    <Articles title="About me" status="" sections={Sections.AboutSections()}/>
  );
}

function ResumeTab() {
  return (
    <Articles title="Résumé" status="" sections={Sections.ResumeSections()}/>
  );
}
function SkillsTab() {
  return (
    <Articles title="Skills" status="" sections={Sections.SkillsSections()}/>
  );
}
function ArchievementsTab() {
  return (
  <Articles title="Archievements" status="" sections={Sections.AchievementsSections()}/>
  );
}
function ContactTab() {
  return (
    <Articles title="Contact" status="active" sections={Sections.ContactSections()}/>
  );
}

export default Body;