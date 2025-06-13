# helpdesk-chat

Basic ChatGPT UI — built with modern standalone Angular and a simple Express backend.

## What it does

Ask a question, get a response from ChatGPT. Simple setup, no bloated stack. You type a prompt, it sends it to the backend, the backend streams the answer from OpenAI and returns it to the frontend.

## Stack

- Angular 18 (standalone, no module bloat)
- Express.js (basic setup)
- OpenAI API
- Node.js 22+
- No fancy state management, just `ngModel` and a service

## Project Structure

helpdesk-chat/

├── client/ # Angular frontend

├── server/ # Express backend

└── .env # Holds your OpenAI key (add manually)

## Setup

### 1. Clone and install

bash

git clone https://github.com/YOUR_USERNAME/helpdesk-chat.git
cd helpdesk-chat

### 2. Server setup

cd server
npm install
echo "OPENAI_API_KEY=your-key-here" > .env
node index.js

### 3. Client setup

cd ../client
npm install
ng serve

Then visit: http://localhost:4200

Notes

    Requires an OpenAI API key. Put it in server/.env.

    Angular uses proxy config so http://localhost:4200/api/chat routes to the backend.

    Responses stream to the browser — no reloads, no spinning wheels, just answers.
