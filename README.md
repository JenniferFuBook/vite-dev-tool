This is a Chrome browser extension that serves the UI Vite app from your local machine 
while you're browsing a cloud deployment.

To get started, go to chrome://extensions on your Chrome browser. Turn on the Developer Mode switch 
located in the top right corner.

Click on Load unpacked and select the directory of this repository.

Execute following commands at domino/frontend/pipelines-ui-app: 
* yarn dev
* yarn build -- --watch

Go to the cloud deployment URL to debug the code from your local machine.