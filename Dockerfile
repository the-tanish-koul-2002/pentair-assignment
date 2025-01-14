FROM node:16-alpine

WORKDIR /app

COPY package*.json ./
COPY index.js ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node","index.js"]
