# NodejsWebApp1
Arquitectura web

Profesor: Diego Marafetti.

Nombre de grupo: Nutrición.

Integrantes: Luis Oscar González.

Para la materia se desarrollará una API REST con NodeJS que permitirá hacer un ABM de alimentos por peso con su información nutricional correspondiente.
La idea final será que el usuario en el frontEnd pueda ver la información nutricional por alimento o hacer una comparación nutricional entre dos alimentos diferentes. 
Por otro lado, la idea es que cuando la base de datos este nutrida de alimentos, la API pueda sumistrar información nutricional de recetas ingresadas por el usuario.

endPoints

GET: api/Alimento: Retornaría una lista de los alimentos existentes en la base.
GET: api/alimento/{string}: retornaría una lista seleccionada por ID de alimentos (Para comparación nutricional).
GET: api/alimento/id: retornía un objeto para hacer un PUT o PATCH.
POST: api/alimento(Objeto en el boby): Alta de un objeto del tipo Alimento.
DELETE: api/alimento/id: Eliminacion de un objeto del tipo Alimento
PUT: api/alimento/id(Objeto en el boby): Edición completa de todas las propiedades de un objeto del tipo Alimento
