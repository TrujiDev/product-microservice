# Microservicio de Productos

## Descripción
El microservicio de productos es una parte clave de la arquitectura de microservicios, diseñado para gestionar la información de los productos en la aplicación. Permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) sobre los productos, asegurando que la información esté siempre actualizada y accesible.

## Funcionalidades
- **Crear Producto**: Permite agregar nuevos productos al sistema con detalles como nombre, descripción, precio y categoría.
- **Leer Productos**: Ofrece la capacidad de listar todos los productos o buscar productos específicos mediante filtros.
- **Actualizar Producto**: Permite modificar los detalles de un producto existente.
- **Eliminar Producto**: Facilita la eliminación de productos del sistema.
- **Categorías de Productos**: Permite la gestión de categorías, facilitando la organización y búsqueda de productos.

## Tecnologías Utilizadas
- **NestJS**: Framework para construir aplicaciones del lado del servidor eficientes y escalables.
- **PostgreSQL**: Sistema de gestión de bases de datos utilizado para almacenar la información de los productos.
- **MongoDB**: Utilizado para almacenar información adicional o complementaria relacionada con los productos que no requieren un esquema rígido.
- **TypeScript**: Lenguaje de programación que proporciona tipado estático, mejorando la calidad del código.
- **Docker**: Facilita la creación y gestión de contenedores para ejecutar el microservicio de manera aislada.
- **NATS**: Sistema de mensajería utilizado para la comunicación asíncrona con otros microservicios.

## Instalación
Para instalar y ejecutar el microservicio de productos, sigue estos pasos:

### 1. Clonar el Repositorio
Clona el repositorio del microservicio:
```bash
git clone https://github.com/TrujiDev/product-microservice.git
cd product-microservice
```

### 2. Instalar Dependencias
Instala las dependencias necesarias utilizando npm:
```bash
npm install
```

### 3. Configuración del Entorno
Crea un archivo `.env` en la raíz del proyecto y configura las variables necesarias:
```env
DATABASE_URL=postgres://user:password@localhost:5432/mydatabase
MONGO_URL=mongodb://localhost:27017/mydatabase
NATS_URL=nats://localhost:4222
```

### 4. Ejecutar el Microservicio
Finalmente, ejecuta el microservicio:
```bash
npm run start
```

## Uso
El microservicio de productos expone las siguientes rutas:

- **POST /products**: Crea un nuevo producto.
- **GET /products**: Lista todos los productos.
- **GET /products/:id**: Obtiene un producto específico por su ID.
- **PUT /products/:id**: Actualiza un producto existente.
- **DELETE /products/:id**: Elimina un producto del sistema.

## Mantenimiento
Para mantener el microservicio actualizado, asegúrate de:
- Revisar y aplicar actualizaciones de seguridad a las dependencias.
- Realizar pruebas regulares para asegurar el correcto funcionamiento del servicio.

## Contribuciones
Las contribuciones son bienvenidas. Si deseas contribuir a este microservicio, sigue estos pasos:
1. Haz un fork del repositorio.
2. Crea tu feature branch (`git checkout -b feature/AmazingFeature`).
3. Haz un commit de tus cambios (`git commit -m 'Add some AmazingFeature'`).
4. Haz push a la branch (`git push origin feature/AmazingFeature`).
5. Abre un Pull Request.
