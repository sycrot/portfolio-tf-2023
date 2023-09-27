"use client"
import { useParams, useRouter } from "next/navigation";
import { posts, getRandomPosts } from "@/services/projects";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/app/footer";
import React, { useEffect } from "react";
import { Carousel } from "react-bootstrap";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import ProjectItem from "@/components/project-item";

export default function Project() {
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
    bgColor: ''
  }])
  const [randomPosts, setRandomPosts] = React.useState(getRandomPosts)
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
                <div className="col-12 col-md-2">
                  <Link href={value.repository} className="mb-4 mb-md-0" target="_blank"><i className="i-github-blue2"></i>Repositório</Link>
                </div>
                <div className="col-12 col-md-3">
                  {value.sitePreview !== '' && <Link href={value.sitePreview} className="preview" target="_blank"><i className="i-preview-blue"></i>Visualização (Preview site)</Link>}

                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6 pe-md-5 position-relative">
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
            </div>
          </div>
        </div>
      ))}

      <div className="see-more">
        <div className="container">
          <div className="title-section mb-3 mb-md-5"><h2>Veja mais</h2></div>
          <div className="row">
            {randomPosts.map((value, index) => (
              <ProjectItem key={index} image={value.image} title={value.title} text={value.text} link={value.link}/>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}