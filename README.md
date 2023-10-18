# CSS AVANZADO

## Primeros pasos:

### Clonar repositorio y abrir repo en VSC
    
1. Navegar a la carpeta donde clonaremos el repositorio, por ejemplo Desktop

    Navegar a carpeta:
    ```
    cd Desktop/
    ```

    Listar elementos de la carpeta
    ```
    ls
    ```
    
    Volver atrás, carpeta anterior
    ```
    cd ..
    ```
      
2. Clonar repositorio (se creará una carpeta dentro de la carpeta a la que hemos navegado)

```
gh repo clone FSDSTR1023/css-avanzado
```

Este comando lo podéis encontrar en github > Code (botón verde). Cada repositorio tiene este comnado actualizando el nombre del repositorio en cada caso.

3. Abrir la carpeta creada tras el clon en Visual Studio Code (VSC)
    - Si estás dentro de VSC: File > Open Folder > Seleccionar la carpeta y abrir
    - Arrastrar carpeta a VSC

### Crear y acceder a ramas

4. Crear una rama nueva: 

```
git branch
```

Estándar nombre ramas: nombre/ft-flex `cpicatoste/ft-nav`. Ejemplo = `git branch cpicatoste/ft-nav`
        
5. Navegar a la rama creada: 

```
git checkout
```

Ejemplo: `git checkout cpicatoste/ft-nav`

### Iniciar proyecto

6. Instalar las dependencias de node: `npm i` o `npm install`

```
npm install
```

7. Levantar el proyecto:

```
npm run
```

### Commit y push desde menú lateral de VSC

8. Hacer los cambios del código

9. Hacer commit y push de nuestra rama a github desde el menú lateral (icono de git)
    - Añadir archivos que queremos subir con el icono +
    - Escribir un mensaje en el input: `Feat: navbar implementation`
    - Hacer `commit`
    - Hacer `push` desplegando el menú o `Syncronize branch`

### Commit y push desde la Terminal

Para hacer un `commit` y luego un `push` en Git desde la Terminal, puedes seguir los siguientes pasos utilizando la línea de comandos:

1. **Añadir cambios al área de preparación (staging area):**

Si quieres añadir todos los archivos modificados:

```
git add .
```

Si sólo quieres añadir algunos archivos en particular:

```.
git add nombre_del_archivo1 nombre_del_archivo2
```

2. **Hacer un commit de esos cambios:**

```
git commit -m "Mensaje descriptivo del commit"
```
        
3. **Push (empujar) esos cambios al repositorio remoto:**

Si ya has configurado una rama por defecto, puedes simplemente usar:

```
git push
```

Si quieres especificar el nombre del repositorio remoto (por defecto suele ser `origin`) y la rama (por ejemplo, `main` o `master`):

```
git push origin nombre_de_la_rama
```

Entonces, resumiendo, el flujo básico sería:

```bash
git add .
git commit -m "Tu mensaje aquí"
git push
```
        
Siempre es buena idea asegurarse de tener la última versión del repositorio antes de hacer un push, así que podrías hacer un `git pull` antes de estos pasos si estás trabajando en colaboración con otros. Esto ayudará a reducir posibles conflictos.

### Configuración global de git

`git config --global user.name` # to check username
 
`git config --global user.email` # to check email
