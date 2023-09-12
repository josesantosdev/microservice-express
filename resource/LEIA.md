Está começando agora no backend e está perdidão? vamos lá, você também precisa me ajudar pra isto dar certo, então você tem q saber um pouco de javascript e um pouco de node, saber usar o npm e etc.
Basicão mesmo;

Eu sei que você não entende ainda o que são models, controllers e etc., comece por este arquivo, mas não se afobe, vou pincelar os conceitos aqui, no final da página com alguns links de referências, mas nada te impede de dar um google e apender os conceitos a fundo. Se tem uma coisa que facilita aprender qualquer tecnologia para mim é conhecer o conceito antes.

Neste repositório, tem uma aplicação destinada a rodar no servidor, ou seja, o backend.

A aplicação é responsável por realizar as operações básicas de qualquer sistema, comumente chamado de CRUD (Criar, Ler, Atualizar, Deletar). A aplicação recebe uma mensagem e deve responder com outra mensagem; essas mensagens são chamadas de requisições.

Seguindo o estilo de arquitetura REST, as requisições deverão ser através do protocolo HTTP, e o conteúdo da mensagem deverá ser JSON.

Não vou aprofundar em REST ou RESTful aqui, porque não contribui para a evolução de um total iniciante. Você precisa saber apenas que estamos seguindo este estilo arquitetural; hoje em dia (2023) é o usual.

Um pré-requisito para que você consiga avançar aqui são orientação a objetos e banco de dados.

Se você ainda não entende o que são classes, o que são objetos, atributos, métodos, volte uma casa.
Se você ainda não instalou seu primeiro SGBD (popularmente chamado de banco de dados), não criou seu primeiro banco de dados e primeira tabela, volte uma casa.

Na faculdade, quando você está começando a estudar lógica de programação, você está lidando apenas com um arquivo, se for Python então... está no terminal preto executando os comandos. Porém, agora você está em uma aplicação mais complexa que separa em camadas a aplicação e deixa cada camada responsável por uma funcionalidade; aqui usamos como base o padrão de projeto MVC. MVC é outra coisa que você deveria aprender a fundo.

Basicamente, esta aplicação tem models e controllers. Os "models" são usados para representar os dados que a API manipula, ou seja, os objetos e entidades.

Nossa aplicação trata da entidade Usuário, que possui o atributo nome e email. Veja:

```javascript
class User = {
    constructor: (name: string, email: string)
    
        this.name = name;
        this.email = email;
}

```

Se você abriu o arquivo models/userModel.js sabe que a model está diferente certo?
O fato é essas informações precisam ser armazenadas em algum lugar, neste caso estamos usando um banco de dados, mas expessificamente o mongoDB, entrei no site oficial criei um banco de dados e coloquei a URI dele no arquivo .env, como explica README.md da aplicação.

Mas para que funcione será necessário modificar nossa model, para o padrão do ORM que utilizaremos, aqui você já deve ter ficado perdido né ORM?

Não vou dar outra carteirada falando que é o ORM em detalhes, mas o que é? O ORM é quem vai mapear nossos objetos e realizar a comunicação com o banco de dados, já que os dados estruturados do banco devem ter um tipo para cada campo, o ORM premite que espesifiquemos estes tipos através de um Schema.

O ORM também disponibiliza um Objeto com vários métodos já prontos, para realizar as operações de banco sem precisar escrever uma linha se quer de SQL. Estamos utilizando o mongoose.

```javascript
const mongoose = require('mongoose') // Depois de instalar o orm estou importando ele para dentro da minha model

//Criando um schema para meu usuário, aqui eu espessifico quais campos a entidade terá e o tipo, orm ficará responsável por criar a tabela no banco de dados com base neste schema.
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
});

//Aqui estou criando uma model do mongose com nome User e que usa o schema acima, desta forma consigo acessar o objeto User que terá os metodos responsáveis pelas contas no banco de dados, aqueles metodos do CRUD e alguns outros.
module.exports = mongoose.model('User', userSchema)
```

Os "controllers" são responsáveis por manipular as solicitações feitas à API, eles quem receberão as mensagens e responderão com outra mensagem com o conteúdo. Para enviar essas mensagens, utilizamos rotas; as rotas são as URLs. Por exemplo, o domínio é o google.com, a rota da aplicação seria google.com/api/v1/usuarios.

As "rotas" definem os pontos de extremidade (endpoints) da sua API. São URLs que os clientes usam para acessar recursos específicos. Por exemplo, uma rota "/tarefas" pode ser usada para acessar todas as tarefas, enquanto "/tarefas/1" pode ser usada para acessar uma tarefa específica com o ID 1.

Nesta aplicação, as rotas estão configuradas no arquivo routes/api.js, onde cada rota chama um método do controller. Veja:

```javascript
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userControllers');

router.get('/users', userController.getUsers);
router.get('/users/:userId', userController.getOneUser);
router.post('/users', userController.createUser);
router.put('/users/:userId', userController.updateUser);
router.delete('/users/:userId', userController.deleteUser);

module.exports = router;

```

Então, quando eu usar o verbo GET para fazer uma requisição na rota /users, a aplicação executará o método da classe userController getUsers().

O método getUsers() busca no banco de dados todos os usuários e retorna uma resposta com uma lista de usuários no formato JSON.

```javascript

module.exports.getUsers = async (req, res) => {
    try {
        const users = await User.find(); // utilizando o metodo do objeto do ORM find para encontrar no banco de dados os usuários
        res.json(users); //respondendo com os usuários no formato json
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: 'Internal Server Error' })
    }
};

```

Este não é um tutorial passo a passo; o intuito aqui é conhecer o que é uma aplicação backend, o que é uma API. Quando comecei a estudar programação, ouvia muito falar em API e não sabia o que era. O que faz sentido para mim hoje, para aprender qualquer tecnologia, é pegar um exemplo.

Quer aprender frontend? Pesquise exemplos de frontend, seja em HTML, CSS e JavaScript puro, ou um exemplo em Angular ou React.

Explore cada arquivo, saiba o que cada um deles é e o porquê deles estarem ali. Por exemplo, nesta aplicação tem o arquivo package.json; leia o arquivo, faça uma pesquisa, descubra para que ele serve. Você irá aprender sobre gerenciamento de dependências de aplicações Node.js, e para mim, este é o mágico da programação. Cada uma das palavrinhas da sopa de letrinhas aqui são algumas horas de estudos, e que podem se prolongar em alguns casos, como é o MVC, por exemplo.

Refências
(express hello world)[https://expressjs.com/en/starter/hello-world.html]
(mongoose configuração)[https://mongoosejs.com/docs/index.html]
(O que é REST)[https://pt.wikipedia.org/wiki/REST]
(O que é MVC)[https://pt.wikipedia.org/wiki/MVC]

