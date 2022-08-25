import { Injectable, Logger } from '@nestjs/common';
import { LIFE_AREAS_RU, LIFE_AREAS_UK } from './lifeArea.const';

@Injectable()
export class LifeAreaService {
  private readonly logger = new Logger(LifeAreaService.name);

  getAll(languageCode: string) {
    this.logger.debug(`getAll ${languageCode}`);
    return languageCode === 'ru' ? LIFE_AREAS_RU : LIFE_AREAS_UK;
  }

  getLabelByLifeAreaId(languageCode: string, lifeAreaId: string) {
    return this.getAll(lifeAreaId).find((value) => value._id === lifeAreaId)
      ?.text;
  }
}
