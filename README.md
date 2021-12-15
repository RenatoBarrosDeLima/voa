# VOAA
## Projeto Voaa

[![N|Solid](https://voaa.me/_next/image?url=%2Fimages%2Fheader-logo.svg&w=256&q=75)](https://voaa.me)
O projeto foi elaborado com a stack de javascript, tanto no backend quanto o frontend.

## Stack
No Backend foi utilizado as seguintes tecnologias:
- Node JS
- Express
- Sequelize
- MySql

No Frontend foi utilizado as seguintes tecnologias:
- React JS
- React Hooks
- Styled-Components

## Fluxo do Frontend

- 1 - Passo, Cadastro/Login de usuário, tendo a possíbilidade desse usuário informar sendo "ADMIN" isso lhe permitirar criar as suas próprias campanhas
- 2 - Após o usuário criado e logado, caso ele seja ADMIM já poderá criar uma campanha ou participar das outras campanhas já existentes.
- 3 - Caso deseja criar uma nova campanha é só clicar no menu "Criar campanha" e preencher o formulário.
- 4 - Caso deseja fazer uma doação então é só escolher uma das campanhas exibidas e clicar, na tela seguinte deverá informar o valor tendo a opção de fazer a doação anônima. Na próxima etapa deverá confirmar a forma de pagamento. A princípio a única forma de pagamento é via Paypal no modo sandbox. É necessário que o usuário tenha uma conta criada para realizar o pagamento.
- 5 - Caso o usuário seja um "ADMIN" poderar consultar suas campanhas no menu "Minhas campanhas", fazer filtragem por doações anônimas ou por data e exportar no formato CSV.
- 6 - Todos os usuário poderão consultar suas doações no menu "Minhas doações"

## Estrutura do Frontend
Todo o código desenvolvido foi projetado e pensado para ser o máximo possível - legível, compactado, eficiente, escalável e desacoplado.
Todo o layout foi inspirado do site do voaa.me, sendo que a diferença mais significativa está na responsividade, que falta alguns ajustes significativos.
As pastas e seus conteúdo são bem definidos e intuitivos.
- (components) - nessa pasta fica os componentes que podem ser usados em diferentes telas.
- (hooks) - responável por manter os estados da aplicação.
- (pages) - contém todas as páginas da aplicação.
- (router) - responsável pelas rotas da aplicação.
- (util) - contém funções que podem ser acessadas por diversos componentes.

## Estrutura do Backend
A estrutura do back segue a mesma abordagem da estrutura do front, também tive a mesma preocupação com o desempenho do código, sendo que o mesmo está bem - legível, compactado, eficiente e escalável.
As pastas e seus conteúdo são bem definidos e intuitivos.
- (config) - possui o arquivo de configuração do banco de dados, como por exemplo: host, port, username, password, database.
- (controllers) - contém todos os arquivo com a regra de negócios da aplicação, relacionamento entre as tabelas, consultas no banco de dados, atualização de registros, etc.
- (database) - contém as 'migrations', para a criação das tabelas do banco de dados.
- (middleware) - contém um arquivo para autenticação do usuário para acessar certas rotas.
- (models) - contém a estrutura de cada modelo e o seu relacionamento com outros modelos.
- (routers) - responsável pelas rotas da aplicação.

## Instação Frontend

É necessário [Node.js](https://nodejs.org/) v12+ para executar.

Altere o arquivo .env para a rota da sua API.

```sh
Troque isso
API_URL=http://localhost:3001/
```
```sh
Pelo host da sua api
API_URL=<host_da_sua_api>:3001/
```

Instale as dependências e inicie o servidor.

```sh
cd front_voa
npm install
npm start
```
> É importante que o projeto rode na porta 3000, pois a API está configura para alguns retornos apontar para essa porta.

## Instação Backend

É necessário [Node.js](https://nodejs.org/) v12+ para executar.

Altere o arquivo .env para a rota da sua API.

```sh
Troque isso
DATABASE=voa
DATABASE_HOST=localhost
DATABASE_PORT=3306
DATABASE_USERNAME=root
DATABASE_PASSWORD=
TOKEN_SECRET=asdf789744asdfewr1321asdfr45ewr1213asdf
TOKEN_EXPIRATION=3d
```
```sh
Pelas suas configurações,
DATABASE=nome_banco_dados
DATABASE_HOST=seu_host
DATABASE_PORT=sua_porta_banco_dados
DATABASE_USERNAME=seu_usuario_banco_dados
DATABASE_PASSWORD=sua_senha_banco_dados
TOKEN_SECRET=asdf789744asdfewr1321asdfr45ewr1213asdf
TOKEN_EXPIRATION=3d
```

Instale as dependências.

```sh
cd api_voa
npm install
```

Cria as tabelas executando as migrations.

```sh
npx sequelize db:migrate
```

Inicie o servidor.

```sh
npm run dev
```

> Teoricamente a aplicação irá na porta 3001.
> Caso deseja alterar essa porta, então é só modificar no arquivo: server.js, na linha 3.
> Caso a porta da api seja modificada, então o frontend deverar ser atualizado, modificando o arquivo .env do front e atulaizar a porta também.




## Autor

Projeto desenvolvido inteiramente por mim, Renato Barros de Lima

**Free Software!**

