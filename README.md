# Deliveries frontend app

Built with nodejs, Nextjs 13, and Ant Design
This is only frontend of Deliveries app. You must get backend part to make it work.
[Deliveries](https://github.com/aldis-sarja/deliveries.git)

## Installation

Clone, install, and run backend part
[Deliveries](https://github.com/aldis-sarja/deliveries.git)

Install frontend:

```bash
git clone https://github.com/aldis-sarja/deliveries-frontend.git
cd deliveries-frontend
npm install
```

Rename the file `.env.local.example` to `.env.local`, or make a copy:

```bash
cp .env.local.example .env.local
```

Write down Your backend address:

```dosini
NEXT_PUBLIC_BACKEND_URL=<address:port/api/v1>
```

Run:

```bash
npm run dev
```
or
```bash
npm run build
npm start
```

## Usage

Point your browser to address `http://localhost:3000/`
