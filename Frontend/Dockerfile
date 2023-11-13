# Use the official Node.js image for building
FROM node:16 AS build

WORKDIR /app

# Copy package.json and install dependencies
COPY ./package.json ./
COPY ./package-lock.json ./
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the React app
RUN npm run build

# Use a smaller image for the final build
FROM nginx:latest

# Copy the built React app to the NGINX image
COPY --from=build /app/build /usr/share/nginx/html

# Expose the port NGINX will run on
EXPOSE 3000

# The default command to start NGINX
CMD ["nginx", "-g", "daemon off;"]
