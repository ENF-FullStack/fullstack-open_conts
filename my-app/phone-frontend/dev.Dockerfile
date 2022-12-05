FROM node:16

WORKDIR /usr/src/app

COPY . .

RUN npm install

#ENV REACT_APP_BACKEND_URL="http://server:3001"
ENV CHOKIDAR_USEPOLLING=true

CMD ["npm", "start"]
