export const getColor = (name: string) => {
  const Color = {
    grass:{
      background: '#49D0B0',
      bgSecundary: '#5EDFC6',
      text: '#43AA90'
    },
    fire:{
      background: '#FB6C6C',
      bgSecundary: '#FD8585',
      text: '#d94c4c'
    },
    water:{
      background: '#77BDFE',
      bgSecundary: '#90D1FE',
      text: '#5FA2E2'
  
    },
    bug:{
      background: '#D4619C',
      bgSecundary: '#D6A0D2',
      text: '#ab3859'
  
    },
    normal:{
      background: '#c1c1c1',
      bgSecundary: '#989799',
      text: '#f2f2f2'
    },
    fighting:{
      text: '#aa5443',
      background: '#d08a49',
      bgSecundary: '#cb6b0a',
    },
    flying:{
      background: '#49D0B0',
      bgSecundary: '#5EDFC6',
      text: '#43AA90'
    },
    poison:{
      background: '#49D0B0',
      bgSecundary: '#5EDFC6',
      text: '#43AA90'
    },
    ground:{
      text: '#aa5443',
      background: '#d08a49',
      bgSecundary: '#cb6b0a',
  
    },
    rock:{
      background: '#D4619C',
      bgSecundary: '#D6A0D2',
      text: '#ab3859'
  
    },
    ghost:{
      background: '#3A139E',
      bgSecundary: '#5B0ACB',
      text: '#5032a8'
    },
    steel:{
      background: '#c1c1c1',
      bgSecundary: '#989799',
      text: '#f2f2f2'
    },
    electric:{
      text: '#aa5443',
      background: '#d08a49',
      bgSecundary: '#cb6b0a',
    },
    psychic:{
      background: '#3A139E',
      bgSecundary: '#5B0ACB',
      text: '#5032a8'
    },
    ice:{
      background: '#77BDFE',
      bgSecundary: '#90D1FE',
      text: '#5FA2E2'
    },
    dragon:{
      background: '#D4619C',
      bgSecundary: '#D6A0D2',
      text: '#ab3859'
    },
    dark:{
      background: '#3A139E',
      bgSecundary: '#5B0ACB',
      text: '#5032a8'
  
    },
    fairy:{
      background: '#D4619C',
      bgSecundary: '#D6A0D2',
      text: '#ab3859'
    },
    unknown:{
      background: '#c1c1c1',
      bgSecundary: '#989799',
      text: '#f2f2f2'
    },
    shadow:{
      background: '#3A139E',
      bgSecundary: '#5B0ACB',
      text: '#5032a8'
    },
    default:{
      background: '#c1c1c1',
      bgSecundary: '#989799',
      text: '#f2f2f2'
    }
  
  }
  switch (name) {
    case 'grass':
      return Color.grass  
    case 'fire':
      return Color.fire
    case 'water':
      return Color.water
    case 'bug':
      return Color.bug
    case 'normal':
      return Color.normal
    case 'fighting':
      return Color.fighting
    case 'flying': 
      return Color.flying
    case 'poison':
      return Color.poison
    case 'ground':
      return Color.ground
    case 'rock':
      return Color.rock
    case 'ghost':
      return Color.ghost
    case 'steel':
      return Color.steel
    case 'electric':
      return Color.electric
    case 'psychic':
      return Color.psychic
    case 'ice':
      return Color.ice
    case 'dragon':
      return Color.dragon
    case 'dark':
      return Color.dark
    case 'fairy':
       return Color.fairy
    case 'unknown':
       return Color.unknown
    case 'shadow':
        return Color.shadow
    case 'default':
        return Color.default
    default:
      return Color.default
  }
}

