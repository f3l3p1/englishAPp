# Use Node.js as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install frontend dependencies
RUN npm install

# Copy the rest of the frontend files to the working directory
COPY . .

# Build the Angular/Ionic application
RUN npm run build

# Expose port 8100 for the frontend server
EXPOSE 8100

# Command to start the frontend server
CMD ["npm", "start"]
