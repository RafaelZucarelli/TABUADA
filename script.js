function contar(){
    let fnum = document.getElementById('txtnum')
    let tab = document.getElementById('seltab')
    
    if (fnum.value.length == 0) {
    window.alert ('[ERRO] Por favor digite um número')
    
    } else {
    let n = Number(fnum.value)
    let cont = 1
    tab.innerHTML = ''
    while (cont <=10 ){
        let item = document.createElement('option')
        item.text = `${n} X ${cont} = ${n*cont}`
        item.value = `tab${cont}`
        tab.appendChild(item)
        cont ++
    }
    }
}