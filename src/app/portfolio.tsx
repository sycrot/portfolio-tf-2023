"use client"

import React from "react";
import Paginate from "@/components/paginate";
import { posts } from "@/services/projects";
import ProjectItem from "@/components/project-item";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function Portfolio() {
  const [projects, setProjects] = React.useState(posts);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [postsPerPage] = React.useState(4);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = projects.slice(indexOfFirstPost, indexOfLastPost);
  const maxPage = Math.ceil(projects.length / postsPerPage)

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
    ]
  };

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
            <Slider {...settings}>
              {projects.map((value, index) => (
                <ProjectItem key={index} image={value.image} title={value.title} text={value.text} link={value.link} />
              ))}
            </Slider>

            {/* <Paginate postsPerPage={postsPerPage} totalPosts={projects.length} paginate={paginate} previousPage={previousPage} nextPage={nextPage} currentPage={currentPage} maxPage={maxPage} /> */}
        </div>
      </div>
    </div>
  )
}