# adonisjs-kafka-microservices-example

Example of two services made with AdonisJs v5 and using Apache Kafka to communicate

## Summary

The `service-users` service is responsible for sending messages to the Kafka `users` topic. The `service-logs` service is responsible for consuming messages from the `users` topic and displaying them in the console.

## Packages used

Kafka AdonisJs: [here](https://www.npmjs.com/package/@djpfs/kafka-adonisjs).

## Configuration

Create an `.env` file in the `service-users` and `service-logs` folder based on the `.env.example` file (present inside each one) and change the environment variables if you want to change any configuration.

Or just run the command (In the root of the project):

```bash
cp service-logs/.env.example service-logs/.env
cp service-users/.env.example service-users/.env
```

## Running the project

```bash
docker-compose up
```

You can access the `service-users` service at [http://localhost:3333/some-think](http://localhost:3333/some-think) to post a message to the Kafka `users` topic.

In the terminal you ran the `docker-compose up` command you should see the message being displayed in the console.

You can also go to [http://localhost:19000](http://localhost:19000) to look at kafdrop and see what messages are being sent.
