import Backend from './Backend'
import DataAnalyst from './DataAnalyst'
import Frontend from './Frontend'
import './Skills.css'


const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section_title">Skills</h2>
      <span className="section_subtitle">My technical level</span>

      <div className="skills_container container grid">
        <Frontend />
        <Backend />
        <DataAnalyst/>
      </div>
    </section>
  )
}
export default Skills