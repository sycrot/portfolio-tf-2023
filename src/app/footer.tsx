import Image from "next/image";
import Logo from '@/assets/images/logo-fluid.png'
import Link from "next/link";
import Contactme from "@/components/contatcme";

export default function Footer() {
  return (
    <footer>
      {/* <div id="contactMe">
        <div className="box-bluelight d-flex flex-column justify-content-center align-items-center">
          <div className="title-section-2">
            <h2>Contate-me</h2>
          </div>
          <div className="content">
            <a href="mailto:thiagojosef99@gmail.com?subject=Olá%20, Thiago J Farias"><p className="d-flex align-items-center mb-0"><i className="i-email"></i>thiagojosef99@gmail.com</p></a>
            <a href="https://api.whatsapp.com/send?phone=5599981320253" target="_blank"><p className="d-flex align-items-center mb-0 mt-2"><i className="i-phone"></i>+55 99 98132-0253</p></a>
          </div>
        </div>
      </div> */}
      <Contactme />
      <div className="footer-content">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4 d-flex justify-content-start align-items-center">
              <Link href="/" className="ms-auto me-auto ms-md-0 me-md-0 d-block">
                <Image src={Logo} alt="Logo TF" />
              </Link>
            </div>
            <div className="col-12 col-md-4 d-flex justify-content-center">
              <div className="section-footer">
                <p className="text-white fw-bold">Outros conteúdos:</p>
                <ul className="mt-3">
                  <li><a href="https://www.behance.net/tfeditor" target="_blank"><p className="text-white mb-0">Behance</p></a></li>
                  <li><a href="https://www.instagram.com/editor.tf/" target="_blank"><p className="text-white mb-0 mt-2">Instagram</p></a></li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-4 d-flex justify-content-end">
              <div className="section-footer">
                <a href="https://drive.google.com/file/d/1sb9O-oHDO7Rze5fafLiBz1D-5PqPPd7H/view?usp=sharing" className="button-darkblue-2 font-s16 text-white" target="_blank">Para mais informacoes acesse meu curriculo</a>
                <div className="socials mt-4 d-flex gap-2 justify-content-center justify-content-md-start">
                  <a href="https://github.com/sycrot" target="_blank"><i className="i-github-blue"></i></a>
                  <a href="https://www.linkedin.com/in/thiago-farias-136781193/" target="_blank"><i className="i-linkedin-blue"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom d-flex justify-content-center align-items-center">
        <p className="font-s16 text-white mb-0">Desenvolvido por <a href="https://github.com/sycrot" className="text-white fw-bold" target="_blank">Thiago Farias</a> | © 2023</p>
      </div>
    </footer>
  )
}