# 📁 Pasta: codigo-fonte

Este diretório contém **todo o código-fonte do sistema VOF-Drivers**, separado por camadas (frontend, backend e empacotamento desktop).

---

## 🧱 Estrutura da Pasta

codigo-fonte/
├── backend/ # API e lógica do servidor (Node.js + Express)
├── frontend/ # Interface gráfica do usuário (React + Tailwind)
├── desktop/ # Empacotamento como app Windows (Electron)
├── shared/ # Recursos compartilhados (interfaces, utils)
└── README.md # Esta documentação

---

## 📌 Objetivo

Organizar o código de forma modular, clara e escalável, facilitando:

- Navegação para desenvolvedores
- Contribuições externas
- Manutenção do sistema
- Deploy independente de cada camada

---

## 🛠️ Tecnologias Principais

| Módulo   | Stack Principal                          |
| -------- | ---------------------------------------- |
| frontend | React + Tailwind CSS + Vite + TypeScript |
| backend  | Node.js + Express + Prisma + PostgreSQL  |
| desktop  | Electron + Electron Builder              |

---

## 📁 Descrição das Pastas

### `backend/`

- Estrutura MVC (Model, Controller, Routes)
- Autenticação via JWT
- Conexão com banco de dados PostgreSQL
- Validações e middlewares

### `frontend/`

- Páginas e componentes reutilizáveis
- Consumo da API com `axios`
- Interface responsiva com Tailwind CSS
- Gerenciamento de autenticação e estados globais

### `desktop/`

- Integração com Electron para gerar instalador `.exe`
- Manipulação de arquivos locais (backup, logs)
- Comunicação com backend local ou remoto

### `shared/` _(opcional)_

- Interfaces TypeScript compartilhadas entre backend/frontend
- Utilitários globais

---

## 🧪 Testes

- Unitários com Jest
- Testes de interface com React Testing Library (planejado)
- Testes manuais para empacotamento final e modo offline

---

## 📄 Documentações Relacionadas

- [`README.md`](../README.md) – Visão geral do projeto
- [`SPECIFICATION.md`](../SPECIFICATION.md) – Especificação técnica
- [`INTERFACE.md`](../INTERFACE.md) – Layouts e componentes
- [`TESTE-DE-SOFTWARE.md`](../TESTE-DE-SOFTWARE.md) – Plano de testes

---

> Manter esta pasta bem organizada é essencial para a manutenção e crescimento do projeto.  
> Dúvidas? Consulte a documentação principal na raiz do projeto.

---

📅 Última atualização: Julho de 2025
