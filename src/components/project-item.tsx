'use client'
import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"

interface Props {
  image: StaticImageData
  title: string
  text: string
  link: string
}

export default function ProjectItem(props: Props) {
  const router = useRouter()

  const handleProjectView = () => {
    router.push(`/project/${props.link}`)
  }

  return (
    <div className="portfolio-item" onClick={handleProjectView}>
      <div className="image-portfolio">
        <div className="content">
          <Image src={props.image} alt={props.title} />
        </div>
      </div>

      <div className="content-texts d-flex justify-content-between">
        <div className="texts">
          <p className="title-project mb-0 color-simpleblue fw-medium">{props.title}</p>
          <span className="mb-0 fw-light color-gray">{props.text}</span>
        </div>
        <Link href={`/project/${props.link}`} className="button-more-blue mt-2"></Link>

      </div>
    </div>
  )
}