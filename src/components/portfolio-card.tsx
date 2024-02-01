'use client'
import Link from "next/link"
import React from "react"
import Image from "next/image"
import ImageButton from '@/assets/images/angulo-circulo-esquerda.png'
import BannerImage1 from '@/assets/images/portfolio-card/image1.png'
import BannerImage2 from '@/assets/images/portfolio-card/image2.png'
import BannerImage3 from '@/assets/images/portfolio-card/image3.png'
import Rectangle from '@/assets/images/portfolio-card/rectangle.png'
import Circle from '@/assets/images/portfolio-card/circle.png'
import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: .8, ease: 'linear' } },
  hidden: { opacity: 0, scale: 0 }
};

const boxVariant2 = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'linear' } },
  hidden: { opacity: 0, scale: 0 }
};

const boxVariant3 = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.2, ease: 'linear' } },
  hidden: { opacity: 0, scale: 0 }
};

const rectangle = {
  visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: 'linear' } },
  hidden: { opacity: 0, scale: 0 }
};

const circle = {
  visible: { opacity: 1, scale: 1, transition: { duration: 1.2, ease: 'linear' } },
  hidden: { opacity: 0, scale: 0 }
};

const title = {
  visible: { opacity: 1, x: 0, transition: { duration: .5 } },
  hidden: { opacity: 0, x: 100 }
};

export default function PortfolioCard() {
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
    <div className="portfolio-card">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-5">
            <div className="banner-animation position-relative">
              <motion.div
                ref={ref}
                variants={boxVariant}
                initial="hidden"
                animate={control}
                className="image-1 position-absolute">
                <Image src={BannerImage1} alt="Projects" />
              </motion.div>
              <motion.div
                ref={ref}
                variants={boxVariant2}
                initial="hidden"
                animate={control}
                className="image-2 position-absolute">
                <Image src={BannerImage2} alt="Projects" />
              </motion.div>
              <motion.div
                ref={ref}
                variants={rectangle}
                initial="hidden"
                animate={control}
                className="rectangle position-absolute">
                <Image src={Rectangle} alt="Projects" />
              </motion.div>
              <motion.div
                ref={ref}
                variants={boxVariant3}
                initial="hidden"
                animate={control}
                className="image-3 position-absolute">
                <Image src={BannerImage3} alt="Projects" />
              </motion.div>
              <motion.div
                ref={ref}
                variants={circle}
                initial="hidden"
                animate={control}
                className="circle position-absolute">
                <Image src={Circle} alt="Projects" />
              </motion.div>
            </div>
          </div>
          <div className="col-12 col-md-7 d-flex align-items-center justify-content-end">
            <motion.div
              ref={ref}
              variants={title}
              initial="hidden"
              animate={control}
              className="link">
              <Link href="/portfolio" className="d-flex justify-content-end align-items-center gap-2 gap-md-4">
                <h1 className="mb-0">Veja alguns de meus trabalhos</h1>
                <Image src={ImageButton} alt="Navigate Button" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}