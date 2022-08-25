FROM nginx:latest

RUN apt update
RUN apt install certbot python3-certbot-nginx -y

COPY nginx.conf /etc/nginx

CMD ["nginx", "-g", "daemon off;"]