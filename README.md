# Currency Converter App

## Description
This is a simple currency converter application that allows users to convert amounts between different currencies. The app fetches real-time exchange rates and provides an intuitive interface for users to input their desired amount and select the currencies for conversion.

## Features
- User-friendly interface for currency conversion
- Real-time exchange rates fetched from an external API
- Input fields for amount and currency selection
- Responsive design for various screen sizes

## Project Structure
```
currency-converter-app
├── src
│   ├── components
│   │   └── CurrencyConverter.tsx  # Component for handling currency conversion logic
│   ├── screens
│   │   └── HomeScreen.tsx          # Main screen rendering the CurrencyConverter component
│   ├── services
│   │   └── api.ts                  # API calls for fetching currency exchange rates
│   ├── styles
│   │   └── styles.ts               # Styling for the application
│   └── utils
│       └── helpers.ts              # Utility functions for formatting and validation
├── assets
│   └── fonts                       # Custom fonts for the application
├── App.tsx                        # Entry point of the application
├── package.json                   # npm configuration file
├── tsconfig.json                  # TypeScript configuration file
└── README.md                      # Documentation for the project
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd currency-converter-app
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage
To start the application, run:
```
npm start
```
This will launch the app in your default web browser.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License
This project is licensed under the MIT License.