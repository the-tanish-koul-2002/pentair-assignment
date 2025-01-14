# Use the Node.js 16-alpine image as the base
FROM node:16-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json into the container
COPY package*.json ./

# Install all dependencies, including Jest for testing
RUN npm install && npm install --save-dev jest

# Copy the rest of the application files into the container
COPY . .

# Expose port 3000 for the application
EXPOSE 3000

# Set the default command to run tests when the container starts
CMD ["npm", "test"]
