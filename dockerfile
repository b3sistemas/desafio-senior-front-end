FROM node:17.6.0

WORKDIR /home/vue/app

COPY package*.json ./

RUN npm install

RUN apt update

RUN apt install vim -y

COPY . .

# compila a aplicação de produção com minificação
RUN npm run build

EXPOSE 8080

CMD [ "npm", "run", "serve" ]
CMD [ "npm", "run", "build" ]
CMD [ "npm", "run", "lint" ]


