import React, { Component } from 'react';
import './tutorial.css';

class Tutorial extends Component {
  render() {
    return (
      <div>
        <h1>Representation is the essence of programming</h1>
        <p>Let me give you some background on web development and why I believe React is the best tool to represent (and therefore program) user interfaces, hence UI.</p>
        <p>I will show you developing UI works on the web and how by default we lack a suitablle ability to represent dynamic UI.</p>
        <p>First, lets take a step back from UI and think about how we might get some coffee from a barrista.</p>
        <p>One method would be to declare what we want, another way would to issue imperatives so we could control what the barrista does</p>

        <p>Declarative Order - "I would like a flat white with two sugars"</p>
        <p>Imperative Order</p>
        <ol>
          <li>Walk three steps to your left to the expresso machine</li>
          <li>If the expresso machine is not turned on turn it on</li>
          <li>Grind the coffee beans</li>
          <li>If you don't have any barrista milk go and buy some</li>
          <li>Combine the milk with the coffee in a cup</li>
          <li>Add two sugars and mix it</li>
          <li>Pour it into a cup</li>
          <li>Bring me the cup!</li>
        </ol>
        <p>Now imagine if the waiter only spoke Javascript</p>
        <p>Declarative Code - (what represent what you want)</p>
        <pre>{`[{ingredient: "milk"}, {ingredient: "sugar"}]`}</pre>
        <p>Imperative Code - (how to do it)</p>
        <pre>{`barrista.walk(4, '90deg');`}</pre>
        <img style={{height: 300, width: 300}} src="/tutorial/declarativeUIAnalogy.jpg" alt="describe order with JS objects" />

        <h2>Building interfaces with a browser</h2>
        <p>When the web began user interfaces were static and were completely determined by the HTML string returned by a server.</p>

        <img style={{display: 'block', height: 300, width: 500}} alt="HTML Hello World" src="/tutorial/HTMLHelloWorld.png" />
        <img alt="HTML Hello UI" src="/tutorial/helloWorldBrowser.png" />

        <p>Javascript was introduced to allow programmers to be able to update a web page (document) and make it interactive. We are given a document object we could use to make updates to the webpage.</p>
        <p>To make updates we have to issue commands with the document object and we lost the ability to represent the UI we wanted, which made development complex.</p>
        <p>In the video below I log the document object and show how you can use it to update the web page. Note that console.log shows a string representation of the document whereas console.dir shows it as an object.</p>
        <p><strong>Notice how we use the className property instead of class with dom elements. This is because a dom element is a javascript object and class is a reserved keyword</strong></p>

        <video style={{height: 500, width: 500}} controls={true}>
          <source type="video/mp4" src="/tutorial/interactingWithTheDOM.mov" />
        </video>


        <p>Imagine you are building an notifications app which has three states.</p>
        <ol>
          <li>When there is no notifications we just show a bell</li>
          <li>When there is a notification show a badge with the number of notifications</li>
          <li>When there is over 99 notifications show +99 and fire to indicate they really need to sort them out</li>
        </ol>

        <img style={{height: 300, width: 400}} src="/tutorial/notificationStates.png" alt="notification states" />

        <p>To handle our use cases on the server return the appropriate HTML with a condition for each use case.</p>

        <img style={{height: 400, width: 500}} src="/tutorial/handleNotificationsUseCaseOnTheServer.png" alt="notification server" />

        <p>However, if users want to see their notification UI update without refreshing the page we will need to use JS to update the UI using the document object.</p>

        <p>Because we are working with an existing web page we need to be able to handle transitioning between all of our use cases</p>

        <p>For example, if they start with no notfication when one arrives we need to send a command to add a badge, if they get to 100 then add fire and then remove the badge etc</p>

        <img style={{height: 400, width: 500}} src="/tutorial/modellingTransitions.png" alt="modelling transitions" />

        <img style={{height: 400, width: 500}} src="/tutorial/commandNotifications.png" alt="command" />
        
        <p>With React we can get back modelling UI per use case</p>

        <img style={{height: 400, width: 500}} src="/tutorial/creactJSXStyle.png" alt="jsx style" />
        
        <p>How can we write "HTML" tags in Javascript? It gets transformed into function calls and those functions return objects that represent the dom nodes you want <a href="https://reactjs.org/docs/introducing-jsx.html#jsx-represents-objects">JSX Represents objects</a></p>
        
        <img style={{height: 400, width: 900}} src="/tutorial/babel.png" alt="babel" />

        <p>This is the model of programming with React</p>
        <img style={{height: 400, width: 500}} src="/tutorial/reactModel.png" alt="babel" />

        <p style={{marginTop: 100}}>Credit Steven Lusher at the end https://www.youtube.com/watch?v=rI0GQc__0SM</p>

      </div>
    );
  }
}

export default Tutorial;

// <p>React allows us to declare the interfaces we want based on the data our application has rather than workout all of the commands we need to update the interface.</p>
//<p>If we take a step back from development </p>