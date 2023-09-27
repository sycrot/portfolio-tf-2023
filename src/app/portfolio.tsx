"use client"

import React from "react";
import Paginate from "@/components/paginate";
import { posts } from "@/services/projects";
import ProjectItem from "@/components/project-item";

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
              <ProjectItem key={index} image={value.image} title={value.title} text={value.text} link={value.link}/>
            ))}

            <Paginate postsPerPage={postsPerPage} totalPosts={projects.length} paginate={paginate} previousPage={previousPage} nextPage={nextPage} currentPage={currentPage} maxPage={maxPage} />
          </div>
        </div>
      </div>
    </div>
  )
}