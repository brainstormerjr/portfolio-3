FROM node:24

WORKDIR /app

# Copy instead of git clone to include .env file
COPY . .

RUN npm install

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]