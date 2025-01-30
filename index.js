class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        switch (this.tipo) {
            case "mago":
                ataque = "magia";
                break;
            case "guerreiro":
                ataque = "espada";
                break;
            case "monge":
                ataque = "artes marciais";
                break;
            case "ninja":
                ataque = "shuriken";
                break;
            default:
                ataque = "usou um ataque desconhecido";
                break;
        }
        
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

const mago = new Heroi("Gandalf", 100, "mago");
const guerreiro = new Heroi("Aragorn", 35, "guerreiro");
const monge = new Heroi("Lee", 40, "monge");
const ninja = new Heroi("Hanzo", 28, "ninja");

mago.atacar();
guerreiro.atacar();
monge.atacar();
ninja.atacar();
