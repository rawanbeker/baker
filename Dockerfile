FROM nginx:alpine
WORKDIR /app
RUN mkdir /raw
COPY index.js .
COPY nginx.conf /etc/nginx

