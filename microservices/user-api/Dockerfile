FROM node:alpine

ENV PROJECT_HOME /opt/app

RUN mkdir -p $PROJECT_HOME

WORKDIR $PROJECT_HOME

COPY . .

RUN yarn --frozen-lockfile

RUN yarn build

EXPOSE 5000

ENV NODE_ENV=production

CMD [ "yarn", "start:prod" ]