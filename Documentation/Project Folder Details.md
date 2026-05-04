#### **Dependencies to install (in this order)**



1. Download node.js using the install wizard: https://nodejs.org/en/download
2. npm install -g expo-cli eas-cli



##### **Command Used to Create Project:** npx create-expo-app NightlifeApp --template blank-typescript





**Default Project Files**
App.tsx — the entry point of your app, the first screen that loads

index.ts — registers the app with React Native, you won't touch this

app.json — your app's configuration (name, icon, version, permissions, etc.)

tsconfig.json — TypeScript configuration

package.json — lists all your app's dependencies and scripts

package-lock.json — auto-generated lockfile, don't edit this manually

assets/ — images, fonts, icons

node\_modules/ — all your installed libraries, auto-generated, never edit anything in here





#### **How to run live preview**



1. Run: ***npx expo start*** in your terminal inside the project folder to start the server hosting the preview
2. Download/open the **Expo Go** app on your phone
3. Scan the QR code from the terminal on your phone



#### **Project Folder Structure**

NightlifeMobileApp/

├── app/

│   ├── (tabs)/

│   │   ├── \_layout.tsx

│   │   └── index.tsx

│   ├── venue/

├── assets/

│   ├── adaptive-icon.png

│   ├── favicon.png

│   ├── icon.png

│   └── splash-icon.png

├── components/

├── Documentation/

├── services/

├── .gitignore

├── app.json

├── package.json

├── package-lock.json

├── README.md

└── tsconfig.json

