# Vite / Typescript / Tailwind - Chrome extension starter

## Introduction

This project is a React application built with TypeScript and managed with npm. It's structured to separate concerns, with different aspects of the application organized into their own directories.

## Directory Structure

- `components/`: Contains reusable UI components, such as buttons.
- `lib/`: Contains utility functions and classes, including environment configuration and storage management.
- `public/`: Contains static assets like icons.
- `src/`: Contains the source code of the application. It's divided into several subdirectories:
  - `assets/`: Contains additional static assets.
  - `background/`: Contains scripts that run in the background of the application.
  - `content-scripts/`: Contains scripts that modify the web pages loaded in the browser.
  - `popup/`: Contains the code for the popup UI of the application.
- `vite-env.d.ts`: Contains TypeScript definitions for Vite.

## Setup

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Copy `.env.example` to `.env` and fill in the necessary environment variables.
4. Run `npm start` to start the development server.

## Building

To build the project, run `npm run build`.

## Contributing

Contributions are welcome. Please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
