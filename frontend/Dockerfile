FROM node:18-alpine

WORKDIR /app

COPY package.json .

RUN npm install

RUN npm install react-router-dom

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]

# COPY public/ /wiBookFront/public
# COPY src/ /wiBookFront/src
# COPY package.json /wiBookFront/
# RUN npm install
# EXPOSE 3000
# CMD ["npm", "run", "dev"]