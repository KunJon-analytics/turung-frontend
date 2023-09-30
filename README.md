# Turung Frontend

Welcome to the Turung frontend app repository! This application is a part of the Turung project, which aims to empower offline businesses with digital smart stores, enabling them to sell online, accept crypto and fiat payments, and process crypto-fiat liquidity through a decentralized payment system called Turupay.

## About Turung

Over 80% of offline businesses do not have an online presence. Turung is on a mission to change that by providing businesses with the tools they need to thrive in the digital age. With Turung, businesses can create smart online stores and join the world of e-commerce.

### Turupay - Decentralized Payment System

Turupay is a decentralized payment system that simplifies the process of converting crypto assets to fiat currencies. It achieves this by condensing multiple transactions into a single efficient transaction, reducing both time and costs. With the abundance of over 10,000 crypto assets across various blockchains, Turupay aims to become the fastest-growing peer-to-peer platform for providing fiat liquidity for crypto purchases within the blockchain space.

All transactions within the Turung ecosystem will be powered by Turu transaction tokens (TXPR), ensuring seamless and secure interactions between buyers and sellers.

## Getting Started

Follow these instructions to set up and run the Turung frontend app locally on your machine.

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js: [Download and install Node.js](https://nodejs.org/)
- Yarn (optional): [Install Yarn](https://yarnpkg.com/getting-started/install)

### Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/Shinks007/TurungFE.git
   ```

2. Navigate to the project directory:

   ```bash
   cd TurungFE
   ```

3. Install the project dependencies:

   ```bash
   npm install
   # Or if you prefer Yarn
   yarn install
   ```

4. Fill in the environment variables:

   Copy the `.env.example` file in the root of the application to create a `.env.local` file. You'll need to set values for the following environment variables:

   - `NODEMAILER_EMAIL`: Your email address for configuring Nodemailer.
   - `NODEMAILER_PW`: Your [Google App password](https://myaccount.google.com/apppasswords) for Nodemailer. This is required if you are using a Gmail account for sending emails.
   - `BASE_URL`: The base url for the website.

### Running the App

To run the Turung frontend app locally, use the following command:

```bash
npm run dev
# Or if you prefer Yarn
yarn dev
```

The app will be accessible at `http://localhost:3000` in your web browser.

## Contact

If you have any questions or need further assistance, feel free to contact us at [info@turung.io](mailto:info@turung.io).
