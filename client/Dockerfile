FROM node:alpine as build
WORKDIR /app
COPY package.json  ./
RUN npm install
COPY . .
RUN npm build

FROM nginx:stable-alpine

COPY --from=build /dist /usr/share/nginx/html
COPY --from=build nginx.conf /etc/ngnix/conf.d/default.conf
EXPOSE 3211
CMD ["nginx", "-g", "daemon off;"]
