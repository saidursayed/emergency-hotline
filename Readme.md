1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
Answer: The difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll

getElementById - Selects only one element (because the id is unique on the page). It always returns a single element object(If that id is not found, then null is returned).

getElementsByClassName - Selects all elements that have the specified class name. It returns an HTMLCollection (similar to an array, but not a real array, array like object).

querySelector - Selects the first element that matches the specified CSS selector. The querySelector will only return the first element that matches.

querySelectorAll - Selects all elements that match the specified CSS selector then returns all elements. querySelectorAll returns a NodeList (similar to HTMLCollection).


2. How do you **create and insert a new element into the DOM**?
Answer: Steps to Create and Insert a New Element into the DOM

Step-1: Create html file in a parent element
<div id="prarent-container">
</div> 

Step-2: Find the parent element
const parent = document.getElementById("prarent-container");

Step-3: Create a new element
const heading1 = document.createElement("h1");

Step-4: Add content 
heading1.textContent = "I am Heading 1";

Strp-5: Insert element into the DOM
parent.appendChild(heading1);


3. What is **Event Bubbling** and how does it work?
Answer: Event Bubbling is a mechanism of the DOM (Document Object Model). In this process, when an event (such as a click) occurs on an element (the child/target element), it starts from there and gradually propagates upward through its parent, grandparent, document, window.

That is, if a child element is clicked, that event will also be triggered on the parent element.

Event Bubbling works it:-
Step-1: Event Trigger- An event occurs on an element (for example, a button).

Step-2: Event Propagation- The event does not stop at that element; it spreads upward to the parent elements.

Steo-3: Parent Notification- The target element’s parent, grandparent, and other ancestors have their event listeners triggered.

Step-4: To the Root- The event continues to bubble upward until it reaches the document’s root or is stopped using stopPropagation().


4. What is **Event Delegation** in JavaScript? Why is it useful?
Answer: Event Delegation is a technique in JavaScript where, instead of adding separate listeners to each child element, one listener is added to the parent. When a child element is clicked, the event bubbles up to the parent. This allows all child events to be handled efficiently with a single listener. 

Event Delegation is useful because:-

1. Better performance: Instead of adding many listeners to multiple child elements, a single listener on the parent handles all events efficiently.

2. Handles dynamic Elements: If new child elements are added later, the parent listener will automatically handle their events.

3. Cleaner Code: Less code to write and maintain, making your JavaScript simpler and easier to manage.


5. What is the difference between **preventDefault() and stopPropagation()** methods?
Answer: Difference Between preventDefault() and stopPropagation()

preventDefault():
1. preventDefault() controls the default browser behavior of an element and Stops the browser’s default action for an element. 

2. Using event.preventDefault() prevents the browser from navigating.

3. In the case of form submission, using event.preventDefault() stops the form from submitting and prevents the page from reloading.

Example- Clicking a link without navigating, or stopping a form from submitting.


stopPropagation(): 
1. Stops the event from bubbling up the DOM tree to parent elements (Stops bubbling). 

2. Using event.stopPropagation() stops this propagation, meaning the listeners on parent or child elements will not be triggered.

3. stopPropagation() prevents the event from reaching other elements in the DOM.

Example- Clicking a child element without triggering the parent’s click handler.