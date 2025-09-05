FROM node:24

WORKDIR /app

# Copy instead of git clone to include .env file
# COPY . .

# Clone into /app
RUN git clone https://github.com/brainstormerjr/portfolio-3.git .

# Copy .env file
COPY .env .env

# Copy next.config.ts 
COPY next.config.ts next.config.ts

RUN npm install

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]