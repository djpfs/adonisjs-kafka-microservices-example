# adonisjs-kafka-microservices-example

Exemplo de dois serviços feitos com AdonisJs v5 e utilizando Apache Kafka para se comunicar

## Resumo

O serviço `service-users` é responsável por enviar mensagens para o tópico `users` do Kafka. O serviço `sercice-logs` é responsável por consumir as mensagens do tópico `users` e exibir no console.

## Packages utilizados

Kafka AdonisJs: [here](https://www.npmjs.com/package/@djpfs/kafka-adonisjs).

## Configuração

Crie um arquivo `.env` na pasta `service-users` e `service-logs` baseado no arquivo `.env.example` (Presente dentro de cada um) e altere as variáveis de ambiente caso queira mudar alguma configuração.

Ou apenas execute o comando (Na raiz do projeto):

```bash
cp service-logs/.env.example service-logs/.env
cp service-users/.env.example service-users/.env
```

## Executando o projeto

```bash
docker-compose up
```

Você pode acessar o serviço `service-users` em [http://localhost:3333/alguma-coisa](http://localhost:3333/alguma-coisa) para enviar uma mensagem para o tópico `users` do Kafka.

No terminal que você executou o comando `docker-compose up` você deve ver a mensagem sendo exibida no console.

Você também pode acessar [http://localhost:19000]([http://localhost:19000) para ver o kafdrop e ver as mensagens que estão sendo enviadas.
