FROM node:alpine as builder
ENV NODE_OPTIONS=--openssl-legacy-provider
WORKDIR '/app'
COPY --chown=node:node ./package.json ./
RUN npm install
COPY --chown=node:node . .
USER node
RUN npm run build

FROM nginx
EXPOSE 5000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html