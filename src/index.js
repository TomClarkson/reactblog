import React from 'react';
import ReactDOM from 'react-dom';
import Tutorial from './Tutorial';

ReactDOM.render(<Tutorial />, document.getElementById('react-root'));

const makeNotificationsUIRepresentation = (count) => {
  if (count === 0) {
    return (
      <div className="notifications-icon"></div>
    );
  } 
  if(count > 99) {
    return (
      <div className="notifications-icon">
        <img className="bell-image" src="/bell.png" />
        <img className="fire-image" src="/fire.png" />
        <span className="badge">99+</span>
      </div>
    );
  }
  
  return (
    <div className="notifications-icon">
      <img className="bell-image" src="/bell.png" />
      <span className="badge">{count}</span>
    </div>
  );
};

// const notificationsElement = makeNotificationsUIRepresentation(101);

// ReactDOM.render(notificationsElement, document.getElementById('react-root'));

// setInterval(() => {
//   const max = 150;
//   const min = 0;
//   const count = Math.round( Math.random() * (max - min) + min );

//   const notificationsElement = makeNotificationsUIRepresentation(count);
//   ReactDOM.render(notificationsElement, document.getElementById('react-root'));
// }, 1000);
