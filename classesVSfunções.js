console.log('---------<<<<< VARIAVEL OBJETO ๐๐๐>>>>>>----------');

//     <<<<< VARIAVEL OBJETO >>>>>

const Livro = {
  nome: "As aventuras de Marcos",
  editora: "Casa do Marcos",
  paginas: 321,
  anunciar: function(){
    console.log(`A ${this.editora} indica o livro ` + this.nome + "!");
  }
}

Livro.anunciar()

console.log(" ----------<<<<< FUNรรO CONTRUTORA ๐๐๐ >>>>> ----------");

    <<<<< FUNรรO CONTRUTORA >>>>>

const Livro = function(nome, editora, paginas){
  gNome = nome,
  gEditora = editora,
  gPaginas = paginas

  this.getNome = function(){
    return gNome
  }

  this.getEditora = function(){
    return gEditora
  }

  this.getPaginas = function(){
    return gPaginas
  }
}

const GraphQL = new Livro ('GraphQL', 'Casa do Marcos', 321)

console.log(GraphQL.getNome());
console.log(GraphQL.getEditora());
console.log(GraphQL.getPaginas());


console.log("                                                                             ");
console.log("                                                                             ");
console.log("                                                                             ");

console.log(" ----------<<<<< USANDO CLASSES ๐๐๐>>>>> ----------");

//<<<<< USANDO CLASSES ๐๐๐>>>>>

class Livro {
  constructor(nome, editora, paginas) {
    this.nome = nome
    this.editora = editora
    this.paginas = paginas
  }

  // MรTODOS
  anunciarTitulo() {
    console.log(`Titulo: ${this.nome}`);
  }

  // MรTODOS
  descreverTitulo() {
    console.log(`${this.nome} รฉ um livro muito bom da editora ${this.editora} e tem ${this.paginas} pรกginas`);
  }
}

const ver = new Livro('Primeiro vemos e depois ouvimos', 'Casa do Marcos', 124);
ver.anunciarTitulo()
ver.descreverTitulo()


console.log("                                                                             ");
console.log("                                                                             ");
console.log("                                                                             ");


console.log(" ----------<<<<< HERANรA ๐๐๐>>>>> ----------");

//     <<<<< HERANรA ๐๐๐>>>>>

class LivroColecao extends Livro {
  constructor(nome, nomeColecao, editora) {
    super(nome)
    this.nomeColecao = nomeColecao
    this.editora = editora
  }

  descreverColecao() {
    console.log(`O livro \"${this.nome}\" faz parte da coleรงรฃo ${this.nomeColecao} da editora ${this.editora}`);
  }
}

const outro = new LivroColecao('Mais um livro para ouvir', 'Audiobook', 'Casa do Marcos');
outro.descreverColecao()
