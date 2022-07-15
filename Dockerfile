FROM node:12.22-alpine as build-stage
WORKDIR /app
COPY . . 
RUN npm install 
RUN npm run build

FROM nginx:1.17-alpine as production-stage
COPY --from=build-stage /app/build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]