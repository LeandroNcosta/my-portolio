// AOS.init();

const rightArrow = document.querySelector('.right-arrow')
console.log(rightArrow)
const projectTitle = document.querySelector('.title-project')
const descriptionProject = document.querySelector('.project-description')
const projectImage = document.querySelector('.deploy')
const repositoryLink = document.querySelector(".btn-repository a")
const deployLink = document.querySelector(".btn-site a")
const leftArrow = document.querySelector('.left-arrow ')

const btnMode = document.querySelector('.mode')


const projects = [
  {
    name: 'cards-Yugioh',
    img: 'src/images-projects/yugioh.png',
    description: 'A aplicação é um baralho com as famosas cartinhas do YugiOh, as cartas tem algumas interações como Zomm hover, girar as cartas e esconder. Foram feitos com HTML5 e CSS3 para colocar um pouco em prática o CSS3 3d, perspective e rotacionar itens',
    deployLink: 'https://leandroncosta.github.io/cards-Yugioh/',
    repository: "https://github.com/LeandroNcosta/cards-Yugioh"
  },
  {
    name: 'Slides Pokémon',
    img: 'src/images-projects/pokemon-slides.png',
    description: 'A aplicação são slides / card com alguns personagens do anime Pokémon contendo algumas informações sobre o mesmo',
    deploy: 'https://leandroncosta.github.io/projeto-pokemonCards/',
    repository: "https://github.com/LeandroNcosta/projeto-pokemonCards"
  },
  {
    name: 'Conversor de temperaturas',
    img: 'src/images-projects/conversor-temperatura.png',
    description: 'A aplicação é um conversor de escalas termométricas que retorna a conversão entre Celsius, Fahrenheit e Kelvin conforme informado nos campos de input.',
    deploy: 'https://leandroncosta.github.io/temperature-converter/',
    repository: "https://github.com/LeandroNcosta/temperature-converter"
  },
  {
    name: 'RocketPay',
    img: 'src/images-projects/rocketpay.png',
    description: 'O Rocketpay é um componente que simula o formulário de preenchimento de cartão de crédito, onde é possível adicionar máscara aos inputs e atualizar elementos HTML via DOM.',
    deploy: 'https://rocket-5m8hdwybg-leandroncosta.vercel.app/',
    repository: "https://github.com/LeandroNcosta/rocketPay"
  },
]
let index = 0

rightArrow.addEventListener('click', () => {
  if (index > projects.length - 1) {
    return
  }
  projectTitle.textContent = projects[index].name
  descriptionProject.textContent = projects[index].description
  projectImage.style.backgroundImage = `url(${projects[index].img})`
  repositoryLink.setAttribute('href', projects[index].repository)
  deployLink.setAttribute('href', projects[index].deploy)
  index++

})

leftArrow.addEventListener('click', () => {
  console.log(index)
  if (index < 1) {
    return
  }
  index -= 2
  projectTitle.textContent = projects[index].name
  descriptionProject.textContent = projects[index].description
  projectImage.style.backgroundImage = `url(${projects[index].img})`
  repositoryLink.setAttribute('href', projects[index].repository)
  deployLink.setAttribute('href', projects[index].deploy)

})


const presentation = document.querySelector('.presentation')

btnMode.addEventListener('click', () => {
  presentation.classList.toggle('clear')
})

