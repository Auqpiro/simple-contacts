# Contact List

View demo: [deployed version](https://simple-contacts.vercel.app/)

### Description

SPA app for maintaining a contact

## Features

- adaptive design
- full-fledged CRUD data operations
- interaction only through receiving/sending data from the server

### Setup
```bash
git clone git@github.com:Auqpiro/simple-contacts.git
npm ci
```

### Use case in development

Running local build
```bash
npm run build
```
Launch local app
```bash
npm run start
```
### Use case in deploy

To deploy to any PaaS use the build and start commands
```bash
npm run build
npm run start
```

Project uses my own [json-server](https://github.com/Auqpiro/demo-json-api) for API route.

```bash
./src/api/index.ts
```
Set this baseURL in axios instance with your own route in your deployment
