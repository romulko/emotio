FROM node:16-alpine as builder

WORKDIR /app

COPY package.json .
COPY yarn.lock .
RUN yarn --frozen-lockfile

COPY . .

RUN yarn build

FROM nginx
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html