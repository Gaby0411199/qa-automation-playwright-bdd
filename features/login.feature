Feature: Login Sauce Demo

  Scenario: Login exitoso con credenciales válidas
    Given el usuario está en la página de login
    When ingresa usuario "standard_user" y contraseña "secret_sauce"
    Then debería ver el dashboard con título "Products"

  Scenario: Login fallido con contraseña incorrecta
    Given el usuario está en la página de login
    When ingresa usuario "standard_user" y contraseña "wrong_password"
    Then debería ver un mensaje de error

  Scenario: Login fallido con usuario bloqueado
    Given el usuario está en la página de login
    When ingresa usuario "locked_out_user" y contraseña "secret_sauce"
    Then debería ver un mensaje de error