"use client"
import { useParams, useRouter } from "next/navigation";
import { posts, getRandomPosts } from "@/services/projects";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/app/footer";
import { ProjectItem } from "@/app/portfolio";
import React, { useEffect } from "react";

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
    sitePreview: ''
    }])
  const [randomPosts, setRandomPosts] = React.useState(getRandomPosts)
  const router = useParams()

  useEffect(() => {
    const getPost = () => {
      let post = posts.filter(value => {
        return value.link === router.name
      })

      setPost(post as [])
    }
    getPost()
  }, [router.name])

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
              <div className="col-12 col-md-6 pe-md-5">
                <div className="title-section mb-md-5"><h2>Desktop</h2></div>
                <div className="row">
                  {value.imagesDesktop.map((value, index) => (
                    <div className="col-12 py-3 px-3" key={index}>
                      <div className="image-box">
                        <Image src={value.imageProject} alt="" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-12 col-md-6 mt-5 mt-md-0 ps-md-5">
                <div className="title-section mb-md-5"><h2>Mobile</h2></div>
                <div className="row">
                  {value.imagesMobile.map((value, index) => (
                    <div className="col-12 col-md-6 py-3 px-3 h-100" key={index}>
                      <div className="image-box">
                        <Image src={value.imageProject} alt="" />
                      </div>
                    </div>
                  ))}
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
            {randomPosts.map((value) => (
              ProjectItem(value.image, value.title, value.text, value.id, value.link)
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}