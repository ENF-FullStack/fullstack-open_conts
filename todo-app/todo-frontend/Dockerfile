FROM node:16 AS build-stage

WORKDIR /usr/src/app

COPY . .

#ENV NODE_OPTIONS="--openssl-legacy-provider"

RUN npm install

#ENV REACT_APP_BACKEND_URL="http://localhost:8080/api"

ENV REACT_APP_BACKEND_URL="http://localhost:8080/api"
ENV CHOKIDAR_USEPOLLING=true

RUN CI=true npm test
RUN npm run build

FROM nginx

COPY --from=build-stage /usr/src/app/build /usr/share/nginx/html
