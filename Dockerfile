FROM node:18-alpine3.14  AS builder

WORKDIR /app

COPY package*.json ./

COPY . .

RUN npm ci

RUN npx prisma generate && npx prisma db push && npx prisma db seed

RUN npm run build && npm prune --production

ENV PORT 80

EXPOSE 80

CMD ["node", "build"]