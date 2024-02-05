'use client'
import Image, { StaticImageData } from "next/image";
import JavaScript from '@/assets/images/javascript.png'
import HTML from '@/assets/images/html.png'
import CSS from '@/assets/images/css.png'
import ReactImg from '@/assets/images/react.png'
import Next from '@/assets/images/next.png'
import TypeScript from '@/assets/images/typescript.png'
import Sass from '@/assets/images/sass.png'
import Bootstrap from '@/assets/images/bootstrap.png'
import Node from '@/assets/images/node.png'
import UxUi from '@/assets/images/ux-ui.png'
import Redux from '@/assets/images/redux-logo.png'
import Tailwind from '@/assets/images/tailwindcss.png'
import Figma from '@/assets/images/figma.png'
import Xd from '@/assets/images/xd.png'
import Illustrator from '@/assets/images/illustrator2.png'
import Photoshop from '@/assets/images/photoshop.png'
import AfterEffects from '@/assets/images/after-effects.png'
import VegasPro from '@/assets/images/sony-vegas.png'
import React from "react";
import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

type Skills = {
  name: string,
  level: number,
  image: StaticImageData
}

const skillsDev: Skills[] = [
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
    image: ReactImg
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
    level: 2,
    image: Node
  },
  {
    name: 'UX/UI',
    level: 2,
    image: UxUi
  },
  {
    name: 'Redux',
    level: 1,
    image: Redux
  },
  {
    name: 'Tailwind',
    level: 4,
    image: Tailwind
  }
]

const skillsDesing: Skills[] = [
  {
    name: 'Figma',
    level: 4,
    image: Figma
  },
  {
    name: 'Adobe XD',
    level: 3,
    image: Xd
  },
  {
    name: 'Adobe Illustrator',
    level: 2,
    image: Illustrator
  },
  {
    name: 'Adobe PhotoShop',
    level: 4,
    image: Photoshop
  },
]

const skillsVideoEdit: Skills[] = [
  {
    name: 'Vegas Pro',
    level: 4,
    image: VegasPro
  },
  {
    name: 'Adobe After Effects',
    level: 2,
    image: AfterEffects
  },
]

function Levels(numLevels: number) {
  const levels = [];
  const lastLevels = []

  for (let i = 1; i <= numLevels; i++) {
    levels.push(i);
  }

  for (let i = numLevels + 1; i <= 5; i++) {
    lastLevels.push(i)
  }

  const handleTag = () => {
    let numLevels = levels.length
    return `
    ${numLevels === 1 ? 'Iniciante' : ''}
    ${numLevels === 2 ? 'Júnior' : ''}
    ${numLevels === 3 ? 'Intermediário' : ''}
    ${numLevels === 4 ? 'Intermediário / avançado' : ''}
    ${numLevels === 5 ? 'Avançado' : ''}
    `
  }

  return (
    <div
      className={`levels-content tag-${levels.length}`}>
      {levels.map(level => (
        <div key={level} className={`box-level box-level-${level}`} aria-label={handleTag()}></div>
      ))}
      {
        lastLevels.map(level => (
          <div key={level} className={`box-level`} aria-label={handleTag()}></div>
        ))
      }
    </div>
  )
}

interface Props {
  skillsType: string
}

const boxVariant = {
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: .3, ease: 'linear' } },
  hidden: { opacity: 0, scale: 0, y: -40 }
};


export default function SkillItem(props: Props) {
  const [skills, setSkills] = React.useState<Skills[]>()
  const control = useAnimation();
  const [ref, inView] = useInView();

  React.useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  React.useEffect(() => {
    const getSkills = () => {
      if (props.skillsType === 'devlopment') {
        setSkills(skillsDev)
      } else if (props.skillsType === 'design') {
        setSkills(skillsDesing)
      } else if (props.skillsType === 'videoedit') {
        setSkills(skillsVideoEdit)
      }
    }
    getSkills()
  }, [props.skillsType])


  return (
    skills?.map((value: any, index: any) => (
      <motion.div
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
        key={index}
        className="col-12 col-md-4">
        <div className="skill-item">
          <div className="row">
            <div className="col-3">
              <div className="d-flex justify-content-center">
                <Image src={value.image} alt={value.name} />
              </div>
            </div>
            <div className="col-9">
              <p className="font-s16 fw-bold color-marineblue mb-2">{value.name}</p>

              <div className="levels">
                {Levels(value.level)}
              </div>

            </div>
          </div>
        </div>
      </motion.div>
    ))
  )
}