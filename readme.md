 # Chat xD cli de chatGPT

 Para poder utilizar la API de Chat GPT es necesario obtener una clave de API, la cual se utiliza para autenticarse y
 hacer llamadas a los servicios de la plataforma.
 
 Para obtener la clave de API deben seguir los siguientes pasos:
 
  1. Registrarse en Chat GPT
  2. Iniciar sesión en su cuenta de Chat GPT
  3. Hacer clic en el botón "Profile" que está en la parte superior derecha de la pantalla
  4. En la página de perfil, hacer clic en la pestaña "API"
  5. Aquí podrán generar una nueva clave de API, haciendo clic en el botón "Generate API Key"
 
 Al generar la clave de API, deberán copiarla y pegarla en un archivo `.env` en el directorio raíz de su proyecto. Este
 archivo `.env` es usado para guardar información confidencial o secreta, como claves de API, por lo que no debe ser
 compartido o subido a repositorios públicos.
 
 Para agregar la clave de API generada al archivo `.env`, deben seguir los siguientes pasos:
 
  1. Crear un archivo llamado `.env` en el directorio raíz de su proyecto
  2. Copiar el contenido del archivo `.env-example` en el archivo `.env`
  3. Reemplazar la palabra YOUR_API_KEY_HERE con la clave de API generada anteriormente
 
 A continuación, deben ejecutar el comando `yarn install` para instalar todas las dependencias necesarias para el programa.
 
 Para ejecutar el programa, deben utilizar el comando `yarn ia` en la terminal.
 
 Recuerden guardar los cambios realizados en el archivo `.env` antes de ejecutar cualquier script en su proyecto que haga
 uso de la clave de API de Chat GPT.
