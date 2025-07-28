# 📘 MRecursiva

**MRecursiva** é um sistema web completo desenvolvido com foco na avaliação de objetos de aprendizagem (como jogos, vídeos e aplicativos educativos). O sistema permite o cadastro, avaliação e consulta pública de conteúdos educacionais com base em critérios definidos.

## 🚀 Funcionalidades principais

- Cadastro e login de usuários com autenticação segura
- CRUD completo de objetos de aprendizagem
- Avaliação pública com notas de 1 a 5
- Exibição de nota média pública (RF-009)
- Controle de usuários (admin e avaliadores)
- Integração com banco de dados PostgreSQL
- API REST com backend Node.js + Prisma
- Interface web moderna com Next.js + Tailwind CSS

---

## 📁 Estrutura do Projeto

O código-fonte está organizado dentro da pasta `codigo-fonte`, dividida em dois principais diretórios:

---

## 🔧 `mr-backend`

Backend responsável pelas regras de negócio e persistência de dados.

**Principais tecnologias:**

- Node.js
- Express
- Prisma ORM
- PostgreSQL
- JWT (JSON Web Token)
- Dotenv
- Nodemailer

**Funcionalidades:**

- Rotas RESTful
- Validações de entrada
- Autenticação e autorização
- Conexão com o banco PostgreSQL via Prisma
- Envio de e-mails para notificações

---

## 💻 `mr-frontend`

Frontend responsável pela interface com o usuário.

**Principais tecnologias:**

- Next.js
- React
- Tailwind CSS
- Context API (para autenticação)
- Axios

**Funcionalidades:**

- Login e logout de usuários
- Cadastro e listagem de objetos de aprendizagem
- Envio de avaliações
- Consulta pública da nota média (RF-009)
- Exibição de páginas protegidas com base no tipo de usuário

---

## 📂 Acesse o código

Para navegar pelo código, clique na pasta [`codigo-fonte`](./codigo-fonte), onde você poderá explorar separadamente:

- [`mr-backend`](./codigo-fonte/mr-backend)
- [`mr-frontend`](./codigo-fonte/mr-frontend)

---

## 🧠 Requisitos implementados

- [x] RF-001 - Cadastro de usuário
- [x] RF-002 - Login
- [x] RF-003 - Cadastro de objeto de aprendizagem
- [x] RF-004 - Listagem de objetos
- [x] RF-009 - Exibir média pública de avaliações
- [x] RF-016 - Avaliação de objetos
- [x] RF-017 - Histórico de avaliações
- [x] RNF-001 - Interface amigável e responsiva

---

## 📌 Pré-requisitos

- Node.js (v18+)
- PostgreSQL
- Git

---

## ⚙️ Como rodar o projeto

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/MRecursiva.git

# Acesse a pasta do backend
cd MRecursiva/codigo-fonte/mr-backend

# Instale as dependências do backend
npm install

# Configure o .env e execute o backend
npx prisma migrate dev
npm run dev

# Em outro terminal, acesse o frontend
cd ../mr-frontend

# Instale as dependências do frontend
npm install

# Execute o frontend
npm run dev
```
