/**
 * EXERCÍCIOS TYPESCRIPT - SEMANA 2 - CAMILA SHIBATA
 *  
 * 1- Crie um tipo para representar um objeto que contenha as suas informações de 
 * nome, profissão, idade e uma lista de assuntos de seu interesse.
 */

interface EuMesma {
    nome: string;
    idade: number;
    profissao: string;
    interesse: string[]
}

/**
 * 
 * 2 - Crie um objeto utilizando o tipo criado no exercício 1 e o popule de acordo com suas informações.
 */

const euMesma: EuMesma = {
    nome: "Camila",
    idade: 32,
    profissao: "Desenvolvedora Front-End Júnior",
    interesse: ["Tecnologia", "Séries", "Filmes", "Música", "Academia", "Viajar"]
}

/**
 * 3 - Faça uma função que receba como argumento um objeto do tipo do exercício 1, 
 * e retorne somente a lista de assuntos do objeto.
 * 4 - Coloque a tipagem tanto no argumento da função do exercício 3 quanto no tipo de retorno dela.
 */

 function meusInteresses (euMesma:EuMesma): string[] {
    return euMesma.interesse
}

/**
 * 5 - Crie um enum para representar as Matérias do curso (Angular, Typescript e Git)
 */

enum Materias {
    Angular = "Angular",
    Typescript = "Typescript",
    Git = "Git",
}

/**
 * 6 - Crie mais um tipo para representar os professores, contendo nome e uma lista das materias de cada um.
 */

interface Professor {
    nome: string;
    materias: Materias[];
}

/**
 * 7 - Crie os objetos Alan e Nathan utilizando os tipos dos exercícios 5 e 6. 
 * Nathan = Angular e Git, Alan = Angular, Typescript e Git
 */

const alan: Professor = {
    nome: "Alan",
    materias: [
        Materias.Angular,
        Materias.Typescript,
        Materias.Git
    ]
}

const nathan: Professor = {
    nome: "Nathan",
    materias: [
        Materias.Angular,
        Materias.Git
    ]
}

/**
 * 8 - Declare e popule um array com os objetos do exercício 7.
 */

const professores: Professor[] = [
    alan,
    nathan
]

/**
 * 9 - Faça uma função que receba um argumento de array de Professor 
 * e retorne um novo array de strings contendo somente os nomes dos professores.
 */

function nomeProfessores (professores:Professor[]): string[] {
    return professores.map((professor) => professor.nome)
}

/**
 * 10 - Faça uma função que receba um argumento de array de Professores e retorne um array de materias.
 */

 function materiaProfessores (professores:Professor[]): Materias[] {
    return professores.map((professor) => professor.materias).flat()
}

/**
 * 11 - Faça uma função que receba um argumento de array de Professores e 
 * retorne o primeiro Professor encontrado que dê aula de Typescript.
 */

function  primeiroProfessorTypescript (professores:Professor[]): Professor | undefined {
    return professores.find(professor => professor.materias.includes(Materias.Typescript))
}

console.log(primeiroProfessorTypescript(professores))