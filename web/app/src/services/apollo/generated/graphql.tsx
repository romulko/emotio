import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type AbcEmotion = {
  _id: Scalars['String'];
  emotionId: Scalars['String'];
  intensity?: Maybe<Scalars['Float']>;
};

export type AbcFilter = {
  lifeAreas?: Maybe<Array<Scalars['String']>>;
};

export type AbcLifeArea = {
  _id: Scalars['String'];
  lifeAreaId: Scalars['String'];
};

export type AbcStatistic = {
  emotions: Array<EmotionStatisticElement>;
  lifeAreas: Array<LifeAreaStatisticElement>;
  userId: Scalars['String'];
};

export type Audio = {
  _id: Scalars['String'];
  highlights: Array<AudioTextHighlight>;
  text?: Maybe<Scalars['String']>;
};

export type AudioTextHighlight = {
  _id: Scalars['String'];
  audioId: Scalars['String'];
  endIndex: Scalars['Float'];
  mindId: Scalars['String'];
  startIndex: Scalars['Float'];
};

export type Behaviour = {
  _id: Scalars['String'];
  text: Scalars['String'];
};

export type CompletedHomeWork = {
  _id: Scalars['String'];
  text: Scalars['String'];
};

export type CopingCard = {
  _id: Scalars['String'];
  emotionId: Scalars['String'];
  mind?: Maybe<Scalars['String']>;
  technics: Array<CopingCardTechnic>;
  userId: Scalars['String'];
};

export type CopingCardTechnic = {
  _id: Scalars['String'];
  description: Scalars['String'];
  doings: Array<TechnicDoing>;
  howToDescription: Scalars['String'];
  technicName: Scalars['String'];
};

export type CopingCardTechnicCreateInput = {
  copingCardId: Scalars['String'];
  description: Scalars['String'];
  howToDescription: Scalars['String'];
  technicName: Scalars['String'];
};

export type CopingCardTechnicDeleteInput = {
  _id: Scalars['String'];
  copingCardId: Scalars['String'];
};

export type CopingCardTechnicUpdateInput = {
  _id?: Maybe<Scalars['String']>;
  copingCardId: Scalars['String'];
  description: Scalars['String'];
  howToDescription: Scalars['String'];
  technicName: Scalars['String'];
};

export type CreateCopingCardInput = {
  emotionId: Scalars['String'];
  mind?: Maybe<Scalars['String']>;
};


export type DeleteCopingCardInput = {
  _id: Scalars['String'];
};

export type Dialogue = {
  _id: Scalars['String'];
  dialogueType: Scalars['String'];
  questions: Array<Question>;
  userId: Scalars['String'];
};

export type DialogueAnswerInput = {
  answer: Scalars['String'];
  dialogueId: Scalars['String'];
  questionId: Scalars['String'];
};

export type DialogueCreateInput = {
  dialogueType: Scalars['String'];
};

export type DialogueDeleteInput = {
  dialogueId: Scalars['String'];
};

export type DialogueUpdateAnswerInput = {
  answer: Scalars['String'];
  dialogueId: Scalars['String'];
  questionId: Scalars['String'];
};

export type Emotion = {
  _id: Scalars['String'];
  text: Scalars['String'];
};

export type EmotionStatisticElement = {
  count: Scalars['Float'];
  label: Scalars['String'];
};

export type HomeWork = {
  _id: Scalars['String'];
  completedHomeWorks: Array<CompletedHomeWork>;
  links: Array<Dialogue>;
  userId: Scalars['String'];
  whatToDo: Scalars['String'];
  whatWeGet: Scalars['String'];
};

export type HomeWorkCreateInput = {
  whatToDo: Scalars['String'];
  whatWeGet: Scalars['String'];
};

export type HomeWorkDeleteInput = {
  _id: Scalars['String'];
};

export type HomeWorkUpdateInput = {
  _id: Scalars['String'];
  whatToDo: Scalars['String'];
  whatWeGet: Scalars['String'];
};

export type LifeArea = {
  _id: Scalars['String'];
  text: Scalars['String'];
};

export type LifeAreaStatisticElement = {
  count: Scalars['Float'];
  label: Scalars['String'];
};

export type LoginResponse = {
  isRegistered: Scalars['Boolean'];
  token: Scalars['String'];
};

export type Mind = {
  _id: Scalars['String'];
  text: Scalars['String'];
};

export type Mutation = {
  copingCardCreate: CopingCard;
  copingCardDelete: CopingCard;
  copingCardTechnicCreate: CopingCardTechnic;
  copingCardTechnicDelete: CopingCardTechnic;
  copingCardTechnicDoingCreate: TechnicDoing;
  copingCardTechnicDoingDelete: TechnicDoing;
  copingCardTechnicDoingEndEmotionIntensityUpdate: TechnicDoing;
  copingCardTechnicDoingFinish: TechnicDoing;
  copingCardTechnicDoingStartEmotionIntensityUpdate: TechnicDoing;
  copingCardTechnicUpdate: CopingCardTechnic;
  copingCardUpdate: CopingCard;
  dialogueAnswer: Question;
  dialogueCreate: Dialogue;
  dialogueDelete: Dialogue;
  dialogueUpdateAnswer: Question;
  homeWorkCreate: HomeWork;
  homeWorkDelete: HomeWork;
  homeWorkUpdate: HomeWork;
  login: LoginResponse;
  userUpdateAudioRecognizeLanguageCode: User;
  userUpdateLanguageCode: User;
};


export type MutationCopingCardCreateArgs = {
  input: CreateCopingCardInput;
};


export type MutationCopingCardDeleteArgs = {
  input: DeleteCopingCardInput;
};


export type MutationCopingCardTechnicCreateArgs = {
  input: CopingCardTechnicCreateInput;
};


export type MutationCopingCardTechnicDeleteArgs = {
  input: CopingCardTechnicDeleteInput;
};


export type MutationCopingCardTechnicDoingCreateArgs = {
  input: TechnicDoingCreateInput;
};


export type MutationCopingCardTechnicDoingDeleteArgs = {
  input: TechnicDoingDeleteInput;
};


export type MutationCopingCardTechnicDoingEndEmotionIntensityUpdateArgs = {
  input: TechnicDoingEndEmotionIntensityUpdateInput;
};


export type MutationCopingCardTechnicDoingFinishArgs = {
  input: TechnicDoingFinishInput;
};


export type MutationCopingCardTechnicDoingStartEmotionIntensityUpdateArgs = {
  input: TechnicDoingStartEmotionIntensityUpdateInput;
};


export type MutationCopingCardTechnicUpdateArgs = {
  input: CopingCardTechnicUpdateInput;
};


export type MutationCopingCardUpdateArgs = {
  input: UpdateCopingCardInput;
};


export type MutationDialogueAnswerArgs = {
  input: DialogueAnswerInput;
};


export type MutationDialogueCreateArgs = {
  input: DialogueCreateInput;
};


export type MutationDialogueDeleteArgs = {
  input: DialogueDeleteInput;
};


export type MutationDialogueUpdateAnswerArgs = {
  input: DialogueUpdateAnswerInput;
};


export type MutationHomeWorkCreateArgs = {
  input: HomeWorkCreateInput;
};


export type MutationHomeWorkDeleteArgs = {
  input: HomeWorkDeleteInput;
};


export type MutationHomeWorkUpdateArgs = {
  input: HomeWorkUpdateInput;
};


export type MutationLoginArgs = {
  user: UserLoginInput;
};


export type MutationUserUpdateAudioRecognizeLanguageCodeArgs = {
  audioRecognizeLanguageCodeInput: UserUpdateAudioRecognizeLanguageCodeInput;
};


export type MutationUserUpdateLanguageCodeArgs = {
  languageCodeInput: UserUpdateLanguageCodeInput;
};

export type Query = {
  abcFilter?: Maybe<AbcFilter>;
  abcsStatistic: AbcStatistic;
  copingCard: CopingCard;
  copingCardTechnic: CopingCardTechnic;
  copingCardTechnicDoing: TechnicDoing;
  copingCards: Array<CopingCard>;
  dialogue?: Maybe<Dialogue>;
  dialogues: Array<Dialogue>;
  emotions: Array<Emotion>;
  homeWork?: Maybe<HomeWork>;
  homeWorks: Array<HomeWork>;
  isHeaderHidden?: Maybe<Scalars['Boolean']>;
  lifeAreas: Array<LifeArea>;
  me?: Maybe<User>;
  user?: Maybe<User>;
};


export type QueryAbcsStatisticArgs = {
  userId: Scalars['String'];
};


export type QueryCopingCardArgs = {
  copingCardId: Scalars['String'];
};


export type QueryCopingCardTechnicArgs = {
  copingCardId: Scalars['String'];
  copingCardTechnicId: Scalars['String'];
};


export type QueryCopingCardTechnicDoingArgs = {
  input: TechnicDoingFindOneInput;
};


export type QueryCopingCardsArgs = {
  userId: Scalars['String'];
};


export type QueryDialogueArgs = {
  dialogueId: Scalars['String'];
};


export type QueryDialoguesArgs = {
  userId: Scalars['String'];
};


export type QueryEmotionsArgs = {
  languageCode: Scalars['String'];
};


export type QueryHomeWorkArgs = {
  homeWorkId: Scalars['String'];
};


export type QueryHomeWorksArgs = {
  userId: Scalars['String'];
};


export type QueryLifeAreasArgs = {
  languageCode: Scalars['String'];
};


export type QueryUserArgs = {
  _id: Scalars['String'];
};

export type Question = {
  _id: Scalars['String'];
  answer?: Maybe<Scalars['String']>;
  dialogueQuestionId: Scalars['String'];
  predefinedAnswer?: Maybe<Scalars['String']>;
  questionType: Scalars['String'];
  selection?: Maybe<Selection>;
  text: Scalars['String'];
};

export type Selection = {
  _id: Scalars['String'];
  items: Array<SelectionItem>;
  multiselect?: Maybe<Scalars['Boolean']>;
};

export type SelectionItem = {
  _id: Scalars['String'];
  text: Scalars['String'];
};

export type TechnicDoing = {
  _id: Scalars['String'];
  endDate?: Maybe<Scalars['DateTime']>;
  endEmotionIntensity?: Maybe<Scalars['Float']>;
  startEmotionIntensity: Scalars['Float'];
};

export type TechnicDoingCreateInput = {
  copingCardId: Scalars['String'];
  technicId: Scalars['String'];
};

export type TechnicDoingDeleteInput = {
  copingCardId: Scalars['String'];
  doingId: Scalars['String'];
  technicId: Scalars['String'];
};

export type TechnicDoingEndEmotionIntensityUpdateInput = {
  copingCardId: Scalars['String'];
  doingId: Scalars['String'];
  endEmotionIntensity: Scalars['Float'];
  technicId: Scalars['String'];
};

export type TechnicDoingFindOneInput = {
  copingCardId: Scalars['String'];
  doingId: Scalars['String'];
  technicId: Scalars['String'];
};

export type TechnicDoingFinishInput = {
  copingCardId: Scalars['String'];
  doingId: Scalars['String'];
  technicId: Scalars['String'];
};

export type TechnicDoingStartEmotionIntensityUpdateInput = {
  copingCardId: Scalars['String'];
  doingId: Scalars['String'];
  startEmotionIntensity: Scalars['Float'];
  technicId: Scalars['String'];
};

export type UpdateCopingCardInput = {
  _id: Scalars['String'];
  emotionId: Scalars['String'];
  mind?: Maybe<Scalars['String']>;
};

export type User = {
  _id: Scalars['String'];
  audioRecognizeLanguageCode: Scalars['String'];
  email: Scalars['String'];
  languageCode: Scalars['String'];
  name: Scalars['String'];
  photo?: Maybe<Scalars['String']>;
};

export type UserLoginInput = {
  email: Scalars['String'];
  languageCode: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
};

export type UserUpdateAudioRecognizeLanguageCodeInput = {
  audioRecognizeLanguageCode: Scalars['String'];
  userId: Scalars['String'];
};

export type UserUpdateLanguageCodeInput = {
  languageCode: Scalars['String'];
  userId: Scalars['String'];
};

export type EmotionsQueryVariables = Exact<{
  languageCode: Scalars['String'];
}>;


export type EmotionsQuery = { emotions: Array<Pick<Emotion, '_id' | 'text'>> };

export type IsHeaderHiddenQueryVariables = Exact<{ [key: string]: never; }>;


export type IsHeaderHiddenQuery = Pick<Query, 'isHeaderHidden'>;

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { me?: Maybe<Pick<User, '_id' | 'email' | 'name' | 'photo' | 'languageCode' | 'audioRecognizeLanguageCode'>> };

export type UserUpdateLanguageCodeMutationVariables = Exact<{
  languageCodeInput: UserUpdateLanguageCodeInput;
}>;


export type UserUpdateLanguageCodeMutation = { userUpdateLanguageCode: Pick<User, '_id' | 'languageCode'> };

export type UserUpdateAudioRecognizeLanguageCodeMutationVariables = Exact<{
  audioRecognizeLanguageCodeInput: UserUpdateAudioRecognizeLanguageCodeInput;
}>;


export type UserUpdateAudioRecognizeLanguageCodeMutation = { userUpdateAudioRecognizeLanguageCode: Pick<User, '_id' | 'audioRecognizeLanguageCode'> };

export type AbcsStatisticQueryVariables = Exact<{
  userId: Scalars['String'];
}>;


export type AbcsStatisticQuery = { abcsStatistic: (
    Pick<AbcStatistic, 'userId'>
    & { emotions: Array<Pick<EmotionStatisticElement, 'label' | 'count'>>, lifeAreas: Array<Pick<LifeAreaStatisticElement, 'label' | 'count'>> }
  ) };

export type CopingCardQueryVariables = Exact<{
  copingCardId: Scalars['String'];
}>;


export type CopingCardQuery = { copingCard: (
    Pick<CopingCard, '_id' | 'emotionId' | 'mind'>
    & { technics: Array<Pick<CopingCardTechnic, '_id' | 'technicName' | 'description' | 'howToDescription'>> }
  ) };

export type CopingCardCreateMutationVariables = Exact<{
  input: CreateCopingCardInput;
}>;


export type CopingCardCreateMutation = { copingCardCreate: (
    Pick<CopingCard, '_id' | 'emotionId' | 'mind'>
    & { technics: Array<Pick<CopingCardTechnic, '_id' | 'technicName' | 'description' | 'howToDescription'>> }
  ) };

export type CopingCardUpdateMutationVariables = Exact<{
  input: UpdateCopingCardInput;
}>;


export type CopingCardUpdateMutation = { copingCardUpdate: Pick<CopingCard, '_id' | 'emotionId' | 'mind'> };

export type CopingCardDeleteMutationVariables = Exact<{
  input: DeleteCopingCardInput;
}>;


export type CopingCardDeleteMutation = { copingCardDelete: Pick<CopingCard, '_id'> };

export type CopingCardsQueryVariables = Exact<{
  userId: Scalars['String'];
}>;


export type CopingCardsQuery = { copingCards: Array<Pick<CopingCard, '_id' | 'emotionId' | 'mind'>> };

export type CopingCardTechnicDoingQueryVariables = Exact<{
  input: TechnicDoingFindOneInput;
}>;


export type CopingCardTechnicDoingQuery = { copingCardTechnicDoing: Pick<TechnicDoing, '_id' | 'endDate' | 'startEmotionIntensity' | 'endEmotionIntensity'> };

export type NewDoingFragment = Pick<TechnicDoing, '_id' | 'startEmotionIntensity' | 'endEmotionIntensity'>;

export type CopingCardTechnicDoingCreateMutationVariables = Exact<{
  input: TechnicDoingCreateInput;
}>;


export type CopingCardTechnicDoingCreateMutation = { copingCardTechnicDoingCreate: Pick<TechnicDoing, '_id' | 'startEmotionIntensity' | 'endEmotionIntensity'> };

export type CopingCardTechnicDoingStartEmotionIntensityUpdateMutationVariables = Exact<{
  input: TechnicDoingStartEmotionIntensityUpdateInput;
}>;


export type CopingCardTechnicDoingStartEmotionIntensityUpdateMutation = { copingCardTechnicDoingStartEmotionIntensityUpdate: Pick<TechnicDoing, '_id' | 'startEmotionIntensity'> };

export type CopingCardTechnicDoingEndEmotionIntensityUpdateMutationVariables = Exact<{
  input: TechnicDoingEndEmotionIntensityUpdateInput;
}>;


export type CopingCardTechnicDoingEndEmotionIntensityUpdateMutation = { copingCardTechnicDoingEndEmotionIntensityUpdate: Pick<TechnicDoing, '_id' | 'endEmotionIntensity'> };

export type CopingCardTechnicDoingFinishMutationVariables = Exact<{
  input: TechnicDoingFinishInput;
}>;


export type CopingCardTechnicDoingFinishMutation = { copingCardTechnicDoingFinish: Pick<TechnicDoing, '_id'> };

export type CopingCardTechnicDoingDeleteMutationVariables = Exact<{
  input: TechnicDoingDeleteInput;
}>;


export type CopingCardTechnicDoingDeleteMutation = { copingCardTechnicDoingDelete: Pick<TechnicDoing, '_id'> };

export type CopingCardTechnicQueryVariables = Exact<{
  copingCardId: Scalars['String'];
  copingCardTechnicId: Scalars['String'];
}>;


export type CopingCardTechnicQuery = { copingCardTechnic: Pick<CopingCardTechnic, '_id' | 'technicName' | 'description' | 'howToDescription'> };

export type NewTechnicFragment = Pick<CopingCardTechnic, '_id' | 'technicName' | 'description'>;

export type CopingCardTechnicCreateMutationVariables = Exact<{
  input: CopingCardTechnicCreateInput;
}>;


export type CopingCardTechnicCreateMutation = { copingCardTechnicCreate: Pick<CopingCardTechnic, '_id' | 'technicName' | 'description' | 'howToDescription'> };

export type CopingCardTechnicUpdateMutationVariables = Exact<{
  input: CopingCardTechnicUpdateInput;
}>;


export type CopingCardTechnicUpdateMutation = { copingCardTechnicUpdate: Pick<CopingCardTechnic, '_id' | 'technicName' | 'description' | 'howToDescription'> };

export type CopingCardTechnicDeleteMutationVariables = Exact<{
  input: CopingCardTechnicDeleteInput;
}>;


export type CopingCardTechnicDeleteMutation = { copingCardTechnicDelete: Pick<CopingCardTechnic, '_id'> };

export type DialogueQueryVariables = Exact<{
  dialogueId: Scalars['String'];
}>;


export type DialogueQuery = { dialogue?: Maybe<(
    Pick<Dialogue, '_id' | 'dialogueType'>
    & { questions: Array<(
      Pick<Question, '_id' | 'questionType' | 'dialogueQuestionId' | 'text' | 'predefinedAnswer' | 'answer'>
      & { selection?: Maybe<(
        Pick<Selection, '_id' | 'multiselect'>
        & { items: Array<Pick<SelectionItem, '_id' | 'text'>> }
      )> }
    )> }
  )> };

export type AddQuestionFragment = (
  Pick<Question, '_id' | 'questionType' | 'dialogueQuestionId' | 'text' | 'predefinedAnswer' | 'answer'>
  & { selection?: Maybe<(
    Pick<Selection, '_id' | 'multiselect'>
    & { items: Array<Pick<SelectionItem, '_id' | 'text'>> }
  )> }
);

export type DialogueCreateMutationVariables = Exact<{
  input: DialogueCreateInput;
}>;


export type DialogueCreateMutation = { dialogueCreate: (
    Pick<Dialogue, '_id' | 'userId' | 'dialogueType'>
    & { questions: Array<(
      Pick<Question, '_id' | 'questionType' | 'dialogueQuestionId' | 'text' | 'predefinedAnswer' | 'answer'>
      & { selection?: Maybe<(
        Pick<Selection, '_id' | 'multiselect'>
        & { items: Array<Pick<SelectionItem, '_id' | 'text'>> }
      )> }
    )> }
  ) };

export type DialogueAnswerMutationVariables = Exact<{
  input: DialogueAnswerInput;
}>;


export type DialogueAnswerMutation = { dialogueAnswer: (
    Pick<Question, '_id' | 'questionType' | 'dialogueQuestionId' | 'text' | 'predefinedAnswer' | 'answer'>
    & { selection?: Maybe<(
      Pick<Selection, '_id' | 'multiselect'>
      & { items: Array<Pick<SelectionItem, '_id' | 'text'>> }
    )> }
  ) };

export type DialogueUpdateAnswerMutationVariables = Exact<{
  input: DialogueUpdateAnswerInput;
}>;


export type DialogueUpdateAnswerMutation = { dialogueUpdateAnswer: Pick<Question, '_id' | 'answer'> };

export type DialogueDeleteMutationVariables = Exact<{
  input: DialogueDeleteInput;
}>;


export type DialogueDeleteMutation = { dialogueDelete: Pick<Dialogue, '_id'> };

export type DialoguesQueryVariables = Exact<{
  userId: Scalars['String'];
}>;


export type DialoguesQuery = { dialogues: Array<(
    Pick<Dialogue, '_id' | 'dialogueType'>
    & { questions: Array<(
      Pick<Question, '_id' | 'questionType' | 'dialogueQuestionId' | 'text' | 'predefinedAnswer' | 'answer'>
      & { selection?: Maybe<(
        Pick<Selection, '_id' | 'multiselect'>
        & { items: Array<Pick<SelectionItem, '_id' | 'text'>> }
      )> }
    )> }
  )> };

export type HomeWorkQueryVariables = Exact<{
  homeWorkId: Scalars['String'];
}>;


export type HomeWorkQuery = { homeWork?: Maybe<Pick<HomeWork, '_id' | 'whatToDo' | 'whatWeGet'>> };

export type HomeWorkCreateMutationVariables = Exact<{
  input: HomeWorkCreateInput;
}>;


export type HomeWorkCreateMutation = { homeWorkCreate: Pick<HomeWork, '_id' | 'whatToDo' | 'whatWeGet'> };

export type HomeWorkUpdateMutationVariables = Exact<{
  input: HomeWorkUpdateInput;
}>;


export type HomeWorkUpdateMutation = { homeWorkUpdate: Pick<HomeWork, '_id' | 'whatToDo' | 'whatWeGet'> };

export type HomeWorkDeleteMutationVariables = Exact<{
  input: HomeWorkDeleteInput;
}>;


export type HomeWorkDeleteMutation = { homeWorkDelete: Pick<HomeWork, '_id'> };

export type HomeWorksQueryVariables = Exact<{
  userId: Scalars['String'];
}>;


export type HomeWorksQuery = { homeWorks: Array<Pick<HomeWork, '_id' | 'whatToDo' | 'whatWeGet'>> };

export type LoginMutationVariables = Exact<{
  user: UserLoginInput;
}>;


export type LoginMutation = { login: Pick<LoginResponse, 'token' | 'isRegistered'> };

export const NewDoingFragmentDoc = gql`
    fragment NewDoing on TechnicDoing {
  _id
  startEmotionIntensity
  endEmotionIntensity
}
    `;
export const NewTechnicFragmentDoc = gql`
    fragment NewTechnic on CopingCardTechnic {
  _id
  technicName
  description
}
    `;
export const AddQuestionFragmentDoc = gql`
    fragment addQuestion on Question {
  _id
  questionType
  dialogueQuestionId
  text
  predefinedAnswer
  answer
  selection {
    _id
    items {
      _id
      text
    }
    multiselect
  }
}
    `;
export const EmotionsDocument = gql`
    query emotions($languageCode: String!) {
  emotions(languageCode: $languageCode) {
    _id
    text
  }
}
    `;

/**
 * __useEmotionsQuery__
 *
 * To run a query within a React component, call `useEmotionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useEmotionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEmotionsQuery({
 *   variables: {
 *      languageCode: // value for 'languageCode'
 *   },
 * });
 */
export function useEmotionsQuery(baseOptions: Apollo.QueryHookOptions<EmotionsQuery, EmotionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<EmotionsQuery, EmotionsQueryVariables>(EmotionsDocument, options);
      }
export function useEmotionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EmotionsQuery, EmotionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<EmotionsQuery, EmotionsQueryVariables>(EmotionsDocument, options);
        }
export type EmotionsQueryHookResult = ReturnType<typeof useEmotionsQuery>;
export type EmotionsLazyQueryHookResult = ReturnType<typeof useEmotionsLazyQuery>;
export type EmotionsQueryResult = Apollo.QueryResult<EmotionsQuery, EmotionsQueryVariables>;
export const IsHeaderHiddenDocument = gql`
    query isHeaderHidden {
  isHeaderHidden @client
}
    `;

/**
 * __useIsHeaderHiddenQuery__
 *
 * To run a query within a React component, call `useIsHeaderHiddenQuery` and pass it any options that fit your needs.
 * When your component renders, `useIsHeaderHiddenQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIsHeaderHiddenQuery({
 *   variables: {
 *   },
 * });
 */
export function useIsHeaderHiddenQuery(baseOptions?: Apollo.QueryHookOptions<IsHeaderHiddenQuery, IsHeaderHiddenQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IsHeaderHiddenQuery, IsHeaderHiddenQueryVariables>(IsHeaderHiddenDocument, options);
      }
export function useIsHeaderHiddenLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IsHeaderHiddenQuery, IsHeaderHiddenQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IsHeaderHiddenQuery, IsHeaderHiddenQueryVariables>(IsHeaderHiddenDocument, options);
        }
export type IsHeaderHiddenQueryHookResult = ReturnType<typeof useIsHeaderHiddenQuery>;
export type IsHeaderHiddenLazyQueryHookResult = ReturnType<typeof useIsHeaderHiddenLazyQuery>;
export type IsHeaderHiddenQueryResult = Apollo.QueryResult<IsHeaderHiddenQuery, IsHeaderHiddenQueryVariables>;
export const MeDocument = gql`
    query me {
  me {
    _id
    email
    name
    photo
    languageCode
    audioRecognizeLanguageCode
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const UserUpdateLanguageCodeDocument = gql`
    mutation userUpdateLanguageCode($languageCodeInput: UserUpdateLanguageCodeInput!) {
  userUpdateLanguageCode(languageCodeInput: $languageCodeInput) {
    _id
    languageCode
  }
}
    `;
export type UserUpdateLanguageCodeMutationFn = Apollo.MutationFunction<UserUpdateLanguageCodeMutation, UserUpdateLanguageCodeMutationVariables>;

/**
 * __useUserUpdateLanguageCodeMutation__
 *
 * To run a mutation, you first call `useUserUpdateLanguageCodeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUserUpdateLanguageCodeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userUpdateLanguageCodeMutation, { data, loading, error }] = useUserUpdateLanguageCodeMutation({
 *   variables: {
 *      languageCodeInput: // value for 'languageCodeInput'
 *   },
 * });
 */
export function useUserUpdateLanguageCodeMutation(baseOptions?: Apollo.MutationHookOptions<UserUpdateLanguageCodeMutation, UserUpdateLanguageCodeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UserUpdateLanguageCodeMutation, UserUpdateLanguageCodeMutationVariables>(UserUpdateLanguageCodeDocument, options);
      }
export type UserUpdateLanguageCodeMutationHookResult = ReturnType<typeof useUserUpdateLanguageCodeMutation>;
export type UserUpdateLanguageCodeMutationResult = Apollo.MutationResult<UserUpdateLanguageCodeMutation>;
export type UserUpdateLanguageCodeMutationOptions = Apollo.BaseMutationOptions<UserUpdateLanguageCodeMutation, UserUpdateLanguageCodeMutationVariables>;
export const UserUpdateAudioRecognizeLanguageCodeDocument = gql`
    mutation userUpdateAudioRecognizeLanguageCode($audioRecognizeLanguageCodeInput: UserUpdateAudioRecognizeLanguageCodeInput!) {
  userUpdateAudioRecognizeLanguageCode(
    audioRecognizeLanguageCodeInput: $audioRecognizeLanguageCodeInput
  ) {
    _id
    audioRecognizeLanguageCode
  }
}
    `;
export type UserUpdateAudioRecognizeLanguageCodeMutationFn = Apollo.MutationFunction<UserUpdateAudioRecognizeLanguageCodeMutation, UserUpdateAudioRecognizeLanguageCodeMutationVariables>;

/**
 * __useUserUpdateAudioRecognizeLanguageCodeMutation__
 *
 * To run a mutation, you first call `useUserUpdateAudioRecognizeLanguageCodeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUserUpdateAudioRecognizeLanguageCodeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userUpdateAudioRecognizeLanguageCodeMutation, { data, loading, error }] = useUserUpdateAudioRecognizeLanguageCodeMutation({
 *   variables: {
 *      audioRecognizeLanguageCodeInput: // value for 'audioRecognizeLanguageCodeInput'
 *   },
 * });
 */
export function useUserUpdateAudioRecognizeLanguageCodeMutation(baseOptions?: Apollo.MutationHookOptions<UserUpdateAudioRecognizeLanguageCodeMutation, UserUpdateAudioRecognizeLanguageCodeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UserUpdateAudioRecognizeLanguageCodeMutation, UserUpdateAudioRecognizeLanguageCodeMutationVariables>(UserUpdateAudioRecognizeLanguageCodeDocument, options);
      }
export type UserUpdateAudioRecognizeLanguageCodeMutationHookResult = ReturnType<typeof useUserUpdateAudioRecognizeLanguageCodeMutation>;
export type UserUpdateAudioRecognizeLanguageCodeMutationResult = Apollo.MutationResult<UserUpdateAudioRecognizeLanguageCodeMutation>;
export type UserUpdateAudioRecognizeLanguageCodeMutationOptions = Apollo.BaseMutationOptions<UserUpdateAudioRecognizeLanguageCodeMutation, UserUpdateAudioRecognizeLanguageCodeMutationVariables>;
export const AbcsStatisticDocument = gql`
    query abcsStatistic($userId: String!) {
  abcsStatistic(userId: $userId) {
    userId
    emotions {
      label
      count
    }
    lifeAreas {
      label
      count
    }
  }
}
    `;

/**
 * __useAbcsStatisticQuery__
 *
 * To run a query within a React component, call `useAbcsStatisticQuery` and pass it any options that fit your needs.
 * When your component renders, `useAbcsStatisticQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAbcsStatisticQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useAbcsStatisticQuery(baseOptions: Apollo.QueryHookOptions<AbcsStatisticQuery, AbcsStatisticQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AbcsStatisticQuery, AbcsStatisticQueryVariables>(AbcsStatisticDocument, options);
      }
export function useAbcsStatisticLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AbcsStatisticQuery, AbcsStatisticQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AbcsStatisticQuery, AbcsStatisticQueryVariables>(AbcsStatisticDocument, options);
        }
export type AbcsStatisticQueryHookResult = ReturnType<typeof useAbcsStatisticQuery>;
export type AbcsStatisticLazyQueryHookResult = ReturnType<typeof useAbcsStatisticLazyQuery>;
export type AbcsStatisticQueryResult = Apollo.QueryResult<AbcsStatisticQuery, AbcsStatisticQueryVariables>;
export const CopingCardDocument = gql`
    query copingCard($copingCardId: String!) {
  copingCard(copingCardId: $copingCardId) {
    _id
    emotionId
    mind
    technics {
      _id
      technicName
      description
      howToDescription
    }
  }
}
    `;

/**
 * __useCopingCardQuery__
 *
 * To run a query within a React component, call `useCopingCardQuery` and pass it any options that fit your needs.
 * When your component renders, `useCopingCardQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCopingCardQuery({
 *   variables: {
 *      copingCardId: // value for 'copingCardId'
 *   },
 * });
 */
export function useCopingCardQuery(baseOptions: Apollo.QueryHookOptions<CopingCardQuery, CopingCardQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CopingCardQuery, CopingCardQueryVariables>(CopingCardDocument, options);
      }
export function useCopingCardLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CopingCardQuery, CopingCardQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CopingCardQuery, CopingCardQueryVariables>(CopingCardDocument, options);
        }
export type CopingCardQueryHookResult = ReturnType<typeof useCopingCardQuery>;
export type CopingCardLazyQueryHookResult = ReturnType<typeof useCopingCardLazyQuery>;
export type CopingCardQueryResult = Apollo.QueryResult<CopingCardQuery, CopingCardQueryVariables>;
export const CopingCardCreateDocument = gql`
    mutation copingCardCreate($input: CreateCopingCardInput!) {
  copingCardCreate(input: $input) {
    _id
    emotionId
    mind
    technics {
      _id
      technicName
      description
      howToDescription
    }
  }
}
    `;
export type CopingCardCreateMutationFn = Apollo.MutationFunction<CopingCardCreateMutation, CopingCardCreateMutationVariables>;

/**
 * __useCopingCardCreateMutation__
 *
 * To run a mutation, you first call `useCopingCardCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCopingCardCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [copingCardCreateMutation, { data, loading, error }] = useCopingCardCreateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCopingCardCreateMutation(baseOptions?: Apollo.MutationHookOptions<CopingCardCreateMutation, CopingCardCreateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CopingCardCreateMutation, CopingCardCreateMutationVariables>(CopingCardCreateDocument, options);
      }
export type CopingCardCreateMutationHookResult = ReturnType<typeof useCopingCardCreateMutation>;
export type CopingCardCreateMutationResult = Apollo.MutationResult<CopingCardCreateMutation>;
export type CopingCardCreateMutationOptions = Apollo.BaseMutationOptions<CopingCardCreateMutation, CopingCardCreateMutationVariables>;
export const CopingCardUpdateDocument = gql`
    mutation copingCardUpdate($input: UpdateCopingCardInput!) {
  copingCardUpdate(input: $input) {
    _id
    emotionId
    mind
  }
}
    `;
export type CopingCardUpdateMutationFn = Apollo.MutationFunction<CopingCardUpdateMutation, CopingCardUpdateMutationVariables>;

/**
 * __useCopingCardUpdateMutation__
 *
 * To run a mutation, you first call `useCopingCardUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCopingCardUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [copingCardUpdateMutation, { data, loading, error }] = useCopingCardUpdateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCopingCardUpdateMutation(baseOptions?: Apollo.MutationHookOptions<CopingCardUpdateMutation, CopingCardUpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CopingCardUpdateMutation, CopingCardUpdateMutationVariables>(CopingCardUpdateDocument, options);
      }
export type CopingCardUpdateMutationHookResult = ReturnType<typeof useCopingCardUpdateMutation>;
export type CopingCardUpdateMutationResult = Apollo.MutationResult<CopingCardUpdateMutation>;
export type CopingCardUpdateMutationOptions = Apollo.BaseMutationOptions<CopingCardUpdateMutation, CopingCardUpdateMutationVariables>;
export const CopingCardDeleteDocument = gql`
    mutation copingCardDelete($input: DeleteCopingCardInput!) {
  copingCardDelete(input: $input) {
    _id
  }
}
    `;
export type CopingCardDeleteMutationFn = Apollo.MutationFunction<CopingCardDeleteMutation, CopingCardDeleteMutationVariables>;

/**
 * __useCopingCardDeleteMutation__
 *
 * To run a mutation, you first call `useCopingCardDeleteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCopingCardDeleteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [copingCardDeleteMutation, { data, loading, error }] = useCopingCardDeleteMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCopingCardDeleteMutation(baseOptions?: Apollo.MutationHookOptions<CopingCardDeleteMutation, CopingCardDeleteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CopingCardDeleteMutation, CopingCardDeleteMutationVariables>(CopingCardDeleteDocument, options);
      }
export type CopingCardDeleteMutationHookResult = ReturnType<typeof useCopingCardDeleteMutation>;
export type CopingCardDeleteMutationResult = Apollo.MutationResult<CopingCardDeleteMutation>;
export type CopingCardDeleteMutationOptions = Apollo.BaseMutationOptions<CopingCardDeleteMutation, CopingCardDeleteMutationVariables>;
export const CopingCardsDocument = gql`
    query copingCards($userId: String!) {
  copingCards(userId: $userId) {
    _id
    emotionId
    mind
  }
}
    `;

/**
 * __useCopingCardsQuery__
 *
 * To run a query within a React component, call `useCopingCardsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCopingCardsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCopingCardsQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useCopingCardsQuery(baseOptions: Apollo.QueryHookOptions<CopingCardsQuery, CopingCardsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CopingCardsQuery, CopingCardsQueryVariables>(CopingCardsDocument, options);
      }
export function useCopingCardsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CopingCardsQuery, CopingCardsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CopingCardsQuery, CopingCardsQueryVariables>(CopingCardsDocument, options);
        }
export type CopingCardsQueryHookResult = ReturnType<typeof useCopingCardsQuery>;
export type CopingCardsLazyQueryHookResult = ReturnType<typeof useCopingCardsLazyQuery>;
export type CopingCardsQueryResult = Apollo.QueryResult<CopingCardsQuery, CopingCardsQueryVariables>;
export const CopingCardTechnicDoingDocument = gql`
    query copingCardTechnicDoing($input: TechnicDoingFindOneInput!) {
  copingCardTechnicDoing(input: $input) {
    _id
    endDate
    startEmotionIntensity
    endEmotionIntensity
  }
}
    `;

/**
 * __useCopingCardTechnicDoingQuery__
 *
 * To run a query within a React component, call `useCopingCardTechnicDoingQuery` and pass it any options that fit your needs.
 * When your component renders, `useCopingCardTechnicDoingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCopingCardTechnicDoingQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCopingCardTechnicDoingQuery(baseOptions: Apollo.QueryHookOptions<CopingCardTechnicDoingQuery, CopingCardTechnicDoingQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CopingCardTechnicDoingQuery, CopingCardTechnicDoingQueryVariables>(CopingCardTechnicDoingDocument, options);
      }
export function useCopingCardTechnicDoingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CopingCardTechnicDoingQuery, CopingCardTechnicDoingQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CopingCardTechnicDoingQuery, CopingCardTechnicDoingQueryVariables>(CopingCardTechnicDoingDocument, options);
        }
export type CopingCardTechnicDoingQueryHookResult = ReturnType<typeof useCopingCardTechnicDoingQuery>;
export type CopingCardTechnicDoingLazyQueryHookResult = ReturnType<typeof useCopingCardTechnicDoingLazyQuery>;
export type CopingCardTechnicDoingQueryResult = Apollo.QueryResult<CopingCardTechnicDoingQuery, CopingCardTechnicDoingQueryVariables>;
export const CopingCardTechnicDoingCreateDocument = gql`
    mutation copingCardTechnicDoingCreate($input: TechnicDoingCreateInput!) {
  copingCardTechnicDoingCreate(input: $input) {
    _id
    startEmotionIntensity
    endEmotionIntensity
  }
}
    `;
export type CopingCardTechnicDoingCreateMutationFn = Apollo.MutationFunction<CopingCardTechnicDoingCreateMutation, CopingCardTechnicDoingCreateMutationVariables>;

/**
 * __useCopingCardTechnicDoingCreateMutation__
 *
 * To run a mutation, you first call `useCopingCardTechnicDoingCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCopingCardTechnicDoingCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [copingCardTechnicDoingCreateMutation, { data, loading, error }] = useCopingCardTechnicDoingCreateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCopingCardTechnicDoingCreateMutation(baseOptions?: Apollo.MutationHookOptions<CopingCardTechnicDoingCreateMutation, CopingCardTechnicDoingCreateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CopingCardTechnicDoingCreateMutation, CopingCardTechnicDoingCreateMutationVariables>(CopingCardTechnicDoingCreateDocument, options);
      }
export type CopingCardTechnicDoingCreateMutationHookResult = ReturnType<typeof useCopingCardTechnicDoingCreateMutation>;
export type CopingCardTechnicDoingCreateMutationResult = Apollo.MutationResult<CopingCardTechnicDoingCreateMutation>;
export type CopingCardTechnicDoingCreateMutationOptions = Apollo.BaseMutationOptions<CopingCardTechnicDoingCreateMutation, CopingCardTechnicDoingCreateMutationVariables>;
export const CopingCardTechnicDoingStartEmotionIntensityUpdateDocument = gql`
    mutation copingCardTechnicDoingStartEmotionIntensityUpdate($input: TechnicDoingStartEmotionIntensityUpdateInput!) {
  copingCardTechnicDoingStartEmotionIntensityUpdate(input: $input) {
    _id
    startEmotionIntensity
  }
}
    `;
export type CopingCardTechnicDoingStartEmotionIntensityUpdateMutationFn = Apollo.MutationFunction<CopingCardTechnicDoingStartEmotionIntensityUpdateMutation, CopingCardTechnicDoingStartEmotionIntensityUpdateMutationVariables>;

/**
 * __useCopingCardTechnicDoingStartEmotionIntensityUpdateMutation__
 *
 * To run a mutation, you first call `useCopingCardTechnicDoingStartEmotionIntensityUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCopingCardTechnicDoingStartEmotionIntensityUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [copingCardTechnicDoingStartEmotionIntensityUpdateMutation, { data, loading, error }] = useCopingCardTechnicDoingStartEmotionIntensityUpdateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCopingCardTechnicDoingStartEmotionIntensityUpdateMutation(baseOptions?: Apollo.MutationHookOptions<CopingCardTechnicDoingStartEmotionIntensityUpdateMutation, CopingCardTechnicDoingStartEmotionIntensityUpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CopingCardTechnicDoingStartEmotionIntensityUpdateMutation, CopingCardTechnicDoingStartEmotionIntensityUpdateMutationVariables>(CopingCardTechnicDoingStartEmotionIntensityUpdateDocument, options);
      }
export type CopingCardTechnicDoingStartEmotionIntensityUpdateMutationHookResult = ReturnType<typeof useCopingCardTechnicDoingStartEmotionIntensityUpdateMutation>;
export type CopingCardTechnicDoingStartEmotionIntensityUpdateMutationResult = Apollo.MutationResult<CopingCardTechnicDoingStartEmotionIntensityUpdateMutation>;
export type CopingCardTechnicDoingStartEmotionIntensityUpdateMutationOptions = Apollo.BaseMutationOptions<CopingCardTechnicDoingStartEmotionIntensityUpdateMutation, CopingCardTechnicDoingStartEmotionIntensityUpdateMutationVariables>;
export const CopingCardTechnicDoingEndEmotionIntensityUpdateDocument = gql`
    mutation copingCardTechnicDoingEndEmotionIntensityUpdate($input: TechnicDoingEndEmotionIntensityUpdateInput!) {
  copingCardTechnicDoingEndEmotionIntensityUpdate(input: $input) {
    _id
    endEmotionIntensity
  }
}
    `;
export type CopingCardTechnicDoingEndEmotionIntensityUpdateMutationFn = Apollo.MutationFunction<CopingCardTechnicDoingEndEmotionIntensityUpdateMutation, CopingCardTechnicDoingEndEmotionIntensityUpdateMutationVariables>;

/**
 * __useCopingCardTechnicDoingEndEmotionIntensityUpdateMutation__
 *
 * To run a mutation, you first call `useCopingCardTechnicDoingEndEmotionIntensityUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCopingCardTechnicDoingEndEmotionIntensityUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [copingCardTechnicDoingEndEmotionIntensityUpdateMutation, { data, loading, error }] = useCopingCardTechnicDoingEndEmotionIntensityUpdateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCopingCardTechnicDoingEndEmotionIntensityUpdateMutation(baseOptions?: Apollo.MutationHookOptions<CopingCardTechnicDoingEndEmotionIntensityUpdateMutation, CopingCardTechnicDoingEndEmotionIntensityUpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CopingCardTechnicDoingEndEmotionIntensityUpdateMutation, CopingCardTechnicDoingEndEmotionIntensityUpdateMutationVariables>(CopingCardTechnicDoingEndEmotionIntensityUpdateDocument, options);
      }
export type CopingCardTechnicDoingEndEmotionIntensityUpdateMutationHookResult = ReturnType<typeof useCopingCardTechnicDoingEndEmotionIntensityUpdateMutation>;
export type CopingCardTechnicDoingEndEmotionIntensityUpdateMutationResult = Apollo.MutationResult<CopingCardTechnicDoingEndEmotionIntensityUpdateMutation>;
export type CopingCardTechnicDoingEndEmotionIntensityUpdateMutationOptions = Apollo.BaseMutationOptions<CopingCardTechnicDoingEndEmotionIntensityUpdateMutation, CopingCardTechnicDoingEndEmotionIntensityUpdateMutationVariables>;
export const CopingCardTechnicDoingFinishDocument = gql`
    mutation copingCardTechnicDoingFinish($input: TechnicDoingFinishInput!) {
  copingCardTechnicDoingFinish(input: $input) {
    _id
  }
}
    `;
export type CopingCardTechnicDoingFinishMutationFn = Apollo.MutationFunction<CopingCardTechnicDoingFinishMutation, CopingCardTechnicDoingFinishMutationVariables>;

/**
 * __useCopingCardTechnicDoingFinishMutation__
 *
 * To run a mutation, you first call `useCopingCardTechnicDoingFinishMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCopingCardTechnicDoingFinishMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [copingCardTechnicDoingFinishMutation, { data, loading, error }] = useCopingCardTechnicDoingFinishMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCopingCardTechnicDoingFinishMutation(baseOptions?: Apollo.MutationHookOptions<CopingCardTechnicDoingFinishMutation, CopingCardTechnicDoingFinishMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CopingCardTechnicDoingFinishMutation, CopingCardTechnicDoingFinishMutationVariables>(CopingCardTechnicDoingFinishDocument, options);
      }
export type CopingCardTechnicDoingFinishMutationHookResult = ReturnType<typeof useCopingCardTechnicDoingFinishMutation>;
export type CopingCardTechnicDoingFinishMutationResult = Apollo.MutationResult<CopingCardTechnicDoingFinishMutation>;
export type CopingCardTechnicDoingFinishMutationOptions = Apollo.BaseMutationOptions<CopingCardTechnicDoingFinishMutation, CopingCardTechnicDoingFinishMutationVariables>;
export const CopingCardTechnicDoingDeleteDocument = gql`
    mutation copingCardTechnicDoingDelete($input: TechnicDoingDeleteInput!) {
  copingCardTechnicDoingDelete(input: $input) {
    _id
  }
}
    `;
export type CopingCardTechnicDoingDeleteMutationFn = Apollo.MutationFunction<CopingCardTechnicDoingDeleteMutation, CopingCardTechnicDoingDeleteMutationVariables>;

/**
 * __useCopingCardTechnicDoingDeleteMutation__
 *
 * To run a mutation, you first call `useCopingCardTechnicDoingDeleteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCopingCardTechnicDoingDeleteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [copingCardTechnicDoingDeleteMutation, { data, loading, error }] = useCopingCardTechnicDoingDeleteMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCopingCardTechnicDoingDeleteMutation(baseOptions?: Apollo.MutationHookOptions<CopingCardTechnicDoingDeleteMutation, CopingCardTechnicDoingDeleteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CopingCardTechnicDoingDeleteMutation, CopingCardTechnicDoingDeleteMutationVariables>(CopingCardTechnicDoingDeleteDocument, options);
      }
export type CopingCardTechnicDoingDeleteMutationHookResult = ReturnType<typeof useCopingCardTechnicDoingDeleteMutation>;
export type CopingCardTechnicDoingDeleteMutationResult = Apollo.MutationResult<CopingCardTechnicDoingDeleteMutation>;
export type CopingCardTechnicDoingDeleteMutationOptions = Apollo.BaseMutationOptions<CopingCardTechnicDoingDeleteMutation, CopingCardTechnicDoingDeleteMutationVariables>;
export const CopingCardTechnicDocument = gql`
    query copingCardTechnic($copingCardId: String!, $copingCardTechnicId: String!) {
  copingCardTechnic(
    copingCardId: $copingCardId
    copingCardTechnicId: $copingCardTechnicId
  ) {
    _id
    technicName
    description
    howToDescription
  }
}
    `;

/**
 * __useCopingCardTechnicQuery__
 *
 * To run a query within a React component, call `useCopingCardTechnicQuery` and pass it any options that fit your needs.
 * When your component renders, `useCopingCardTechnicQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCopingCardTechnicQuery({
 *   variables: {
 *      copingCardId: // value for 'copingCardId'
 *      copingCardTechnicId: // value for 'copingCardTechnicId'
 *   },
 * });
 */
export function useCopingCardTechnicQuery(baseOptions: Apollo.QueryHookOptions<CopingCardTechnicQuery, CopingCardTechnicQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CopingCardTechnicQuery, CopingCardTechnicQueryVariables>(CopingCardTechnicDocument, options);
      }
export function useCopingCardTechnicLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CopingCardTechnicQuery, CopingCardTechnicQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CopingCardTechnicQuery, CopingCardTechnicQueryVariables>(CopingCardTechnicDocument, options);
        }
export type CopingCardTechnicQueryHookResult = ReturnType<typeof useCopingCardTechnicQuery>;
export type CopingCardTechnicLazyQueryHookResult = ReturnType<typeof useCopingCardTechnicLazyQuery>;
export type CopingCardTechnicQueryResult = Apollo.QueryResult<CopingCardTechnicQuery, CopingCardTechnicQueryVariables>;
export const CopingCardTechnicCreateDocument = gql`
    mutation copingCardTechnicCreate($input: CopingCardTechnicCreateInput!) {
  copingCardTechnicCreate(input: $input) {
    _id
    technicName
    description
    howToDescription
  }
}
    `;
export type CopingCardTechnicCreateMutationFn = Apollo.MutationFunction<CopingCardTechnicCreateMutation, CopingCardTechnicCreateMutationVariables>;

/**
 * __useCopingCardTechnicCreateMutation__
 *
 * To run a mutation, you first call `useCopingCardTechnicCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCopingCardTechnicCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [copingCardTechnicCreateMutation, { data, loading, error }] = useCopingCardTechnicCreateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCopingCardTechnicCreateMutation(baseOptions?: Apollo.MutationHookOptions<CopingCardTechnicCreateMutation, CopingCardTechnicCreateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CopingCardTechnicCreateMutation, CopingCardTechnicCreateMutationVariables>(CopingCardTechnicCreateDocument, options);
      }
export type CopingCardTechnicCreateMutationHookResult = ReturnType<typeof useCopingCardTechnicCreateMutation>;
export type CopingCardTechnicCreateMutationResult = Apollo.MutationResult<CopingCardTechnicCreateMutation>;
export type CopingCardTechnicCreateMutationOptions = Apollo.BaseMutationOptions<CopingCardTechnicCreateMutation, CopingCardTechnicCreateMutationVariables>;
export const CopingCardTechnicUpdateDocument = gql`
    mutation copingCardTechnicUpdate($input: CopingCardTechnicUpdateInput!) {
  copingCardTechnicUpdate(input: $input) {
    _id
    technicName
    description
    howToDescription
  }
}
    `;
export type CopingCardTechnicUpdateMutationFn = Apollo.MutationFunction<CopingCardTechnicUpdateMutation, CopingCardTechnicUpdateMutationVariables>;

/**
 * __useCopingCardTechnicUpdateMutation__
 *
 * To run a mutation, you first call `useCopingCardTechnicUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCopingCardTechnicUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [copingCardTechnicUpdateMutation, { data, loading, error }] = useCopingCardTechnicUpdateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCopingCardTechnicUpdateMutation(baseOptions?: Apollo.MutationHookOptions<CopingCardTechnicUpdateMutation, CopingCardTechnicUpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CopingCardTechnicUpdateMutation, CopingCardTechnicUpdateMutationVariables>(CopingCardTechnicUpdateDocument, options);
      }
export type CopingCardTechnicUpdateMutationHookResult = ReturnType<typeof useCopingCardTechnicUpdateMutation>;
export type CopingCardTechnicUpdateMutationResult = Apollo.MutationResult<CopingCardTechnicUpdateMutation>;
export type CopingCardTechnicUpdateMutationOptions = Apollo.BaseMutationOptions<CopingCardTechnicUpdateMutation, CopingCardTechnicUpdateMutationVariables>;
export const CopingCardTechnicDeleteDocument = gql`
    mutation copingCardTechnicDelete($input: CopingCardTechnicDeleteInput!) {
  copingCardTechnicDelete(input: $input) {
    _id
  }
}
    `;
export type CopingCardTechnicDeleteMutationFn = Apollo.MutationFunction<CopingCardTechnicDeleteMutation, CopingCardTechnicDeleteMutationVariables>;

/**
 * __useCopingCardTechnicDeleteMutation__
 *
 * To run a mutation, you first call `useCopingCardTechnicDeleteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCopingCardTechnicDeleteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [copingCardTechnicDeleteMutation, { data, loading, error }] = useCopingCardTechnicDeleteMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCopingCardTechnicDeleteMutation(baseOptions?: Apollo.MutationHookOptions<CopingCardTechnicDeleteMutation, CopingCardTechnicDeleteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CopingCardTechnicDeleteMutation, CopingCardTechnicDeleteMutationVariables>(CopingCardTechnicDeleteDocument, options);
      }
export type CopingCardTechnicDeleteMutationHookResult = ReturnType<typeof useCopingCardTechnicDeleteMutation>;
export type CopingCardTechnicDeleteMutationResult = Apollo.MutationResult<CopingCardTechnicDeleteMutation>;
export type CopingCardTechnicDeleteMutationOptions = Apollo.BaseMutationOptions<CopingCardTechnicDeleteMutation, CopingCardTechnicDeleteMutationVariables>;
export const DialogueDocument = gql`
    query dialogue($dialogueId: String!) {
  dialogue(dialogueId: $dialogueId) {
    _id
    dialogueType
    questions {
      _id
      questionType
      dialogueQuestionId
      text
      predefinedAnswer
      answer
      selection {
        _id
        items {
          _id
          text
        }
        multiselect
      }
    }
  }
}
    `;

/**
 * __useDialogueQuery__
 *
 * To run a query within a React component, call `useDialogueQuery` and pass it any options that fit your needs.
 * When your component renders, `useDialogueQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDialogueQuery({
 *   variables: {
 *      dialogueId: // value for 'dialogueId'
 *   },
 * });
 */
export function useDialogueQuery(baseOptions: Apollo.QueryHookOptions<DialogueQuery, DialogueQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DialogueQuery, DialogueQueryVariables>(DialogueDocument, options);
      }
export function useDialogueLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DialogueQuery, DialogueQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DialogueQuery, DialogueQueryVariables>(DialogueDocument, options);
        }
export type DialogueQueryHookResult = ReturnType<typeof useDialogueQuery>;
export type DialogueLazyQueryHookResult = ReturnType<typeof useDialogueLazyQuery>;
export type DialogueQueryResult = Apollo.QueryResult<DialogueQuery, DialogueQueryVariables>;
export const DialogueCreateDocument = gql`
    mutation dialogueCreate($input: DialogueCreateInput!) {
  dialogueCreate(input: $input) {
    _id
    userId
    dialogueType
    questions {
      _id
      questionType
      dialogueQuestionId
      text
      predefinedAnswer
      answer
      selection {
        _id
        items {
          _id
          text
        }
        multiselect
      }
    }
  }
}
    `;
export type DialogueCreateMutationFn = Apollo.MutationFunction<DialogueCreateMutation, DialogueCreateMutationVariables>;

/**
 * __useDialogueCreateMutation__
 *
 * To run a mutation, you first call `useDialogueCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDialogueCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [dialogueCreateMutation, { data, loading, error }] = useDialogueCreateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDialogueCreateMutation(baseOptions?: Apollo.MutationHookOptions<DialogueCreateMutation, DialogueCreateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DialogueCreateMutation, DialogueCreateMutationVariables>(DialogueCreateDocument, options);
      }
export type DialogueCreateMutationHookResult = ReturnType<typeof useDialogueCreateMutation>;
export type DialogueCreateMutationResult = Apollo.MutationResult<DialogueCreateMutation>;
export type DialogueCreateMutationOptions = Apollo.BaseMutationOptions<DialogueCreateMutation, DialogueCreateMutationVariables>;
export const DialogueAnswerDocument = gql`
    mutation dialogueAnswer($input: DialogueAnswerInput!) {
  dialogueAnswer(input: $input) {
    _id
    questionType
    dialogueQuestionId
    text
    predefinedAnswer
    answer
    selection {
      _id
      items {
        _id
        text
      }
      multiselect
    }
  }
}
    `;
export type DialogueAnswerMutationFn = Apollo.MutationFunction<DialogueAnswerMutation, DialogueAnswerMutationVariables>;

/**
 * __useDialogueAnswerMutation__
 *
 * To run a mutation, you first call `useDialogueAnswerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDialogueAnswerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [dialogueAnswerMutation, { data, loading, error }] = useDialogueAnswerMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDialogueAnswerMutation(baseOptions?: Apollo.MutationHookOptions<DialogueAnswerMutation, DialogueAnswerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DialogueAnswerMutation, DialogueAnswerMutationVariables>(DialogueAnswerDocument, options);
      }
export type DialogueAnswerMutationHookResult = ReturnType<typeof useDialogueAnswerMutation>;
export type DialogueAnswerMutationResult = Apollo.MutationResult<DialogueAnswerMutation>;
export type DialogueAnswerMutationOptions = Apollo.BaseMutationOptions<DialogueAnswerMutation, DialogueAnswerMutationVariables>;
export const DialogueUpdateAnswerDocument = gql`
    mutation dialogueUpdateAnswer($input: DialogueUpdateAnswerInput!) {
  dialogueUpdateAnswer(input: $input) {
    _id
    answer
  }
}
    `;
export type DialogueUpdateAnswerMutationFn = Apollo.MutationFunction<DialogueUpdateAnswerMutation, DialogueUpdateAnswerMutationVariables>;

/**
 * __useDialogueUpdateAnswerMutation__
 *
 * To run a mutation, you first call `useDialogueUpdateAnswerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDialogueUpdateAnswerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [dialogueUpdateAnswerMutation, { data, loading, error }] = useDialogueUpdateAnswerMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDialogueUpdateAnswerMutation(baseOptions?: Apollo.MutationHookOptions<DialogueUpdateAnswerMutation, DialogueUpdateAnswerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DialogueUpdateAnswerMutation, DialogueUpdateAnswerMutationVariables>(DialogueUpdateAnswerDocument, options);
      }
export type DialogueUpdateAnswerMutationHookResult = ReturnType<typeof useDialogueUpdateAnswerMutation>;
export type DialogueUpdateAnswerMutationResult = Apollo.MutationResult<DialogueUpdateAnswerMutation>;
export type DialogueUpdateAnswerMutationOptions = Apollo.BaseMutationOptions<DialogueUpdateAnswerMutation, DialogueUpdateAnswerMutationVariables>;
export const DialogueDeleteDocument = gql`
    mutation dialogueDelete($input: DialogueDeleteInput!) {
  dialogueDelete(input: $input) {
    _id
  }
}
    `;
export type DialogueDeleteMutationFn = Apollo.MutationFunction<DialogueDeleteMutation, DialogueDeleteMutationVariables>;

/**
 * __useDialogueDeleteMutation__
 *
 * To run a mutation, you first call `useDialogueDeleteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDialogueDeleteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [dialogueDeleteMutation, { data, loading, error }] = useDialogueDeleteMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDialogueDeleteMutation(baseOptions?: Apollo.MutationHookOptions<DialogueDeleteMutation, DialogueDeleteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DialogueDeleteMutation, DialogueDeleteMutationVariables>(DialogueDeleteDocument, options);
      }
export type DialogueDeleteMutationHookResult = ReturnType<typeof useDialogueDeleteMutation>;
export type DialogueDeleteMutationResult = Apollo.MutationResult<DialogueDeleteMutation>;
export type DialogueDeleteMutationOptions = Apollo.BaseMutationOptions<DialogueDeleteMutation, DialogueDeleteMutationVariables>;
export const DialoguesDocument = gql`
    query dialogues($userId: String!) {
  dialogues(userId: $userId) {
    _id
    dialogueType
    questions {
      _id
      questionType
      dialogueQuestionId
      text
      predefinedAnswer
      answer
      selection {
        _id
        items {
          _id
          text
        }
        multiselect
      }
    }
  }
}
    `;

/**
 * __useDialoguesQuery__
 *
 * To run a query within a React component, call `useDialoguesQuery` and pass it any options that fit your needs.
 * When your component renders, `useDialoguesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDialoguesQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useDialoguesQuery(baseOptions: Apollo.QueryHookOptions<DialoguesQuery, DialoguesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DialoguesQuery, DialoguesQueryVariables>(DialoguesDocument, options);
      }
export function useDialoguesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DialoguesQuery, DialoguesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DialoguesQuery, DialoguesQueryVariables>(DialoguesDocument, options);
        }
export type DialoguesQueryHookResult = ReturnType<typeof useDialoguesQuery>;
export type DialoguesLazyQueryHookResult = ReturnType<typeof useDialoguesLazyQuery>;
export type DialoguesQueryResult = Apollo.QueryResult<DialoguesQuery, DialoguesQueryVariables>;
export const HomeWorkDocument = gql`
    query homeWork($homeWorkId: String!) {
  homeWork(homeWorkId: $homeWorkId) {
    _id
    whatToDo
    whatWeGet
  }
}
    `;

/**
 * __useHomeWorkQuery__
 *
 * To run a query within a React component, call `useHomeWorkQuery` and pass it any options that fit your needs.
 * When your component renders, `useHomeWorkQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHomeWorkQuery({
 *   variables: {
 *      homeWorkId: // value for 'homeWorkId'
 *   },
 * });
 */
export function useHomeWorkQuery(baseOptions: Apollo.QueryHookOptions<HomeWorkQuery, HomeWorkQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HomeWorkQuery, HomeWorkQueryVariables>(HomeWorkDocument, options);
      }
export function useHomeWorkLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HomeWorkQuery, HomeWorkQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HomeWorkQuery, HomeWorkQueryVariables>(HomeWorkDocument, options);
        }
export type HomeWorkQueryHookResult = ReturnType<typeof useHomeWorkQuery>;
export type HomeWorkLazyQueryHookResult = ReturnType<typeof useHomeWorkLazyQuery>;
export type HomeWorkQueryResult = Apollo.QueryResult<HomeWorkQuery, HomeWorkQueryVariables>;
export const HomeWorkCreateDocument = gql`
    mutation homeWorkCreate($input: HomeWorkCreateInput!) {
  homeWorkCreate(input: $input) {
    _id
    whatToDo
    whatWeGet
  }
}
    `;
export type HomeWorkCreateMutationFn = Apollo.MutationFunction<HomeWorkCreateMutation, HomeWorkCreateMutationVariables>;

/**
 * __useHomeWorkCreateMutation__
 *
 * To run a mutation, you first call `useHomeWorkCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useHomeWorkCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [homeWorkCreateMutation, { data, loading, error }] = useHomeWorkCreateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useHomeWorkCreateMutation(baseOptions?: Apollo.MutationHookOptions<HomeWorkCreateMutation, HomeWorkCreateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<HomeWorkCreateMutation, HomeWorkCreateMutationVariables>(HomeWorkCreateDocument, options);
      }
export type HomeWorkCreateMutationHookResult = ReturnType<typeof useHomeWorkCreateMutation>;
export type HomeWorkCreateMutationResult = Apollo.MutationResult<HomeWorkCreateMutation>;
export type HomeWorkCreateMutationOptions = Apollo.BaseMutationOptions<HomeWorkCreateMutation, HomeWorkCreateMutationVariables>;
export const HomeWorkUpdateDocument = gql`
    mutation homeWorkUpdate($input: HomeWorkUpdateInput!) {
  homeWorkUpdate(input: $input) {
    _id
    whatToDo
    whatWeGet
  }
}
    `;
export type HomeWorkUpdateMutationFn = Apollo.MutationFunction<HomeWorkUpdateMutation, HomeWorkUpdateMutationVariables>;

/**
 * __useHomeWorkUpdateMutation__
 *
 * To run a mutation, you first call `useHomeWorkUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useHomeWorkUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [homeWorkUpdateMutation, { data, loading, error }] = useHomeWorkUpdateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useHomeWorkUpdateMutation(baseOptions?: Apollo.MutationHookOptions<HomeWorkUpdateMutation, HomeWorkUpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<HomeWorkUpdateMutation, HomeWorkUpdateMutationVariables>(HomeWorkUpdateDocument, options);
      }
export type HomeWorkUpdateMutationHookResult = ReturnType<typeof useHomeWorkUpdateMutation>;
export type HomeWorkUpdateMutationResult = Apollo.MutationResult<HomeWorkUpdateMutation>;
export type HomeWorkUpdateMutationOptions = Apollo.BaseMutationOptions<HomeWorkUpdateMutation, HomeWorkUpdateMutationVariables>;
export const HomeWorkDeleteDocument = gql`
    mutation homeWorkDelete($input: HomeWorkDeleteInput!) {
  homeWorkDelete(input: $input) {
    _id
  }
}
    `;
export type HomeWorkDeleteMutationFn = Apollo.MutationFunction<HomeWorkDeleteMutation, HomeWorkDeleteMutationVariables>;

/**
 * __useHomeWorkDeleteMutation__
 *
 * To run a mutation, you first call `useHomeWorkDeleteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useHomeWorkDeleteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [homeWorkDeleteMutation, { data, loading, error }] = useHomeWorkDeleteMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useHomeWorkDeleteMutation(baseOptions?: Apollo.MutationHookOptions<HomeWorkDeleteMutation, HomeWorkDeleteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<HomeWorkDeleteMutation, HomeWorkDeleteMutationVariables>(HomeWorkDeleteDocument, options);
      }
export type HomeWorkDeleteMutationHookResult = ReturnType<typeof useHomeWorkDeleteMutation>;
export type HomeWorkDeleteMutationResult = Apollo.MutationResult<HomeWorkDeleteMutation>;
export type HomeWorkDeleteMutationOptions = Apollo.BaseMutationOptions<HomeWorkDeleteMutation, HomeWorkDeleteMutationVariables>;
export const HomeWorksDocument = gql`
    query homeWorks($userId: String!) {
  homeWorks(userId: $userId) {
    _id
    whatToDo
    whatWeGet
  }
}
    `;

/**
 * __useHomeWorksQuery__
 *
 * To run a query within a React component, call `useHomeWorksQuery` and pass it any options that fit your needs.
 * When your component renders, `useHomeWorksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHomeWorksQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useHomeWorksQuery(baseOptions: Apollo.QueryHookOptions<HomeWorksQuery, HomeWorksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HomeWorksQuery, HomeWorksQueryVariables>(HomeWorksDocument, options);
      }
export function useHomeWorksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HomeWorksQuery, HomeWorksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HomeWorksQuery, HomeWorksQueryVariables>(HomeWorksDocument, options);
        }
export type HomeWorksQueryHookResult = ReturnType<typeof useHomeWorksQuery>;
export type HomeWorksLazyQueryHookResult = ReturnType<typeof useHomeWorksLazyQuery>;
export type HomeWorksQueryResult = Apollo.QueryResult<HomeWorksQuery, HomeWorksQueryVariables>;
export const LoginDocument = gql`
    mutation login($user: UserLoginInput!) {
  login(user: $user) {
    token
    isRegistered
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      user: // value for 'user'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;