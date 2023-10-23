import Image from "next/image";
import MyServices1 from '@/assets/images/pc-desenvolvimento-programacao.png'
import MyServices2 from '@/assets/images/pc-design.png'

export default function MyServices() {
  return (
    <div id="myServices">
      <div className="container">
        <div className="title-section">
          <h2>Meus serviços</h2>
        </div>

        <div className="row mt-4 justify-content-between">
          <div className="col-12 col-md-6">
            <div className="row w-100 align-items-center my-service-item-1">
              <div className="col-5">
                <Image src={MyServices1} alt="Desenvolvimento/Programação" />
              </div>
              <div className="col-7">
                <h6 className="font-s22 color-marineblue fw-bold">Desenvolvimento / Programação</h6>
                <ul className="mt-3">
                  <li><p>Layouts responsivos</p></li>
                  <li><p>Lading Page</p></li>
                  <li><p>Dashboard</p></li>
                  <li><p>Portais de informação</p></li>
                  <li><p>Aplicações web</p></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 d-flex justify-content-md-end">
            <div className="row w-100 align-items-center justify-content-end my-service-item-2 flex-md-row-reverse">
              <div className="col-8 col-md-5">
                <h6 className="font-s22 color-marineblue fw-bold">Design e prototipagem</h6>
                <ul className="mt-3">
                  <li><p>Web design</p></li>
                  <li><p>Social media design</p></li>
                  <li><p>Design gráfico</p></li>
                  <li><p>Motion design</p></li>
                  <li><p>Edição de vídeo</p></li>
                </ul>
              </div>
              <div className="col-4 col-md-7 d-md-flex justify-content-md-end pe-md-5">
                <Image src={MyServices2} alt="Design e prototipagem" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}