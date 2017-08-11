Scout App Demo
====================

Based on TouchstoneJS App Bottstrap project.

## How to run it?

Be sure that you have installed `nodeJS`.

Open the current foler and fetch all dependency projects with:

	npm install

If something is missing, then you have to install it manually. For example `gulp`: `npm install gulp-cli -g` This will install gulp terminal tool on the current computer.

To build and preview locally, run `npm start`. It will build the app with browserify, and start a preview server at [localhost:8000](http://localhost:8000).

The source for the app is in the `/src` folder; the app will be built to `/www`.

## Use with Cordova

Here's how to get the Starter project running in a Cordova app, in the iOS Simulator. You'll need a Mac and XCode to follow this process. Check the [Cordova Docs](https://cordova.apache.org) for more information, and instructions on how to work with other platforms like Android.

### Getting set up

First, Install Cordova:

```
npm install -g cordova
```

Create a new Project:

```
cordova create Starter
```

Add your target platform:

```
cordova platform add ios
```

### Building and running the project

Build the `www` folder using the build script:

```
npm run build
```

Then prepare the cordova project:

```
cordova prepare
```

You can then open the XCode Project here: `platforms/ios/Starter.xcodeproj` and run it in the simulator or on a device.

To continuously build the source as you make changes, run:

```
npm run watch
```

For production use, you can strip debug code and minify the build:

```
npm run build:production
```

# License

Copyright (c) 2017 Emil Atanasov
