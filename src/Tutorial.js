import React, { Component } from 'react';
import './tutorial.css';

class Tutorial extends Component {
  render() {
    return (
      <div>
        <h1>Representation is the essence of programming</h1>
        <p>As web developers, we want the ability to update a web page (document) for each state of our application, 
        e.g., when a user types something into a search box, we might update the document with a loading indicator and later update the document with the search results.
        </p>
        <p>When a browser loads a page it gives us a document object, which is a Javascript representation of the entire document.
        To update the page we need to update the properties of the document object.
        </p>
        
        <p>However, by using the document object directly, we must program like a control freak and issue imperatives (i.e., commands) for every update we want.</p>

        <p>React is a Javascript library which gives us a declarative model of programming, where we don't issue any update commands, instead we just represent the document we want for each state.
            React handles all of the document update commands on our behalf.
        </p>

        <h2>Imperative vs Declarative</h2>

        <p>Let's take a step back from the web for a moment, and contrast the declarative and imperative approaches.</p>
        <p>Imagine we're at a cafe and ordering a coffee from a barista.</p>

        <img alt="barista" style={{height: 300, width: 400}} src="/tutorial/barista.png" alt="notification states" />

        <img alt="barista" style={{height: 300, width: 400}} src="/tutorial/coffee.png" alt="notification states" />

        <p>Imperative Order - (Control what the barista does)</p>
        <ol>
          <li>Walk three steps left to the espresso machine</li>
          <li>If the espresso machine is off, turn it on</li>
          <li>Grind the coffee beans</li>
          <li>If trim milk is not available, go and buy some</li>
          <li>Combine the trim milk with the coffee in a cup</li>
          <li>Bring me the cup!</li>
        </ol>
        <p>Declarative Order - (Specify what we want)</p>
        <ol>
          <li>"I would like a flat white with trim milk"</li>
        </ol>
        <p>Now imagine if the barista doesn't speak English, only Javascript</p>
        <p>Imperative Code - (how to do it)</p>
        <pre>{`
          barista.walk(4, '90deg');
          if(! barista.detectMachineOn()) {
            barista.turnOnMachine();
          }
          const coffee = barista.grindCoffee();
          let milk = barista.getMilkFromCupboard('trim');
          if(! milk) {
            milk = barista.buyMilk('trim');
          }
          barista.combineIntoCup(coffee, milk);
          barrista.walkWithCup(4, '180deg');
        `}</pre>
        <p>Declarative Code - (Represent what you want)</p>
        <pre>{`[{ingredient: "milk", type: "trim"}, {ingredient: "coffee"}]`}</pre>
        <img style={{height: 300, width: 300}} src="/tutorial/declarativeUIAnalogy.jpg" alt="describe order with JS objects" />
        <p>The key insight is that you get the same outcome with imperative or declarative programming, however with declarative programming, <strong>you surrender control.</strong></p>

        <h2>Programming with HTML is declarative</h2>
        <img style={{display: 'block', height: 300, width: 500}} alt="HTML Hello World" src="/tutorial/html.png" />

        <p>To load a web page, browsers parse the HTML text returned from a server. Notice there are no commands issued to determine how the page is loaded, we just describe the page we want with HTML.</p>

        <img style={{display: 'block', height: 300, width: 500}} alt="HTML Hello World" src="/tutorial/HTMLHelloWorld.png" />
        <img alt="HTML Hello UI" src="/tutorial/helloWorldBrowser.png" />

        <h2>Programming with the document is imperative</h2>

        <p>Let's take a look at the document object</p>

        <p>In the video below I log the document object and show how you can use it to update the web page. Note that console.log shows a string representation of the document whereas console.dir shows it as an object.</p>
        <p>Notice how the h1 element has a className property (as opposed to class property that HTML uses). Remember, <strong>dom elements are javascript objects</strong> and class is a reserved keyword</p>

        <video style={{height: 500, width: 500}} controls={true}>
          <source type="video/mp4" src="/tutorial/interactingWithTheDOM.mov" />
        </video>

        <h2>Imperative vs Declarative in action</h2>

        <p>Imagine you are building an notifications app which has three states.</p>
        <ol>
          <li>When there is no notifications we just show a bell</li>
          <li>When there is a notification show a badge with the number of notifications</li>
          <li>When there is over 99 notifications show +99 and fire to indicate they really need to sort them out</li>
        </ol>

        <img style={{height: 300, width: 400}} src="/tutorial/notificationStates.png" alt="notification states" />

        <h2>Rendering Server side is so pure</h2>

        <pre>{`(data) => "<html..."`}</pre>

        <p>You can reason about server side rendering as a function that takes data from our database and returns the html representation of our document</p>

        <img style={{height: 400, width: 500}} src="/tutorial/handleNotificationsUseCaseOnTheServer.png" alt="notification server" />

        <p>Notice how we only need condition for each use case. 
        In programming we say that a function is pure when where the return value is only determined by its input values. 
        <pre>{`makeNotificationsHTML`}</pre> is pure as the HTML string it returns is determined solely by the count argument. 
        This makes it really easy to test, we simply can call the function with a count and assert that we got the HTML we expect.</p>

        <pre>{`expect(makeNotificationsHTML(0)).toEqual('div class="notifications-icon"></div>')`}</pre>
          
        <h2>In the browser</h2>

        <p>If users want to see their notifications display update without refreshing the page we will have to update the DOM.</p>

        <p>On the server we have the luxury of starting fresh and return new html text for every request.</p>

        <p>However, in the browser we already have an existing document so our code needs to be able to exectute the right commands to transition between all of our use cases.</p>

        <p>For example, if they start with no notfication when one arrives we need to send a command to add a badge, and if they get to 100 then add fire and then remove the badge etc</p>

        <img style={{height: 400, width: 500}} src="/tutorial/modellingTransitions.png" alt="modelling transitions" />

        <p>See below how the imperative code causes complexity to rise exponentially. Notice <pre>{`renderNotificationIcon`}</pre> doesn't return a value so we can't test the update function. Also it relies on the existing document, not just the count argument so it is impure.</p>

        <img style={{height: 400, width: 500}} src="/tutorial/commandNotifications.png" alt="command" />

        <h2>React to the rescue</h2>
        <p>With React we write declarative code and just like on the server we only need one condition use case</p>

        <img style={{height: 400, width: 500}} src="/tutorial/reactJSXStyle.png" alt="jsx style" />
        
        <p></p>

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