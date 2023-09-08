# NestJS gRPC Microservice Example

## What is this repo

This is a simple example repo showing how NestJS can be used to create a Microservice Application architecture and enable gRPC communication between the API and Service. 

## Start the app

To start individual services using `nx serve ${service name}`, or you can run all services using `npm start` Open your browser and navigate to http://localhost:3001/ to retrieve the example data. 

If you make changes to the .proto files you'll need to re-generate the proto definitions using `npm run proto:generate` this package requires protoc which can be installed using the install instructions here - https://grpc.io/docs/protoc-installation/
