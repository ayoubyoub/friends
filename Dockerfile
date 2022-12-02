#Firste stage Image Docker Angular
FROM node:18.10-alpine as build
RUN mkdir -p /app

WORKDIR /app

COPY package.json /app/
RUN npm install

COPY . /app/
RUN npm run build --configuration=production

#finel stage 
FROM nginx:alpine 
RUN rm -rf /usr/share/nginx/html/*

COPY --from=build /app/dist/ /usr/share/nginx/html
# Start NgInx service
CMD ["nginx", "-g", "daemon off;"]

