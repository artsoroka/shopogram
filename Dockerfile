FROM node:5.6

WORKDIR /var/www/shopogram
COPY ./ /var/www/shopogram

RUN apt-get update && apt-get install -y \
    libcairo2-dev \
    libpango1.0-dev \
    libgif-dev \
    build-essential \
    g++

RUN npm install

EXPOSE 80 8080

CMD npm start