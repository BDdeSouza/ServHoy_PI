FROM node:20-alpine

WORKDIR /

COPY . .

RUN npm install

RUN npm run build

RUN npm install -g pm2

EXPOSE 3000

CMD ["pm2-runtime", "start", "ecosystem.config.js"]