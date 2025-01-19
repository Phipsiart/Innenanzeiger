## Note: 
Due to the discontinuation of the underlying data source, this project no longer works and requires a lot of maintenance to make it work again.
I will unarchive this repository when I find the time to fix it.

# Welcome to the "Innenanzeiger" Project

Greetings! Welcome to "Innenanzeiger," or "The Interior Display" in English. This web application simulates the journey of a train, emulating the passenger information systems found on real trains. Isn’t that fascinating?

But a picture says more than 1000 words. Here are our currently supported displays:

### S-Bahn München

![grafik](https://github.com/user-attachments/assets/10290a02-ac53-4fb8-a7fc-6cfdf61b5b94)

### U-Bahn München

![grafik](https://github.com/Phipsiart/Innenanzeiger/assets/98510944/9550f471-a8b1-4cf6-bd5f-bfa6a7ec2c6d)

### Bayerische Regiobahn

![grafik](https://github.com/user-attachments/assets/1907447d-bca8-484d-b83d-f2b100e3e848)

# Important Notice

Please note that this project emulates various displays from railway companies in Germany. The use of all brands and trademarks, including but not limited to Bayerische Regiobahn, S-Bahn München and U-Bahn München is solely for the purpose of creating a realistic simulation. This does not imply any connection, endorsement, or authorization by the respective companies. All rights are retained by their respective owners.

Additionally, it is important to understand that the data we use is provided without warranty. While we strive to offer accurate and up-to-date information, the displayed information may not always match that on the trains. Due to technical limitations, it is not possible to replicate the exact data from the trains.

Please enjoy the app and remember to consult official sources for the most accurate information.

## Exciting Features

- Emulation of various displays from German railway companies based on real-time data from the db-rest API.
- Displays the next stop, delays, and the current status of the train at the station.
- Shows connections for each stop (currently available in the S-Bahn München & U-Bahn München (alpha) simulations).
- Live tracking to display the train’s location on a map (with current estimated speed in km/h)

## Supported Railway Systems

- Bayerische Regiobahn
- S-Bahn München
- U-Bahn München (alpha): This feature is still in its early stages, but you can already experience a glimpse of the Munich U-Bahn system DFI.

## Upcoming Features

- Bayerische Regionbahn: show connections for each stop
- Translating the user interface to English.
- ICE Innenanzeiger
- Departure & Arrival Board

## Getting Started

This project is developed using Next.js and Tailwind CSS. Ready to dive in? We are too!

## Requirements

- Node.js
- A package manager such as yarn or npm
- db-rest

## Installation Instructions

First, install all dependencies for the frontend:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

## API Setup

This project utilizes the db-rest API to retrieve data for current departures and trains. A public instance is available at v6.db.transport.rest.

Create an .env file by copying the example file:

```bash
cp .env.example .env
```

Set the `API_INSTANCE` variable to the host name where db-rest is running, for example, v6.db.transport.rest:

```bash
API_INSTANCE=v6.db.transport.rest # or another appropriate hostname
```

## Running the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Large portions of the authentication system logic in this project are derived from a tutorial. The original code is provided under the MIT License and can be found in [this repository](https://github.com/ugurkellecioglu/next-14-lucia-auth-postgresql-drizzle-typescript-example).

## Contributions Are Welcome

We welcome contributions of any kind. Feel free to report issues or submit a pull request. We are eager to hear from you!
