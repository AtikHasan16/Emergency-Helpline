# 6. Answering the following questions one by one:

### Q: What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

### _Answer:_

getElementById, getElementsByClassName, and querySelector / querySelectorAll all these are the common DOM (document object model) method of JavaScript.

**getElementById()**: this particular method is for getting the access of an element ID given in the HTML element. which is unique to a single element on the entire html document.
**getElementByClassName()**: This particular method returns a HTML Collection list which is a array-like object of all that have the same class name in the entire HTML document page.
**queySelector():** This method selects and and supports the all CSS selector. That means we can use the same selector we are already known in CSS, which makes finding element with more flexibility. But it selects the first match only of a given selector.
**querySelectorAll()**: This particular code returns a NodeList which is an Array-like object. Unlike querySelector() it select and return all the elements that match the given selector. We can iterate and looped through to get specific selector.

### How do you create and insert a new element into the DOM?

### _Answer_:

To create and insert a new element into the DOM: at first, we have to access the specific element by getElementBy() where we want to store newly created DOM element. Then create we have create a element in JavaScript through document.createElement('Specific tagName'). We can add anything inside this newly created element through innerText or innerHTML. then lastly, we have to append this new element into the selected element though selectedElement.appendChild(newElement). That is one of the common process to create and insert a new element into the DOM.

### What is Event Bubbling and how does it work?

### What is Event Delegation in JavaScript? Why is it useful?

### What is the difference between preventDefault() and stopPropagation() methods?
