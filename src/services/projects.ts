import MultiStepImage from "../../public/assets/images/projects/multi-step-form.jpg"
import EccomerceTechDay from "../../public/assets/images/projects/eccomerce-tech-day.jpg"
import CalculatorMultiThemes from "../../public/assets/images/projects/calculator-multi-theme.jpg"
import GitHubUserSearch from "../../public/assets/images/projects/github-user-search.jpg"

import MultiStep1 from '../../public/assets/images/projects/multi-step/1.png'
import MultiStep2 from '../../public/assets/images/projects/multi-step/2.png'
import MultiStep3 from '../../public/assets/images/projects/multi-step/3.png'
import MultiStep4 from '../../public/assets/images/projects/multi-step/4.png'

import MultiStepMobile1 from '../../public/assets/images/projects/multi-step/1_mobile.png'
import MultiStepMobile2 from '../../public/assets/images/projects/multi-step/2_mobile.png'
import MultiStepMobile3 from '../../public/assets/images/projects/multi-step/3_mobile.png'
import MultiStepMobile4 from '../../public/assets/images/projects/multi-step/4_mobile.png'

import TechDayCarrefour1 from '../../public/assets/images/projects/eccomerce-carrefour-tech-day/1.png'
import TechDayCarrefour2 from '../../public/assets/images/projects/eccomerce-carrefour-tech-day/2.png'
import TechDayCarrefour3 from '../../public/assets/images/projects/eccomerce-carrefour-tech-day/3.png'
import TechDayCarrefourMobile1 from '../../public/assets/images/projects/eccomerce-carrefour-tech-day/1_mobile.png'
import TechDayCarrefourMobile2 from '../../public/assets/images/projects/eccomerce-carrefour-tech-day/2_mobile.png'
import TechDayCarrefourMobile3 from '../../public/assets/images/projects/eccomerce-carrefour-tech-day/3_mobile.png'

import CalculatorMultiThemes1 from '../../public/assets/images/projects/calculator-multi-themes/1.png'
import CalculatorMultiThemes2 from '../../public/assets/images/projects/calculator-multi-themes/2.png'
import CalculatorMultiThemesMobile1 from '../../public/assets/images/projects/calculator-multi-themes/1_mobile.png'
import CalculatorMultiThemesMobile2 from '../../public/assets/images/projects/calculator-multi-themes/2_mobile.png'

import GitHubUser1 from '../../public/assets/images/projects/git-user-search/1.png'
import GitHubUser2 from '../../public/assets/images/projects/git-user-search/2.png'
import GitHubUserMobile2 from '../../public/assets/images/projects/git-user-search/2_mobile.png'
import GitHubUserMobile1 from '../../public/assets/images/projects/git-user-search/1_mobile.png'

import TipCalculator from '../../public/assets/images/projects/tip_calculator.jpg'
import TipCalculator1 from '../../public/assets/images/projects/tip-calculator/1.png'
import TipCalculatorMobile from '../../public/assets/images/projects/tip-calculator/1_mobile.png'

export const posts = [
  {
    id: 1,
    title: 'Multi Step Form',
    image: MultiStepImage,
    text: 'React project',
    link: 'multi-step-form',
    description: 'Formulário com etapas (multi-step) desenvolvido como solução para desafio do Frontend Mentor construído com React + TypeScript e estilizado com SASS. Utilizando Formik & yup para validação de formulários',
    imagesMobile: [
      {
        imageProject: MultiStepMobile1
      },
      {
        imageProject: MultiStepMobile2
      },
      {
        imageProject: MultiStepMobile3
      },
      {
        imageProject: MultiStepMobile4
      },
    ],
    imagesDesktop: [
      {
        imageProject: MultiStep1
      },
      {
        imageProject: MultiStep2
      },
      {
        imageProject: MultiStep3
      },
      {
        imageProject: MultiStep4
      },
    ],
    repository: 'https://github.com/sycrot/multi-step-form',
    sitePreview: 'https://multi-step-form-five-rose.vercel.app/'
  },
  {
    id: 2,
    title: 'Eccomerce TechDay Carrefour',
    image: EccomerceTechDay,
    text: 'React project',
    link: 'eccomerce-techday-carrefour',
    description: 'Desenvolvido para o Carrefour Tech Day da Digital Innovation One. Utilizando de uma das APIs do Carrefour para o desenvolvimento de um site ecommerce. Construído com React + TypeScript e styled-components para estilização.',
    imagesMobile: [
      {
        imageProject: TechDayCarrefourMobile1
      },
      {
        imageProject: TechDayCarrefourMobile3
      }
    ],
    imagesDesktop: [
      {
        imageProject: TechDayCarrefour1
      },
      {
        imageProject: TechDayCarrefour2
      },
      {
        imageProject: TechDayCarrefour3
      },
    ],
    repository: 'https://github.com/sycrot/ecommerce-carrefour-tech-day-dio',
    sitePreview: 'https://ecommerce-carrefour-tech-day-dio.vercel.app/'
  },
  {
    id: 3,
    title: 'Calculator Multi Themes',
    image: CalculatorMultiThemes,
    text: 'Javascript Project',
    link: 'calculator-multi-themes',
    description: 'Calculadora multi temas desenvolvido como solução para o desafio Calculator app do Frontend Mentor.',
    imagesMobile: [
      {
        imageProject: CalculatorMultiThemesMobile1
      },
      {
        imageProject: CalculatorMultiThemesMobile2
      },
    ],
    imagesDesktop: [
      {
        imageProject: CalculatorMultiThemes1
      },
      {
        imageProject: CalculatorMultiThemes2
      },
    ],
    repository: 'https://github.com/sycrot/calculator-app-main',
    sitePreview: 'https://sycrot.github.io/calculator-app-main/'
  },
  {
    id: 4,
    title: 'GitHub user search',
    image: GitHubUserSearch,
    text: 'Javascript Project',
    link: 'github-user-search',
    description: 'Site de procura de usuários do GitHub',
    imagesMobile: [
      {
        imageProject: GitHubUserMobile1
      },
      {
        imageProject: GitHubUserMobile2
      },
    ],
    imagesDesktop: [
      {
        imageProject: GitHubUser1
      },
      {
        imageProject: GitHubUser2
      },
    ],
    repository: 'https://github.com/sycrot/github-user-search',
    sitePreview: 'https://sycrot.github.io/github-user-search/'
  },
  {
    id: 5,
    title: 'Tip Calculator',
    image: TipCalculator,
    text: 'Javascript Project',
    link: 'tip-calculator',
    description: 'Calculadora de gorjetas. Calcula o um total de gorjetas de acordo com a porcentagem e divide o valor entre cada pessoa',
    imagesMobile: [
      {
        imageProject: TipCalculatorMobile
      }
    ],
    imagesDesktop: [
      {
        imageProject: TipCalculator1
      },
    ],
    repository: 'https://github.com/sycrot/tip_calculator_app',
    sitePreview: 'https://sycrot.github.io/tip_calculator_app/'
  },
]

export function getRandomPosts() {
  return posts.sort(() => 0.5 - Math.random()).slice(0, 4)
}