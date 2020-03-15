FROM node:10

# Setting working directory. All the path will be relative to WORKDIR
WORKDIR /usr/src/app

# Installing dependencies
COPY package*.json ./
RUN npm install

# Copying source files
COPY . .

# Building app
# RUN yarn add pm2 -g
RUN yarn
RUN npx next build

# Running the app
EXPOSE 3000
CMD [ "yarn", "docker" ]
