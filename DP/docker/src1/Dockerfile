FROM node:24-alpine
WORKDIR /app
COPY . .
RUN yarn install
RUN yarn build
ENV NODE_ENV production
EXPOSE 3200
CMD ["yarn", "run", "start"]