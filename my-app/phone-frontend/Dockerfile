FROM node:16 AS build-stage

WORKDIR /usr/src/app

COPY . .

RUN npm ci

ENV REACT_APP_BACKEND=http://localhost:3001

RUN npm run build

FROM nginx

COPY --from=build-stage /usr/src/app/build /usr/share/nginx/html
