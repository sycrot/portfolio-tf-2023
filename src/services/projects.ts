import MultiStepImage from "@/assets/images/projects/multi-step-form.jpg"
import EccomerceTechDay from "@/assets/images/projects/eccomerce-tech-day.jpg"
import CalculatorMultiThemes from "@/assets/images/projects/calculator-multi-theme.jpg"
import GitHubUserSearch from "@/assets/images/projects/github-user-search.jpg"

import MultiStep1 from '@/assets/images/projects/multi-step/1.png'
import MultiStep2 from '@/assets/images/projects/multi-step/2.png'
import MultiStep3 from '@/assets/images/projects/multi-step/3.png'
import MultiStep4 from '@/assets/images/projects/multi-step/4.png'

import MultiStepMobile1 from '@/assets/images/projects/multi-step/1_mobile.png'
import MultiStepMobile2 from '@/assets/images/projects/multi-step/2_mobile.png'
import MultiStepMobile3 from '@/assets/images/projects/multi-step/3_mobile.png'
import MultiStepMobile4 from '@/assets/images/projects/multi-step/4_mobile.png'

import TechDayCarrefour1 from '@/assets/images/projects/eccomerce-carrefour-tech-day/1.png'
import TechDayCarrefour2 from '@/assets/images/projects/eccomerce-carrefour-tech-day/2.png'
import TechDayCarrefour3 from '@/assets/images/projects/eccomerce-carrefour-tech-day/3.png'
import TechDayCarrefourMobile1 from '@/assets/images/projects/eccomerce-carrefour-tech-day/1_mobile.png'
import TechDayCarrefourMobile2 from '@/assets/images/projects/eccomerce-carrefour-tech-day/2_mobile.png'
import TechDayCarrefourMobile3 from '@/assets/images/projects/eccomerce-carrefour-tech-day/3_mobile.png'

import CalculatorMultiThemes1 from '@/assets/images/projects/calculator-multi-themes/1.png'
import CalculatorMultiThemes2 from '@/assets/images/projects/calculator-multi-themes/2.png'
import CalculatorMultiThemesMobile1 from '@/assets/images/projects/calculator-multi-themes/1_mobile.png'
import CalculatorMultiThemesMobile2 from '@/assets/images/projects/calculator-multi-themes/2_mobile.png'

import GitHubUser1 from '@/assets/images/projects/git-user-search/1.png'
import GitHubUser2 from '@/assets/images/projects/git-user-search/2.png'
import GitHubUserMobile2 from '@/assets/images/projects/git-user-search/2_mobile.png'
import GitHubUserMobile1 from '@/assets/images/projects/git-user-search/1_mobile.png'

import TipCalculator from '@/assets/images/projects/tip_calculator.jpg'
import TipCalculator1 from '@/assets/images/projects/tip-calculator/1.png'
import TipCalculatorMobile from '@/assets/images/projects/tip-calculator/1_mobile.png'

import MonkeyChat from '@/assets/images/projects/monkey-chat.jpg'
import MonkeyChat1 from '@/assets/images/projects/monkey-chat/1.png'
import MonkeyChat2 from '@/assets/images/projects/monkey-chat/2.png'
import MonkeyChat3 from '@/assets/images/projects/monkey-chat/3.png'
import MonkeyChat1Mobile from '@/assets/images/projects/monkey-chat/1_mobile.png'
import MonkeyChat12Mobile from '@/assets/images/projects/monkey-chat/1_2_mobile.png'
import MonkeyChat2Mobile from '@/assets/images/projects/monkey-chat/2_mobile.png'
import MonkeyChat3Mobile from '@/assets/images/projects/monkey-chat/3_mobile.png'

import MusicalThing from '@/assets/images/projects/musical-thing.jpg'
import MusicalThing1 from '@/assets/images/projects/musical-thing/capture1.png'
import MusicalThing2 from '@/assets/images/projects/musical-thing/capture2.png'
import MusicalThing3 from '@/assets/images/projects/musical-thing/capture3.png'
import MusicalThing4 from '@/assets/images/projects/musical-thing/capture4.png'
import MusicalThing5 from '@/assets/images/projects/musical-thing/capture5.png'
import MusicalThing6 from '@/assets/images/projects/musical-thing/capture6.png'

export const posts = [
  {
    id: 7,
    title: 'Musical Thing',
    image: MusicalThing,
    text: 'Next project',
    link: 'musical-thing',
    description: `Aplicação web voltada para streaming de musicas. Os dados das playlists, albuns, musicas, uruarios e artistas sao consultados atraves da Web API | Spotify For Developers.`,
    imagesMobile: [
      
    ],
    imagesDesktop: [
      {
        imageProject: MusicalThing1
      },
      {
        imageProject: MusicalThing2
      },
      {
        imageProject: MusicalThing3
      },
      {
        imageProject: MusicalThing4
      },
      {
        imageProject: MusicalThing5
      },
      {
        imageProject: MusicalThing6
      },
    ],
    repository: 'https://github.com/sycrot/musical-thing',
    sitePreview: '',
    design: 'https://www.figma.com/file/2cmRMP5Diw9Io8CYQKfR4y/Musical-Thing?type=design&node-id=0%3A1&mode=design&t=Jr4nDhJ9blkDLgkQ-1',
    bgColor: '#ffffff'
  },
  {
    id: 6,
    title: 'Monkey Chat',
    image: MonkeyChat,
    text: 'Next project',
    link: 'monkey-chat',
    description: `Aplicação web de chat, utilizando next, firebase e redux.
    Nesse chat você pode enviar mensagens de texto e imagem em realtime, ver se usuários estão online, apagar a própria mensagem, criar e alterar seu usuário`,
    imagesMobile: [
      {
        imageProject: MonkeyChat1Mobile
      },
      {
        imageProject: MonkeyChat12Mobile
      },
      {
        imageProject: MonkeyChat2Mobile
      },
      {
        imageProject: MonkeyChat3Mobile
      },
    ],
    imagesDesktop: [
      {
        imageProject: MonkeyChat1
      },
      {
        imageProject: MonkeyChat2
      },
      {
        imageProject: MonkeyChat3
      },
    ],
    repository: 'https://github.com/sycrot/monkey-chat',
    sitePreview: '',
    design: 'https://www.figma.com/file/vVjs4Od2M51a1D90O9EcsT/monkey-chat?type=design&mode=design&t=VtFpbqQ3LO30ALbg-1',
    bgColor: '#061E21'
  },
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
    sitePreview: 'https://multi-step-form-five-rose.vercel.app/',
    bgColor: '#EEF8FF'
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
    sitePreview: 'https://ecommerce-carrefour-tech-day-dio.vercel.app/',
    bgColor: '#fff'
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
    sitePreview: 'https://sycrot.github.io/calculator-app-main/',
    bgColor: '#314565'
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
    sitePreview: 'https://sycrot.github.io/github-user-search/',
    bgColor: '#07162C'
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
    sitePreview: 'https://sycrot.github.io/tip_calculator_app/',
    bgColor: '#B9E6E9'
  },
]

export function getRandomPosts(id: number) {
  const postsEquals: any = posts.filter(value => value.id !== id)
  return postsEquals?.sort(() => 0.5 - Math.random()).slice(0, 4)
}