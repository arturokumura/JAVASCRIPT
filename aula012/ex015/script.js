function verificar() {
    var data = new Date ()
    var ano = data.getFullYear()
    var fano = document.getElementById('ano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || Number(fano.value ) > ano) {
        window.alert ('Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName ('sex')
        var idade = ano - Number (fano.value)
        var genero = ''
        var img = document.createElement ('img')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade <8) {
             img.setAttribute('src', 'imagens/homembebe.png.jpg')
            }else if ( idade <21) {
            img.setAttribute ('src','imagens/homemjovem.png.jpg' )
            } else if (idade < 50 ) {
            img.setAttribute ('src','imagens/homemadulto.png.jpg' )
            } else {
            img.setAttribute ('src','imagens/homemidoso.png.jpg' )
            }
            
        } else if(fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade <8) {
            img.setAttribute ('src', 'imagens/muherbebe.jpg')
            }else if ( idade <21) {
            img.setAttribute ('src','imagens/mulherjovem.png.jpg')
            } else if (idade < 50 ) {
            img.setAttribute('src', 'imagens/mulher.adulta.png.jpg')
            } else {idade >=50
            img.setAttribute('src','imagens/mulheridosa.png.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}