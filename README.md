# About the project

"Innenanzeiger" or translated "The interior display" is a web app that shows the current journey of a train in the style of a passenger information system on the train.
# Disclamer
<p style="font-weight: bold; color: red;">
This project is an emulation of various displays from railway companies in Germany. All brands and trademarks, including but not limited to Bayerische Regiobahn and S-Bahn München are used solely for the purpose of creating a realistic emulation. They do not indicate any kind of connection, endorsement, or authorization by the respective companies. All rights belong to their respective owners. 
</p>

## Features
 - Emulates various Displays from railway companies in Germany based on realtime data from the db-rest API.
 - Shows next stop, delays and current state of the train at the station

## To Do
 - [ ] add live tracking to show the train on a map
 - [ ] translate the UI to english
## Getting Started
This project is made with  [Next.js](https://nextjs.org/docs) and [Tailwind CSS](https://tailwindcss.com/)

## Requirements
 - [Node.js](https://nodejs.org)
 - a package manager like yarn or npm
 - [db-rest](https://github.com/derhuerst/db-rest)
## Installation

Let's first install all dependencies for the frontend
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```
## Setting up the API
The project works with the great [db-rest](https://github.com/derhuerst/db-rest) API to retrieve data for current departures and trains.
A public instance is available at ```v6.db.transport.rest```

Create an .env file by copying the old one 


```bash
cp .env.example .env
```
Set the API_INSTANCE variable to a host name on which db-rest is running, e.g. v6.db.transport.rest
```bash
API_INSTANCE=v6.db.transport.rest # or any other name
```
## Run the development server
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Contributing

Contributions of any kind are more than welcome. Feel free to report problems or make a pull request.
