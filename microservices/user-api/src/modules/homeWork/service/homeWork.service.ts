import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { HomeWorkDocument } from '../document/homeWork.document';
import { Model } from 'mongoose';
import {
  HomeWorkCreateInput,
  HomeWorkDeleteInput,
  HomeWorkUpdateInput,
} from '../objectType/homeWork.input';
import { CompletedHomeWork, HomeWork } from '../objectType/homeWork';
import { DialogueService } from '../../dialogue/service';

@Injectable()
export class HomeWorkService {
  private readonly logger = new Logger(HomeWorkService.name);

  constructor(
    @InjectModel(HomeWorkDocument.name)
    private readonly homeWorkDocumentModel: Model<HomeWorkDocument>,
    private readonly dialogueService: DialogueService,
  ) {}

  async getAll(userId: string) {
    this.logger.debug(`getAll ${userId}`);

    const homeWorks = await this.homeWorkDocumentModel.find(
      { userId },
      {},
      { sort: { _id: -1 } },
    );

    return homeWorks.map(this.mapHomeWorkDocumentToDataType);
  }

  async getById(_id: string) {
    this.logger.debug(`getById ${_id}`);

    const homeWorkDocument = await this.homeWorkDocumentModel.findOne({ _id });

    return this.mapHomeWorkDocumentToDataType(homeWorkDocument);
  }

  async create(input: HomeWorkCreateInput, userId: string) {
    this.logger.debug(`start ${JSON.stringify(input)}, userId: ${userId}`);

    const document = new this.homeWorkDocumentModel();
    document.userId = userId;
    Object.assign(document, input);
    await document.save();

    return this.mapHomeWorkDocumentToDataType(document);
  }

  async update(input: HomeWorkUpdateInput) {
    this.logger.debug(`update ${JSON.stringify(input)}`);

    const document = await this.homeWorkDocumentModel.findById(input._id);
    delete input._id;
    Object.assign(document, input);
    await document.save();

    return this.mapHomeWorkDocumentToDataType(document);
  }

  async delete(input: HomeWorkDeleteInput) {
    this.logger.debug(`delete ${JSON.stringify(input)}`);

    const document = await this.homeWorkDocumentModel.findById(input._id);
    await document.deleteOne();

    return document;
  }

  private mapHomeWorkDocumentToDataType = async (
    homeWorkDocument: HomeWorkDocument,
  ) => {
    if (!homeWorkDocument) {
      return null;
    }

    const { _id, userId, whatToDo, whatWeGet, links, completedHomeWorks } =
      homeWorkDocument;

    const homeWork = new HomeWork();
    homeWork._id = _id.toString();
    homeWork.userId = userId;
    homeWork.whatToDo = whatToDo;
    homeWork.whatWeGet = whatWeGet;

    homeWork.links = await Promise.all(
      links.map(({ dialogueId }) => this.dialogueService.getById(dialogueId)),
    );

    homeWork.completedHomeWorks = completedHomeWorks.map(
      ({ _id, text }) => ({ _id, text } as CompletedHomeWork),
    );

    return homeWork;
  };
}
