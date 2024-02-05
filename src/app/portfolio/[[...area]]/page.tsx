'use client'
import Paginate from "@/components/paginate";
import ProjectItem from "@/components/project-item";
import { posts } from "@/services/projects";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

export default function Portfolio() {
  const [projects, setProjects] = React.useState(posts);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [postsPerPage] = React.useState(12);
  const router = useParams()

  React.useEffect(() => {
    const handleProjects = () => {
      if (router.area) {
        const resProjects: any = []
        projects.map((project: any) => {
          project.areas.map((item: any) => {
            if (item === router.area) {
              resProjects.push(project)
            }
          })
        })

        setProjects(resProjects)
      }
    }
    handleProjects()
  }, [])

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = projects.slice(indexOfFirstPost, indexOfLastPost);
  const maxPage = Math.ceil(projects.length / postsPerPage)

  const handleActive = (area: string) => {
    if (router.area) {
      if (router.area === area) return 'active'
      else return ''
    } else {
      return ''
    }
  }

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  const previousPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1)
  }

  const nextPage = () => {
    if (currentPage !== maxPage) setCurrentPage(currentPage + 1)
  }

  return (
    <div className="portfolio-page">
      <div className="header-title">
        <div className="container">
          <div className="text">
            <h1>Portfolio</h1>
          </div>
        </div>
      </div>

      <div className="container content">
        <div className="submenu">
          <Link href="/portfolio" className={`${!router.area ? 'active' : ''}`}>Todos</Link>
          <Link href="/portfolio/devlopment" className={`${handleActive('devlopment')}`}>Desenvolvimento</Link>
          <Link href="/portfolio/ux-ui" className={`${handleActive('ux-ui')}`}>UX/UI Design</Link>
          <Link href="/portfolio/design" className={`${handleActive('design')}`}>Design gráfico</Link>
          <Link href="/portfolio/video-design" className={`${handleActive('video-design')}`}>Edição/Criação de video</Link>
        </div>

        <div className="projects">
          <div className="row">
            {currentPosts.map((item: any, index: any) => (
              <div className="col-12 col-md-3" key={item.id}>
                <ProjectItem image={item.image} title={item.title} text={item.text} link={item.link} />
              </div>
            ))}

            {projects.length >= 12 &&
              <Paginate postsPerPage={postsPerPage} totalPosts={projects.length} paginate={paginate} previousPage={previousPage} nextPage={nextPage} currentPage={currentPage} maxPage={maxPage} />
            }

          </div>
        </div>
      </div>
    </div>
  )
}