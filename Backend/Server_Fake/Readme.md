# Taller

1. ¿Qué significa status 201 Created?
    ¿En donde aparece?

2. ¿Cómo verifico la actualización de los datos por medio de la terminal?

3. ¿Cuales son los status existentes y comunes?

4. ¿Cuando hacer una petición de tipo PATCH?

5. ¿Qué es SOAP, cuales son las diferencias con REST?

6. ¿Qué es GraphQL, cuales con las diferencias con REST?

Solución: 

1. 201 Created
Respuesta HTTP que indica que se creó un recurso (usualmente con POST). Aparece en la respuesta del servidor.

2. Con curl -i https://api.com/recurso/1

3. Status comunes

200 OK → éxito
201 Created → creado
204 No Content → sin respuesta
400 Bad Request → error cliente
401 Unauthorized → no autenticado
404 Not Found → no existe
500 Server Error → error servidor

4. Para actualizar parcialmente un recurso.

5.  SOAP → protocolo, XML, pesado
    REST → arquitectura, JSON, simple

6.  GraphQL → pides solo lo necesario (1 endpoint)
    REST → múltiples endpoints, datos fijos