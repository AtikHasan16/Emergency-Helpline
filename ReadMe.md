# 6. Answering the following questions one by one:

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

### _Answer:_

getElementById, getElementsByClassName, and querySelector / querySelectorAll all these are the common DOM (document object model) method of JavaScript.

_getElementById():_ this particular method is for getting the access of an element ID given in the HTML element. which is unique to a single element on the entire html document.

_getElementByClassName():_ This particular method returns the HTML Collection which is an array-like object. It is used to get access of all that have the same class name in the entire HTML document page. An HTMLCollection updates live with the DOM.

_queySelector():_ This method selects and supports the all CSS selector. That means we can use the same selector we are already known in CSS, which makes finding element with more flexibility. It returns the NodeList but it selects the first match only of a given selector.

_querySelectorAll():_ This particular code returns a NodeList which is an Array-like object. Unlike querySelector() it select and return all the elements that match the given selector. We can iterate this method by forEach() to get specific selector.

### 2. How do you create and insert a new element into the DOM?

### _Answer_:

To create and insert a new element into the DOM: at first, we have to access the specific element by getElementBy() where we will be storing newly created DOM element. Then we have to create an element in JavaScript through document.createElement('Specific tagName'). We can add anything inside this newly created element through innerText or innerHTML. then lastly, we have to append this new element into the selected element though selectedElement.appendChild(newElement). That is one of the common process to create and insert a new element into the DOM.

### 3. What is Event Bubbling and how does it work?

### _Answer_:

Event bubbling is one of the common concept of JavaScript DOM. suppose we have a div inside the body element and a button inside that div, if we target the button and want to touch the button, the button will be touched along with it's parent div element and div's parent, body element. It is like when an inner most child is touched, at first it touch the child and sequently touch the parent element like bubbling up from the child element up to the most parent element. That's how the event bubbling works. Though this concept is very useful but sometimes it can cause problems in the DOM if an event triggers an unwanted action on a parent element.

### 4. What is Event Delegation in JavaScript? Why is it useful?

### _Answer_:

Event Delegation is a technique that hold an Event Bubbling to handle event for multiple elements in single event listener. Event delegation is used to trigger a child element by targeting it's parent element. If a event handler is used on a parent element, the whole parent can be manipulated just by targeting desired child. Unlike event bubbling, we do not have to select each element one by one. if we want manipulate particular element inside a parent element we can do it just by locating child through condition matches to desired element. It reduces the memory, very sufficient for large number of event handling and it works and reusable to outside and newly created element by DOM.

### 5. What is the difference between preventDefault() and stopPropagation() methods?

### _Answer_:

These are the methods for handling or control JavaScript event behavior. But they have their own usage. Explaining one by one below:
_preventDefault()_ : This method is used for preventing the default behavior of browser. For instance, there are few action like form submission reloads whole document after each action but preventDefault function stops this behavior of it. It prevents default behavior of few others like link redirect and right-click context menu.

_stopPropagation()_: This method is used to stops the event action from bubbling or capturing further forward and backward to the DOM tree. usually when an event propagates in an element, it goes through a capturing and bubbling phase. stopPropagation() halt the propagation at the current state and prevents receiving event it's parent and child element. For example, when a bubbling or capturing happens we do not have the control over it, but stopPropagation() gives us this opportunity to get control over it.
