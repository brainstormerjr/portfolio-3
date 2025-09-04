FROM node:24

WORKDIR /app

RUN git clone https://github.com/brainstormerjr/portfolio-3.git .

RUN npm install

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]