FROM node:18-alpine

WORKDIR /home/node/app

COPY package*.json ./

RUN npm install

RUN chmod -R 777 /home/node/app

ENV PORT=$PORT
ENV HOST=0.0.0.0

EXPOSE $PORT

#CMD ["npm", "run", "dev"]