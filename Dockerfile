FROM node:24-alpine
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile && yarn cache clean
WORKDIR /workspaces/techbook-template
