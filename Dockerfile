FROM node:7.3.0

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app

# Install app dependencies
RUN npm config set strict-ssl false
RUN npm install

# Bundle app source
COPY . /usr/src/app

EXPOSE 8080

#RUN npm run build:dll
CMD [ "npm", "start" ]  
