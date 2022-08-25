#!/bin/bash

# shellcheck disable=SC2034
SERVICE_NAME=nginx
SERVICE_PATH=../../microservices/nginx

source base.sh

# docker exec -it nginx certbot --nginx -d emotio.life -d www.emotio.life -d app.emotio.life --agree-tos -m roman.malko@gmail.com