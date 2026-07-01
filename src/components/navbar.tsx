"use client"
import Image from 'next/image'
import Logo from '@/assets/images/logo.png'
import MenuIcon from '@/assets/images/menu-icon.png'
import { useTheme } from 'next-themes';
import { VscColorMode } from "react-icons/vsc";

export default function Nav() {
  const { theme, setTheme } = useTheme();

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
          <div className="d-flex justify-content-end align-items-center">
            <button className="navbar-theme-toggle d-lg-none" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}><VscColorMode width={50} height={50} /></button>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <Image
                src={MenuIcon}
                alt="Menu icon"
              />
            </button>
          </div>

          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/#aboutme">Sobre mim</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/portfolio">Portfolio</a>
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

          <button className="navbar-theme-toggle d-none d-lg-block" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}><VscColorMode width={50} height={50} /></button>
        </div>
      </nav>
    </>
  )
}