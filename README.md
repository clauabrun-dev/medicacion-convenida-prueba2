# Medicación Convenida

Buscador estático de medicamentos convenidos por financiador.

## Contenido inicial

La primera versión incluye el listado de Poder Judicial con vigencia informada al 15/06/2026. La base contiene droga y nombre comercial/presentación; no incluye los códigos HA de internación ni de ambulatorio.

## Publicación en GitHub Pages

1. Subir todos los archivos y carpetas de este paquete a la raíz del repositorio.
2. Abrir `Settings` en el repositorio.
3. Seleccionar `Pages`.
4. En `Build and deployment`, elegir `Deploy from a branch`.
5. Seleccionar la rama `main` y la carpeta `/root`.
6. Presionar `Save`.

## Control antes de publicar

Verificar que la información pueda ser expuesta públicamente. GitHub Pages puede publicar el sitio en Internet aunque el repositorio sea privado, según el plan utilizado.

## Actualización futura

Los registros se encuentran en `datos.js`. Cada financiador debe indicar su vigencia y el enlace a su PDF fuente. Antes de reemplazar un listado, conservar la versión anterior como respaldo y verificar búsquedas de control.
