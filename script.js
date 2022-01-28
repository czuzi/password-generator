function getRandomCode() {
    let generatedCode = ""
    let charset = ""
    const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz"
    const upperCaseLatters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const numbers = "0123456789"
    const symbols = "!@#$%^&*"
    const length = document.querySelector("#code-length").value

    if (!(document.querySelector('#lowercase').checked || document.querySelector('#uppercase').checked || document.querySelector('#numbers').checked)) {
        generatedCode = "At least one of the first three options must be checked!"
    } else {

        if(document.querySelector('#lowercase').checked) {
            charset += lowerCaseLetters
        }
    
        if(document.querySelector('#uppercase').checked) {
            charset += upperCaseLatters
        }
    
        if(document.querySelector('#numbers').checked) {
            charset += numbers
        }
    
        if(document.querySelector('#symbols').checked) {
            charset += symbols
        }
    }

    if (length < 8) {
        generatedCode = "The password must be at least 8 characters long"
    } else {
        for (let i = 0; i < length; ++i) {
            generatedCode += charset.charAt(Math.floor(Math.random() * charset.length))
        }
    }
    document.querySelector("#return-value").innerHTML = generatedCode
    generatedCode = ""
}