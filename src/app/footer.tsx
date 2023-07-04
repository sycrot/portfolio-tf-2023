import Image from "next/image";
import Logo from '../../public/assets/images/logo-fluid.png'

export default function Footer() {
  return (
    <footer>
      <div id="contactMe">
        <div className="box-bluelight d-flex flex-column justify-content-center align-items-center">
          <div className="title-section-2">
            <h2>Contate-me</h2>
          </div>
          <div className="content">
            <a href=""><p className="d-flex align-items-center mb-0"><i className="i-email"></i>thiagojosef99@gmail.com</p></a>
            <a href=""><p className="d-flex align-items-center mb-0 mt-2"><i className="i-phone"></i>+55 99 98132-0253</p></a>
          </div>
        </div>
      </div>

      <div className="footer-content">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4 d-flex justify-content-start align-items-center">
              <Image src={Logo} alt="Logo TF" />
            </div>
            <div className="col-12 col-md-4 d-flex justify-content-center">
              <div className="section-footer">
                <p className="text-white fw-bold">Outros conteúdos:</p>
                <ul className="mt-3">
                  <li><a href=""><p className="text-white mb-0">Behance</p></a></li>
                  <li><a href=""><p className="text-white mb-0 mt-2">Instagram</p></a></li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-4 d-flex justify-content-end">
              <div className="section-footer">
                <a href="" className="button-darkblue-2 font-s16 text-white">Para mais informacoes acesse meu curriculo</a>
                <div className="socials mt-4 d-flex gap-2 justify-content-center justify-content-md-start">
                  <a href=""><i className="i-github-blue"></i></a>
                  <a href=""><i className="i-linkedin-blue"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom d-flex justify-content-center align-items-center">
        <p className="font-s16 text-white mb-0">Desenvolvido por <a href="" className="text-white fw-bold">Thiago Farias</a> | © 2023</p>
      </div>
    </footer>
  )
}