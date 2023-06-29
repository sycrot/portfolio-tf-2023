
function TimelineContent(year: string, text: string) {
  return (
    <div className="col-12 col-md-3 timeline-item">
      <div className="timeline-content">
        <div className="timeline-year">
          <span>{year}</span>
        </div>
        <div className="timeline-text">
          <p>{text}</p>
        </div>
      </div>
    </div>
  )
}

export default function Aboutme() {
  return (
    <>
      <div id="aboutme">
        <div className="container">
          <div className="title-section">
            <h2 className="mb-0">Sobre mim</h2>
          </div>

          <div className="content">
            <div className="row">
              {TimelineContent("2017", "Trabalhei como design gráfico, editor de vídeo, motion design e social media utilizando as habilidades que havia adquirido ao longo da vida, e iniciei meus estudos com desenvolvimento e programação.")}
              {TimelineContent("2020", "Graduação em ADS (Análise e Desenvolvimento de Sistemas) com foco em desenvolvimento web e por cerca de dois anos trabalhei como freelancer com design gráfico, edição de vídeos e desenvolvimento frontend.")}
              {TimelineContent("2022", "Após estudar bastante tecnologia e desenvolvimento, consegui meu primeiro emprego em julho como desenvolvedor fullstack e logo depois, em setembro migrei para outra empresa atuando como desenvolvedor frontend.")}
              {TimelineContent("2023", "Atualmente trabalho como freelancer em tempo integral com desenvolvimento frontend, design gráfico e afins")}
            </div>

            <div className="mt-4">
              <p className="text-justify mb-0">Desde sempre gosto muito de tecnologia. No começo ainda tinha um pouco de confusão em qual área da programação/desenvolvimento me colocar, mas depois de um tempo vi que o desenvolvimento web era o que eu mais tinha afinidade.</p><br />
              <p className="text-justify mb-0">Juntei algumas habilidades de design gráfico que eu já tinha e comecei a aprender e me aprimorar na área de desenvolvimento web. Hoje já entendo de algumas tecnologias voltadas para frontend e outras para backend. Além disso, nunca parei de praticar minhas habilidades com design gráfico e web design.</p>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}