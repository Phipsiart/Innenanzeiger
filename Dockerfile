FROM node:alpine
RUN apk add --no-cache tzdata
ENV TZ=Europe/Berlin
# Set the working directory inside the container
WORKDIR /app

# Copy package.json and yarn.lock to the working directory
COPY package*.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the rest of the application code to the working directory
COPY . .

# Build the Next.js app
RUN yarn run next build

# Expose the port that the Next.js app will run on
EXPOSE 3000

# Start the Next.js app
CMD ["yarn", "start"]
