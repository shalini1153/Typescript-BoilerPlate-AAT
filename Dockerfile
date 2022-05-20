

# Pull the node base image
FROM node:ubuntu as base

# install chrome for protractor tests
# RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
# RUN sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'
# RUN apt-get update && apt-get install -yq docker psgoogle-chrome-stable
RUN mkdir /usr/src/app 
# Do a cd on the docker image file system
WORKDIR /usr/src/app
COPY . .
RUN npm install
#RUN npm i   
EXPOSE 4200
#RUN export DOCKER_CONTENT_TRUST=1
#HEALTHCHECK --interval=5m --timeout=3s \
CMD [ "npm","start" ]
