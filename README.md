# Node.js PostgreSQL REST API Boilerplate
## Um boilerplate simples para criação de APIs RESTful utilizando Node.js e PostgreSQL.

# Sobre
Este projeto serve como um ponto de partida para criar APIs REST com Node.js, oferecendo uma estrutura básica já conectada com PostgreSQL. O projeto inclui um exemplo completo de CRUD (Create, Read, Update, Delete) utilizando uma tabela exercises.

# Endpoints Disponíveis
A API possui os seguintes endpoints para a tabela exercises:

GET /exercises - Lista todos os exercícios
GET /exercises/:id - Lista um exercício existente
POST /exercises - Cria um novo exercício
PUT /exercises/:id - Atualiza um exercício existente
DELETE /exercises/:id - Remove um exercício existente

# Configuração Inicial

Clone o repositório
```bash
git clone https://github.com/vinicius-rabello/node-restful-api-boilerplate
cd node-restful-api-boilerplate
```

# Instale as dependências

```bash
npm install
```

# Configure as variáveis de ambiente
Crie um arquivo .env na raiz do projeto com as seguintes variáveis:

```bash
DB_HOST=localhost
DB_USER=seu_usuario
DB_PASS=sua_senha
DB_NAME=nome_do_banco
DB_PORT=5432
```

# Inicialize o servidor
```bash
node src/app.js
```