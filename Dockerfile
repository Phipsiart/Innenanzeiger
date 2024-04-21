FROM node:alpine

ENV NODE_ENV=production
WORKDIR /app
COPY package.json yarn.lock ./
RUN apk update && apk upgrade &&  apk add ca-certificates make python3 && update-ca-certificates && apk add --update tzdata
ENV TZ=Europe/Berlin
RUN rm -f /sbin/apk && rm -rf /etc/apk && rm -rf /lib/apk && rm -rf /usr/share/apk &&  rm -rf /var/lib/apk

RUN yarn install --frozen-lockfile --production
COPY . ./
RUN yarn run next telemetry disable &&  yarn run next build

EXPOSE 3000

CMD ["yarn", "start"]
