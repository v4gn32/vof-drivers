# 🚀 VOF-Drivers

> Um sistema inteligente para escanear, atualizar, fazer backup e restaurar drivers no Windows.  
> Inspirado no Driver Booster 12 — moderno, gratuito, nacional e em código aberto.

![badge-versao](https://img.shields.io/badge/vers%C3%A3o-1.0.0-blue)
![badge-licenca](https://img.shields.io/badge/licen%C3%A7a-MIT-green)
![badge-status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)

---

## 🎯 Sobre o Projeto

O **VOF-Drivers** é um sistema completo de atualização de drivers que automatiza a verificação, download e instalação de drivers desatualizados ou ausentes no Windows.

Com foco em **performance**, **segurança** e **facilidade**, o sistema também oferece:

- Backup e restauração de drivers
- Instalação offline via pacote local
- Painel de histórico e status por hardware
- Interface leve e moderna com empacotamento via Electron

---

## 🧰 Tecnologias Utilizadas

| Camada      | Tecnologias                     |
| ----------- | ------------------------------- |
| Frontend    | React, Tailwind CSS, TypeScript |
| Backend     | Node.js, Express                |
| Desktop App | Electron                        |
| Banco       | SQLite (local) ou PostgreSQL    |
| API/Driver  | WMI, Snappy Driver API (futuro) |

---

## 🧩 Funcionalidades

✅ Escaneamento automático de drivers  
✅ Atualização em lote ou individual  
✅ Backup/restore com 1 clique  
✅ Instalação offline (pacote .zip)  
✅ Histórico detalhado de ações  
✅ Modo técnico e permissões elevadas  
🔜 Atualização automática via Electron

---

## 🖼️ Interface (em desenvolvimento)

| Tela          | Descrição                                      |
| ------------- | ---------------------------------------------- |
| Início        | Status do sistema e botão de escaneamento      |
| Verificação   | Lista de drivers desatualizados                |
| Atualizações  | Opção para atualizar drivers                   |
| Backup        | Backup e restauração de drivers                |
| Modo Offline  | Upload de pacote .zip para instalar drivers    |
| Histórico     | Log de ações feitas pelo usuário               |
| Configurações | Tema, idioma, notificações, agendamentos       |
| Sobre         | Dados da versão, autor, licença e atualizações |

---

## 📦 Instalação

1. Faça o download do instalador `.exe` (em breve via [Releases](https://github.com/vof-assessoria/vof-drivers/releases))
2. Execute com permissões de administrador
3. O app será instalado e ficará disponível no menu iniciar

---

## 📁 Documentação

- [`CONTEXT.md`](./CONTEXT.md) – Contexto do projeto
- [`SPECIFICATION.md`](./SPECIFICATION.md) – Especificação técnica
- [`INTERFACE.md`](./INTERFACE.md) – Telas e layout da interface
- [`TESTE-DE-SOFTWARE.md`](./TESTE-DE-SOFTWARE.md) – Plano de testes
- [`IMPLANTACAO.md`](./IMPLANTACAO.md) – Implantação e empacotamento

---

## 👤 Desenvolvedor

**Vagner Oliveira**  
📧 vofassessoria@gmail.com  
🔗 [LinkedIn](https://www.linkedin.com) | [GitHub](https://github.com/vagneroliveira)

---

## 🪪 Licença

Distribuído sob a [Licença MIT](./LICENSE.md) — uso livre com atribuição.

---

> Projeto mantido por **VOF Assessoria** • Julho de 2025
