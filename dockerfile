FROM node:lts-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# compila a aplicação de produção com minificação
RUN npm run build

EXPOSE 8080
CMD [ "npm", "run", "serve" ]
