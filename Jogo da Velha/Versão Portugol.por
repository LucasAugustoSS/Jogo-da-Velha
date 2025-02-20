programa
{
	
	funcao inicio()
	{
		caracter opcao
		caracter tabuleiro[3][3] = {{'1','2','3'},{'4','5','6'},{'7','8','9'}}
		caracter jogada = 'X'
		logico valida
		inteiro rodadas = 0
		logico fim = falso
		
		para(inteiro i = 0; i < 3; i++){
			para(inteiro j = 0; j < 3; j++){
				escreva(tabuleiro[i][j]," ")
			}
			escreva("\n")
		}

		faca{
			valida = falso

			escreva("\nVez de ",jogada)
			escreva("\nPosição: ")
			leia(opcao)
			escreva("\n\n")

			para(inteiro i = 0; i < 3; i++){
				para(inteiro j = 0; j < 3; j++){
					se(opcao == tabuleiro[i][j]){
						tabuleiro[i][j] = jogada
						valida = verdadeiro
					}
				}
			}

			se(nao valida){
				escreva("! JOGADA INVÁLIDA !\n\n\n")
			}

			se(tabuleiro[0][0] == tabuleiro[0][1] e tabuleiro[0][1] == tabuleiro[0][2] ou
			   tabuleiro[1][0] == tabuleiro[1][1] e tabuleiro[1][1] == tabuleiro[1][2] ou
			   tabuleiro[2][0] == tabuleiro[2][1] e tabuleiro[2][1] == tabuleiro[2][2] ou
			   tabuleiro[0][0] == tabuleiro[1][0] e tabuleiro[1][0] == tabuleiro[2][0] ou
			   tabuleiro[0][1] == tabuleiro[1][1] e tabuleiro[1][1] == tabuleiro[2][1] ou
			   tabuleiro[0][2] == tabuleiro[1][2] e tabuleiro[1][2] == tabuleiro[2][2] ou
			   tabuleiro[0][0] == tabuleiro[1][1] e tabuleiro[1][1] == tabuleiro[2][2] ou
			   tabuleiro[0][2] == tabuleiro[1][1] e tabuleiro[1][1] == tabuleiro[2][0]){
				fim = verdadeiro
				escreva("- Vitória de ",jogada," -\n\n")
			}

			se(nao fim){
				rodadas++
				se(rodadas == 9){
					fim = verdadeiro
					escreva("- Empate -\n\n")
				}

				se(jogada == 'X' e valida){
					jogada = 'O'
				}senao se(jogada == 'O' e valida){
					jogada = 'X'
				}
			}

			para(inteiro i = 0; i < 3; i++){
				para(inteiro j = 0; j < 3; j++){
					escreva(tabuleiro[i][j]," ")
				}
				escreva("\n")
			}
		}enquanto(nao fim)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 1799; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */