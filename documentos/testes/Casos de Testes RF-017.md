# Casos de Testes - RF-017

## Testes de Sucesso

<table>
  <tr>
    <th colspan="2" width="1000">CT-017<br>Alteração de Senha do Usuário</th>
  </tr>
  <tr>
    <td width="150"><strong>Descrição</strong></td>
    <td>Testar a funcionalidade de alteração de senha pelo próprio usuário.</td>
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
    <td>RF-017: O sistema deve permitir que o usuário altere a própria senha.</td>
  </tr>
  <tr>
    <td><strong>Passos</strong></td>
    <td>
      1. Abrir o aplicativo.<br>
      2. Acessar a tela de configurações da conta.<br>
      3. Selecionar a opção "Alterar Senha".<br>
      4. Informar a senha atual.<br>
      5. Informar a nova senha (mínimo de 8 caracteres, incluindo pelo menos uma letra maiúscula e um número).<br>
      6. Confirmar a nova senha.<br>
      7. Clicar em "Salvar".<br>
    </td>
  </tr>
  <tr>
    <td><strong>Critérios de êxito</strong></td>
    <td>O sistema deve permitir a alteração da senha com sucesso e confirmar a alteração.</td>
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
    <th colspan="2" width="1000">CT-018<br>Falha na Alteração de Senha</th>
  </tr>
  <tr>
    <td width="150"><strong>Descrição</strong></td>
    <td>Testar o sistema para garantir que ele não permita alterar a senha se a senha atual for inválida ou a nova senha não atender aos requisitos.</td>
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
    <td>RF-017: O sistema deve garantir que a alteração de senha só ocorra com senha atual válida e nova senha que atenda aos requisitos mínimos.</td>
  </tr>
  <tr>
    <td><strong>Passos</strong></td>
    <td>
      1. Abrir o aplicativo.<br>
      2. Acessar a tela de configurações da conta.<br>
      3. Selecionar a opção "Alterar Senha".<br>
      4. Informar uma senha atual inválida.<br>
      5. Informar uma nova senha que não atenda aos requisitos mínimos.<br>
      6. Clicar em "Salvar".<br>
    </td>
  </tr>
  <tr>
    <td><strong>Critérios de êxito</strong></td>
    <td>O sistema deve exibir uma mensagem de erro, indicando que a senha atual está incorreta ou que a nova senha não atende aos requisitos.</td>
  </tr>
  <tr>
    <td colspan="6" align="center"><strong>Evidência</strong></td>
  </tr>
  <tr>
    <td colspan="6" align="center"><video width="640" height="480" controls><source src="../assets/Gravação-20250504_233736_novo.webm" type="video/webm"></video></td>
  </tr>
</table>
