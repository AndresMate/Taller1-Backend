# API REST - Taller de Node.js con Express y MongoDB

## Descripción

Este proyecto es una API RESTful desarrollada con Node.js y Express que permite gestionar carros y concesionarios. Utiliza MongoDB como base de datos y JWT para la autenticación de usuarios.

## Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución para JavaScript del lado del servidor.
- **Express**: Framework web para Node.js.
- **MongoDB**: Base de datos NoSQL.
- **Mongoose**: ODM para MongoDB en Node.js.
- **JWT**: Autenticación mediante JSON Web Tokens.
- **Swagger**: Documentación de la API.

## Despliegue en la Nube

La API REST está desplegada en una máquina virtual en Oracle Cloud Infrastructure (OCI). Esto permite que la API sea accesible de forma remota y pueda manejar solicitudes de producción.

### Detalles del Despliegue

- **Proveedor de Nube**: Oracle Cloud Infrastructure
- **Tipo de Instancia**: VM.Standard.A1.Flex
- **Recuento de OCPU**: 4
- **Ancho de Banda de Red**: 4 Gbps
- **Memoria**: 24 GB
- **Disco Local**: Solo almacenamiento de bloques
- **Sistema Operativo**: Canonical Ubuntu
- **Versión**: 22.04
- **Imagen**: Canonical-Ubuntu-22.04-aarch64-2024.05.31-0
- **Base de Datos**: MongoDB (clúster M0)
- **URL de Acceso**: [http://158.247.122.111:3000/](http://158.247.122.111:3000/)
- **Documentación de la API**: [http://158.247.122.111:3000/docs](http://158.247.122.111:3000/docs)

Este despliegue en la nube asegura que la API esté disponible para los usuarios y permite la escalabilidad y mantenimiento de los servicios ofrecidos.

## Esquemas de Objetos

#### Car

- **id**: `string` (Identificador único del carro)
    - Ejemplo: `"car123"`
- **model**: `string` (Modelo del carro)
    - Ejemplo: `"Toyota Hilux"`
- **plate**: `string` (Placa del carro)
    - Ejemplo: `"ABC123"`
- **department**: `string` (Departamento donde está registrado el carro)
    - Ejemplo: `"Boyacá"`
- **town**: `string` (Ciudad o pueblo donde está registrado el carro)
    - Ejemplo: `"Sogamoso"`
- **dealer**: `string` (ID del dealer asociado al carro)
    - Ejemplo: `"dealer123"`

#### Dealer

- **id**: `string` (Identificador único del dealer)
    - Ejemplo: `"dealer123"`
- **name**: `string` (Nombre del dealer)
    - Ejemplo: `"FastDelivery Dealer"`
- **area**: `string` (Área o zona donde opera el dealer)
    - Ejemplo: `"Sogamoso"`
- **cars**: `array` (Lista de IDs de carros asociados al dealer)
    - Ejemplo: `["car123", "car456"]`


## Consideraciones de Seguridad

Al estar desplegada en la nube, se recomienda implementar las siguientes prácticas de seguridad:
- Uso de HTTPS para asegurar las comunicaciones.
- Configuración de firewalls para limitar el acceso a la instancia.
- Implementación de autenticación y autorización para proteger los endpoints de la API.

## Desarrolladores
El equipo de desarrollo de la API REST está conformado por:
- **Jhon Fredy Jaime Pinzón**
- **Andres Felipe Mateus Riaño**

## Licencia
Este proyecto está bajo la licencia MIT. Puede consultar el archivo [LICENSE](LICENSE) para más detalles.


### Resumen

Este README incluye una sección que describe los esquemas de los objetos `Car` y `Dealer`, además de toda la información relevante sobre la API, su configuración, instalación y despliegue. Puedes ajustar cualquier parte según sea necesario para que se adapte mejor a tu proyecto. ¡Espero que esto te sea útil!


