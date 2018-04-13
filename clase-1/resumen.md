#GIT
Es un controlador de versionamiento que tiene como proposito llevar un registro de cambios en los archivos de computadora para lograr coordinar el trabajo entre varios programadores.

##Glosario de GIT
* GitHub
Es el servicio mas popular para poder compartir y gestionar repositorios GIT. Desde su plataforma se pueden invitar colaboradores, visualizar cambios, editar archivos y acceder una gran variedad de acciones que estan disponible en la linea de comandos.

* Repositorio/Repo
Podriamos hacer un paralelismo con una carpeta compartida en Google Drive, Dropbox o similar. Un repositorio se puede inicializar sobre cualquier carpeta y poner dentro de ella los archivos de los que se quiera llevar registro.

* Rama
Al crear un repositorio por defecto se crea una rama que se denomina MASTER. un repositorio puede tener tantas ramas como el proyecto necesite. Una rama se clona desde otra, esto no es trivial, porque distintas ramas pueden contener distinta informacion al mismo tiempo.

* Remoto/repositorio remoto
Un repositorio se puede crear desde un servicio como GitHub o localmente usando el comando **git init**. En el caso de que se cree, por ejemplo, desde GitHub a dicho repositorio se le asigna un nombre por defecto (ORIGIN) que es el alias de la URL donde se encuentra ese repositorio.

##Acciones de GIT
1. clone. Cuando se crea un repositorio desde un lugar distinto de la computadora que uso para trabajar es necesario clonar el proyecto que se creo para tener una copia exacta en mi estacion de trabajo con los ultimos cambios del mismo. **git clone http://www.repositorio.com/direccion/del/repositorio**

2. add. Ya sea que se edito un archivo produciendo un cambio o se agrego un nuevo archivo al repositorio, es necesario indicarle a GIT que queremos que tenga en cuenta a dicho archivo para registrarlo, para eso utilizamos la accion ADD del comando git. Este proceso pasa el archivo desde el estado "unstaged changes" a "staged changes". **git add nombre-del-archivo.js**

3. commit. Una vez que hicimos "ADD" de todos los archivos que contienen cambios necesitamos armar un paquete de los mismos para poder enviarse. Ademas es obligatorio enviar un mensaje acerca de los cambios producidos. **git commit -m "mensaje sobre los cambios hechos"**

4. pull. Si trabajas con mas gente en el mismo proyecto y sobre el mismo repositorio es muy probable que alguien mas haya subido cambios al repositorio antes que los tuyos esten listos y este puede ser una dependencia para poder subir tus cambios. Es por eso que debes usar este comando para actualizar el repositorio antes de subir los tuyos. **git pull**

5. push. Cuando al menos un commit fue hecho, estamos en condiciones de subir nuestros cambios al repositorio desde donde lo clonamos. Ademas debemos indicar el nombre del repositorio remoto y la rama a donde se quiere "pushear" los cambios. **git push origin master**