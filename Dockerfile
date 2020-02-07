FROM node:10-alpine
WORKDIR /app
ADD ./package.json .
RUN npm install
COPY . .
RUN npm run-script build
EXPOSE 3000
CMD node ./dist/server.js
