# FRODAS E-COMMERCE
Bienvenido al E-commercer de FRODAS BURGER, proyecto final del curso de REACT JS en CODERHOUSE.
El proyecto fue creado con el uso de REACT JS y BOOTSTRAP para el front-end y FIREBASE para la base de datos.
La aplicacion permite navegar por un home page, pasando por categorias, productos y detalles de productos.
Desde la pantalla de productos y detalles de productos se puede agregar items al carrito, el cual de manera interactiva en el navbar
muestra la cantidad de items que se encuentran dentro del mismo.
En el navbar existe un boton de registro el cual no interactua con la base de datos. Se utilizo para lograr un producto minimo viable
logrando obtener los datos de la persona que desea realizar la compra en ese momento.
Unicamente cuando la persona se registre, se habilitara el boton de compra.

## Scripts para el uso

Una vez clonado el proyecto, en la terminal corra el siguiente script.

### 1- `npm install`

Mediante este script usted estara instalando las dependecias necesarias para el uso del proyecto.

### 2- `npm start`

Una vez instaladas las dependencias, corra este segundo codigo para inicializar el proyecto.
Automaticamente deberia abrirse en su navegador [http://localhost:3000].
En caso que esperado un tiempo prudencial, no se haya abierto copie la direccion en el navegador.

## Composicion de FIREBASE
Firebase se encuentra compuesto por tres colecciones.
# 1) CATEGORIES
Categories incluye actualmente 2. Los documentos dentro de categories se muestran en la seccion categorias (clickeando categorias en el navbar) o al hacer hover en el boton categorias del navbar.
Cada una de los documentos dentro de categories tiene un campo name y un campo source de donde se alimentan las imagenes de las categorias mostradas.
# 2) ORDERS
Orders incluye todas las ordenes/compras que fueron realizadas por los usuarios. Se crean con un id automatico y se nutren de 3 campos, buyer( con el mail, nombre y telefono del cliente), items (Cantidad, id, nombre y precio) y por ultimo el total de la compra.

# 3) PRODUCTOS
Productos incluye todos los productos que se encuentran cargados. Cada producto se crea con un id automatico y tiene los campos categories, descripcion, detailSource (muestra la imagen en detalle del producto), min, price, source(muestra la imagen del producto), stock y title.
