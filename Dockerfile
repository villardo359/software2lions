#build angular

FROM node:18-alpine AS build

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build --prod

RUN ls -alt

#build nginx

FROM nginx:1.17.1-alpine

COPY --from=build /usr/src/app/dist/frontend-notas /usr/share/nginx/html

COPY --from=build /usr/src/app/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

