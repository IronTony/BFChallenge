# Challenge  <!-- omit in toc -->

# Table of Contents <!-- omit in toc -->

- [Environment Setup :globe_with_meridians:](#environment-setup-globe_with_meridians)
- [Scripts :wrench:](#scripts-wrench)
  - [Run the app](#run-the-app)
  - [Generate app icons](#generate-app-icons)
  - [Generate Splashscreen](#generate-splashscreen)
  - [Setup iOS](#setup-ios)
  - [Typescript (optional)](#typescript-optional)
- [Roadmap :running:](#roadmap-running)
- [License :scroll:](#license-scroll)

---

## Environment Setup :globe_with_meridians:

`React Native Starter App` environments variables management is based on a custom script and the `app.json` config file.

Define your environment variables inside `app.json` inside the `environments` object under the desired
environment key (such as `development`, `staging` or `production`) and then run the app for the required env
using one of the available run scripts (e.g. `ios:dev`).

If you want to use IDEs such Xcode or Android Studio, you have to set up the ENV variables with these commands:

- `yarn env:dev`, to set the development ENV variables

---

## Scripts :wrench:

### Run the app

To run the app use one of the following scripts:

- `yarn android:dev`, to start the app on Android with the `development` environment variables.

- `yarn ios:dev`, to start the app on iOS with the `development` environment variables.

### Generate app icons

To setup the app icons:

- create an image at least `1024x1024px`
- place it under `/assets` folder as `icon.png`
- run

```sh
yarn assets:icons
```

### Generate Splashscreen

To setup the app splashscreen:

- create an image at least `1242x2208px`
- place it under `/assets` folder as `splashscreen.png`
- run

```sh
yarn assets:splashscreen
```

### Setup iOS

To setup the environment to run on iOS, run

```sh
yarn setup:ios
```

this will run `cocoapods` to install all the required dependencies.

### Typescript (optional)

The use of Typescript in the project is not mandatory.
You can just write all your code using plain Javascript.
Our hint is to create all files as below:

- files with logic and Views with `tsx` extension
- files with Stylesheet and others with `ts` extension

To enable full Typescript checks, just open the `tsconfig.json` file and chage as below:<br/>

```
"noImplicitAny": true, // set to true to be explicit and declare all types now<br/>
"strict": true,  // enable it to use fully Typescript set of invasive rules<br/>
```

_REMEMBER: the entry point file in the root of the project MUST be index.js_

---

## Roadmap :running:

✅ Initial Setup<br/>
✅ `react-native-splashscreen` (https://github.com/crazycodeboy/react-native-splash-screen)<br/>
✅ `react-native-toolbox` to generate Splashscreen and icons automagically (https://github.com/panz3r/react-native-toolbox)<br/>
✅ Standard tree folders structure<br/>
✅ `React-Native 0.69`<br/>
✅ `redux-toolkit`<br/>
✅ `redux-persist` (https://github.com/rt2zz/redux-persist)<br/>
✅ `React Native Debugger`<br/>
✅ `redux-saga`<br/>
✅ `i18next`<br/>
✅ `react-navigation v6` ❤️<br/>
✅ `UIKitten v5`<br />
✅ `Env` variables selection experimental way ⚗️⚗️⚗️<br />
✅ Typescript (optional use. Read the DOC above)<br />

---

## License :scroll:

Licensed under [Mozilla Public License Version 2.0](LICENSE)
