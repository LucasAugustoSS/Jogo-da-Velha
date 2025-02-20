// Deixar o codigo com comentários mais claros
// Retirar as partes do codigo que estão comentados
// Otimizar os ifs
var rodadas = 0
var vezBot = false
var a,b,c,d,e,f,g,h,i // Colocar estas variaveis na parte em que estão sendo usadas
var posicaoBot
var botJogou = false

var naoA,naoB,naoC,naoD,naoE,naoF,naoG,naoH,naoI // COlocar estas variaveis para onde estão sendo usados
tirarNegacao()

setTabuleiro()

// teste

//vezBot = true

//jogo()

// teste

document.addEventListener("keydown", (event) =>{
    if (event.shiftKey) {
        vezBot = true
        jogo()
    }
})

function jogo(params) {
    
    rodadas++


    // teste
    /*
    if(!vezBot) {
        PosicaoAleatoria2()
        setTabuleiro()
    }
    
    // teste
    */

    // helder


    if (vezBot) {
        
        // começo (bot começando)

        if (rodadas == 1) {
            CantoAleatorio()
            botJogou = true
        }

        // começo (jogador começando)

        if (rodadas == 2) {
            if (a == "o" || b == "o" || c == "o" || d == "o" || f == "o" || g == "o" || h == "o" || i == "o") {
                document.getElementById("e").value = "x"
                botJogou = true
            } else if (e == "o") {
                CantoAleatorio()
                botJogou = true
            }
        }

        // ganhar

        if (!botJogou) {
            if ((b == "x" && c == "x" || // h
                 d == "x" && g == "x" || // v
                 e == "x" && i == "x") && // d1
                 a == "") {
                document.getElementById("a").value = "x"
                botJogou = true

            } else if ((a == "x" && c == "x" || // h
                        e == "x" && h == "x") && // v
                        b == "") {
                document.getElementById("b").value = "x"
                botJogou = true

            } else if ((a == "x" && b == "x" || // h
                        f == "x" && i == "x" || // v
                        e == "x" && g == "x") && // d2
                        c == "") {
                document.getElementById("c").value = "x"
                botJogou = true

            } else if ((e == "x" && f == "x" || // h
                        a == "x" && g == "x") && // v
                        d == "") {
                document.getElementById("d").value = "x"
                botJogou = true

            } else if ((d == "x" && f == "x" || // h
                        b == "x" && h == "x" || // v
                        a == "x" && i == "x" || // d1
                        c == "x" && g == "x") && // d2
                        e == "") {
                document.getElementById("e").value = "x"
                botJogou = true

            } else if ((d == "x" && e == "x" || // h
                        c == "x" && i == "x") && // v
                        f == "") {
                document.getElementById("f").value = "x"
                botJogou = true

            } else if ((h == "x" && i == "x" || // h
                        a == "x" && d == "x" || // v
                        c == "x" && e == "x") && // d2
                        g == "") {
                document.getElementById("g").value = "x"
                botJogou = true

            } else if ((g == "x" && i == "x" || // h
                        b == "x" && e == "x") && // v
                        h == "") {
                document.getElementById("h").value = "x"
                botJogou = true

            } else if ((g == "x" && h == "x" || // h
                        c == "x" && f == "x" || // v
                        a == "x" && e == "x") && // d1
                        i == "") {
                document.getElementById("i").value = "x"
                botJogou = true

            }
        }

        // bloquear

        
        if (!botJogou) {
            if ((b == "o" && c == "o" || // h
                 d == "o" && g == "o" || // v
                 e == "o" && i == "o") && // d1
                 a == "") {
                document.getElementById("a").value = "x"
                botJogou = true

            } else if ((a == "o" && c == "o" || // h
                        e == "o" && h == "o") && // v
                        b == "") {
                document.getElementById("b").value = "x"
                botJogou = true

            } else if ((a == "o" && b == "o" || // h
                        f == "o" && i == "o" || // v
                        e == "o" && g == "o") && // d2
                        c == "") {
                document.getElementById("c").value = "x"
                botJogou = true

            } else if ((e == "o" && f == "o" || // h
                        a == "o" && g == "o") && // v
                        d == "") {
                document.getElementById("d").value = "x"
                botJogou = true

            } else if ((d == "o" && f == "o" || // h
                        b == "o" && h == "o" || // v
                        a == "o" && i == "o" || // d1
                        c == "o" && g == "o") && // d2
                        e == "") {
                document.getElementById("e").value = "x"
                botJogou = true

            } else if ((d == "o" && e == "o" || // h
                        c == "o" && i == "o") && // v
                        f == "") {
                document.getElementById("f").value = "x"
                botJogou = true

            } else if ((h == "o" && i == "o" || // h
                        a == "o" && d == "o" || // v
                        c == "o" && e == "o") && // d2
                        g == "") {
                document.getElementById("g").value = "x"
                botJogou = true

            } else if ((g == "o" && i == "o" || // h
                        b == "o" && e == "o") && // v
                        h == "") {
                document.getElementById("h").value = "x"
                botJogou = true

            } else if ((g == "o" && h == "o" || // h
                        c == "o" && f == "o" || // v
                        a == "o" && e == "o") && // d1
                        i == "") {
                document.getElementById("i").value = "x"
                botJogou = true
            }
        }

        // outros casos importantes

        if (!botJogou) {

            // bot começando

            if (rodadas == 3) {
                if (a == "x") {
                    if (b == "o" || c == "o" || f == "o" || i == "o") {
                        document.getElementById("g").value = "x"
                        botJogou = true
                    } else if (d == "o" || g == "o" || h == "o") {
                        document.getElementById("c").value = "x"
                        botJogou = true
                    } else if (e == "o") {
                        document.getElementById("i").value = "x"
                        botJogou = true
                    }
                } else if (c == "x") {
                    if (b == "o" || a == "o" || d == "o" || g == "o") {
                        document.getElementById("i").value = "x"
                        botJogou = true
                    } else if (f == "o" || i == "o" || h == "o") {
                        document.getElementById("a").value = "x"
                        botJogou = true
                    } else if (e == "o") {
                        document.getElementById("g").value = "x"
                        botJogou = true
                    }
                } else if (g == "x") {
                    if (h == "o" || i == "o" || f == "o" || c == "o") {
                        document.getElementById("a").value = "x"
                        botJogou = true
                    } else if (d == "o" || a == "o" || b == "o") {
                        document.getElementById("i").value = "x"
                        botJogou = true
                    } else if (e == "o") {
                        document.getElementById("c").value = "x"
                        botJogou = true
                    }
                } else if (i == "x") {
                    if (h == "o" || g == "o" || d == "o" || a == "o") {
                        document.getElementById("c").value = "x"
                        botJogou = true
                    } else if (f == "o" || c == "o" || b == "o") {
                        document.getElementById("g").value = "x"
                        botJogou = true
                    } else if (e == "o") {
                        document.getElementById("a").value = "x"
                        botJogou = true
                    }
                }
            }

            if (rodadas == 5) {
                if (e == "") {
                    if (a != "o" && c != "o" && g != "o" && i != "o") {
                        if ((a == "x" && c == "x") ||
                            (a == "x" && g == "x") ||
                            (i == "x" && c == "x") ||
                            (i == "x" && g == "x")) {
                            document.getElementById("e").value = "x"
                            botJogou = true
                        }
                    } else {
                        if ((a == "x" && c == "x") && g == "o" ||
                            (a == "x" && g == "x") && c == "o") {
                            document.getElementById("i").value = "x"
                            botJogou = true
                        } else if ((a == "x" && c == "x") && i == "o" ||
                                   (i == "x" && c == "x") && a == "o") {
                            document.getElementById("g").value = "x"
                            botJogou = true
                        } else if ((g == "x" && i == "x") && a == "o" ||
                                   (g == "x" && a == "x") && i == "o") {
                            document.getElementById("c").value = "x"
                            botJogou = true
                        } else if ((g == "x" && i == "x") && c == "o" ||
                                   (i == "x" && c == "x") && g == "o") {
                            document.getElementById("a").value = "x"
                            botJogou = true
                        }
                    }
                }
            }


            // jogador começando

            if (rodadas == 4) {
                if (e == "x") {
                    if (a == "o" || c == "o" || g == "o" || i == "o") {
                        if (a == "o" && (f == "o" || h == "o")) {
                            document.getElementById("i").value = "x"
                            botJogou = true
                        } else if (c == "o" && (d == "o" || h == "o")) {
                            document.getElementById("g").value = "x"
                            botJogou = true
                        } else if (g == "o" && (b == "o" || f == "o")) {
                            document.getElementById("c").value = "x"
                            botJogou = true
                        } else if (i == "o" && (b == "o" || d == "o")) {
                            document.getElementById("a").value = "x"
                            botJogou = true
                        } else {
                            BordaAleatoria()
                            botJogou = true
                        }
                    } else {
                        if (b == "o" && d == "o") {
                            document.getElementById("a").value = "x"
                            botJogou = true
                        } else if (b == "o" && f == "o") {
                            document.getElementById("c").value = "x"
                            botJogou = true
                        } else if (h == "o" && d == "o") {
                            document.getElementById("g").value = "x"
                            botJogou = true
                        } else if (h == "o" && f == "o") {
                            document.getElementById("i").value = "x"
                            botJogou = true
                        }
                    }
                } else {
                    if ((a == "o" && i == "x") ||
                        (c == "o" && g == "x") ||
                        (g == "o" && c == "x") ||
                        (i == "o" && a == "x")) {
                        CantoAleatorio()
                        botJogou = true
                    }
                }
            }
        }

        // quando não importa

        if (!botJogou) {
            PosicaoAleatoria()
            botJogou = true
        }

        setTabuleiro()
    }


    // o resultado


    setTimeout(() => {

        setTabuleiro()

        // linhas
        if (a == b && b == c && a != "") {
            //if (a == "o") {
                alert("Vitória de "+a)
            //}
            location.reload()
        } else if (d == e && e == f && e != "") {
            //if (e == "o") {
                alert("Vitória de "+e)
            //}
            location.reload()
        } else if (g == h && h == i && i != "") {
            //if (i == "o") {
                alert("Vitória de "+i)
            //}
            location.reload()

        // colunas
        } else if (a == d && d == g && a != "") {
            //if (a == "o") {
                alert("Vitória de "+a)
            //}
            location.reload()
        } else if (b == e && e == h && e != "") {
            //if (e == "o") {
                alert("Vitória de "+e)
            //}
            location.reload()
        } else if (c == f && f == i && i != "") {
            //if (i == "o") {
                alert("Vitória de "+i)
            //}
            location.reload()

        // diagonais
        } else if (a == e && e == i && e != "") {
            //if (e == "o") {
                alert("Vitória de "+e)
            //}
            location.reload()
        } else if (c == e && e == g && e != "") {
            //if (e == "o") {
                alert("Vitória de "+e)
            //}
            location.reload()
        
        // empate
        } else if (rodadas == 9) {
            alert("Empate")
            location.reload()
        }


        if (!vezBot && 
            (a == "o" ||
             b == "o" ||
             c == "o" ||
             d == "o" ||
             e == "o" ||
             f == "o" ||
             g == "o" ||
             h == "o" ||
             i == "o")) {
            vezBot = true
            console.log(a,b,c,d,e,f,g,h,i)
            jogo()
            return
        } else if (vezBot) {
            vezBot = false
            botJogou = false
            console.log(a,b,c,d,e,f,g,h,i)
            // teste
            //jogo()
            // teste
            return
        }

    }, "50") // 50 padrão 100 teste
}

function setTabuleiro(params) {
    a = document.getElementById("a").value
    b = document.getElementById("b").value
    c = document.getElementById("c").value
    d = document.getElementById("d").value
    e = document.getElementById("e").value
    f = document.getElementById("f").value
    g = document.getElementById("g").value
    h = document.getElementById("h").value
    i = document.getElementById("i").value
}

function tirarNegacao(params) {
    naoA = false
    naoB = false
    naoC = false
    naoD = false
    naoE = false
    naoF = false
    naoG = false
    naoH = false
    naoI = false
}

function PosicaoAleatoria(params) {
    posicaoBot = Math.ceil(Math.random()*9)

    switch (posicaoBot) {
        case 1:
            if (a == "" && !naoA) {
                document.getElementById("a").value = "x"
                tirarNegacao()
            } else {
                PosicaoAleatoria()
            }
            break;

        case 2:
            if (b == "" && !naoB) {
                document.getElementById("b").value = "x"
                tirarNegacao()
            } else {
                PosicaoAleatoria()
            }
            break;
        
        case 3:
            if (c == "" && !naoC) {
                document.getElementById("c").value = "x"
                tirarNegacao()
            } else {
                PosicaoAleatoria()
            }
            break;

        case 4:
            if (d == "" && !naoD) {
                document.getElementById("d").value = "x"
                tirarNegacao()
            } else {
                PosicaoAleatoria()
            }
            break;

        case 5:
            if (e == "" && !naoE) {
                document.getElementById("e").value = "x"
                tirarNegacao()
            } else {
                PosicaoAleatoria()
            }
            break;

        case 6:
            if (f == "" && !naoF) {
                document.getElementById("f").value = "x"
                tirarNegacao()
            } else {
                PosicaoAleatoria()
            }
            break;

        case 7:
            if (g == "" && !naoG) {
                document.getElementById("g").value = "x"
                tirarNegacao()
            } else {
                PosicaoAleatoria()
            }
            break;

        case 8:
            if (h == "" && !naoH) {
                document.getElementById("h").value = "x"
                tirarNegacao()
            } else {
                PosicaoAleatoria()
            }
            break;

        case 9:
            if (i == "" && !naoI) {
                document.getElementById("i").value = "x"
                tirarNegacao()
            } else {
                PosicaoAleatoria()
            }
            break;

        default:
            break;
    }
}

function CantoAleatorio(params) {
    posicaoBot = Math.ceil(Math.random()*4)

    switch (posicaoBot) {
        case 1:
            if (a == "") {
                document.getElementById("a").value = "x"
            } else {
                CantoAleatorio()
            }
            break;

        case 2:
            if (c == "") {
                document.getElementById("c").value = "x"
            } else {
                CantoAleatorio()
            }
            break;

        case 3:
            if (g == "") {
                document.getElementById("g").value = "x"
            } else {
                CantoAleatorio()
            }
            break;

        case 4:
            if (i == "") {
                document.getElementById("i").value = "x"
            } else {
                CantoAleatorio()
            }
            break;

        default:
            break;
    }
}

function BordaAleatoria(params) {
    posicaoBot = Math.ceil(Math.random()*4)

    switch (posicaoBot) {
        case 1:
            if (b == "") {
                document.getElementById("b").value = "x"
            } else {
                BordaAleatoria()
            }
            break;

        case 2:
            if (d == "") {
                document.getElementById("d").value = "x"
            } else {
                BordaAleatoria()
            }
            break;

        case 3:
            if (f == "") {
                document.getElementById("f").value = "x"
            } else {
                BordaAleatoria()
            }
            break;

        case 4:
            if (h == "") {
                document.getElementById("h").value = "x"
            } else {
                BordaAleatoria()
            }
            break;

        default:
            break;
    }
}

// teste

function PosicaoAleatoria2(params) {
    posicaoBot = Math.ceil(Math.random()*9)

    switch (posicaoBot) {
        case 1:
            if (a == "" && !naoA) {
                document.getElementById("a").value = "o"
                tirarNegacao()
            } else {
                PosicaoAleatoria2()
            }
            break;

        case 2:
            if (b == "" && !naoB) {
                document.getElementById("b").value = "o"
                tirarNegacao()
            } else {
                PosicaoAleatoria2()
            }
            break;
        
        case 3:
            if (c == "" && !naoC) {
                document.getElementById("c").value = "o"
                tirarNegacao()
            } else {
                PosicaoAleatoria2()
            }
            break;

        case 4:
            if (d == "" && !naoD) {
                document.getElementById("d").value = "o"
                tirarNegacao()
            } else {
                PosicaoAleatoria2()
            }
            break;

        case 5:
            if (e == "" && !naoE) {
                document.getElementById("e").value = "o"
                tirarNegacao()
            } else {
                PosicaoAleatoria2()
            }
            break;

        case 6:
            if (f == "" && !naoF) {
                document.getElementById("f").value = "o"
                tirarNegacao()
            } else {
                PosicaoAleatoria2()
            }
            break;

        case 7:
            if (g == "" && !naoG) {
                document.getElementById("g").value = "o"
                tirarNegacao()
            } else {
                PosicaoAleatoria2()
            }
            break;

        case 8:
            if (h == "" && !naoH) {
                document.getElementById("h").value = "o"
                tirarNegacao()
            } else {
                PosicaoAleatoria2()
            }
            break;

        case 9:
            if (i == "" && !naoI) {
                document.getElementById("i").value = "o"
                tirarNegacao()
            } else {
                PosicaoAleatoria2()
            }
            break;

        default:
            break;
    }
}
