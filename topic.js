const Kafka = require("kafkajs").Kafka

async function run() {
    try {
        const kafka = new Kafka({
            "clientId": "myapp",
            "brokers": ["localhost:9092"]
        })
        const admin = kafka.admin();

        console.log("Connecting...")
        await admin.connect();
        console.log("Connected!")

        await admin.createTopics({
            "topics": [{
                "topic": "TestTopic",
                "numPartitions": 2,
            }]
        })
        console.log("Topics created!")
        await admin.disconnect();
    }
    catch (err) {
        console.error(err)
    }
    finally {
        process.exit(0);
    }
}

run();