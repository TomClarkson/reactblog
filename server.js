const express = require('express');
const server = express();

server.get('/', (request, response) => {
  response.send(`
    <html>
      <body>
        <h1 class="myHeader">Hello World</h1>
      </body>
    </html>
  `);
});

const makeNotificationsHTML = (count) => {
  if (count === 0) {
    return '<div class="notifications-icon"></div>';
  } 
  if(count > 99) {
    return `
      <div class="notifications-icon">
        <img class="bell-image" src="/bell.png" />
        <img class="fire-image" src="/fire.png" />
        <span class="badge">99+</span>
      </div>
    `;
  }
  
  return `
    <div class="notifications-icon">
      <img class="bell-image" src="/bell.png" />
      <span class="badge">${count}</span>
    </div>
  `;
};


server.get('/notifications', (request, response) => {
  const countFromDatabase = 50;

  response.send(`
    <html>
      <body>
        ${makeNotificationsHTML(countFromDatabase)}
      </body>
    </html>
  `);
});

server.listen(3000);