# Exemplo de Aplicação Express

Este é um exemplo de aplicação Express. Esta aplicação simples inclui um controlador de usuário, um modelo de usuário e rotas de API básicas.

## Pré-requisitos

Antes de começar, certifique-se de ter o Node.js instalado em sua máquina. Você pode baixá-lo em [nodejs.org](https://nodejs.org/).

## Clonando o Repositório

Para começar, clone este repositório para sua máquina local usando o seguinte comando:


git clone [git@github.com:josesantosdev/microservice-express.git](https://github.com/josesantosdev/microservice-express.git)
Instalação
Navegue até o diretório do projeto após a clonagem:

```bash
cd microservice-express
```
Em seguida, instale as dependências do projeto usando o npm (Node Package Manager):

```bash
npm install
```

## Configurando o banco de dados.
Certifique-se de que o dotenv está instalado na aplicação

```bash
    npm dotenv --version
    9.6.7
```
Crie um arquivo .env na pasta raiz do projeto.
Dentro do arquivo crie uma variavel de ambinete DATABASE_URI, configure a string de acordo com o as configurações do seu mongoDB.
```shell
    DATABASE_URI='mongodb://<Usuário>:<Senha>@<Host>:<Port>/<Database>'
```

Rodando a Aplicação
Depois de concluir a instalação das dependências, você pode iniciar a aplicação com o seguinte comando:

```bash
npm run start
```

Isso iniciará o servidor Express localmente. Você poderá acessar a aplicação em seu navegador em 
```TCP
    http://localhost:3000.
```

## Rotas de API

A aplicação inclui rotas de API básicas para gerenciar usuários. Você pode acessar as rotas em /api seguido pelos endpoints apropriados. Certifique-se de verificar o arquivo routes/api.js para obter mais detalhes sobre as rotas disponíveis.


## Contribuindo

Se você quiser contribuir para este projeto, fique à vontade para abrir problemas (issues) ou enviar um pull request.

## Licença

Este projeto está licenciado sob a Licença MIT.