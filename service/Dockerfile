FROM node:22.20.0
WORKDIR /app
EXPOSE 5422
COPY package.json ./
RUN npm install
COPY . .
CMD ["npx", "nodemon", "index.ts"]