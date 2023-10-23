"use client"
import Image from 'next/image'
import Logo from '@/assets/images/logo.png'
import MenuIcon from '@/assets/images/menu-icon.png'

export default function Nav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="/">
            <Image
              src={Logo}
              alt="TF Logo"
              priority
            />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <Image
              src={MenuIcon}
              alt="Menu icon"
            />
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/#aboutme">Sobre mim</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#portfolio">Portfolio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#skills">Habilidades</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#myServices">Meus serviços</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#contactMe">Contate-me</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}