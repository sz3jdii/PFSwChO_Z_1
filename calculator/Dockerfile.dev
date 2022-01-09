FROM node:alpine
WORKDIR "/app"
COPY --chown=node:node ./package.json ./
RUN npm install
COPY --chown=node:node . .
RUN chown -R node:node /app
USER node
CMD ["npm", "run", "start"]