function contar() {
    var i = document.getElementById('conti')
    var f = document.getElementById('contf')
    var p = document.getElementById('contp')
    var res = document.getElementById('res')

    if (i.value.length == 0 || f.value.length == 0 || p.value.length == 0) {
        window.alert('Complete e tente novamente')
        return
    } else {
        res.innerHTML = 'Contando'
        var i = Number(i.value)
        var f = Number(f.value)
        var p = Number(p.value)
        if(i < f) {
            for (var c = 1; c <= f; c += p) {
            res.innerHTML += `${c} 👉🏻`
        } 
        } else {
            for( var c = i; c>= f; c -=p ) {
                res.innerHTML += `${c} 👉🏻 `
            }
        }
res.innerHTML += '📍'
        
    }
}

    

    
