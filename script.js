function contar() {
    let ini = window.document.getElementById('txti')
    let fim = window.document.getElementById('txtf')
    let passo = window.document.getElementById('txtp')
    let res = window.document.getElementById('res')
    if(ini.value.length == 0 || fim.value.length ==0) {
        res.innerHTML = 'Impossível Contar!'
        window.alert('[ERRO] Falta dados')
    } else {
        res.innerHTML = 'Contando: <br> '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <= 0) {
            window.alert('Passo Inválido! Considerando PASSO 1')
            p = 1
        }
        if(i < f) {
            //contagem crescente
         //   var c = i                     //estrutura-while
         //   while (c <= f){
         //       res.innerHTML += `${c} \u{1F449}`
         //       c += p
        
        for(let c = i; c <= f; c +=p) {     //estrutura FOR
            res.innerHTML += `${c} \u{1F449}`
           }
            res.innerHTML += `\u{1F3C1}`
        } else {
            //contagem regressiva
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
            res.innerHTML += `\u{1F3C1}`
    }
}
