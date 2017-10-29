# MinTheatre API

>Backend Proxy for client-side SPA [MinTheatre](https://github.com/cnsheafe/min-theatre).

## Overview

Acts as a proxy for MinTheatre since the Youtube API requires a key. Returns custom results for search queries.

## Software Architecture

The codebase utilizes a clear "skinny controller"-"fat service" architecture for delegating duties when handling requests. The controllers or routes are designed to be skinny and only handle request validation. The services handle most of the processing and secondary network requests. When constructed in this manner the code is more organized, easier to maintain, and the tests are simpler to create and change.

## Technology Stack

### Node/Express

Used to create a quick and simple HTTP server for simple CRUD requests. Interfaces easily with Heroku.

### Fetch API

Uses a NPM library for fetch for simple requests.

## Development Tools

- Jest
- Nodemon
- Postman
- TravisCI

## Build Setup

```bash
# install dependencies
npm install

# Start the server
node server.js

# Run tests
npm test
```