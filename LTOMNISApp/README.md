This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.

<!-- LETS BEGIN (Zakariya Veasy) -->

# Global Constants

## Styling

Global styles are defined in src/assets/constants/colors.js and imported into components as needed. The styles object in each component defines specific styles for that component.

## Navigation

Custom bottom tab navigation is implemented using createBottomTabNavigator from @react-navigation/bottom-tabs. The navigation state is managed to show or hide the tab bar on certain screens.

## Redux Integration

Redux is used for managing global state, such as the visibility of the tab bar. The tabBarSlice.js defines actions and reducers for showing and hiding the tab bar.

## Types

# Main Application

Overview: OMNIS is a financial platform designed for the unbanked, underbanked, and immigrants. It provides access to capital and opportunities to build credit. The platform serves both Direct-to-Consumer (D2C) and Business-to-Business (B2B) audiences, particularly financial institutions offering new loan packages.

## Quick Start Guide

- bash
- Copy code
- git clone

  ```git clone https://github.com/Sinndev/LTOMNIS.git

  ```

- Install dependencies:
- Also make sure you have all of Key Features (npm install or npm i)
- Install Xcode (Mac)
- Import Pods
  - Setup Xcode (for Mac users):
    - Install Xcode from the Apple Store.
    - Import necessary Pods. For more information, visit the CocoaPods website or contact the founders/management.
- for more information on setup visit or contact founders/management (URL)
- Start the React Native server:
  - npm start
  - Make sure the backend server is on as well

## Prerequisites

- Node.js: Download and install from Node.js website.
- npm: Comes with Node.js.
- React Native Development Environment: Set up according to the React Native documentation.

## App.tsx

This is the main file and is used to

## Tabs.tsx

This React Native application implements a custom bottom tab navigator using @react-navigation/bottom-tabs and @react-navigation/stack. The app includes various screens and a dynamic tab bar that adjusts its visibility based on the current screen. The project also integrates Redux for state management and uses React Native Vector Icons for enhanced UI elements.

### Key Features

- Custom Bottom Tab Navigator
- Dynamic Tab Bar Visibility
- Integration with Redux for State Management
- Use of React Native Vector Icons
- Setup and Installation
- Prerequisites
- Node.js
- npm
- React Native development environment
- Installation
- Clone the repository:
