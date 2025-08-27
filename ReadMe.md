# 6. Answering the following questions one by one:

### What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

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

### _Answer_:

Event bubbling is one of the common concept of JavaScript DOM. suppose we have a div inside the body element and a button inside that div, if we target the button and want to touch the button, the button will be touched along with it's parent div element and div's parent, body element. It is like when an inner most child is touched, at first it touch the child and sequently touch the parent element like bubbling up from the child element up to the most parent element. That's how the event bubbling works. Though this concept is very useful but sometimes it can cause problems in the DOM.

### What is Event Delegation in JavaScript? Why is it useful?

Event Delegation is one of the most useful concept of JavaScript DOM. It is used for handling event very efficiently. specifically when working with large amount of elements or want to make dynamic events. Event delegation is used to trigger a child element by targeting it's parent element. If a event handler is used on a parent element, the whole parent can be manipulated just by targeting desired child. Unlike event bubbling, we do not have to select each element one by one. if we want manipulate particular element inside a parent element we can do it just by locating child through condition matches to desired element. It reduces the memory, very sufficient for large number of event handling and it works and reusable to outside and newly created element by DOM.

### What is the difference between preventDefault() and stopPropagation() methods?
