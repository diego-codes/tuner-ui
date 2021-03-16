# Tuner web UI

This web application recommends songs to users based on their ratings.

## How to run locally

### Requirements

To run this server locally, you will need Node.js version 15+ and npm version 7+ installed.

### Install dependencies

Install dependencies with the following command:

```
npm install
```

### Set the API URL environment variable

This application needs to know where to find the API server. To configure this, create an `.env.local` file at the root of the project's directory and add:

```
NEXT_PUBLIC_API_URL= # Server location. It can be locally running at http://localhost:8000 or the live version at https://dherna20-tuner.herokuapp.com
```

### Run the application

Finally, you can run the application with the following command:

```
npm run dev
```

It will take a few seconds to boot up, but once it is ready, you can access it via your browser at http://localhost:3000.
