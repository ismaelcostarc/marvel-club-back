# Marvel Club Backend

Projeto feito para ser possível pesquisar e favoritar HQs e Personagens da Marvel. Possui login e cadastro de usuário. Para autenticação foram utilizados tokens opacos, logo para obter dados do usuário atual não é preciso passar para a rota o id do usuário, apenas o token de autenticação. Por meio do token é possível encontrar o usuário logado e obter seus dados pessoais, HQs e personagens favoritados.

### Tecnologias

- Node
- AdonisJS
- Typescript
- Lucid ORM
- MySQL

### Como rodar o projeto

Primeiro é necessário criar um arquivo `.env` e preencher com os dados de `.env.example`. Criar um `database` no MySQL local. No arquivo `.env` devem ser preenchidos o nome do `database` (MYSQL_DB_NAME), o usuário (MYSQL_USER) e a senha (MYSQL_PASSWORD). Confira se o MySQL está rodando. Após isso é necessário rodar as `migrations`:

```
npm i
node ace migration:run
```
Após a criação das tabelas já é possível rodar o servidor:

```
npm run dev
```

O projeto estará rodando na URL: `http://localhost:3000`

Obs: Conferir se a porta 3000 está livre antes de rodar o servidor, pois caso esteja ocupada o Adonis iniciará o servidor em outra porta, fazendo com o Front não consiga se comunicar com a API.

[Documentação da API](https://documenter.getpostman.com/view/15023315/2s8Z6vYuPe)
