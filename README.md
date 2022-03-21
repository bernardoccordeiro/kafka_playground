## Kafka Playground

This code is an experiment to understand a bit more about Kafka.

The following resources were used for this purpose:

To run a docker compose with Kafka and Zookeeper and also do CLI testing:
https://developer.confluent.io/quickstart/kafka-docker/

To understand the inner workings of Kafka and consume/produce to it via Javascript:
https://www.youtube.com/watch?v=R873BlNVUB4

## Running

To run this mini-application, all you need to do is:

1. Run docker-compose to create the containers:

`docker-compose up -d`

2. Run the NPM dependencies:

`npm install`

3. When the docker containers are up and running and the dependencies have been installed, create a Topic on Kafka:

`node topic.js`

This may also be done via CLI, but be sure to use the same Topic name in the Producer/Consumer in that case. By default the topic is created with 2 partitions.

3. Run two Consumers, one in each terminal tab. This will help demonstrate the work of Consumer Groups in separating the partition data between consumers:

`node consumer.js`

4. Run the Producer service, and see the data being consumed on the Consumer side:

`node producer Test`

The message "Test" is being sent to Kafka. The rule for partitioning is if the first letter is < "N".

## TODO 

- Make a Golang and Python versions of this script to communicate with Kafka.
- Try to run Kafka/Zookeeper locally instead of just using Docker.