import { Injectable, Logger } from '@nestjs/common';
import { EMOTIONS_RU, EMOTIONS_UK } from './emotions.const';

@Injectable()
export class EmotionService {
  private readonly logger = new Logger(EmotionService.name);

  getAll(languageCode: string, useBase?: boolean) {
    this.logger.debug(`getAll ${languageCode}`);

    let emotions = languageCode === 'ru' ? EMOTIONS_RU : EMOTIONS_UK;

    emotions = useBase
      ? emotions.filter((value) => BASE_EMOTIONS_ID.includes(value._id))
      : emotions;

    return emotions;
  }

  getLabelByEmotionId(languageCode: string, emotionId: string) {
    return this.getAll(languageCode).find((value) => value._id === emotionId)
      ?.text;
  }
}

const BASE_EMOTIONS_ID: string[] = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '22',
  '42',
  '14',
  '512',
  '51',
  '27',
  '15',
];
