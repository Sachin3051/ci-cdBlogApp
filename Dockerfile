# Use the official Node.js image as the base image
FROM node:20.15.0

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React application
RUN npm run build

# Install a simple web server to serve the React app
RUN npm install -g serve

# Expose port 3000
EXPOSE 3000

# Start the application
# CMD ["serve", "-s", "build"]

CMD ["serve", "-s", "build"]
