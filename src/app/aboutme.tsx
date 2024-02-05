'use client'
import React from "react";
import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

const boxVariant = {
  visible: { opacity: 1, x: 0, transition: { duration: .7, ease: 'linear' } },
  hidden: { opacity: 0, x: -100 }
};

const boxVariant2 = {
  visible: { opacity: 1, x: 0, transition: { duration: .6, ease: 'linear' } },
  hidden: { opacity: 0, x: -100 }
};

const boxVariant3 = {
  visible: { opacity: 1, x: 0, transition: { duration: .4, ease: 'linear' } },
  hidden: { opacity: 0, x: -100 }
};

const boxVariant4 = {
  visible: { opacity: 1, x: 0, transition: { duration: .2, ease: 'linear' } },
  hidden: { opacity: 0, x: -100 }
};

const textVariant = {
  visible: { opacity: 1, y: 0, transition: { duration: .3, ease: 'linear' } },
  hidden: { opacity: 0, y: -100 }
};

const yearVariant = {
  visible: { opacity: 1, y: 0, transition: { duration: .7, ease: 'linear' } },
  hidden: { opacity: 0, y: -100 }
};

const yearVariant2 = {
  visible: { opacity: 1, y: 0, transition: { duration: .6, ease: 'linear' } },
  hidden: { opacity: 0, y: -100 }
};

const yearVariant3 = {
  visible: { opacity: 1, y: 0, transition: { duration: .4, ease: 'linear' } },
  hidden: { opacity: 0, y: -100 }
};

const yearVariant4 = {
  visible: { opacity: 1, y: 0, transition: { duration: .2, ease: 'linear' } },
  hidden: { opacity: 0, y: -100 }
};


function TimelineContent(year: string, text: string, variant: any, variantYear: any) {
  const control = useAnimation();
  const [ref, inView] = useInView();

  React.useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <div className="col-12 col-md-3 timeline-item">
      <div className="timeline-content">
        <motion.div
          ref={ref}
          variants={variantYear}
          initial="hidden"
          animate={control}
          className="timeline-year">
          <span>{year}</span>
        </motion.div>
        <motion.div
          ref={ref}
          variants={variant}
          initial="hidden"
          animate={control}
          className="timeline-text">
          <p>{text}</p>
        </motion.div>
      </div>
    </div>
  )
}

export default function Aboutme() {
  const control = useAnimation();
  const [ref, inView] = useInView();

  React.useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <>
      <div id="aboutme">
        <div className="container">
          <div className="title-section">
            <h2 className="mb-0">Sobre mim</h2>
          </div>

          <div className="content">
            <div className="row">
              {TimelineContent("2017", "Trabalhei como designer gráfico, editor de vídeo, motion design e social media utilizando as habilidades que havia adquirido ao longo da vida, e iniciei meus estudos com desenvolvimento e programação.", boxVariant, yearVariant)}
              {TimelineContent("2020", "Graduação em ADS (Análise e Desenvolvimento de Sistemas) com foco em desenvolvimento web e por cerca de dois anos trabalhei como freelancer com design gráfico, edição de vídeos e desenvolvimento frontend.", boxVariant2, yearVariant2)}
              {TimelineContent("2022", "Após estudar bastante tecnologia e desenvolvimento, consegui meu primeiro emprego em julho como desenvolvedor fullstack e logo depois, em setembro migrei para outra empresa atuando como desenvolvedor frontend.", boxVariant3, yearVariant3)}
              {TimelineContent("2023", "Atualmente trabalho como freelancer em tempo integral com desenvolvimento frontend, design gráfico e afins", boxVariant4, yearVariant4)}
            </div>

            <motion.div
              ref={ref}
              variants={textVariant}
              initial="hidden"
              animate={control}
              className="mt-4">
              <p className="text-justify mb-0">Desde sempre gosto muito de tecnologia. No começo ainda tinha um pouco de confusão em qual área da programação/desenvolvimento me colocar, mas depois de um tempo vi que o desenvolvimento web era o que eu mais tinha afinidade.</p><br />
              <p className="text-justify mb-0">Juntei algumas habilidades de design gráfico que eu já tinha e comecei a aprender e me aprimorar na área de desenvolvimento web. Hoje já entendo de algumas tecnologias voltadas para frontend e outras para backend. Além disso, nunca parei de praticar minhas habilidades com design gráfico e web design.</p>
            </motion.div>
          </div>
        </div>

      </div>
    </>
  )
}