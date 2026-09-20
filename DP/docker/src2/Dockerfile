FROM node
RUN apk add --no-cache libc6-compat
RUN corepack enable
RUN corepack prepare pnpm@11.9.0 --activate
WORKDIR /app
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml /app/
RUN pnpm install && pnpm store prune
COPY . .
RUN pnpm run build
EXPOSE 3000
CMD ["pnpm", "run", "dev"]