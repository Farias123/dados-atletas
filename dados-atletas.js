//Vitor Farias 29/01/2023

class Atleta{
//Essa é a classe "Atleta", onde a maioria do projeto acontecerá
    constructor(nome,idade,peso,altura,notas){
//O método constructor atribui os valores dos parâmetros usados às variáveis de instância.
        this.nome = nome
        this.idade = idade
        this.peso = peso
        this.altura = altura
        this.notas = notas
    }
    calculaCategoria(){
//Esse método calcula qual a categoria do atleta, baseada em sua idade
        if (this.idade >= 9 && this.idade <= 11){
            return "Infantil"
        }
        else if(this.idade >= 12 && this.idade <= 13){
            return "Juvenil"
        }
        else if (this.idade >= 14 && this.idade <= 15){
            return "Intermediário"
        }
        else if (this.idade >= 16 && this.idade <= 30){
            return "Adulto"
        }
        else{
            return "Sem Categoria"
        }
    }
    calculaIMC(){
//Esse método calcula o Índice de Massa Corporal do atleta com base no seu peso e altura
        return  this.peso/(this.altura*this.altura)
    }
    calculaMediaValida(){
//Essa função calcula a média dos valores do meio das notas do atleta(tirando o maior e o menor)
        let notas = this.notas
        let soma = 0
        let foiMaior = false
        let foiMenor = false
        this.notas.forEach(function(nota1){
            soma += nota1
            let contadorMaiorQue = 0
            notas.forEach(function(nota2){
                if ((nota1 > nota2) || (nota2 === 10 && nota1 === nota2)){
                    contadorMaiorQue += 1
                }})
            if ((contadorMaiorQue >= 4) && (foiMaior === false)){
                soma -= nota1
                foiMaior = true
            }
            if ((contadorMaiorQue === 0) && (foiMenor === false)){
                soma -= nota1
                foiMenor = true
            }
        })
        return soma/(this.notas.length-2)
    }
    obtemNomeAtleta(){
//Retorna o nome do atleta
        return this.nome
    }
    obtemIdadeAtleta(){
//Retorna a idade do atleta
        return this.idade
    }
    obtemPesoAtleta(){
//Retorna o peso do atleta
        return this.peso
    }
    obtemAlturaAtleta(){
//Retorna a altura do atleta
        return this.altura
    }
    obtemNotasAtleta(){
//Retorna as notas do atleta em formato CSV(comma-separated values)
        return this.notas.join(", ")
    }
    obtemCategoria(){
//Retorna a categoria do atleta
        return this.calculaCategoria()
    }
    obtemIMC(){
//Retorna o IMC do atleta
        return this.calculaIMC()
    }
    obtemMediaValida(){
//Retorna a média válida das notas do atleta
        return this.calculaMediaValida()
    }
}

const vitor = new Atleta("Vitor Farias", 19, 55, 1.70, [10, 9.34, 8.42, 10, 7.88]);
console.log(`
Nome: ${vitor.obtemNomeAtleta()}
Idade: ${vitor.obtemIdadeAtleta()}
Peso: ${vitor.obtemPesoAtleta()}
Altura: ${vitor.obtemAlturaAtleta()}
Notas: ${vitor.obtemNotasAtleta()}
Categoria: ${vitor.obtemCategoria()}
IMC: ${vitor.obtemIMC()}
Média Valida: ${vitor.obtemMediaValida()}
`)