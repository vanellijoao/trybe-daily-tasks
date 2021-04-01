
const resultCheck = (bet) => {
    const result = Math.ceil(Math.random() * 5)
    console.log(bet, result)
    return check(bet, result)    
}

const check = (bet, result) => {
    if (bet === result) {
        return `Parabéns! Sua Aposta foi ${bet} e o número sorteado foi ${result}`
    } else {
        return `Tente novamente! Sua Aposta foi ${bet} e o número sorteado foi ${result}`
    }
}

console.log(resultCheck(1))