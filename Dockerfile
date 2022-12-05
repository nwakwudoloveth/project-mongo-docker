FROM node:alpine

ADD . .

RUN npm install

CMD ["npm", "start"]
