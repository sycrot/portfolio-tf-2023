import Image from "next/image";
import JavaScript from '../../public/assets/images/javascript.png'
import HTML from '../../public/assets/images/html.png'
import CSS from '../../public/assets/images/css.png'
import React from '../../public/assets/images/react.png'
import Next from '../../public/assets/images/next.png'
import TypeScript from '../../public/assets/images/typescript.png'
import Sass from '../../public/assets/images/sass.png'
import Bootstrap from '../../public/assets/images/bootstrap.png'
import Node from '../../public/assets/images/node.png'
import UxUi from '../../public/assets/images/ux-ui.png'

const skills = [
  {
    name: 'JavaScript',
    level: 4,
    image: JavaScript
  },
  {
    name: 'HTML',
    level: 5,
    image: HTML
  },
  {
    name: 'CSS',
    level: 4,
    image: CSS
  },
  {
    name: 'React',
    level: 4,
    image: React
  },
  {
    name: 'Next',
    level: 4,
    image: Next
  },
  {
    name: 'TypeScript',
    level: 4,
    image: TypeScript
  },
  {
    name: 'SASS',
    level: 4,
    image: Sass
  },
  {
    name: 'Bootstrap',
    level: 5,
    image: Bootstrap
  },
  {
    name: 'Node',
    level: 3,
    image: Node
  },
  {
    name: 'UX/UI',
    level: 2,
    image: UxUi
  },
]

function Levels(numLevels: number) {
  const levels = [];

  for (let i = 1; i <= numLevels; i++) {
    levels.push(i);
  }

  const handleTag = () => {
    let numLevels = levels.length
    return `${numLevels === 2 ? 'Júnior': ''}
    ${numLevels === 3 ? 'Intermediário': ''}
    ${numLevels === 4 ? 'Intermediário / avançado': ''}
    ${numLevels === 5 ? 'Avançado': ''}`
  }

  return (
    <div 
      className={`levels-content tag-${levels.length}`}>
      {levels.map(level => (
        <div key={level} className={`box-level box-level-${level}`} aria-label={handleTag()}></div>
      ))}
    </div>
  )
}



export default function SkillItem() {
  return (
    skills.map((value, index) => (
      <div key={index} className="col-12 col-md-4">
        <div className="skill-item">
          <div className="row">
            <div className="col-3">
              <div className="d-flex justify-content-center">
                <Image src={value.image} alt={value.name} />
              </div>
            </div>
            <div className="col-9">
              <p className="font-s16 fw-bold color-simpleblue mb-2">{value.name}</p>

              <div className="levels">
                {Levels(value.level)}

                <div className="mask-levels">
                  <div className={`box-level`}></div>
                  <div className={`box-level`}></div>
                  <div className={`box-level`}></div>
                  <div className={`box-level`}></div>
                  <div className={`box-level`}></div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    ))
  )
}