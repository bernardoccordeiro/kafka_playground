const Kafka = require("kafkajs").Kafka
const msg = process.argv[2];

async function run() {
    try {
        const kafka = new Kafka({
            "clientId": "myapp",
            "brokers": ["localhost:9092"]
        })
        const producer = kafka.producer();
        console.log("Connecting.....")
        await producer.connect()
        console.log("Connected!")
        //A-M 0 , N-Z 1 
        const partition = msg[0] < "N" ? 0 : 1;
        const result =  await producer.send({
            "topic": "TestTopic",
            "messages": [
                {
                    "value": msg,
                    "partition": partition
                }
            ]
        })

        console.log(`Sent successfully! ${JSON.stringify(result)}`)
        await producer.disconnect();

    }
    catch (err) {
        console.error(err)
    }
    finally {
        process.exit(0);
    }
}

run();