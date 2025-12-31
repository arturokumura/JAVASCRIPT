function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    var hora = 16
    if(hora >=0 && hora < 12) {
       img.src = 'imagens/pexels-wisdomsky-1673973.jpg'
       document.body.style.backgroundColor = 'lightgoldenrodyellow'
    } else if ( hora>= 12 && hora < 18) {
        img.src= 'imagens/pexels-anderson-martinsz-2386144.jpg'
        document.body.style.background = '#b9846f'
    }else {
        img.src = 'imagens/pexels-francesco-ungaro-998641.jpg'
        document.body.style.background = '#515154'
    }
    }

