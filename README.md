# Kafka-Nestjs
- setup & zookeeper init

# unzip the file

-tar -xzf kafka_2.13-3.5.0.tgz


-cd kafka_2.13-3.5.0/

# kafka zookeeper init
-bin/zookeeper-server-start.sh config/zookeeper.properties


# kafka server init
-bin/kafka-server-start.sh config/server.properties
