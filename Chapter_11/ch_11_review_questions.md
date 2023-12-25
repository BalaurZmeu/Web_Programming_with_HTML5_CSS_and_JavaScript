# Chapter 11 Review Questions

### 1. What is OOP encapsulation?

Encapsulation in OOP is like putting your things in a box. The box (class) contains both your stuff (data) and a set of instructions on how to use it (methods). Others only need to interact with the box, not the details inside, making it easier to manage and use.

### 2. What are the two types of members in a JavaScript object?

Two types of members in a JavaScript object are properties, which represent data and methods by means of which the data can be accessed and modified.

### 3. What is a class?

A class in JavaScript is a blueprint for creating objects. It defines a set of properties and methods that the objects created from the class will have. Instances of the class share the same structure but can have different data.

### 4. What is a constructor and what does it do?

In a JavaScript class, a constructor is a special method that is called when an object is instantiated from the class using the `new` keyword. It initializes the object by setting up its initial state or properties. The constructor is defined using the `constructor` keyword within the class and is automatically executed when a new object is created.

### 5. To instantiate an object, what operator should you use?

To instantiate an object you should use the operator `new` followed by the name of the class. For example:

```javascript
numbersObject = new NumberList(userInput);
```

### 6. How is a class property different from a regular property?

A class property in JavaScript is associated with the class itself rather than instances of the class. It is shared among all instances of the class. On the other hand, a regular property is specific to an instance of the class and is not shared among other instances. Each instance of the class has its own set of regular properties.

### 7. To call a regular method, you preface the method name with an object and a dot. To call a static method, what do you preface the method name with?

When calling a static method, you use the class name followed by a dot and then the method name. For example:

```javascript
console.log(MyClass.classMethod());
```

### 8. If a method does not use the `this` keyword, it’s a good candidate for being a static method. True or false.

True. In JavaScript, static methods are often declared with the `static` keyword, and they don't operate on an instance of the class, hence they don't use the `this` keyword.

### 9. What does a `null` value indicate?

A `null` value in JavaScript indicates the absence of any object value. It is a special value that represents the intentional absence of an object or the lack of a meaningful value.

### 10. When the user interacts with a web page, the JavaScript engine generates an `event` object that contains information about what the user just did. To capture the `event` object, you need to add an event-handler attribute to an appropriate element. What do you need to do to access the `event` object?

In an event handler, the `event` object can be accessed by using the word `event` as an argument in the JavaScript code when calling the event handler. Example:

```html
<html lang="en" onclick="captureClick(event);">
```

### 11. What is event bubbling?

Event bubbling is a phase in the event propagation model in which the event starts from the target element that triggered the event and bubbles up through its ancestors in the DOM hierarchy. During the bubbling phase, the event travels from the innermost element to the outermost element. This allows ancestor elements to also handle the same event, providing an opportunity for multiple elements in the hierarchy to respond to the event.

### 12. List at least four types of primitive values.

In JavaScript there are 7 primitive data types:

-   string
-   number
-   bigint
-   boolean
-   undefined
-   symbol
-   null

### 13. When an object is assigned to a variable, the variable ends up holding a reference to the object, not the object itself. True or false.

True. In JavaScript, when an object is assigned to a variable, the variable holds a reference to the object in memory, not a direct copy of the object itself. This means that changes to the object through one reference will affect the object when accessed through another reference pointing to the same object.

### 14. Why do best practices sticklers favor using `addEventListener` instead of event-handler attributes?

Using `addEventListener` allows for cleaner separation of HTML and JavaScript code, promotes better maintainability, and supports multiple event handlers for the same event. It adheres to the principle of unobtrusive JavaScript, making the code more modular and easier to understand. Event-handler attributes tend to mix HTML and JavaScript, which can lead to less maintainable and harder-to-read code.

### 15. When defining your own objects with legacy code, why is it beneficial to use the object’s prototype when declaring methods for the object?

Using the object's prototype to declare methods allows those methods to be shared among all instances of the object. This results in more memory-efficient code, as each instance doesn't need to store its own copy of the method. It promotes code reuse and makes it easier to update methods for all instances by modifying the prototype.

### 16. What does a child class inherit from its parent class?

A child class inherits properties and methods from its parent class.

### 17. What’s the syntax required for a subclass method to call a method in its superclass?

For a subclass method to call a method in its superclass, you preface the call with `super` dot. Example:

```javascript
subclassMethod() {
  return super.getName();
}
```

### 18. What does it mean if a web page is scalable?

If a web page is scalable, it means that its content and design allow for easy expansion and adaptation to handle increased loads, users, or features. It can efficiently accommodate growth without significant changes to the underlying structure, ensuring performance and usability as the web page's demands evolve.

### 19. What is a key difference between the `switch` statement and an `if, else if` statement?

A key difference between the `switch` statement and the `if, else if` statement is that the `switch` statement’s determination of which path to take is based on a single value.

### 20. What happens if there’s no `break` at the bottom of a `switch` statement’s `case` block?

If there's no `break` at the bottom of a `switch` statement's `case` block, the program will continue to execute the code in subsequent `case` blocks until a `break` statement is encountered or the end of the `switch` statement is reached. This is known as "fall-through." It's important to include `break` statements to control the flow and prevent unintended execution of subsequent `case` blocks.

### 21. The first element in an array uses index position 1. True or false.

False. In most programming languages, including JavaScript, the first element in an array uses index position 0, not 1. Array indexing typically starts from 0, so the elements are accessed as `array[0]`, `array[1]`, and so on.

### 22. The following code attempts to declare an empty array and then add an element to the array. Does it work? Yes or no.

```javascript
prices = new Array();
prices[0] = 22.35;
```

Yes, it works, and the assignment statement adds a new element to the array at index position 0. Additionally, you can use the `push()` method to add elements to the end of the array.

### 23. What is a function expression?

A function expression is a way to define an anonymous function embedded within another statement. JavaScript function expressions are similar to Python lambda functions. Both allow you to define anonymous functions (functions without a specified name) and are often used for short, one-off operations.

### 24. To help with sorting, strings that use the `mm/dd/yyyy` format have a built-in mechanism that allows them to be compared with the `<` operator. True or false.

False. To sort date strings, first you have to convert the strings to `Date` objects, and then the `<` operator can compare date values properly.

> Written with [StackEdit](https://stackedit.io/).
