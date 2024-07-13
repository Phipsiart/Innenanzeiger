# Use the official lightweight Node.js image based on Alpine Linux
FROM node:alpine

# Install tzdata to set the timezone
RUN apk add --no-cache tzdata

# Set the timezone
ENV TZ=Europe/Berlin

# Set the environment to production
ENV NODE_ENV=production

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and yarn.lock to the working directory
COPY package.json yarn.lock ./

# Enable Corepack and prepare the specific Yarn version
# Install dependencies
RUN yarn install --frozen-lockfile
# Copy the rest of the application code to the working directory
COPY . .

# Build the Next.js app
RUN yarn build

# Expose the port that the Next.js app will run on
EXPOSE 3000

# Start the Next.js app
CMD ["yarn", "start"]
