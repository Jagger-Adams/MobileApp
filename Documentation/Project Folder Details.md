# **Dependencies to Install (in this order)**



1. Download node.js using the install wizard: https://nodejs.org/en/download
2. Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
3. npm install -g expo-cli eas-cli



# **Initial Clone/Setup**

1. git clone https://github.com/Jagger-Adams/MobileApp.git
2. cd MobileApp
3. npm install



## **Command Used to Create Project:**

**(You don't need to do this)**

npx create-expo-app NightlifeApp --template blank-typescript





## **Default Project Files**

App.tsx — the entry point of your app, the first screen that loads

index.ts — registers the app with React Native, you won't touch this

app.json — your app's configuration (name, icon, version, permissions, etc.)

tsconfig.json — TypeScript configuration

package.json — lists all your app's dependencies and scripts

package-lock.json — auto-generated lockfile, don't edit this manually

assets/ — images, fonts, icons

node\_modules/ — all your installed libraries, auto-generated, never edit anything in here





# **How to Run Live Preview**



1. Run: ***npx expo start*** in your terminal inside the project folder to start the server hosting the preview
2. Download/open the **Expo Go** app on your phone
3. Scan the QR code from the terminal on your phone

(phone and computer must be on same network)



# **Project Folder Structure**

NightlifeMobileApp/

├── app/

│   ├── (tabs)/

│   │   ├── \_layout.tsx

│   │   └── index.tsx

│   ├── venue/

├── assets/

├── components/

├── Documentation/

├── services/

├── .gitignore

├── app.json

├── package.json

├── package-lock.json

├── README.md

└── tsconfig.json

