import Image from "next/image";
import ArrowRight from '@/assets/images/angulo-circulo-esquerda.png'
import Link from "next/link";

interface PropsViewWorks {
  link: string
}

function ViewWorksButton(props: PropsViewWorks) {
  return (
    <Link href={props.link}>Ver trabalhos<Image src={ArrowRight} alt="View works" /></Link>
  )
}

export default function MyServices() {
  return (
    <div id="myServices">
      <div className="container">
        <div className="title-section">
          <h2>Meus serviços</h2>
        </div>

        <div className="row mt-4 justify-content-between">
          <div className="col-12 col-md-6">
            <div className="my-service-item my-service-item-1">
              <div className="position-relative">
                <h6 className="font-s28 color-marineblue fw-bold">Desenvolvimento / Programação</h6>
                <p>Como desenvolvedor, trabalho com a criação de layouts responsivos que se adaptam a diferentes dispositivos, proporcionando uma experiência de usuário consistente e intuitiva. Além disso, desenvolvo Lading Pages eficientes, que visam converter visitantes em leads ou clientes, por meio de um design atrativo e conteúdo persuasivo. Trabalho no desenvolvimento de aplicações e sites web que atendem às necessidades específicas dos usuários, oferecendo funcionalidades e interatividade de acordo com os objetivos do cliente. Meu foco é sempre garantir a usabilidade, acessibilidade e eficiência em todos os projetos de design e desenvolvimento web.</p>
                <ViewWorksButton link="/portolio/desenvolvimento" />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="my-service-item my-service-item-2">
              <div className="position-relative">
                <h6 className="font-s28 fw-bold">Design e prototipagem</h6>
                <p>Como profissional de design, minha expertise abrange uma variedade de áreas, incluindo social media design, design gráfico, motion design, edição de vídeo e web design. Meu trabalho envolve a criação de conteúdo visual atraente e impactante para plataformas de mídia social, com foco em engajamento e alcance do público-alvo.<br /><br />Trabalho na concepção e desenvolvimento de interfaces digitais, garantindo a usabilidade, acessibilidade e estética de sites e aplicativos. Meu objetivo é sempre oferecer soluções visuais criativas e eficazes, alinhadas às necessidades e objetivos de cada projeto.</p>
                <ViewWorksButton link="/portolio/design" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}