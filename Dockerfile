# Use Node.js base image
FROM node:14

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install

# Copy the rest of the app files
COPY . .

# Expose the app on port 3000
EXPOSE 3000

# Run the app
CMD ["node", "app.js"]
