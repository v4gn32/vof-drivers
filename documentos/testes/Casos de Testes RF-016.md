# Casos de Testes - RF-016

## Testes de Sucesso

<table>
  <tr>
    <th colspan="2" width="1000">CT-016<br>Autenticação de Usuários</th>
  </tr>
  <tr>
    <td width="150"><strong>Descrição</strong></td>
    <td>Testar a autenticação dos usuários garantindo validação de senha (mínimo de 8 caracteres, incluindo pelo menos uma letra maiúscula e um número) e bloqueio após múltiplas tentativas inválidas.</td>
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
    <td>RF-016: O sistema deve exigir autenticação de usuários via login com e-mail e senha válidos, incluindo bloqueio após 5 tentativas inválidas por 15 minutos.</td>
  </tr>
  <tr>
    <td><strong>Passos</strong></td>
    <td>
      1. Abrir o aplicativo.<br>
      2. Acessar a tela de login.<br>
      3. Informar um e-mail válido já cadastrado.<br>
      4. Informar a senha válida (mínimo de 8 caracteres, incluindo uma letra maiúscula e um número).<br>
      5. Clicar no botão "Entrar".<br>
    </td>
  </tr>
  <tr>
    <td><strong>Critérios de êxito</strong></td>
    <td>O sistema deve autenticar o usuário e redirecioná-lo à página inicial do sistema.</td>
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
    <th colspan="2" width="1000">CT-017<br>Login após múltiplas tentativas inválidas</th>
  </tr>
  <tr>
    <td width="150"><strong>Descrição</strong></td>
    <td>Testar o bloqueio do sistema após 5 tentativas de login com dados inválidos, verificando se o bloqueio é aplicado por 15 minutos.</td>
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
    <td>RF-016: O sistema deve bloquear a autenticação após 5 tentativas inválidas por 15 minutos.</td>
  </tr>
  <tr>
    <td><strong>Passos</strong></td>
    <td>
      1. Abrir o aplicativo.<br>
      2. Acessar a tela de login.<br>
      3. Informar um e-mail válido.<br>
      4. Informar uma senha incorreta repetidamente por 5 vezes.<br>
      5. Tentar realizar o login novamente após 5 tentativas.<br>
    </td>
  </tr>
  <tr>
    <td><strong>Critérios de êxito</strong></td>
    <td>O sistema deve bloquear o login por 15 minutos e exibir uma mensagem informando sobre o bloqueio temporário.</td>
  </tr>
  <tr>
    <td colspan="6" align="center"><strong>Evidência</strong></td>
  </tr>
  <tr>
    <td colspan="6" align="center"><video width="640" height="480" controls><source src="../assets/Gravação-20250504_233736_novo.webm" type="video/webm"></video></td>
  </tr>
</table>
