# ✅ Plano de Teste de Software — Projeto VOF-Drivers

---

## 📌 Objetivo

Garantir que o sistema VOF-Drivers funcione corretamente em diferentes cenários de uso, com foco na **estabilidade**, **desempenho**, **segurança**, e **experiência do usuário**, tanto no modo online quanto offline.

---

## 🧪 Tipos de Testes

| Tipo de Teste            | Finalidade                                                       |
| ------------------------ | ---------------------------------------------------------------- |
| Teste Funcional          | Validar se as funcionalidades funcionam como especificado        |
| Teste de Interface (UI)  | Verificar a consistência visual, responsividade e acessibilidade |
| Teste de Fluxo de Uso    | Garantir que o fluxo do usuário seja intuitivo e sem erros       |
| Teste de Backup/Restore  | Testar integridade dos arquivos de backup e sua restauração      |
| Teste de Desempenho      | Avaliar consumo de memória, tempo de escaneamento, etc.          |
| Teste de Compatibilidade | Testar funcionamento em diferentes versões do Windows (10/11)    |
| Teste Offline            | Verificar funcionamento com drivers locais, sem internet         |
| Teste de Instalação      | Validar instalação via pacote `.exe` gerado no Electron Builder  |

---

## 🧰 Ferramentas Sugeridas

- **Jest** (para testes unitários no backend e frontend)
- **React Testing Library** (testes de componentes React)
- **Playwright / Cypress** (testes de interface com simulação de usuário)
- **Postman** (para testar rotas da API)
- **Electron Packager + Setup Builder** (para testes de instalação)

---

## 🔎 Casos de Teste (exemplos)

| ID     | Caso de Teste                                     | Resultado Esperado                             |
| ------ | ------------------------------------------------- | ---------------------------------------------- |
| CT-001 | Escanear drivers após clicar em "Verificar Agora" | Lista de drivers desatualizados é exibida      |
| CT-002 | Atualizar driver com botão "Atualizar"            | Driver atualizado e status alterado para OK    |
| CT-003 | Realizar backup de todos os drivers               | Arquivo `.zip` é gerado e salvo corretamente   |
| CT-004 | Restaurar backup de drivers                       | Drivers antigos restaurados com sucesso        |
| CT-005 | Executar instalação offline com pacote local      | Drivers são listados e instalados corretamente |
| CT-006 | Tela inicial exibe status do sistema corretamente | Mostra “Drivers atualizados” ou “Problemas”    |
| CT-007 | Navegação entre as telas pelo menu lateral        | Interface carrega corretamente sem recarregar  |
| CT-008 | Falha proposital de instalação (simulada)         | Exibe erro claro com sugestão de solução       |
| CT-009 | Rodar em ambiente sem internet                    | App entra automaticamente em modo offline      |
| CT-010 | Instalação do app gerado via Electron (.exe)      | App é instalado sem erro no Windows            |

---

## 📋 Critérios de Aceitação

- 100% dos testes funcionais devem passar
- Nenhum erro crítico pode ser ignorado na release
- Interface responsiva e acessível
- Aplicativo não deve consumir mais de 500MB de RAM em operação normal
- Backup e restauração devem manter a integridade dos arquivos

---

## ♻️ Testes Regressivos

A cada nova versão ou funcionalidade adicionada, os testes anteriores devem ser reexecutados para garantir que **nenhum recurso antigo foi quebrado**.

---

## 🧠 Estratégia de Automação

> Para etapas mais avançadas:

- Automatizar o fluxo de verificação, atualização e backup usando **Cypress** ou **Playwright**
- Criar testes unitários para funções críticas com **Jest**
- Automatizar testes de performance e consumo com ferramentas de monitoramento

---

## 🧑‍💻 Execução dos Testes

1. Rodar os testes unitários (`npm test`)
2. Rodar os testes de interface (`npx playwright test`)
3. Verificar logs da instalação e execução via `.exe`
4. Validar com usuários reais (teste beta)

---

## 📌 Observações

- Todos os testes devem ser documentados em relatórios com data, versão, responsável e resultado.
- Bugs devem ser registrados em Issues com descrição clara, print/log e etapa para reproduzir.
- O ciclo de testes acompanha cada versão do projeto definida no `ROADMAP.md`.

---

> Documento mantido por Vagner – VOF Assessoria • Última atualização: Julho de 2025
