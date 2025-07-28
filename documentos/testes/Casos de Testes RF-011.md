# Casos de Testes - RF-011

## Testes de Sucesso

<table>
  <tr>
    <th colspan="2" width="1000">CT-011<br>Relatório Detalhado das Avaliações</th>
  </tr>
  <tr>
    <td width="150"><strong>Descrição</strong></td>
    <td>Testar a geração do relatório detalhado das avaliações para o proprietário e administrador, com gráficos de radar e detalhes das notas por avaliação.</td>
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
    <td>RF-011: O sistema deve fornecer ao proprietário (owner) e ao administrador acesso a um relatório detalhado das avaliações, com gráficos de radar e detalhes das notas por avaliação.</td>
  </tr>
  <tr>
    <td><strong>Passos</strong></td>
    <td>
      1. Abrir o aplicativo.<br>
      2. Acessar a interface de relatórios.<br>
      3. Garantir que o usuário tenha permissão de proprietário ou administrador.<br>
      4. Acessar o relatório detalhado das avaliações.<br>
      5. Verificar a presença de gráficos de radar exibindo as médias por eixo (Pedagógico, Conteúdo, Interação, Tecnológico).<br>
      6. Confirmar que os detalhes das notas por avaliação são exibidos.
    </td>
  </tr>
  <tr>
    <td><strong>Critérios de êxito</strong></td>
    <td>O sistema deve exibir o relatório detalhado corretamente, com gráficos de radar e detalhes das notas por avaliação.</td>
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
    <th colspan="2" width="1000">CT-012<br>Relatório Detalhado Sem Permissão de Acesso</th>
  </tr>
  <tr>
    <td width="150"><strong>Descrição</strong></td>
    <td>Testar o sistema para garantir que apenas proprietários e administradores possam acessar o relatório detalhado das avaliações.</td>
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
    <td>RF-011: O sistema deve garantir que apenas usuários com permissão de proprietário ou administrador possam acessar o relatório detalhado das avaliações.</td>
  </tr>
  <tr>
    <td><strong>Passos</strong></td>
    <td>
      1. Abrir o aplicativo.<br>
      2. Acessar a interface de relatórios.<br>
      3. Garantir que o usuário não seja proprietário nem administrador.<br>
      4. Tentar acessar o relatório detalhado das avaliações.<br>
    </td>
  </tr>
  <tr>
    <td><strong>Critérios de êxito</strong></td>
    <td>O sistema deve negar o acesso ao relatório, exibindo uma mensagem de erro ou redirecionando para a tela inicial.</td>
  </tr>
  <tr>
    <td colspan="6" align="center"><strong>Evidência</strong></td>
  </tr>
  <tr>
    <td colspan="6" align="center"><video width="640" height="480" controls><source src="../assets/Gravação-20250504_233736_novo.webm" type="video/webm"></video></td>
  </tr>
</table>
