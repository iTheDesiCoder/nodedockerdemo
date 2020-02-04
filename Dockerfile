FROM node:10-alpine
WORKDIR /dist/
ADD ./package.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "npm","start" ]
