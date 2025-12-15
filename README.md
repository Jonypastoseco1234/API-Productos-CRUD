## Autor
- Nombre: Jonathan Cifuentes
- Curso: Backend
- Año: 2025
- 
\# API de Productos



API RESTful desarrollada con Node.js y Express que permite gestionar productos mediante operaciones CRUD.



\## Instalación

1\. npm init -y

2\. npm install express

3\. node index.js



Servidor: http://localhost:3000



\## Endpoints



\### GET - Listar productos

!\[GET Productos](capturas/GET_productos.png)

GET /productos



Respuesta:

\[

  {

    "id": 1,

    "nombre": "Notebook",

    "precio": 850000,

    "categoria": "Electrónica"

  }

]



\### POST - Crear producto

!\[POST Producto](capturas/post_producto.png)

POST /productos



Body:

{

  "nombre": "Teclado",

  "precio": 45000,

  "categoria": "Accesorios"

}



Respuesta:

{

  "id": 3,

  "nombre": "Teclado",

  "precio": 45000,

  "categoria": "Accesorios"

}



\### PUT - Actualizar producto

!\[PUT Producto](capturas/put_producto.png)

PUT /productos/1



Body:

{

  "precio": 800000

}



Respuesta:

{

  "id": 1,

  "nombre": "Notebook",

  "precio": 800000,

  "categoria": "Electrónica"

}



\### DELETE - Eliminar producto

!\[DELETE Producto](capturas/delete_producto.png)

DELETE /productos/2



Respuesta:

{

  "mensaje": "Producto eliminado correctamente"

}


