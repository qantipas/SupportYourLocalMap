FROM node:10

## PREP
WORKDIR /usr/workdir
COPY package*.json ./

## INSTALL
RUN npm install
COPY . .

## RUN
EXPOSE 8080
CMD [ "node", "app.js" ]