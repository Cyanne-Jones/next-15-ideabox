FROM node:18

# The WORKDIR sets the context for subsequent commands. You can name it whatever you like
WORKDIR /app 

# Copy package.json and package-lock.json
COPY package*.json ./

# Install all dependencies
RUN npm install

# Copy all the code from our project (current root directory) to our WORKDIR
COPY . .

# Tells the container that out app runs on the port 3000
EXPOSE 3000

# Ask the container to start the development server
CMD npm run dev