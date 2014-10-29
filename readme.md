![enter image description here](https://pbs.twimg.com/media/B1HrXyKCEAEg8zh.jpg)
#First socket.io app

Elena and I spent the afternoon working on a cpu monitor. We used a npm module called os-monitor to create a 'readable stream' and then piped this down to the browser through a socket. You can't really see it here but as you open more applications on the computer the node service is running on, the bar goes up and down reporting CPU usage.

#node

We both talked about how very different building this type of app was. It is event driven. Each part of the app is a living thing that has it's own timeline or rhythm. Events in one process trigger events in another. This also wetted my appetite for some real data streams.