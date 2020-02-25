# intermediate container for SSH isolation
FROM node:12.14.1 AS intermediate
ARG SSH_PRIVATE_KEY

# setup SSH
RUN mkdir /root/.ssh
RUN echo "${SSH_PRIVATE_KEY}" > /root/.ssh/id_rsa
RUN chmod 600 /root/.ssh/id_rsa
RUN touch /root/.ssh/known_hosts
RUN ssh-keyscan -t rsa github.com >> /root/.ssh/known_hosts

# install into intermediate
WORKDIR /usr/src/app
COPY src ./src
COPY package-lock.json .
COPY package.json .
COPY swagger.yaml .
COPY tsconfig.json .
RUN npm install
RUN npm run compile
RUN npm prune --production

# build final image
FROM node:12.14.1
ARG port
WORKDIR /usr/src/app
COPY --from=intermediate /usr/src/app .
EXPOSE $port
CMD npm run pm2
