# Welcome to the "Innenanzeiger" Project! 🚂

Hello there! 👋 Welcome to "Innenanzeiger", or in English, "The Interior Display". This is a fun web app that emulates the journey of a train, just like a passenger information system on a real train. Isn't that cool? 🚄

# A Friendly Reminder 📝

Just so you know, this project is an emulation of various displays from railway companies in Germany. We use all brands and trademarks, including but not limited to Bayerische Regiobahn and S-Bahn München, solely for the purpose of creating a realistic emulation. They do not indicate any kind of connection, endorsement, or authorization by the respective companies. All rights belong to their respective owners.

Also, it's important to note that the data we use is provided without warranty. While we strive to provide accurate and up-to-date information, please be aware that the displayed information isn't the same as in the trains. Due to technical limitations, it's not possible to replicate the exact data from the trains.

So, enjoy the app, but remember to check the official sources for the most accurate information! 🚄

## Exciting Features 🎉

- We emulate various Displays from railway companies in Germany based on realtime data from the db-rest API.
- Our app shows the next stop, delays, and the current state of the train at the station.
- We even display connections for each stop (only available at S-Bahn München & U-Bahn München (alpha) simulations).

## Currrently supported railway systems 🚄

- Bayerische Regiobahn
- S-Bahn München
- U-Bahn München (alpha): We’re still fine-tuning this one, but you can already catch a glimpse of the Munich U-Bahn system DFI!

## On Our To-Do List 📋

- [ ] We're planning to add live tracking to show the train on a map.
- [ ] We're also working on translating the UI to English.

## Let's Get Started! 🚀

This project is made with Next.js and Tailwind CSS. Excited to get started? We are too!

## What You'll Need 🛠️

- Node.js
- A package manager like yarn or npm
- db-rest

## Let's Install Some Stuff! 💻

First things first, let's install all dependencies for the frontend:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

## Setting up the API 🌐

Our project works with the fantastic db-rest API to retrieve data for current departures and trains. A public instance is available at v6.db.transport.rest.

Create an .env file by copying the old one:

```bash
cp .env.example .env
```

Set the API_INSTANCE variable to a host name on which db-rest is running, e.g. v6.db.transport.rest:

```bash
API_INSTANCE=v6.db.transport.rest # or any other name
```

## Time to Run the Development Server! 🏃‍♀️

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Large portions of the authentication system logic in this project are derived from a video tutorial by Ugur Kellecioglu.

The original code is provided under the MIT License and can be found in [this](https://github.com/ugurkellecioglu/next-14-lucia-auth-postgresql-drizzle-typescript-example) repository.

## We Love Contributions! ❤️

Contributions of any kind are more than welcome. Feel free to report problems or make a pull request. We’re all ears! 🐰
