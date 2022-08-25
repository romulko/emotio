import { Injectable, Logger } from '@nestjs/common';
import {
  CreateCopingCardInput,
  CopingCardTechnicCreateInput,
  DeleteCopingCardInput,
  CopingCardTechnicDeleteInput,
  UpdateCopingCardInput,
  CopingCardTechnicUpdateInput,
  TechnicDoingCreateInput,
  TechnicDoingFinishInput,
  TechnicDoingFindOneInput,
  TechnicDoingDeleteInput,
  TechnicDoingStartEmotionIntensityUpdateInput,
  TechnicDoingEndEmotionIntensityUpdateInput,
} from '../entity/copingCard.input';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CopingCard, CopingCardTechnic, TechnicDoing } from '../entity';
import { User } from '../../user/entity';
import { first, last } from '../../../utils/array.utils';

@Injectable()
export class CopingCardService {
  private readonly logger = new Logger(CopingCardService.name);

  constructor(
    @InjectModel(CopingCard.name)
    private readonly copingCardModel: Model<CopingCard>,
  ) {}

  getAll(userId: string) {
    this.logger.debug(`getAll. userId: ${userId}`);

    return this.copingCardModel.find({ userId }, {}, { sort: { _id: -1 } });
  }

  getById(copingCardId: string) {
    this.logger.debug(`getById. copingCardId: ${copingCardId}`);

    return this.copingCardModel.findById(copingCardId);
  }

  create(input: CreateCopingCardInput, user: User) {
    this.logger.debug(
      `create. input ${JSON.stringify(input)}, userId ${user._id}`,
    );

    const model = new this.copingCardModel();
    model.userId = user._id;
    Object.assign(model, input);
    return model.save();
  }

  async update(input: UpdateCopingCardInput) {
    this.logger.debug(`update ${JSON.stringify(input)}}`);

    const model = await this.copingCardModel.findById(input._id);
    delete input._id;
    Object.assign(model, input);
    return model.save();
  }

  async delete(copingCardInput: DeleteCopingCardInput) {
    this.logger.debug(`delete ${JSON.stringify(copingCardInput)}`);

    const copingCard = await this.getById(copingCardInput._id);
    await copingCard.deleteOne();

    return copingCard;
  }

  async getCopingCardTechnicById(
    copingCardId: string,
    copingCardTechnicId: string,
  ) {
    this.logger.debug(
      `getCopingCardTechnicById. copingCardId: ${copingCardId}, copingCardTechnicId: ${copingCardTechnicId}`,
    );

    const model = await this.copingCardModel.findOne(
      {
        _id: copingCardId,
        'technics._id': copingCardTechnicId,
      },
      { 'technics.$': 1 },
    );

    return last(model?.technics);
  }

  async createTechnic(input: CopingCardTechnicCreateInput) {
    this.logger.debug(`createTechnic ${JSON.stringify(input)}`);

    const model = await this.copingCardModel.findById(input.copingCardId, {
      technics: true,
    });

    const technic = new CopingCardTechnic();
    delete technic['input'];
    Object.assign(technic, input);
    model.technics.push(technic);

    await model.save();

    return last(model.technics);
  }

  async updateTechnic(input: CopingCardTechnicUpdateInput) {
    this.logger.debug(`updateTechnic ${JSON.stringify(input)}`);

    await this.copingCardModel.updateOne(
      {
        _id: input.copingCardId,
        'technics._id': input._id,
      },
      {
        $set: {
          'technics.$.technicName': input.technicName,
          'technics.$.description': input.description,
          'technics.$.howToDescription': input.howToDescription,
        },
      },
    );

    const model = await this.copingCardModel.findOne(
      {
        _id: input.copingCardId,
        'technics._id': input._id,
      },
      { 'technics.$': 1 },
    );

    return first(model.technics);
  }

  async technicDelete(input: CopingCardTechnicDeleteInput) {
    this.logger.debug(`technicDelete ${JSON.stringify(input)}`);

    const technic = await this.getCopingCardTechnicById(
      input.copingCardId,
      input._id,
    );

    await this.copingCardModel.updateOne(
      { _id: input.copingCardId },
      {
        $pull: {
          technics: { _id: input._id },
        },
      },
      { multi: true },
    );

    return technic;
  }

  async technicDoingFindOne(input: TechnicDoingFindOneInput) {
    this.logger.debug(`technicDoingFindOne ${JSON.stringify(input)}`);

    const filter = {
      _id: input.copingCardId,
      'technics._id': input.technicId,
      'technics.doings._id': input.doingId,
    };

    const model = await this.copingCardModel.findOne(filter, {
      'technics.$': 1,
    });

    return first(first(model.technics).doings);
  }

  async technicDoingCreate(input: TechnicDoingCreateInput) {
    this.logger.debug(`technicDoingCreate ${JSON.stringify(input)}`);

    const filter = {
      _id: input.copingCardId,
      'technics._id': input.technicId,
    };

    const doing = new TechnicDoing();
    doing.startEmotionIntensity = 5;
    doing.endEmotionIntensity = 5;

    await this.copingCardModel.updateOne(filter, {
      $push: {
        'technics.$.doings': doing,
      },
    });

    const model = await this.copingCardModel.findOne(filter, {
      'technics.$': 1,
    });

    return last(last(model.technics).doings);
  }

  async doingStartEmotionIntensityUpdate(
    input: TechnicDoingStartEmotionIntensityUpdateInput,
  ) {
    this.logger.debug(
      `doingStartEmotionIntensityUpdate ${JSON.stringify(input)}`,
    );

    const filter = {
      _id: input.copingCardId,
      'technics._id': input.technicId,
      'technics.doings._id': input.doingId,
    };

    await this.copingCardModel.updateOne(
      filter,
      {
        $set: {
          'technics.$[technic].doings.$[doing].startEmotionIntensity':
            input.startEmotionIntensity,
        },
      },
      {
        arrayFilters: [
          { 'technic._id': input.technicId },
          { 'doing._id': input.doingId },
        ],
      },
    );

    const model = await this.copingCardModel.findOne(filter, {
      'technics.$': 1,
    });

    return first(first(model.technics).doings);
  }

  async doingEndEmotionIntensityUpdate(
    input: TechnicDoingEndEmotionIntensityUpdateInput,
  ) {
    this.logger.debug(
      `doingEndEmotionIntensityUpdate ${JSON.stringify(input)}`,
    );

    const filter = {
      _id: input.copingCardId,
      'technics._id': input.technicId,
      'technics.doings._id': input.doingId,
    };

    await this.copingCardModel.updateOne(
      filter,
      {
        $set: {
          'technics.$[technic].doings.$[doing].endEmotionIntensity':
            input.endEmotionIntensity,
        },
      },
      {
        arrayFilters: [
          { 'technic._id': input.technicId },
          { 'doing._id': input.doingId },
        ],
      },
    );

    const model = await this.copingCardModel.findOne(filter, {
      'technics.$': 1,
    });

    return first(first(model.technics).doings);
  }

  async technicDoingFinish(input: TechnicDoingFinishInput) {
    this.logger.debug(`technicDoingFinish ${JSON.stringify(input)}`);

    const filter = {
      _id: input.copingCardId,
      'technics._id': input.technicId,
      'technics.doings._id': input.doingId,
    };

    await this.copingCardModel.updateOne(
      filter,
      {
        $set: {
          'technics.$[technic].doings.$[doing].endDate': new Date(),
        },
      },
      {
        arrayFilters: [
          { 'technic._id': input.technicId },
          { 'doing._id': input.doingId },
        ],
      },
    );
    const model = await this.copingCardModel.findOne(filter, {
      'technics.$': 1,
    });

    return first(first(model.technics).doings);
  }

  async technicDoingDelete(input: TechnicDoingDeleteInput) {
    this.logger.debug(`technicDoingDelete ${JSON.stringify(input)}`);

    const filter = {
      _id: input.copingCardId,
      'technics._id': input.technicId,
      'technics.doings._id': input.doingId,
    };

    const model = await this.copingCardModel.findOne(filter, {
      'technics.$': 1,
    });

    await this.copingCardModel.updateOne(filter, {
      $pull: {
        'technics.$[].doings': { _id: input.doingId },
      },
    });

    return first(first(model.technics).doings);
  }
}
