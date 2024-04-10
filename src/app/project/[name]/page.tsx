"use client"
import { useParams } from "next/navigation";
import { posts, getRandomPosts } from "@/services/projects";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/app/footer";
import React, { useEffect } from "react";
import { Carousel, Toast, ToastContainer } from "react-bootstrap";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import ProjectItem from "@/components/project-item";
import ShareImage from '@/assets/images/share.png'

export default function Project() {
  const [showAlert, setShowAlert] = React.useState(false);
  const [post, setPost] = React.useState([{
    id: 0,
    title: '',
    image: '',
    text: '',
    link: '',
    description: '',
    imagesMobile: [
      {
        imageProject: ''
      },
      {
        imageProject: ''
      },
    ],
    imagesDesktop: [
      {
        imageProject: ''
      },
      {
        imageProject: ''
      },
    ],
    repository: '',
    sitePreview: '',
    design: '',
    bgColor: '',
    iframeCod: ''
  }])
  const [bgColor, setBgColor] = React.useState('')
  const router = useParams()

  useEffect(() => {
    const getPost = () => {
      let post = posts.filter(value => {
        return value.link === router.name
      })

      post.forEach(e => {
        setBgColor(e.bgColor)
      })

      setPost(post as [])
    }
    getPost()
  }, [router.name])

  const handleCursor = (e: any) => {
    if (e.type === 'mousedown') {
      e.target.style = 'cursor: grab;'
    } else {
      e.target.style = 'cursor: zoom-in;'
    }
  }

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href)
    setShowAlert(true)
  }

  return (
    <div id="projectPortfolio">

      {post.map((value, index) => (
        <div className="" key={index}>
          <title>{`TF | ${value.title}`}</title>
          <div className="header-project">
            <div className="container">
              <div className="title-portfolio-project">
                <h1 className="mb-0">{value.title}</h1>
              </div>
              <p className="mb-0">{value.description}</p>
              <div className="row links">
                {value.repository &&
                  <div className="col-12 col-md-2">
                    <Link href={value.repository} className="mb-4 mb-md-0" target="_blank"><i className="i-github-blue2"></i>Repositório</Link>
                  </div>
                }
                {value.sitePreview &&
                  <div className="col-12 col-md-3">
                    <Link href={value.sitePreview ?? ''} className="preview" target="_blank"><i className="i-preview-blue"></i>Visualização (Preview site)</Link>
                  </div>
                }
                {value.design &&
                  <div className="col-12 col-md-3">
                    <Link href={value.design ?? ''} className="preview" target="_blank"><i className="i-layout-design">
                    </i>Design (UX/UI)
                    </Link>
                  </div>
                }
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              {value.iframeCod &&
                <div className="col-12">
                  <div className="px-md-3">
                    <div className="iframe-content">
                      <iframe src={value.iframeCod} height="100%" width="100%" allowFullScreen frameBorder="0" allow="clipboard-write" referrerPolicy="strict-origin-when-cross-origin" style={{ width: '100%', height: '100%' }}></iframe>
                    </div>
                  </div>
                </div>
              }
              {value.imagesDesktop.length > 0 &&
                <div className={`col-12 ${value.imagesMobile.length > 0 && 'col-md-6 pe-md-5'} position-relative`}>
                  <div className="title-section mb-md-5"><h2>Desktop</h2></div>
                  <div className="row position-relative">
                    <Carousel>
                      {value.imagesDesktop.map((value, index) => (
                        <Carousel.Item key={index}>
                          <TransformWrapper
                            initialScale={1}
                          >
                            {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                              <React.Fragment>
                                <div className="py-3 px-3" onMouseDown={handleCursor} onMouseUp={handleCursor} onMouseOut={() => resetTransform()}>
                                  <div className="image-box" style={{ background: bgColor }}>
                                    <TransformComponent>
                                      <Image src={value.imageProject} alt={index.toString()} priority />
                                    </TransformComponent>
                                  </div>
                                </div>
                              </React.Fragment>
                            )}
                          </TransformWrapper>
                        </Carousel.Item>
                      ))}
                    </Carousel>
                  </div>
                </div>
              }

              {value.imagesMobile.length > 0 &&
                <div className="col-12 col-md-6 mt-5 mt-md-0 ps-md-5">
                  <div className="title-section mb-md-5"><h2>Mobile</h2></div>
                  <div className="row position-relative">
                    <Carousel>
                      {value.imagesMobile.map((value, index) => (
                        <Carousel.Item key={index}>
                          <TransformWrapper
                            initialScale={1}
                          >
                            {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                              <React.Fragment>
                                <div className="py-3 px-3 h-100" onMouseDown={handleCursor} onMouseUp={handleCursor} onMouseOut={() => resetTransform()}>
                                  <div className="image-box mobile" style={{ background: bgColor }}>
                                    <TransformComponent>
                                      <Image src={value.imageProject} alt={index.toString()} />
                                    </TransformComponent>
                                  </div>
                                </div>
                              </React.Fragment>

                            )}
                          </TransformWrapper>
                        </Carousel.Item>
                      ))}
                    </Carousel>
                  </div>
                </div>
              }

            </div>
          </div>
        </div>
      ))}

      <div className="container d-flex justify-content-end">
        <button className="sharebutton" onClick={handleShare}><p>Compartilhar</p><Image src={ShareImage} alt="Compartilhar" /></button>
      </div>

      <ToastContainer position="bottom-start" className="position-fixed ms-5 mb-5">
        <Toast onClose={() => setShowAlert(false)} show={showAlert} delay={1500} autohide className="toast-left">
          <Toast.Body>Link copiado para área de transferência</Toast.Body>
        </Toast>
      </ToastContainer>


      <div className="see-more">
        <div className="container">
          <div className="title-section mb-3 mb-md-5"><h2>Veja mais</h2></div>
          <div className="row">
            {getRandomPosts(post[0].id).map((value: any, index: any) => (
              <div className="col-12 col-md-3" key={index}>
                <ProjectItem image={value.image} title={value.title} text={value.text} link={value.link} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}