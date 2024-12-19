# build environment
FROM node:23-alpine3.20 as build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# production environment
FROM nginx:stable-alpine
# Copy build artifacts to the NGINX HTML directory
COPY --from=build /app/dist /usr/share/nginx/html
# Copy the NGINX configuration file if it exists
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
