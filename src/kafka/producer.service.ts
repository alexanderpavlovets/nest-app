import * as fs from 'fs';
import * as path from 'path';
import * as protoBufParser from 'protocol-buffers-schema';
import {
  Injectable,
  OnApplicationShutdown,
  OnModuleInit,
} from '@nestjs/common';
import { Kafka, Producer, ProducerRecord } from 'kafkajs';
import { SchemaRegistry, SchemaType } from '@kafkajs/confluent-schema-registry';

@Injectable()
export class ProducerService implements OnModuleInit, OnApplicationShutdown {
  // confluent-schema setup
  private readonly registry: SchemaRegistry = new SchemaRegistry({
    host: 'http://localhost:8081',
  });
  private readonly schema: string = fs.readFileSync(
    path.join(process.cwd(), '.proto'),
    'utf-8',
  );
  // private readonly schema = protoBufParser.parse(
  //   fs.readFileSync(path.join(process.cwd(), '.proto')),
  // );

  // kafka setup
  private readonly kafka = new Kafka({
    clientId: 'nest-app',
    brokers: ['localhost:9092'],
  });
  private readonly producer: Producer = this.kafka.producer();

  async onModuleInit() {
    console.log(this.schema);
    const res = await this.registry.register(
      {
        type: SchemaType.PROTOBUF,
        schema: this.schema,
      },
      { subject: 'random_subject_to_avoid_type_error' }, // name of the schema to be registered with
    );
    console.log('_________________________________________');
    console.log(res);
    console.log(res.id);
    await this.producer.connect();
  }

  async produce(record: ProducerRecord) {
    await this.producer.send(record);
  }

  async onApplicationShutdown() {
    await this.producer.disconnect();
  }
}
