# Casos de Testes - RF-002

## 

### Testes de Sucesso

<table>
  <tr>
    <th colspan="2" width="1000">CT-001<br>Cadastrar modelo de avaliação</th>
  </tr>
  <tr>
    <td width="150"><strong>Descrição</strong></td>
    <td>O sistema deve permitir que o administrador cadastre um modelo de avaliação.</td>
  </tr>
  <tr>
    <td><strong>Responsável Caso de Teste </strong></td>
    <td width="430">Evandro Kumasaka</td>
  </tr>
 <tr>
    <td><strong>Tipo do Teste</strong></td>
    <td width="430">Sucesso</td>
  </tr> 
  <tr>
    <td><strong>Requisitos associados</strong></td>
    <td>RF-002: O administrador deve poder cadastrar um modelo de avaliação.</td>
  </tr>
  <tr>
    <td><strong>Passos</strong></td>
    <td>
      1. Abrir o aplicativo.<br>
      2. Clicar em "Cadastrar Modelo de Avaliação".<br>
      3. Preencher o formulário com os dados do modelo de avaliação.<br>
      4. Clicar no botão "Salvar".
      </td>
  </tr>
    <tr>
    <td><strong>Critérios de êxito</strong></td>
    <td>O sistema deve cadastrar o modelo de avaliação.</td>
  </tr>
  <tr>
    <td colspan="6" align="center"><strong>Evidência</strong></td>
  </tr>
  <tr>
    <td colspan="6" align="center"><video controls><source src="../assets/teste-RF-002_evidencia_dev_novo.mp4" type="video/mp4"></video></td>
  </tr>
</table>





<table>
  <tr>
    <th colspan="2" width="1000">CT-002<br>Editar modelo de avaliação</th>
  </tr>
  <tr>
    <td width="150"><strong>Descrição</strong></td>
    <td>O sistema deve permitir que o administrador edite um modelo de avaliação.</td>
  </tr>
  <tr>
    <td><strong>Responsável Caso de Teste </strong></td>
    <td width="430">Evandro Kumasaka</td>
  </tr>
 <tr>
    <td><strong>Tipo do Teste</strong></td>
    <td width="430">Sucesso</td>
  </tr> 
  <tr>
    <td><strong>Requisitos associados</strong></td>
    <td>RF-002: O administrador deve poder editar um modelo de avaliação.</td>
  </tr>
  <tr>
    <td><strong>Passos</strong></td>
    <td>
      1. Abrir o aplicativo.<br>
      2. Clicar em "Editar Modelo de Avaliação".<br>
      3. Preencher o formulário com os dados do modelo de avaliação.<br>
      4. Clicar no botão "Salvar".
      </td>
  </tr>
    <tr>
    <td><strong>Critérios de êxito</strong></td>
    <td>O sistema deve editar o modelo de avaliação.</td>
  </tr>
  <tr>
    <td colspan="6" align="center"><strong>Evidência</strong></td>
  </tr>
  <tr>
    <td colspan="6" align="center"><video width="100%" controls><source src="../assets/teste-RF-002_evidencia_dev_edit.mp4" type="video/mp4"></video></td>
  </tr>
</table>







<table>
  <tr>
    <th colspan="2" width="1000">CT-003<br>Excluir modelo de avaliação</th>
  </tr>
  <tr>
    <td width="150"><strong>Descrição</strong></td>
    <td>O sistema deve permitir que o administrador exclua um modelo de avaliação.</td>
  </tr>
  <tr>
    <td><strong>Responsável Caso de Teste </strong></td>
    <td width="430">Evandro Kumasaka</td>
  </tr>
 <tr>
    <td><strong>Tipo do Teste</strong></td>
    <td width="430">Sucesso</td>
  </tr> 
  <tr>
    <td><strong>Requisitos associados</strong></td>
    <td>RF-002: O administrador deve poder excluir um modelo de avaliação.</td>
  </tr>
  <tr>
    <td><strong>Passos</strong></td>
    <td>
      1. Abrir o aplicativo.<br>
      2. Clicar em "Excluir Modelo de Avaliação".<br>
      3. Confirmar a exclusão.
      </td>
  </tr>
    <tr>
    <td><strong>Critérios de êxito</strong></td>
    <td>O sistema deve excluir o modelo de avaliação.</td>
  </tr>
  <tr>
    <td colspan="6" align="center"><strong>Evidência</strong></td>
  </tr>
  <tr>
    <td colspan="6" align="center"><video width="100%" controls><source src="../assets/teste-RF-002_evidencia_dev_excluir.mp4" type="video/mp4"></video></td>
  </tr>
</table>



### Testes de Insucesso

<table>
  <tr>
    <th colspan="2" width="1000">CT-004<br>Editar modelo de avaliação com campos inválidos</th>
  </tr>
  <tr>
    <td width="150"><strong>Descrição</strong></td>
    <td>O sistema deve apresentar mensagem de erro ao tentar editar um modelo de avaliação com campos inválidos.</td>
  </tr>
  <tr>
    <td><strong>Responsável Caso de Teste </strong></td>
    <td width="430">Evandro Kumasaka</td>
  </tr>
 <tr>
    <td><strong>Tipo do Teste</strong></td>
    <td width="430">Insucesso</td>
  </tr> 
  <tr>
    <td><strong>Requisitos associados</strong></td>
    <td>RF-002: O administrador não deve poder editar um modelo de avaliação com campos inválidos.</td>
  </tr>
  <tr>
    <td><strong>Passos</strong></td>
    <td>
      1. Abrir o aplicativo.<br>
      2. Clicar em "Editar Modelo de Avaliação".<br>
      3. Preencher o formulário com campos inválidos.<br>
      4. Clicar no botão "Salvar".
      </td>
  </tr>
    <tr>
    <td><strong>Critérios de êxito</strong></td>
    <td>O sistema deve apresentar mensagem de erro.</td>
  </tr>
  <tr>
    <td colspan="6" align="center"><strong>Evidência</strong></td>
  </tr>
  <tr>
    <td colspan="6" align="center">incluir aqui</td>
  </tr>
</table>







<table>
  <tr>
    <th colspan="2" width="1000">CT-005<br>Excluir modelo de avaliação sem permissão</th>
  </tr>
  <tr>
    <td width="150"><strong>Descrição</strong></td>
    <td>O sistema deve apresentar mensagem de erro ao tentar excluir um modelo de avaliação sem permissão.</td>
  </tr>
  <tr>
    <td><strong>Responsável Caso de Teste </strong></td>
    <td width="430">Evandro Kumasaka</td>
  </tr>
 <tr>
    <td><strong>Tipo do Teste</strong></td>
    <td width="430">Insucesso</td>
  </tr> 
  <tr>
    <td><strong>Requisitos associados</strong></td>
    <td>RF-002: O administrador não deve poder excluir um modelo de avaliação sem permissão.</td>
  </tr>
  <tr>
    <td><strong>Passos</strong></td>
    <td>
      1. Abrir o aplicativo.<br>
      2. Clicar em "Excluir Modelo de Avaliação".<br>
      3. Tentar excluir sem permissão.
      </td>
  </tr>
    <tr>
    <td><strong>Critérios de êxito</strong></td>
    <td>O sistema deve apresentar mensagem de erro.</td>
  </tr>
  <tr>
    <td colspan="6" align="center"><strong>Evidência</strong></td>
  </tr>
  <tr>
    <td colspan="6" align="center">incluir aqui</td>
  </tr>
</table>



## Parte 2 - Testes por pares

<table>
  <tr>
    <th colspan="6" width="1000">CT-001<br>Cadastrar modelo de avaliação</th>
  </tr>
  <tr>
    <td width="170"><strong>Critérios de êxito</strong></td>
    <td colspan="5">O sistema deve cadastrar o modelo de avaliação.</td>
  </tr>
    <tr>
    <td><strong>Responsável pela funcionalidade</strong></td>
    <td width="430">Evandro Kumasaka </td>
      <td><strong>Responsável pelo teste</strong></td>
    <td width="430"> </td>
     <td width="100"><strong>Data do teste</strong></td>
    <td width="150">04/05/2024</td>
  </tr>
    <tr>
    <td width="170"><strong>Comentário</strong></td>
    <td colspan="5">O sistema está cadastrando corretamente.</td>
  </tr>
  <tr>
    <td colspan="6" align="center"><strong>Evidência</strong></td>
  </tr>
  <tr>
    <td colspan="6" align="center">incluir aqui</td>
  </tr>
</table>
