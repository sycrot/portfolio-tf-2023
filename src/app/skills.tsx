import SkillItem from "@/components/skill-item"

export default function Skills() {
  return (
    <div id="skills">
      <div className="container">
        <div className="title-section">
          <h2>Habilidades</h2>
        </div>
        <p className="mb-0 color-blue">Na minha carreira trabalhei com algumas linguagens e frameworks, como Java, PHP, Laravel, WordPress, Angular, Vue, React Native, e etc. Mas as habilidades que tenho mais foco sao essas:</p>

        <div className="row">
          <div className="col-12">
            <h4 className="font-s22 color-marineblue fw-bold mt-4">Principais</h4>
          </div>
            <SkillItem />
          <div className="col-12 mt-4">
            <h6 className="font-s22 color-marineblue fw-bold mt-4">Outras habilidades:</h6>
            <p className="color-blue mb-0 mt-4 fw-light">Material UI, MySQL, Adobe Photoshop, Adobe Illustrator, Adobe AfterEffects, Adobe XD, Figma & Vegas Pro</p>
          </div>
        </div>
      </div>
    </div>
  )
}