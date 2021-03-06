### STAGE 1: Build ###
FROM node:17.9.0-alpine3.15 AS build
WORKDIR /src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build
### STAGE 2: Run ###
FROM nginx:1.17.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/issue-tracker /usr/share/nginx/html





