class Calculadora {
    constructor() {
        this.peso = 0;
        this.altura = 0;
        this.resultado = document.getElementById('messagem-resultado');
    }

    validacaoCampo() {
        if (this.peso === 0 || this.altura === 0) {
            this.resultado.textContent = 'Preencha os campos corretamente';
            return true;
        }
        return false;
    }

    calculadoraIMC() {
        this.peso = parseFloat(document.getElementById('campo_peso').value);
        this.altura = parseFloat(document.getElementById('campo_altura').value);

        if (this.validacaoCampo()) return; 

        let imc = (this.peso / (this.altura * this.altura)).toFixed(2);
        this.classificaIMC(imc);
    }

    classificaIMC(imc) {
        let classificacao;

        if (imc <= 18.5) {
            classificacao = "Abaixo do peso";
        } else if (imc > 18.5 && imc <= 24.9) {
            classificacao = "Peso normal";
        } else if (imc >= 25 && imc <= 29.9) {
            classificacao = "Sobrepeso";
        } else if (imc >= 30) {
            classificacao = "Obesidade";
        }

        switch (classificacao) {
            case "Abaixo do peso":
                this.resultado.textContent = 'Seu IMC é ' + imc + ' - Abaixo do peso';
                break;
            case "Peso normal":
                this.resultado.textContent = 'Seu IMC é ' + imc + ' - Peso normal';
                break;
            case "Sobrepeso":
                this.resultado.textContent = 'Seu IMC é ' + imc + ' - Sobrepeso';
                break;
            case "Obesidade":
                this.resultado.textContent = 'Seu IMC é ' + imc + ' - Obesidade';
                break;
            default:
                this.resultado.textContent = 'Categoria não encontrada';
                break;
        }
    }
}

let calculadora = new Calculadora();

document.getElementById('botao_calcular').addEventListener('click', function () {
    calculadora.calculadoraIMC();
});

