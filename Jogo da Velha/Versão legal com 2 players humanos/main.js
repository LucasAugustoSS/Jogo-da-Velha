var j1;
var j2;
var vez;
var casasPreenchidas;
var fim;
var venc;

const casas = document.querySelectorAll(".grid-item");

const combVenc = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
];

Inicio();

function Inicio(params) {
    j1 = Math.floor(Math.random()*2);
    fim = false;
    casasPreenchidas = 0;

    switch (j1) {
        case 0:
            j1 = "X";
            j2 = "O";
            vez = 1;
            break;
    
        case 1:
            j1 = "O";
            j2 = "X";
            vez = 2;
            break;
    
        default:
            break;
    }
    
    document.getElementById("j1").innerText = j1;
    document.getElementById("j2").innerText = j2;
}

function Vencedor(simbolo) {
    for (const combinacao of combVenc) {
        const [a, b, c] = combinacao;
        if (casas[a].textContent === simbolo && casas[b].textContent === simbolo && casas[c].textContent === simbolo) {
            return true;
        }
    }
    return false;
}

casas.forEach(item => {
    item.addEventListener("click", function() {
        if (fim) {
            return;
        }

        switch (vez) {
            case 1:
                if (item.textContent == "") {
                    item.textContent = j1;
                    vez = 2;
                    document.getElementById("vez").innerText = j2;
                    casasPreenchidas++;
                }
                break;
            
            case 2:
                if (item.textContent == "") {
                    item.textContent = j2;
                    vez = 1;
                    document.getElementById("vez").innerText = j1;
                    casasPreenchidas++;
                }
                break;
            
            default:
                break;
        }

        if (Vencedor("X")) {
            venc = "X";
            fim = true;
            FimDoJogo();
        } else if (Vencedor("O")) {
            venc = "O";
            fim = true;
            FimDoJogo();
        }

        if (casasPreenchidas == 9 && fim == false) {
            document.getElementById("resultado").innerText = "Empate";
            document.getElementById("reset").innerHTML = "<button onclick='Reset()'>Reiniciar</button>";
        }
    });
});

function FimDoJogo(params) {
    document.getElementById("resultado").innerText = "Vitória de "+venc;
    document.getElementById("reset").innerHTML = "<button onclick='Reset()'>Reiniciar</button>";
}

function Reset(params) {
    casas.forEach(item => {
        item.textContent = "";
    })
    document.getElementById("resultado").innerHTML = "Vez de <label id='vez'>X</label>";
    document.getElementById("reset").innerHTML = "";
    Inicio();
}