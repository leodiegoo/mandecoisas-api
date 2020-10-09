FROM node:14.8-alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json yarn.lock /usr/src/app/
RUN yarn global add gulp-cli
RUN yarn install --silent
COPY . /usr/src/app
RUN yarn build
ENV NODE_ENV production
ENV PORT 3333
EXPOSE 3333
CMD [ "yarn", "start" ]
