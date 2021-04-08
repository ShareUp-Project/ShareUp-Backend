FROM node:14

RUN mkdir -p /app
WORKDIR /app
ADD . /app

RUN npm ci
RUN npm i typescript
RUN npm run build

ENV NODE_ENV development

CMD ["npm", "start"]