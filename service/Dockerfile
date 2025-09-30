FROM node:22.20.0
WORKDIR /app
EXPOSE 5422
COPY package*.json ./
RUN npm install
COPY . .
RUN npx tsc
CMD ["node", "dist/index.js"]