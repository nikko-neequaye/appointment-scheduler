FROM node:8.15.0-jessie AS builder

ARG http_proxy
ARG https_proxy

# install node modules
COPY package.json /app/package.json
COPY .npmrc /app/.npmrc

WORKDIR /app

RUN if [ -n "${http_proxy}" ]; \
    then npm config set proxy "${http_proxy}"; \
    fi \
 && npm install

# install application
COPY . /app
RUN npm run build

FROM node:8.15.0-alpine

COPY --from=builder /app .

EXPOSE 8080
ENV PORT=8080
CMD [ "node", "server.js" ]
