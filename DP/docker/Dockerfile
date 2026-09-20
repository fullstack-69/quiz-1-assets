FROM node:24-alpine
RUN apk add --no-cache libc6-compat
RUN corepack enable
RUN corepack prepare pnpm@11.9.0 --activate
WORKDIR /app
COPY . .
RUN pnpm install && pnpm store prune
RUN pnpm run build
ENV NODE_ENV production
EXPOSE 3200
CMD ["pnpm", "run", "start"]