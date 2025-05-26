
# 🏆 Champions League API

API desenvolvida com **Node.js** e **Express** utilizando a arquitetura **N-Layers**, voltada para a manipulação e consulta de dados relacionados à **Champions League**, incluindo **jogadores**, **clubes** e **estatísticas**.

---

## 📚 Descrição

Este projeto tem como objetivo fornecer uma **API RESTful completa e eficiente** para acesso a dados da Champions League. Ideal para plataformas e sistemas que necessitam de acesso rápido e confiável a informações como:

- Detalhes de **jogadores**: nome, nacionalidade, posição, estatísticas.
- Listagem e detalhes de **clubes participantes**.
- Associação entre jogadores e seus respectivos clubes.

---

## 🧱 Arquitetura N-Layers

O projeto foi construído seguindo o padrão **N-Camadas (N-Layers)**, promovendo uma melhor separação de responsabilidades:

- **Controllers**: tratam as requisições e respostas.
- **Services**: regras de negócio da aplicação.
- **Repositories**: acesso e manipulação dos dados.
- **Models**: definição das estruturas de dados.
- **Utils**: funções auxiliares.
- **Data**: mock de dados em JSON.

---

## 📁 Estrutura de Pastas

```
src/
│
├── controllers/
│   ├── clubs-controller.ts
│   └── players-controller.ts
│
├── data/
│   └── clubs.json
│
├── models/
│   ├── club-model.ts
│   ├── http-response-model.ts
│   ├── player-model.ts
│   └── statistics-model.ts
│
├── repositories/
│   ├── clubs-repository.ts
│   └── players-repository.ts
│
├── services/
│   ├── clubs-service.ts
│   └── players-service.ts
│
├── utils/
│   └── http-helper.ts
│
├── app.ts
├── routes.ts
└── server.ts
```

---

## 🚀 Como Executar o Projeto

### 1. Clone o repositório

```bash
git clone https://github.com/geovanegirard/champions-league-api.git
cd champions-league-api
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Execute em modo de desenvolvimento

```bash
npm run start:dev
```

Ou, para acompanhar alterações em tempo real:

```bash
npm run start:watch
```

---

## 📦 Scripts Disponíveis

| Comando          | Descrição                                       |
|------------------|-------------------------------------------------|
| `npm run dist`   | Compila o código TypeScript com `tsup`          |
| `npm run start:dev` | Inicia a API em modo de desenvolvimento         |
| `npm run start:watch` | Inicia a API com monitoramento de alterações |
| `npm run start:dist` | Gera a versão compilada e executa a aplicação |

---

## 📌 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tsup](https://tsup.egoist.dev/)
- [TSX](https://github.com/esbuild-kit/tsx)

---

## 📮 Endpoints da API

### 🎮 Players

| Método | Rota                     | Descrição                          |
|--------|--------------------------|------------------------------------|
| GET    | `/api/players/list`      | Lista todos os jogadores           |
| GET    | `/api/players/{id}`      | Busca um jogador por ID            |
| POST   | `/api/players`           | Cadastra um novo jogador           |
| PATCH  | `/api/players/{id}`      | Atualiza um jogador pelo ID        |
| DELETE | `/api/players/{id}`      | Remove um jogador pelo ID          |

### 🏟️ Clubs

| Método | Rota                     | Descrição                          |
|--------|--------------------------|------------------------------------|
| GET    | `/api/clubs/list`        | Lista todos os clubes              |

---

## ✍️ Autor

Desenvolvido por [Geovane Girard](https://www.linkedin.com/in/geovane-girard/).
