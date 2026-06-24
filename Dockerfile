# ─────────────────────────────────────────────────────────────
# PSYKE — static (SSG) site
#   Stage 1: build the Nuxt site to static files (.output/public)
#   Stage 2: serve them with Caddy (tiny static file server)
# Coolify's Traefik handles the domain + TLS and routes to port 80.
# ─────────────────────────────────────────────────────────────

# Node 22.12+ enables require(ESM) by default, which the oxc/rolldown
# toolchain needs — avoids the --experimental-require-module flag.
FROM node:22.12-slim AS build

# Install pnpm directly (pinned). Avoids the corepack signature-verification
# bug present in some Node 22.12 images.
RUN npm install -g pnpm@8.15.0
WORKDIR /app

# Install dependencies first for better layer caching
COPY package.json pnpm-lock.yaml .npmrc ./
RUN pnpm install --frozen-lockfile

# Google Analytics id is baked in via nuxt.config.ts (gaId). We deliberately do
# NOT pass NUXT_PUBLIC_GA_ID here — an empty env var would override and wipe out
# the config default. To change the id, edit nuxt.config.ts.

# Build the static site
COPY . .
RUN pnpm run generate

# ─────────────────────────────────────────────────────────────
FROM caddy:2-alpine AS runtime

COPY --from=build /app/.output/public /srv
COPY Caddyfile /etc/caddy/Caddyfile

EXPOSE 80
# Caddy starts via the base image's default CMD
