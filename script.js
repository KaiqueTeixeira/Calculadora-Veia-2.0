function calcular() {

    const n1 = Number(document.getElementById("inum1").value)
    const n2 = Number(document.getElementById("inum2").value)
    const res = document.getElementById("res")

    if (document.getElementById("isoma").checked) {
        let s = n1 + n2
        res.innerHTML = `<p>${n1} + ${n2} = ${s}</p>`
    } else if (document.getElementById("isubt").checked) {
        let sb = n1 - n2
        res.innerHTML = `<p>${n1} - ${n2} = ${sb}</p>`
    } else if (document.getElementById("imult").checked) {
        let mt = n1 * n2
        res.innerHTML = `<p>${n1} x ${n2} = ${mt}</p>`
    } else if (document.getElementById("idivisao").checked) {
        if (n2 !== 0) {
            let divi = n1 / n2
            res.innerHTML = `<p>${n1} ÷ ${n2} = ${divi.toFixed(2)}</p>`
        } else {
            res.innerHTML = "Erro: divisão por zero"
        }
    } else {
        res.innerHTML = "Por favor, selecione uma operação"
    }

    if (n1 == ""|| n2 == "" ) {
        res.innerHTML = "Preencha os campos acima"
    }

}

function limpar() {
    document.getElementById("inum1").value = ""
    document.getElementById("inum2").value = ""
    document.getElementById("res").innerHTML = "Preencha os dados acima"
}