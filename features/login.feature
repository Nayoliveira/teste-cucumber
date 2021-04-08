Feature: Realizar Login
  Realizar login na pagina applitools

Scenario: Fazer login
   Given Eu esteja na pagina de login
   When Eu digito meu usuário 'user' e a senha "user"
   And Eu clico em login
   Then O nome da página deve ser "ACME demo app"
