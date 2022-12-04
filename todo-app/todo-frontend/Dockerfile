FROM node:16 AS build-stage

WORKDIR /usr/src/app

COPY . .

#ENV NODE_OPTIONS="--openssl-legacy-provider"
#RUN npm ci

RUN npm install

ENV REACT_APP_BACKEND_URL="http://localhost:3000"

#RUN npm run build
RUN CI=true npm test
RUN npm run build

#FROM build-stage AS test
#RUN CI=true npm test

FROM nginx

COPY --from=build-stage /usr/src/app/build /usr/share/nginx/html

#RUN npm install -g serve
#CMD ["serve", "build"]
