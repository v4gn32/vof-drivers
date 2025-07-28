# Casos de Testes - RF-009

## Testes de Sucesso

<table>
  <tr>
    <th colspan="2" width="1000">CT-009<br>Exibição da Nota Média Final</th>
  </tr>
  <tr>
    <td width="150"><strong>Descrição</strong></td>
    <td>Testar a exibição da nota média final de cada objeto de aprendizagem na interface de consulta, sem revelar detalhes das avaliações individuais ou gráficos.</td>
  </tr>
  <tr>
    <td><strong>Responsável Caso de Teste </strong></td>
    <td width="430">Vagner Oliveira</td>
  </tr>
  <tr>
    <td><strong>Tipo do Teste</strong></td>
    <td width="430">Sucesso</td>
  </tr> 
  <tr>
    <td><strong>Requisitos associados</strong></td>
    <td>RF-009: O sistema deve exibir publicamente a nota média final de cada objeto de aprendizagem, sem revelar detalhes das avaliações individuais.</td>
  </tr>
  <tr>
    <td><strong>Passos</strong></td>
    <td>
      1. Abrir o aplicativo.<br>
      2. Acessar a interface de consulta de objetos de aprendizagem.<br>
      3. Localizar o objeto de aprendizagem desejado.<br>
      4. Verificar a exibição da nota média final do objeto (ex.: 4.3/5.0).<br>
      5. Garantir que detalhes das avaliações individuais ou gráficos não são exibidos.
    </td>
  </tr>
  <tr>
    <td><strong>Critérios de êxito</strong></td>
    <td>A nota média final deve ser exibida corretamente, sem revelar informações sobre avaliações individuais ou gráficos.</td>
  </tr>
  <tr>
    <td colspan="6" align="center"><strong>Evidência</strong></td>
  </tr>
  <tr>
    <td colspan="6" align="center"><video width="640" height="480" controls><source src="../assets/Gravação-20250504_233736_novo.webm" type="video/webm"></video></td>
  </tr>
</table>

## Testes de Insucesso

<table>
  <tr>
    <th colspan="2" width="1000">CT-010<br>Exibição de Detalhes das Avaliações Individuais</th>
  </tr>
  <tr>
    <td width="150"><strong>Descrição</strong></td>
    <td>Testar o sistema para garantir que ele não revele detalhes das avaliações individuais ou gráficos ao exibir a nota média final.</td>
  </tr>
  <tr>
    <td><strong>Responsável Caso de Teste </strong></td>
    <td width="430">Vagner Oliveira</td>
  </tr>
  <tr>
    <td><strong>Tipo do Teste</strong></td>
    <td width="430">Insucesso</td>
  </tr> 
  <tr>
    <td><strong>Requisitos associados</strong></td>
    <td>RF-009: O sistema deve exibir apenas a nota média final, sem mostrar detalhes individuais das avaliações.</td>
  </tr>
  <tr>
    <td><strong>Passos</strong></td>
    <td>
      1. Abrir o aplicativo.<br>
      2. Acessar a interface de consulta de objetos de aprendizagem.<br>
      3. Localizar o objeto de aprendizagem desejado.<br>
      4. Verificar se o sistema está exibindo detalhes individuais das avaliações ou gráficos.<br>
    </td>
  </tr>
  <tr>
    <td><strong>Critérios de êxito</strong></td>
    <td>O sistema deve garantir que nenhum detalhe individual das avaliações ou gráficos seja exibido.</td>
  </tr>
  <tr>
    <td colspan="6" align="center"><strong>Evidência</strong></td>
  </tr>
  <tr>
    <td colspan="6" align="center"><video width="640" height="480" controls><source src="../assets/Gravação-20250504_233736_novo.webm" type="video/webm"></video></td>
  </tr>
</table>
