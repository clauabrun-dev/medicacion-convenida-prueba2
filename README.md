# Medicación Convenida

Buscador estático de medicamentos convenidos por financiador.

## Contenido inicial

La versión actual incluye los listados de Poder Judicial, APOS La Rioja, APSOT y ASE-Medifé. La base contiene droga y nombre comercial/presentación; no incluye los códigos HA de internación ni de ambulatorio.

Para APOS La Rioja se incorporaron 194 registros únicos de la propuesta de septiembre de 2026. Se excluyeron ocho duplicados exactos detectados en el PDF original.

Para APSOT se incorporaron 195 registros del listado de abril de 2025, sin duplicados exactos.

Para ASE-Medifé se incorporaron 188 registros del listado de julio de 2025, sin duplicados exactos.

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
