# Planos de Testes de Software

**CT-001 - Cadastro de Critérios de Avaliação**
**Requisito Relacionado:** RF-001
**Prioridade:** Alta
**Descrição:** Testar o cadastro de critérios de avaliação pelo administrador, garantindo a validação correta dos campos, evitando duplicatas e confirmando o salvamento adequado.

| ID | Cenário | Entrada | Resultado Esperado |
| ------------ | ------------ | ------------ | ------------ |
| CT-001-01 | Cadastro válido | Critério: Facilidade de uso, Eixo: Pedagógico, Descrição: Avalia a usabilidade do objeto | Critério cadastrado com sucesso |
| CT-001-02 | Critério duplicado | Critério: Facilidade de uso, Eixo: Pedagógico (já existente) | Mensagem de erro impedindo duplicação |
| CT-001-03 | Campo obrigatório ausente | Eixo: Pedagógico | Mensagem de erro informando campo obrigatório |
| CT-001-04 | Descrição excedendo limite | Texto com mais de 500 caracteres | Mensagem de erro impedindo salvamento |
| CT-001-05 | Cancelamento do salvamento | Preenchimento correto, mas usuário cancela antes de confirmar | Critério não é salvo |

**CT-002 - Cadastro de Modelos de Avaliação**
**Requisito Relacionado:** RF-002
**Prioridade:** Alta
**Descrição:** Testar o cadastro de modelos de avaliação, garantindo a validação do nome único e do tipo de objeto.

| ID | Cenário | Entrada | Resultado Esperado |
| ------------ | ------------ | ------------ | ------------ |
| CT-002-01 | Cadastro válido | Nome: "Modelo A", Tipo: "Jogo" | Modelo cadastrado com sucesso |
| CT-002-02 | Nome duplicado | Nome: Modelo A (já existente), Tipo: App | Mensagem de erro impedindo duplicação |
| CT-002-03 | Nome excedendo limite |Nome: 51 caracteres | Mensagem de erro impedindo cadastro |
| CT-002-04 | Tipo não selecionado | Nome: Modelo B |Mensagem de erro informando campo obrigatório |

**CT-003 - Configuração de Modelos de Avaliação**
**Requisito Relacionado: **RF-003
**Prioridade:** Alta
**Descrição: **Testar a configuração dos modelos de avaliação garantindo que pelo menos um critério por eixo seja selecionado e evitando duplicatas.

| ID | Cenário | Entrada | Resultado Esperado |
| ------------ | ------------ | ------------ | ------------ |
| CT-003-01 | Configuração válida | Critérios selecionados corretamente | Configuração salva com sucesso |
| CT-003-02 | Critério duplicado | Critério "Facilidade de Uso" inserido duas vezes | Mensagem de erro impedindo duplicação |
| CT-003-03 | Eixo sem critério |Nenhum critério selecionado para "Tecnológico" | Mensagem de erro impedindo cadastro |

**CT-004 - Cadastro de Objetos de Aprendizagem**
**Requisito Relacionado: **RF-004
**Prioridade:** Alta
**Descrição: **Testar o cadastro de objetos de aprendizagem com a validação de todos os campos obrigatórios.

| ID | Cenário | Entrada | Resultado Esperado |
| ------------ | ------------ | ------------ | ------------ |
| CT-004-01 | Cadastro válido | Todos os campos preenchidos corretamente | Objeto cadastrado com sucesso |
| CT-004-02 | Campo obrigatório ausente | Nome vazio | Mensagem de erro |
| CT-004-03 | Faixa etária inválida | -5 anos | Mensagem de erro |

**CT-005 - Avaliação de Objetos de Aprendizagem**
**Requisito Relacionado:** RF-005
**Prioridade:** Alta
**Descrição:** Testar o processo de avaliação de um objeto de aprendizagem garantindo o funcionamento correto das notas e do salvamento.

| ID | Cenário | Entrada | Resultado Esperado |
| ------------ | ------------ | ------------ | ------------ |
| CT-005-01 | Avaliação válida | Notas de 1 a 5 para todos os critérios | Avaliação salva com sucesso |
| CT-005-02 | Notas fora do intervalo | Nota "6" para um critério | Mensagem de erro |

**CT-006 - Relatório Simplificado de Avaliação**
**Requisito Relacionado: **RF-006
**Prioridade:** Média
**Descrição:** Testar a exibição do relatório simplificado após a finalização da avaliação.

| ID | Cenário | Entrada | Resultado Esperado |
| ------------ | ------------ | ------------ | ------------ |
| CT-006-01 | Exibição do relatório | Avaliação finalizada | Relatório simplificado exibido|
| CT-006-02 | Relatório sem avaliação | Nenhuma avaliação realizada | Mensagem informando ausência de dados |

**CT-016 - Autenticação de Usuários**
**Requisito Relacionado:** RF-016
**Prioridade: **Alta
**Descrição:** Testar a autenticação dos usuários garantindo validação de senha e bloqueio após múltiplas tentativas.

| ID | Cenário | Entrada | Resultado Esperado |
| ------------ | ------------ | ------------ | ------------ |
| CT-016-01 | Login válido | E-mail e senha corretos | Acesso concedido|
| CT-006-02 | Senha incorreta | E-mail correto, senha errada | Mensagem de erro |
| CT-016-03 | Bloqueio por tentativas | 5 tentativas falhas | Conta bloqueada por 15 minutos |


 
# Evidências de Testes de Software

Apresente imagens e/ou vídeos que comprovam que um determinado teste foi executado, e o resultado esperado foi obtido. Normalmente são screenshots de telas, ou vídeos do software em funcionamento.

## Parte 1 - Testes Unitários
Cada funcionalidade desenvolvida deve ser testada utilizando os casos de testes (sucesso e insucesso) criados pelo responsável pela funcionalidade. Todos os testes devem ser evidenciados.

### Exemplo
<table>
  <tr>
    <th colspan="6" width="1000">CT-001<br>Login com credenciais válidas</th>
  </tr>
  <tr>
    <td width="170"><strong>Critérios de êxito</strong></td>
    <td colspan="5">O sistema deve redirecionar o usuário para a página inicial do aplicativo após o login bem-sucedido.</td>
  </tr>
    <tr>
    <td><strong>Responsável pelo Teste</strong></td>
    <td width="430">José da Silva </td>
     <td width="100"><strong>Data do Teste</strong></td>
    <td width="150">08/05/2024</td>
  </tr>
    <tr>
    <td width="170"><strong>Comentário</strong></td>
    <td colspan="5">O sistema está permitindo o login corretamente.</td>
  </tr>
  <tr>
    <td colspan="6" align="center"><strong>Evidência</strong></td>
  </tr>
  <tr>
    <td colspan="6" align="center"><video src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-time-sheet/assets/82043220/2e3c1722-7adc-4bd4-8b4c-3abe9ddc1b48"/></td>
  </tr>
</table>

## Parte 2 - Testes por pares
A fim de aumentar a qualidade da aplicação desenvolvida, cada funcionalidade deve ser testada por um colega e os testes devem ser evidenciados. O colega "Tester" deve utilizar o caso de teste criado pelo desenvolvedor responsável pela funcionalidade (desenvolveu a funcionalidade e criou o caso de testes descrito no plano de testes).

### Exemplo
<table>
  <tr>
    <th colspan="6" width="1000">CT-001<br>Login com credenciais válidas</th>
  </tr>
  <tr>
    <td width="170"><strong>Critérios de êxito</strong></td>
    <td colspan="5">O sistema deve redirecionar o usuário para a página inicial do aplicativo após o login bem-sucedido.</td>
  </tr>
    <tr>
    <td><strong>Responsável pela funcionalidade</strong></td>
    <td width="430">José da Silva </td>
      <td><strong>Responsável pelo teste</strong></td>
    <td width="430">Maria Oliveira </td>
     <td width="100"><strong>Data do teste</strong></td>
    <td width="150">08/05/2024</td>
  </tr>
    <tr>
    <td width="170"><strong>Comentário</strong></td>
    <td colspan="5">O sistema está permitindo o login corretamente.</td>
  </tr>
  <tr>
    <td colspan="6" align="center"><strong>Evidência</strong></td>
  </tr>
  <tr>
    <td colspan="6" align="center"><video src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-time-sheet/assets/82043220/2e3c1722-7adc-4bd4-8b4c-3abe9ddc1b48"/></td>
  </tr>
</table>



