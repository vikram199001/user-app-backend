FROM node:14

WORKDIR /backend-user
COPY package.json .
RUN npm install
COPY . .
CMD node index.js