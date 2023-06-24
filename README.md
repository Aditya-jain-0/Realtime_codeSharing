# Real-Time Code Sharing Application
A Real-Time Code Sharing application using Node.js, React.js, and Socket.IO. This application allows multiple users to share and collaborate on code in real-time. Users can create, update, delete, and copy-paste code snippets simultaneously.

Dependencies:

codemirror: Version 5.65.2
express: Version 4.18.2
react: Version 18.2.0
react-avatar: Version 5.0.3
react-dom: Version 18.2.0
react-hot-toast: Version 2.4.1
react-router-dom: Version 6.13.0
react-scripts: Version 5.0.1
socket.io: Version 4.6.2
socket.io-client: Version 4.6.2
uuid: Version 9.0.0
Issue:
Currently, there is an error where multiple connections are being displayed inside the editor page for a single user. This issue needs to be resolved to ensure that each user has a single connection displayed.

The above Issue is fixed by Removing react Strictmode in react 18