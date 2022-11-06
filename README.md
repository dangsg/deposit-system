# deposit-system

1. How to start services on local:
Run the following commands step by step:
- npm install: Install dependencies
- ./build.sh: Build docker image of node project
- docker-compose up: Start MongoDB and node project

2. How to test APIs:

- Create user: POST localhost:3000/api/user/register
Request body: {
  username: string,
  password: string
}

- Login: POST localhost:3000/api/user/login
Request header: {
  Authorization: Bearer <JWT claimed from Login API>
}
Request body: {
  username: string,
  password: string
}

- Deposit: POST localhost:3000/api/balance/deposit
Request header: {
  Authorization: Bearer <JWT claimed from Login API>
}
Request body: {
  amount: number
}

- Withdraw: POST localhost:3000/api/balance/withdraw
Request body: {
  amount: number
}
