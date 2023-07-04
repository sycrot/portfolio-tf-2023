"use client"
import Image, { StaticImageData } from "next/image"
import React from "react";
import Paginate from "@/components/paginate";
import Link from "next/link"
import { posts } from "@/services/projects";
import { useRouter } from "next/navigation";

export function ProjectItem(image: StaticImageData, title: string, text: string, index: number, link: string) {
  const router = useRouter()

  const handleProjectView = () => {
    router.push(`/project/${link}`)
  }

  return (
    <div key={index} className="cursor-pointer col-12 col-md-3 text-decoration-none" onClick={handleProjectView}>
      <div className="portfolio-item">
        <div className="image-portfolio">
          <div className="content">
            <Image src={image} alt={title}/>
          </div>
        </div>

        <div className="content-texts d-flex justify-content-between">
          <div className="texts">
            <p className="title-project mb-0 color-simpleblue fw-medium">{title}</p>
            <span className="mb-0 fw-light color-gray">{text}</span>
          </div>
          <Link href={`/project/${link}`} className="button-more-blue mt-2"></Link>

        </div>
      </div>
    </div>
  )
}

export default function Portfolio() {
  const [projects, setProjects] = React.useState(posts);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [postsPerPage] = React.useState(4);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = projects.slice(indexOfFirstPost, indexOfLastPost);
  const maxPage = Math.ceil(projects.length / postsPerPage)

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
    <div id="portfolio">
      <div className="container">
        <div className="title-section">
          <h2 className="mb-0">Portfolio</h2>
        </div>

        <div className="content">
          <div className="row">
            {currentPosts.map((value, index) => (
              ProjectItem(value.image, value.title, value.text, index, value.link)
            ))}

            <Paginate postsPerPage={postsPerPage} totalPosts={projects.length} paginate={paginate} previousPage={previousPage} nextPage={nextPage} currentPage={currentPage} maxPage={maxPage} />
          </div>
        </div>
      </div>
    </div>
  )
}