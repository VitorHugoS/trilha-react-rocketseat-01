FROM node:17.4.0
WORKDIR /app
COPY package*.json ./
RUN cd /app
RUN yarn
COPY . .
EXPOSE 8080
CMD ["yarn", "dev"]