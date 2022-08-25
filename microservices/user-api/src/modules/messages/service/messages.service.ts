import { Injectable, Logger } from '@nestjs/common';
import { ChannelWrapper, connect } from 'amqp-connection-manager';
import { ConfigService } from '@nestjs/config';
import { Options } from 'amqplib';

const QUEUE_VOICE_RECOGNIZE_REQUEST = 'voice-recognize-request';

@Injectable()
export class MessageService {
  private readonly logger = new Logger(MessageService.name);

  private readonly client: ChannelWrapper;

  constructor(private readonly configService: ConfigService) {
    this.client = connect([configService.get('RABBITMQ_URL')]).createChannel({
      json: true,
      setup: (channel) => {
        channel.assertQueue(QUEUE_VOICE_RECOGNIZE_REQUEST, { durable: true });
      },
    });
  }

  public getClient() {
    return this.client;
  }

  public sendVoiceRecognizer(content: any) {
    this.logger.debug(
      `Send to queue '${QUEUE_VOICE_RECOGNIZE_REQUEST}', content: ${JSON.stringify(
        content,
      )}`,
    );

    this.send(QUEUE_VOICE_RECOGNIZE_REQUEST, content, { persistent: true });
  }

  private send(queue: string, content: any, options?: Options.Publish) {
    this.client
      .sendToQueue(queue, content, options)
      .then(() => this.logger.debug(`sendToQueue '${queue}' successful`))
      .catch((reason) =>
        this.logger.error(`sendToQueue '${queue}' catch: ${reason}`),
      );
  }
}
