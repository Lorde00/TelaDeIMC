function getInfo() {
    let name = document.querySelector("#name").value
    let weight = document.querySelector("#weight").value
    let height = document.querySelector("#height").value

    return {
        name,
        weight,
        height
    }
}

function rightName(name) {
    let firstLetter = name.charAt(0)
    let firstLetterUpper = firstLetter.toUpperCase()
    let cutName = name.slice(1).toLowerCase()
    let finalName = firstLetterUpper + cutName
    return finalName
}

function calcIMC(name, weight, height) {
    let result = (weight / (height * height))

    if (result < 16) {
        return `${name}, seu IMC está em ${result.toFixed(1)} e a sua classsificação é de: baixo peso muito grave`
    } else {
        if (result >= 16 && result < 17) {
            return `${name}, seu IMC está em ${result.toFixed(1)} e a sua classsificação é de: baixo peso grave`
        } else {
            if (result >= 17 && result < 18.50) {
                return `${name}, seu IMC está em ${result.toFixed(1)} e a sua classsificação é de: baixo peso`
            } else {
                if (result >= 18.50 && result < 25) {
                    return `${name}, seu IMC está em ${result.toFixed(1)} e a sua classsificação é de: na média`
                } else {
                    if (result >= 25 && result < 30) {
                        return `${name}, seu IMC está em ${result.toFixed(1)} e a sua classsificação é de: sobrepeso`
                    } else {
                        if (result >= 30 && result < 35) {
                            return `${name}, seu IMC está em ${result.toFixed(1)} e a sua classsificação é de: obesidade grau I`
                        } else {
                            if (result >= 35 && result < 40) {
                                return `${name}, seu IMC está em ${result.toFixed(1)} e a sua classsificação é de: obesidade grau II`
                            } else {
                                if (result >= 40) {
                                    return `${name}, seu IMC está em ${result.toFixed(1)} e a sua classsificação é de: obesidade grau III`
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

function imc() {
    const info = getInfo()
    if (info.weight <= 0 || info.height <= 0) {
        alert("Não existe este cálculo com valores menores que 0.")
    } else {
        const formattedName = rightName(info.name)
        const calc = calcIMC(formattedName, info.weight, info.height)
        alert(calc)
    }
}

const button = document.querySelector('button')
button.addEventListener('click', (prevent) => {
    prevent.preventDefault()
    imc()
})
