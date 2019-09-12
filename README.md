# bpet

Swagger api [location](./config/swagger.json)

BPet a Pet Store on Etherium Blockchain


This blog we will go through step by step of making end to end blockchain based application 
Things used in the project
Swagger open API specification 3.0 ( yaml file)
nodejs in backend
MongoDb and Mysql [ We will be creating 2 version with each type of database  for practice ]
Etherium Blockchain 
Git,Docker and others …

Get freely available example yaml file from swagger called Pet Store
There are two ways to generate mock code, 
I. generate mock code from yaml using fallowing npm module
npm install -g swagger-node-codegen
The shortest possible syntax:
snc swagger.yaml
II. Generate using swagger editor 
Goto https://editor.swagger.io/ make changes to your yaml file if you want, top menu thir is option for generate-server -> select nodejs-server it will download nodejs based mock code generated  


using https://www.npmjs.com/package/swaggerize-express
swaggerize-express
