import { Post } from 'src/posts/entities/post.entity';
import { DeepPartial } from 'typeorm';

export const postSeedData: DeepPartial<Post>[] = [
  {
    title: 'What is Node.js?',
    content:
      'Node.js is a runtime environment for JavaScript that allows developers to run JavaScript code outside of a web browser.<br>When Node.js application is run, it creates a single thread that handles all incoming requests and executes JavaScript code in a non-blocking, event-driven way.',
    topic: {
      name: 'Node.js',
    },
  },
  {
    title: 'Non-blocking and Event-driven I/O model',
    content:
      "Non-blocking means that Node.js can handle multiple requests simultaneously.<br>Node.js starts a task and moves on to the next task instantly, without blocking the execution of other code.<br><br>Event-driven means that the programming model revolves around events and instead of waiting for operations to complete, Node.js uses its core mechanism - Event loop. <br><br>Event loop responds to events by executing callback functions. It continuously checks for events and when an event occurs, Event loop triggers the corresponding callback function, so it doesn't waste resources polling for events that haven’t happened yet.",
    topic: {
      name: 'Node.js',
    },
  },
  {
    title: 'What is Libuv?',
    content:
      'While JavaScript is a synchronous, blocking and single-threaded language, the Libuv is a C library written for Node.js to abstract asynchronous, non-blocking I/O operations and ability to provide multithreading.',
    topic: {
      name: 'Node.js',
    },
  },
  {
    title: 'Threads in Node.js',
    content:
      'Node.js is single threaded. However, the Libuv provides 4 more threads by default, to perform weak kernel support asynchronous I/O operations in parallel, without blocking its main thread.<br>So in Node, there are two types of threads: <ul><li>• The Event Loop (the main thread)</li><li>• The workers in a Worker Pool (the thread pool)</li></ul><p>Which handles:</p><ul><li>- file system operations (fs)</li><li>- DNS operations (dns)</li><li>- compression operations (zlib)</li><li>- cryptography operations (crypto)</li></ul>',
    topic: {
      name: 'Node.js',
    },
  },
  {
    title: 'Worker threads vs Clusters',
    content:
      'Worker threads and Clusters are two different approaches to leveraging the power of multiple CPUs in Node.js.<ul><li>• While Clusters create multiple instances of a Node.js process, each running on a separate CPU core and each process has own event loop.</li><li>• Worker threads provide a way to create multiple threads within a single process and are ideal for CPU-intensive tasks.</li></ul>',
    topic: {
      name: 'Node.js',
    },
  },
  {
    title: 'What is V8?',
    content:
      "V8 is a JavaScript engine created by Google and written in C++, which is used by Node.js for compiling JavaScript code to native machine code that can be executed by the computer's processor.",
    topic: {
      name: 'Node.js',
    },
  },
  {
    title: 'Npm and REPL',
    content:
      'Npm is a package manager for Node.js that allows developers to easily install, update and manage dependencies for their Node.js applications.<br>REPL (Read-Eval-Print Loop) is a built-in command-line tool in Node.js that allows developers to experiment with JavaScript code and interact with the Node.js runtime environment.',
    topic: {
      name: 'Node.js',
    },
  },
  {
    title: 'What is JavaScript?',
    content:
      'JavaScript is a  programming language that developers use to make interactive webpages. It is dynamically-typed and supports both object-oriented and functional programming.',
    topic: {
      name: 'JavaScript',
    },
  },
  {
    title: 'Var vs let vs const',
    content:
      'A variable is a named space in the memory which is used to store values.<ul><li>• var is function-scoped and allows redeclaration and reassignment. </li><li>• let is block-scoped, so cannot be accessed from outside the block { } and allows reassignment but not redeclaration.</li><li>• const is also block-scoped, but cannot be redeclared and reassigned.</li></ul>',
    topic: {
      name: 'JavaScript',
    },
  },
  {
    title: "Child processes 'spawn' vs 'exec' vs fork",
    content:
      "A child process in Node.js is an independent script that runs alongside the main Node.js process. <br>It's useful for parallel tasks, executing external programs and isolating tasks for better resource utilization.<br>The child_process module provides methods like spawn, exec, and fork to create and manage child processes.<br>The ChildProcess instance implements EventEmitterAPI which enables us to register handlers for events on child objects directly.<ul><li>• spawn - spawns a new process using the given command and captures real-time output, so it good for long-running processes and large data output.</li><li>• exec -  creates a new process in a shell environment and returns buffers as an output, so it suitable for short commands or shell-specific tasks.</li><li>• fork - creates a new processes and supports communication between parent and child, used for parallel tasks and worker processes.</li></ul>",
    topic: {
      name: 'Node.js',
    },
  },
  {
    title: 'What is OOP?',
    content:
      "Object-oriented programming (OOP) is a widely-used programming paradigm based on the use of objects.<ul><li>• An object is a collection of key-value pairs, where each key is a string that maps to a value.</li><li>• A class is a template for creating objects.</li><li>• A method is a function that is associated with an object or class.</li><li>• A constructor is a special method of a class for creating and initializing an object instance of that class.</li><li>• “this” keyword refers to an object that is executing the current piece of code.</li></ul><p>Programs produced using this method may be considerably larger than programs written using the procedure-oriented methodology.<br>This style of developing software also necessitates a significant amount of preparation and forethought. The OOP code might be hard to comprehend if you don't have the relevant class documentation.<br>Additionally, apps might consume a lot of memory in certain situations.</p>",
    topic: {
      name: 'JavaScript',
    },
  },
  {
    title: 'OOP features in JavaScript',
    content:
      'JavaScript supports several OOP features, including: <ul><li>• Inheritance: The ability to create a new object that is a modified version of an existing object, inheriting properties and methods from the parent object.</li><li>• Polymorphism: The ability when a method has the same name but a different implementation in different classes</li><li>• Encapsulation: The ability to wrap data and behavior together into a single unit, hide and protect the implementation at the application level.</li><li>• Abstraction means hiding the implementation details at the design level, so only essential details are shown to the user.</li></ul>',
    topic: {
      name: 'JavaScript',
    },
  },
  {
    title: 'Public, private, protected and static',
    content:
      "Public members are accessible from anywhere, inside or outside of the class. They can be accessed using the object instance or the class name itself.<br>Private members are only accessible within the class where they are defined. They cannot be accessed from outside the class or by any subclass.<br>Protected members are similar to private members, but they can be accessed by subclasses. They are not accessible from outside the class.<br>You cannot call a static method on an object, only on an object's class. Static methods can be either public, private or protected.<br>All this members are inheritable",
    topic: {
      name: 'JavaScript',
    },
  },
  {
    title: 'Object prototypes',
    content:
      "Prototypes are the mechanism by which JavaScript objects inherit features from one another.<br>JavaScript prototypes can be used to:<ul><li>• Add new properties and methods to an existing object</li><li>• Share properties and methods between multiple objects</li><li>• Create new objects with a custom prototype</li><li>• Override or extend existing methods and properties of an object's prototype</li></ul>",
    topic: {
      name: 'JavaScript',
    },
  },
  {
    title: 'Promises vs Async/Await',
    content:
      "<ul><li>• Promises are a way to handle asynchronous code using callbacks.</li><li>• Promises are objects with states: pending, fulfilled and rejected.</li><li>• For a successfully resolved promise, we use .then() method.</li><li>• For rejected promise, we use .catch() method.</li><li>• The code inside .finally() method runs once regardless of the state of the promise.</li></ul><br><ul><li>• Async/Await is a modern way to work with promises using the await keyword.</li><li>• For a successfully resolved promise, we use try{}.</li><li>• For rejected promise, we use catch{}.</li><li>• The code inside finally{} runs once regardless of the state of the promise.</li><li>• Async/Await is much cleaner and readable to write as compared to Promises.</li></ul><p>Promise.all takes an array of Promises and return a new promise<br>It's useful for multiple asynchronous operations to complete in parallel.<ul><li>- fulfills when all Promises in the iterable have fulfilled</li><li>- rejects if any of them rejects</li></ul></p><p>Promise.race also takes an array but fulfills or rejects as soon as one of the Promises fulfills or rejects.<br>It's useful t to perform an action as soon as any of several asynchronous operations completes.</p>",
    topic: {
      name: 'JavaScript',
    },
  },
  {
    title: 'What is Express.js?',
    content:
      'Express.js is a fast, flexible, and lightweight web application framework for Node.js that provides a set of features and utilities for building APIs, web servers, chatbots and other web applications.<br>Some benefits of using Express.js:<ul><li>• Routing: Express provides a simple and flexible routing system to define the routes of your application based on HTTP methods and URLs.<li></li>• Middleware: Express allows you to use middleware functions to execute code during the request-response cycle.<li></li>• Templating engines: Express supports a wide range of templating engines such as EJS, Pug, and Handlebars.<li></li>• REST API development: Express is widely used for building REST APIs due to its simplicity and flexibility.</li></ul>',
    topic: {
      name: 'Express.js',
    },
  },
  {
    title: 'What is HTTP?',
    content:
      'HTTP (Hypertext Transfer Protocol) is an application protocol that is used for communication between web clients and servers. The most commonly used HTTP request methods are:<ul><li>• GET - is used to retrieve data from the server;</li><li>• POST - is used to send data to the server;</li><li>• PUT - is used to modify the data on the server by replacing the entire content</li><li>• PATCH is similar to PUT request, but the only difference is, it modifies a part of the data, only the content that you want to update.</li><li>• DELETE - is used to delete the data on the server at a specified location.</li></ul>',
    topic: {
      name: 'Express.js',
    },
  },
  {
    title: 'app.use() and app.get()',
    content:
      'app.use() is used to handle any HTTP request or to add middleware to an Express.js application.<br>app.get() is specifically used to handle GET requests.',
    topic: {
      name: 'Express.js',
    },
  },
  {
    title: 'Route handler function arguments',
    content:
      '<ul><li>• Req : the request object.</li><li>• Res : the response object.</li><li>• Next (optional) : a function that is employed to pass management to 1 of the following route handlers.</li></ul>',
    topic: {
      name: 'Express.js',
    },
  },
  {
    title: 'What is middleware in Express.js?',
    content:
      'Middleware is a function that sits between the request and response objects in a Node.js application and can be used to modify the behavior of the application.<br>Middleware can be used for a variety of purposes, such as logging, error handling, authentication, and data validation.<br>Node.js middleware functions takes three parameters: request, response and next, we can use them with app.use().',
    topic: {
      name: 'Express.js',
    },
  },
  {
    title: 'How to handle errors in Express.js?',
    content:
      'In Express.js, error-handling middleware can catch and handle errors. These function typically takes four arguments: err, req, res, and next. If an error occurs, the middleware function will catch it.',
    topic: {
      name: 'Express.js',
    },
  },
  {
    title: 'Response methods',
    content:
      '<ul><li>• res.download() Prompt a file to be downloaded.</li><li>• res.end() End the response process.</li><li>• res.json() Send a JSON response.</li><li>• res.redirect() Redirect a request.</li><li>• res.render() Render a view template.</li><li>• res.send() Send a response of various types.</li><li>• res.sendFile() Send a file as an octet stream.</li><li>• res.sendStatus() Set the response status code and send its string representation as the response body.</li></ul>',
    topic: {
      name: 'Express.js',
    },
  },
  {
    title: 'Request methods',
    content:
      '<ul><li>• req.params: An object containing the URL parameters (before the ? in the URL).</li><li>• req.query: An object containing the URL query parameters (after the ? in the URL).</li><li>• req.body: An object containing the parsed request body. This is available only for POST, PUT, and PATCH requests.</li></ul>',
    topic: {
      name: 'Express.js',
    },
  },
  {
    title: 'Request methods',
    content:
      'Dynamic routing in Express.js refers to the process of handling requests to different routes with varying parameters or values. A dynamic route can be created by using a : followed by a parameter name in the route path.',
    topic: {
      name: 'Express.js',
    },
  },
  {
    title: 'What is body-parser?',
    content:
      'The body-parser is middleware that is used to parse the request and convert it into a format from which you can easily extract relevant information.',
    topic: {
      name: 'Express.js',
    },
  },
  {
    title: 'What is TypeScript?',
    content:
      'TypeScript is a strongly typed programming language that builds on JavaScript, giving better tooling.<br>TypeScript works by first analyzing the code for syntax and type errors and then compiling it into standard JavaScript that can run on any browser or JavaScript engine.',
    topic: {
      name: 'TypeScript',
    },
  },
  {
    title: 'TypeScript vs JavaScript?',
    content:
      'TypeScript is a superset of JavaScript that adds optional static typing and other features.<br>While JavaScript is dynamically typed, TypeScript offers static typing, which helps prevent runtime errors and enables better code organization.<br>Additionally, TypeScript allows for the use of modern language features such as interfaces, decorators, generics and enumerations.',
    topic: {
      name: 'TypeScript',
    },
  },
  {
    title: "How does TS's static typing work?",
    content:
      "TypeScript's static typing allows to specify the data types of variables, function parameters, and return values. This helps catch errors at the compile time.",
    topic: {
      name: 'TypeScript',
    },
  },
  {
    title: 'Interfaces, decorators and generics',
    content:
      'Interfaces in TypeScript define the shape of an object, specifying its properties, methods, and their types. They can also be used to create custom types, such as function types or array types.<br>A Decorator is a special kind of declaration that can be attached to a class, method, accessor, property, or parameter to add functionality or modify its behavior.<br>Generics in TypeScript allow you to create functions and classes that work with multiple types, without specifying the type upfront. This provides more flexibility and reusability in your code.',
    topic: {
      name: 'TypeScript',
    },
  },
  {
    title: 'TypeScript with JavaScript',
    content:
      'TypeScript can be used alongside JavaScript, and can be gradually adopted in existing projects. It also supports many popular JavaScript libraries and frameworks.',
    topic: {
      name: 'TypeScript',
    },
  },
  {
    title: 'Special TypeScript types',
    content:
      "<ul><li>• The 'any' type is a type that can be used to represent any type of data.</li><li>• A tuple is a type that allows you to define an array with a fixed number of elements, where each element can have a different type.</li><li>• An enum is a type that allows you to define a set of named constants. By default, enums will initialize the first value to 0 and make auto increment to each additional value.</li><li>• A type assertion is a way to tell the compiler that you know more about the type of a variable than it does. Type assertions are performed using the 'as' keyword. For example: 'let myString: any = 'hello'; let length: number = (myString as string).length;'.</li><li>• A type guard is a way to check the type of a variable at runtime, in order to narrow down its type within a block of code. Type guards are typically used with the 'typeof' and 'instanceof' operators. For example: 'if (typeof myVariable === 'string') { // myVariable is now of type string}'.</li><li>• A type alias is a way to create a new name for an existing type. Type aliases are declared using the 'type' keyword.</li><li>• A union type is a way to specify that a variable can have one of several possible types. Union types are declared using the '|' symbol between each type.</li></uli> ",
    topic: {
      name: 'TypeScript',
    },
  },
  {
    title: 'Modules in Node.js',
    content:
      "A module is a self-contained unit of code that can be reused in different applications.<br>Some Node.js core modules:<ul><li>• http - includes classes, methods and events to create Node.js http server;</li><li>• fs - includes events, classes and methods to deal with file I/O operations;</li><li>• url - includes methods for url parsing;</li><li>• zlib - includes methods to compress or decompress files;</li><li>• EventEmitter - a class in Node.js that is used for handling and emitting events. It allows developers to create custom events and listeners.</li><li>• stream - an object for processing large data in smaller chunks, which is memory-efficient;<p>There are four types of streams:</p><ul><li>- readable - used for reading operations</li><li>- writable - used for write operations</li><li>- duplex - can be used for both reading and write operations</li><li>- transform a type of duplex stream where the output is computed based on input</li></ul><p>Piping in Node.js connects streams for efficient data transfer. It's useful for tasks like reading from a file, processing data, and writing it to another location efficiently, since it avoids loading all the data into memory at once.</p>",
    topic: {
      name: 'Node.js',
    },
  },
  {
    title: 'What is Nest.js?',
    content:
      "Nest.js is a framework for building efficient and scalable Node.js server-side applications using TypeScript. It's built on top of Node.js and utilizes modern JavaScript features, along with concepts from frameworks like Angular and Express, to provide a robust and structured development environment.",
    topic: {
      name: 'Nest.js',
    },
  },
  {
    title: 'Why to use Nest.js?',
    content:
      '<ul><li>• Modularity: Nest.js allows you to create modular applications by organizing your code into reusable and independent modules, making it easier to manage complexity and facilitate code reuse.</li><li>• Dependency Injection: It provides a powerful dependency injection (DI) container that helps manage the dependencies between different components of your application. DI promotes loose coupling and makes it easier to write testable and maintainable code.</li><li>• Decorators: Nest.js extensively uses decorators to define routes, middleware, and other aspects of your application. Decorators provide a declarative way to extend and modify the behavior of your application.</li><li>• Built-in HTTP Server: Nest.js includes a built-in HTTP server that is based on Express.js. It simplifies the process of handling HTTP requests and provides a familiar and powerful routing system.</li><li>• TypeScript Support: Nest.js is built with TypeScript and fully supports its features, such as static typing, decorators, and modules. TypeScript helps catch errors at compile-time and improves the overall developer experience.</li></ut> ',
    topic: {
      name: 'Nest.js',
    },
  },
  {
    title: 'Nest.js vs Angular.js',
    content:
      'The main difference between Nest.js and Angular.js is that Nest is used to develop server-side applications, while Angular is used to develop front-end applications.',
    topic: {
      name: 'Nest.js',
    },
  },
  {
    title: 'Nest.js vs Express.js',
    content:
      "Both Nest.js and Express.js are used to develop server-side applications. The main difference is that Express is a minimalist framework which doesn't provide a predefined architecture. Instead, Nest.js provides an out-of-the-box application architecture which allows developers and teams to create highly testable, scalable, loosely coupled, and easily maintainable applications.",
    topic: {
      name: 'Nest.js',
    },
  },
  {
    title: 'What is a database?',
    content:
      'A database is a structured collection of data.<br>Databases offer efficient data organization, integrity and persistence. They enable quick and reliable data retrieval and scalability. Databases also provide robust security measures, support data analysis and reporting.<br>The main types of databases are relational databases (SQL) and non-relational databases (NoSQL).',
    topic: {
      name: 'Databases',
    },
  },
  {
    title: 'SQL vs NoSQL',
    content:
      'SQL databases are based on a fixed schema and follow a relational model with structured tables. They use SQL as the query language and offer strong ACID compliance.<br>NoSQL databases have a flexible schema and support various data models like key-value, document, columnar and graph.<br>Relational databases store data in tables and use primary keys to identify each row. Non-relational databases, on the other hand use object IDs to identify each record.',
    topic: {
      name: 'Databases',
    },
  },
  {
    title: 'What is a transaction?',
    content:
      'A transaction is a single unit of work that performs multiple operations on a database such as read, write, update, or delete.<br>ACID defines the essential properties of a reliable database transaction system:<ul><li>• Atomicity: Transactions are treated as all or nothing, ensuring complete success or failure.</li><li>• Consistency: Transactions maintain data integrity.</li><li>• Isolation: Transactions operate independently, preventing interference between concurrent transactions.</li><li>• Durability: Committed changes are permanent and persist after system crashes.</li></ul>',
    topic: {
      name: 'Databases',
    },
  },
  {
    title: 'Primary key vs foreign key?',
    content:
      'A primary key is a unique identifier for a record in a table, while a foreign key is a field that refers to the primary key of another table. Foreign keys establish relationships between tables.',
    topic: {
      name: 'Databases',
    },
  },
  {
    title: 'SQL commands',
    content:
      'The main SQL commands include:<ul><li>• SELECT: Retrieves data from a database table based on specified conditions.</li><li>• INSERT: Inserts new data into a database table.</li><li>• UPDATE: Modifies existing data in a database table.</li><li>• DELETE: Deletes data from a database table based on specified conditions.</li><li>• CREATE: Creates a new database, table, or other database objects.</li><li>• ALTER: Modifies the structure of a database object, such as adding or deleting columns in a table.</li><li>• DROP: Deletes a database, table, or other database objects.</li><li>• JOIN: Combines rows from two or more tables based on related columns.</li><li>• GROUP BY: Groups rows in a result set based on specified columns.</li><li>• ORDER BY: Sorts the result set in ascending or descending order based on specified columns.</li><li>• DISTINCT: Filters out duplicate values from a result set.</li><li>• WHERE: Specifies conditions for filtering data in a query.</li><li>• HAVING: Filters data based on conditions in a GROUP BY query.</li><li>• UNION: Combines the result sets of two or more SELECT statements.</li><li>• IN: Tests if a value matches any value in a specified list or subquery.</li></ul>',
    topic: {
      name: 'Databases',
    },
  },
  {
    title: 'SOLID',
    content:
      'SOLID is a set of five design principles intended to make object-oriented designs more understandable, flexible, and maintainable.<ul><li>• Single Responsibility: A class should have only one reason to change, meaning it should have a single responsibility or purpose.</li><li>• Open/Closed: Software entities (classes, modules, functions) should be open for extension but closed for modification. In other words, you should be able to add new functionality without modifying existing code.</li><li>• Liskov Substitution: Objects of a base class should be replaceable with objects of its subclasses without breaking the application.</li><li>• Interface Segregation: Clients should not be forced to depend on interfaces they do not use. This principle encourages the creation of smaller, more specific interfaces rather than having a single large interface.</li><li>• Dependency Inversion: High-level modules should not depend on low-level modules; both should depend on abstractions.',
    topic: {
      name: 'Principles',
    },
  },
  {
    title: 'What are Git and Github?',
    content:
      'Git is a version control system for tracking changes in computer files and is used to help coordinate work among several people on a project. It records all the changes made to a file or data.<br>GitHub is a Git repository hosting service that provides a web-based graphical interface.',
    topic: {
      name: 'Git',
    },
  },
  {
    title: 'Git commands',
    content:
      "<ul><li>• git add: adds files and changes to the index</li><li>• git fetch: is used to see if there are any changes available</li><li>• git merge: to merge a different branch into the current branch (creates a merge commit and combines the history of both branches)</li><li>• git pull: fetch and merge changes from the remote server to local directory</li><li>• git diff: to view the merge conflicts</li><li>• git stash: is used in cases where we need to switch in between branches and at the same time not wanting to lose edits in the current branch</li><li>• git reset: removes files from index, if they haven't been committed</li><li>• git revert: to create a new commit that undoes the changes of the previous commit</li><li>• git rebase: to change the base of your branch, means to replays the commits of one branch into another</li></ul>",
    topic: {
      name: 'Git',
    },
  },
  {
    title: 'What is a pull request?',
    content:
      "Pull request is a very useful feature for team development. When you push changes to your branch and open the pull request, you are saying to your team, 'Could you look at my changes and pull them to the main branch?'. Once a pull request is opened, you can discuss and review the potential changes with collaborators.",
    topic: {
      name: 'Git',
    },
  },
  {
    title: 'GitHub Actions',
    content:
      'GitHub Actions is a continuous integration and continuous delivery (CI/CD) platform that allows to automate build, test, and deployment pipelines. For use GitHub Actions you need to create workflows that build and test every pull request to your repository.',
    topic: {
      name: 'Git',
    },
  },
  {
    title: 'DBMS',
    content:
      'A database management system (DBMS) is software that helps create, organize, and manage databases. It provides an interface for users.\nPopular DBMSs include Oracle, SQL Server, MySQL, PostgreSQL, and MongoDB.',
    topic: {
      name: 'Databases',
    },
  },
  {
    title: 'What is GraphQL?',
    content:
      'GraphQL is a query language for APIs that allows to get the specific data in a single request.<br>Unlike REST APIs that often require multiple endpoints and return fixed data structures.',
    topic: {
      name: 'GraphQL',
    },
  },
  {
    title: 'Why to use GraphQL?',
    content:
      '<ul><li>• Hierarchical Queries: Clients can specify the structure of the data they need, and GraphQL responds with the requested data in the same shape.</li><li>• Strong Typing System: GraphQL schemas define the types of data available and the relationships between them. This enables clients to understand the available data and make static type checks.</li><li>• Single Endpoint: GraphQL uses a single endpoint, typically /graphql, where clients can send their queries or mutations. This simplifies API management and reduces the number of round trips to the server.</li><li>• Declarative Nature: Clients can specify their data requirements using a declarative syntax, making it easier to understand and manage the data fetching process.</li><li>• Real-time Updates: GraphQL subscriptions allow clients to receive real-time updates when specific data changes on the server. This is particularly useful for applications that require real-time features like chat, notifications, or collaborative editing.<li></ul>',
    topic: {
      name: 'GraphQL',
    },
  },
  {
    title: 'What is Schema?',
    content:
      'Schema describes the shape of the available data.<br>The main components of a GraphQL schema are: <ul><li>• types - define the data structure</li><li>• queries - queries retrieve data</li><li>• mutations - modify data</li><li>• subscriptions - enable real-time updates</li></ul>',
    topic: {
      name: 'GraphQL',
    },
  },
  {
    title: 'Global objects',
    content:
      'Global objects in Node.js are objects that are available in all modules without the need for an explicit require statement.<br>Some of them:<ul><li>• global: Represents the global namespace in Node.js.</li><li>• console: Provides methods for logging messages to the console.</li><li>• process: Gives information and control over the current Node.js process.</li><li>• require(): Used to load and import modules.</li><li>• module and exports: Used for module management.</li><li>• __filename and __dirname: Variables containing the current file path and directory name.</li></ul>',
    topic: {
      name: 'Node.js',
    },
  },
  {
    title: 'Сontrol flow function',
    content:
      'The control flow function is a piece of code that runs in between several asynchronous function calls, it does the following jobs:<ul><li>• Control the order of execution</li><li>• Collect data</li><li>• Limit concurrency</li><li>• Call the next step in the program</li></ul>',
    topic: {
      name: 'Node.js',
    },
  },
  {
    title: 'What is ESLint?',
    content:
      'ESLint is a popular open-source tool that is used to analyze errors and potential problems in JavaScript code.',
    topic: {
      name: 'Node.js',
    },
  },
  {
    title: 'SetTimeout() vs process.nextTick() vs setImmediate()',
    content:
      '<ul><li>• setTimeout() executes the callback after a specified delay.</li><li>• process.nextTick() executes the callback immediately after the current operation and before the event loop continues.</li><li>• setImmediate() executes the callback on the next event loop iteration.</li></ul>',
    topic: {
      name: 'Node.js',
    },
  },
  {
    title: 'What is Buffer?',
    content:
      'Buffer is a class that provides a way to work with binary data, such as image files, audio files, database files, etc.<br>Buffer supports a variety of encoding and decoding, binary string conversion. <br>You cannot change the size of a buffer once it is created.',
    topic: {
      name: 'Node.js',
    },
  },
  {
    title: 'What is AWS?',
    content:
      'Amazon Web Services is a cloud computing platform, which provides a comprehensive suite of cloud services, including:<ul><li>• computing: Elastic Compute Cloud, Elastic Beanstalk, Lambda, Auto-Scaling and Lightsat. </li><li>• storage: Simple Storage Service, Glacier, Elastic Block Storage, Elastic File System.</li><li>• databases: Relational Database Service, DynamoDB, Aurora, DocumentDB, ElastiCache and other,</li><li>• networking: Virtual Private Cloud, Amazon CloudFront and Route53.</li></ul>',
    topic: {
      name: 'AWS',
    },
  },
  {
    title: 'EC2 vs Lambda',
    content:
      'Elastic Compute Cloud and Lambda are cloud computing services which allow you to run code or applications in a cloud.<br><p>Similarity:</p><ul><li>• Handling workloads: Both services can handle workloads and applications, including web servers, APIs, data processing, and more.</li><li>• Integration: Both can integrate with other AWS services.</li><li>• Security: Both offer various security features, such as identity and access management (IAM) for managing user access, encryption options for data, and network security configurations.</li></ul><p>Difference:</p><ul><li>• Execution mode: EC2 provides virtual servers that you manage, while Lambda is a serverless computing service where you upload functions that are automatically managed by AWS.</li><li>• Scalability: EC2 requires manual scaling and high availability configuration, while Lambda automatically scales.</li><li>• Cost model: EC2 instances have an hourly billing model based on the provisioned capacity, while Lambda follows a pay-per-use model based on the number of requests and compute time.</li><li>• Resource management: With EC2, you have full control over the server resources, while Lambda offers limited customization options.</li><li>• Use cases: EC2 for large, persistent applications that require full control over the infrastructure and scaling, while Lambda for small to medium-sized, that can benefit from automatic scaling and cost optimization.</li></ul>',
    topic: {
      name: 'AWS',
    },
  },
  {
    title: 'What is RDS?',
    content:
      'Relational Database Service is a fully managed database service which automates database setup, backups and scaling.<br>RDS supports multiple database engines (MySQL, PostgreSQL, Oracle Database and Microsoft SQL Server) and provides security and monitoring features.',
    topic: {
      name: 'AWS',
    },
  },
  {
    title: 'What is ECR?',
    content:
      'Elastic Container Registry is the managed container registry service, which provides a private repository to store and manage container images securely.<br>These images can be used to deploy and run applications on cloud or container platforms like Elastic Compute Cloud or Elastic Container Service.',
    topic: {
      name: 'AWS',
    },
  },
  {
    title: 'What is Auto Scaling?',
    content:
      'Auto Scaling is an AWS feature that automatically adjusts the number of instances or resources based on predefined conditions or metrics.<br>It optimizes performance, availability and cost by scaling resources up or down as needed.',
    topic: {
      name: 'AWS',
    },
  },
  {
    title: 'What is VPC?',
    content:
      'Virtual Private Cloud is a virtual network in the cloud that provides isolation and control for launching and managing AWS resources.<br>It allows you to create private and secure network environments, customize IP addressing, define routing, and integrate with other services.',
    topic: {
      name: 'AWS',
    },
  },
  {
    title: 'What is Docker?',
    content:
      'Docker is an open-source platform that allows you to automate the deployment and management of applications using containerization.<br>Docker offers benefits such as:<ul><li>• Simplified application deployment and dependencies management (other images, libraries  and frameworks).</li><li>• Consistent environments across different platforms and deployments.</li><li>• Isolation of applications for enhanced security.</li></ul>',
    topic: {
      name: 'Docker',
    },
  },
  {
    title: 'Image vs Container',
    content:
      'An image is a read-only template that contains the application, libraries, and dependencies required to run an application.<br>A container is a running instance of an image that can be created, started, stopped and deleted. Multiple containers can be created from the same image.',
    topic: {
      name: 'Docker',
    },
  },
  {
    title: 'Docker vs Virtualization',
    content:
      'Docker uses containerization, which operates at the operating system level, allowing for lightweight and efficient resource utilization.<br>Virtualization, on the other hand, creates virtual machines that emulate an entire operating system and require more resources.',
    topic: {
      name: 'Docker',
    },
  },
  {
    title: 'Commands',
    content:
      'Some of the most popular Docker commands:<ul><li>• docker run: Creates and runs a container based on a Docker image.Example: docker run -d -p 8080:80 nginx</li><li>• docker build: Builds a Docker image from a Dockerfile.Example: docker build -t myapp .</li><li>• docker pull: Pulls a Docker image from a registry.Example: docker pull nginx</li><li>• docker push: Pushes a Docker image to a registry.Example: docker push myusername/myapp</li><li>• docker images: Lists the available Docker images.Example: docker images</li><li>• docker ps: Lists the running Docker containers.Example: docker ps</li><li>• docker stop: Stops a running Docker container.Example: docker stop container_name</li><li>• docker rm: Removes a Docker container.Example: docker rm container_name</li><li>• docker rmi: Removes a Docker image.Example: docker rmi image_name</li><li>• docker exec: Executes a command inside a running Docker container.Example: docker exec -it container_name bash</li><li>• docker logs: Displays the logs of a Docker container.Example: docker logs container_name</li><li>• docker network: Manages Docker networks for container communication.Example: docker network create mynetwork</li></ul>',
    topic: {
      name: 'Docker',
    },
  },
  {
    title: 'What is a Dockerfile?',
    content:
      'A Dockerfile is a text file that contains instructions for building a Docker image.<br>It specifies the base image, necessary dependencies, commands to run during the image build process, and other configurations.<br>Configuration commands: <ul><li>• ENV - sets environment variables that can be accessed within the container.</li><li>• RUN - is used to execute shell commands within the container.</li><li>• COPY - is used to execute shell commands within the container.</li><li>• WORKDIR - sets the working directory within the container where subsequent commands will be executed.</li><li>• EXPOSE - informs Docker that the specified port should be exposed when the container is run.</li><li>• CMD - specifies the command that will be executed when the container is run.</li></ul>',
    topic: {
      name: 'Docker',
    },
  },
  {
    title: 'What is Docker Compose?',
    content:
      'Docker Compose is a tool for defining and managing multi-container applications.<br>It uses a YAML file to define the services, networks, and volumes required for an application.<br>It simplifies the coordination and deployment of interconnected Docker containers.',
    topic: {
      name: 'Docker',
    },
  },
  {
    title: 'Security',
    content:
      'Docker provides security features such as isolation through containerization, resource limitations, and user namespaces.<br>It also supports user-defined networks, allowing you to control the network access and communication between containers.',
    topic: {
      name: 'Docker',
    },
  },
  {
    title: 'Agile',
    content:
      'Agile is a set of principles and values that guide the iterative and organization approach to software development and project management.<br>Agile teams work in short iterations, collaborate closely and prioritize customer feedback, adaptability, incremental delivery and continuous improvement.<br>There are 12 Agile principles. defined in the Agile Manifesto:<ul><li>• Customer Satisfaction: The highest priority is to satisfy the customer through early and continuous delivery of valuable software.</li><li>• Changing Requirements: Agile welcomes and embraces changing requirements, even late in the development process, to provide a competitive advantage to the customer.</li><li>• Frequent Delivery: Deliver working software frequently, with a preference for shorter timescales between iterations.</li><li>• Collaboration: Business people and developers must work together daily throughout the project for effective communication and collaboration.</li><li>• Motivated Individuals: Build projects around motivated individuals, providing them with the environment and support they need, and trust them to get the job done.</li><li>• Face-to-Face Communication: Face-to-face conversation is the most effective method of conveying information within a development team.</li><li>• Working Software: Working software is the primary measure of progress and success.</li><li>• Sustainable Development: Agile promotes sustainable development, where teams maintain a constant pace indefinitely.</li><li>• Technical Excellence: Continuous attention to technical excellence and good design enhances agility.</li><li>• Simplicity: Maximize the amount of work not done by focusing on simplicity, avoiding unnecessary complexity.</li><li>• Self-Organizing Teams: The best architectures, requirements, and designs emerge from self-organizing teams.</li><li>• Regular Reflection and Adaptation: At regular intervals, the team reflects on how to become more effective and adjusts its behavior accordingly.</li></ul>',
    topic: {
      name: 'Principles',
    },
  },
  {
    title: 'Testing',
    content:
      " Testing is the process of evaluating an application's functionality to ensure it works correctly and helps identify and prevent bugs.<br>The Test Pyramid is a concept of the ideal distribution of different types of tests:<ul><li>• Unit Tests: focus on testing small, isolated units of code, such as individual functions or methods (Jest, Mocha, Jasmine, Chain).</li><li>• Integration Tests: verify the interaction between different components, modules or external dependencies, APIs, databases, messaging systems etc (Jest, Mocha, Supertest).</li><li>• End-to-End Tests: test the entire system and simulate user interactions with the application from start to finish. They are slower and more complex (Selenium, Puppeteer, Jest+jsdom).</li></ul><p>Testing principles:</p><ul><li>• Keep tests simple and focused on one aspect of functionality.</li><li>• Prevent testing from affecting the actual database used in the application.</li><li>• Use descriptive test names to make it clear what the test is checking.</li><li>• Early testing saves time and money.</li><li>• Maintain a balance between unit tests, integration tests, and end-to-end tests.</li><li>• Ensure tests are repeatable and independent of external factors.</li><li>• The absence of detected defects is not a guarantee of the absence of defects.</li><li>• Run tests automatically in a CI/CD pipeline</li></ul>",
    topic: {
      name: 'Principles',
    },
  },
  {
    title: 'Scaling',
    content:
      "<ul><li>• Caching: Implement caching mechanisms to reduce load and improve response times.</li><li>• Monitoring and Performance Testing: Regularly monitor and test the app's performance for optimizations.</li><li>• Clustering: Utilize clustering to parallelize workload across multiple instances.</li><li>• Microservices Architecture: Break down the app into smaller, independently scalable microservices.</li><li>• Database Optimization: Identify slow queries, choose relevant columns for indexing and select appropriate index types.</li><li>• Automated Deployment: Implement continuous integration and deployment pipelines to automate the deployment process. This allows for efficient scaling and seamless updates to the application without manual intervention.</li></ul>",
    topic: {
      name: 'Principles',
    },
  },
  {
    title: 'CI/CD',
    content:
      "Continuous Integration and Continuous Delivery is a set of practices that automate the process of building, testing, delivering and deploying software.<br>It speeds up feedback, maintains code quality and improves reliability in software development.<p>CI is used frequently by developers to integrate their code changes into a shared repository by merging them.<br>This practice enables early detection of integration issues and involves automatically building and testing the application to ensure that the integrated code works well with the existing codebase.</p><p>CD extends CI by automating the process of deploying software changes to production-like environments.<br>With CD, the goal is to have software in a releasable state at any given time.<br>CD enables frequent and reliable software releases by automating deployment activities, such as configuration management, environment setup and deployment coordination.</p><p>Continuous testing is used  to continuously run tests in order to identify bugs as soon as they are introduced into the codebase.<br>In a CI/CD pipeline, continuous testing is typically performed automatically, with each code change triggering a series of tests to ensure that the application is still working as expected.<br>Types of test: unit testing, integration testing and regression testing, which is performed after a bug is fixed to ensure that specific bug won't occur again.</p>",
    topic: {
      name: 'Principles',
    },
  },
  {
    title: 'Microservices vs Monolithic',
    content:
      'Microservices and monolithic architectures are two different approaches to designing and building software applications.<p>Monolithic architecture: Entire application is a single unit, tightly coupled and interdependent.<br>Scaling is vertical. Changes require redeploying the entire app.<br>Simpler initially, but may be challenging to maintain and scale.</p><p>Microservices architecture: Application divided into small, loosely coupled services.<br>Independent development, deployment, and scaling. Services communicate and scale individually.<br>More flexible and scalable, but introduces complexity in inter-service communication.</p>',
    topic: {
      name: 'Microservices',
    },
  },
  {
    title: 'What is REST?',
    content:
      "REpresentational State Transfer is an architectural style for designing web services, which uses HTTP methods and URLs to access and manipulate resources.<br>RESTful architecture (design) principles:<ul><li>• Client-Server Architecture: Separate client and server responsibilities to enable independent improvements.</li><li>• Statelessness: Each request from a client must contain all necessary information.</li><li>• Caching: Implement caching to improve performance by enabling responses to be stored and reused. Different caching approaches:</li><li>&nbsp&nbsp- client-side caching: storing and reusing data on the client's device, such as web browser cache, to speed up subsequent page loads.</li><li>&nbsp&nbsp- server-side caching: storing and reusing data on the server to reduce backend processing and improve response times.</li><li>&nbsp&nbsp- Content Delivery Network caching:  storing cached content at distributed edge servers worldwide.</li><li>• Layered System: Allows intermediaries, such as proxies or gateways, to be inserted between clients and servers.</li><li>&nbsp&nbsp- gateway: a network node that connects and enables communication between different networks with different protocols or technologies.</li><li>&nbsp&nbsp- proxy: an intermediary server that forwards client requests to servers and returns the responses, often used for caching, anonymity, filtering and security.</li><li>• Uniform Interface: Consistent interface of 4 principles:</li><li>&nbsp&nbsp- resource identification: each resource has a unique URI.</li><li>&nbsp&nbsp- resource manipulation: clients use standard HTTP methods to create, read, update, and delete resources.</li><li>&nbsp&nbsp- self-descriptive messages: HTTP requests and responses contain metadata.</li><li>&nbsp&nbsp- Hypermedia as the Engine of Application State (HATEOAS): responses include links for dynamic navigation and resource discovery.</li></ul>",
    topic: {
      name: 'GraphQL',
    },
  },
  {
    title: 'Memory managment',
    content:
      'In Node.js, memory management is handled by the V8 engine.<br>It uses automatic garbage collection to reclaim memory that is no longer in use from memory heap.<br>The heap is where young and old generations of objects, arrays, data, strings etc. are stored.<br>Also Node.js has default memory limits and memory leaks can occur if objects are saved unintentionally.',
    topic: {
      name: 'Node.js',
    },
  },
  {
    title: 'What are indexes?',
    content:
      "Indexes in databases improve data retrieval performance by providing speed up queries to locate specific data.<br>They store sorted copies of data along with pointers to the actual records<br>Two types of indexes:<ul><li>• Clustered Index: Determines the organized physical order of data in a table.</li><li>&nbsp&nbsp&nbspOnly one clustered index can exist per table, by default it's a primary key, so whenever we retrive the value it will always be in the order of primary key.</li><li>• Non-Clustered Index: Creates a separate table with a copy of an indexed column and a pointer to the row without affecting the physical order.</li><li>&nbsp&nbsp&nbspMultiple non-clustered indexes can exist per table.</li></ul>",
    topic: {
      name: 'Databases',
    },
  },
  {
    title: 'What are Design Patterns?',
    content:
      'Design patterns are typical solutions to common problems in software design.<br>Each pattern is like a blueprint that you can customize to solve a particular design problem in your code.<br>Classification:<ul><li>• Creational patterns: Provide various object creation mechanisms, which increase flexibility and reuse of existing code.</li><li>• Structural patterns: Explain how to assemble objects and classes into larger structures while keeping these structures flexible and efficient.</li><li>• Behavioral patterns: Are concerned with algorithms and the assignment of responsibilities between objects.</li></ul>',
    topic: {
      name: 'Patterns',
    },
  },
  {
    title: 'Creational patterns',
    content:
      '<ul><li>• Singleton: Ensures that a class has only one instance. This is useful when you want to limit the number of instances of a class, such as a configuration manager, logging service, or database connection pool.</li><li>• Factory: defines an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created.</li><li>• Builder: lets you construct complex objects step by step.</li><li>• Prototype: creates new objects by copying an existing object.</li></ul>',
    topic: {
      name: 'Patterns',
    },
  },
  {
    title: 'Structural patterns',
    content: '.',
    topic: {
      name: 'Patterns',
    },
  },
  {
    title: 'Behavioral patterns',
    content: '.',
    topic: {
      name: 'Patterns',
    },
  },
  {
    title: 'fs.readFile vs fs.createReadStream',
    content:
      'Both methods provided by Node.js for reading data from files:<ul><li>• readFile - reads entire file into memory, suitable for small files and not memory-efficient for large file.</li><li>• createReadStream - reads file in chunks and efficient for large files with large data.<li></ul>',
    topic: {
      name: 'Node.js',
    },
  },
  {
    title: 'Software architecture',
    content:
      "Software architecture is the high-level structure of a software system that defines how various components and modules interact with each other<br>It's crucial because it sets the foundation for the system's design and helps in achieving desired qualities like scalability, maintainability, and performance.",
    topic: {
      name: 'Microservices',
    },
  },
  {
    title: 'Pros of Microservices',
    content:
      "<ul><li>• Scalability: Services can be scaled independently to handle varying tasks.</li><li>• Flexibility: Easier to adopt new technologies and upgrade individual services.</li><li>• Faster Development: Teams can work independently on services, speeding up development.</li><li>• Fault Isolation: A failure in one service doesn't necessarily affect the entire application.</li></ul>",
    topic: {
      name: 'Microservices',
    },
  },
  {
    title: 'Cons of Microservices',
    content:
      '<ul><li>• Complexity of Architecture: Managing multiple services can become complex in terms of deployment and monitoring.</li><li>• Distributed Data Management: Ensuring data consistency across microservices can be challenging.',
    topic: {
      name: 'Microservices',
    },
  },
  {
    title: 'Communication between Microservices',
    content:
      '<ul><li>• HTTP/REST: Services expose APIs that can be accessed via HTTP requests.</li><li>•Message Queues: Services can communicate asynchronously using message queues like RabbitMQ or Kafka.</li><li>• gRPC: A high-performance RPC framework can be used for communication between services.</li><li>• WebSockets',
    topic: {
      name: 'Microservices',
    },
  },
  {
    title: 'Data Structures',
    content:
      'A data structure defines a way of organizing, storing, accessing and manipulating data to perform operations efficiently.<ul><li>• A B-tree is a balanced tree-like data structure used for efficient storage and retrieval of large datasets. It maintains balance, orders data, and excels at inserting, deleting, updating and searching operations. Most SQL databases use B-tree as a default indexing model.</li><li>• Array: linear data structure that stores a collection of elements and allows fast random access to elements using the index but costly insertions and deletions in the middle.</li><li>• Linked List: linear data structure composed of nodes, where each node contains data and a reference to the next node, so they are efficient for insertions and deletions but no random access.</li><li>• Stack: linear data structure that follows the Last-In-First-Out principle, supports two operations: push (add an item to the top) and pop (remove the top item).</li><li>• Queue: linear data structure that follows the First-In-First-Out principle, supports two operations: enqueue (add an item to the top) and dequeue (remove the bottom item).</li><li>• Hash Table (Object, Map):  stores key-value pairs and uses a hash function to map keys to specific locations in an array, fast lookups, insertions, and deletions.</li><li>• Binary Tree: hierarchical data structure consisting of nodes, where each node has a value and at most two children: a left and a right. Efficient searching, insertion, and deletion, but complex to implement and manage.</li><li>• Binary Search Tree: an ordered binary tree, where each left child node with a smaller value, and a right child node with a larger value.</li><li>• Graph: consists of nodes (vertices) and edges that connect these nodes, suitable  for representing various relationships between objects but complex to work with.</li></ul>',
    topic: {
      name: 'Principles',
    },
  },
  {
    title: 'Big O',
    content:
      "Big O notation is used to analyze the time and space complexity of algorithms.<br>It helps us understand how an algorithm's performance scales with input size, allowing us to choose the most efficient algorithm for a task.<ul><li>• Time complexity measures the amount of time an algorithm takes to complete as a function of the input size</li><li>• Space complexity measures the amount of memory space an algorithm uses in the same context.</li></ul>",
    topic: {
      name: 'Principles',
    },
  },
  {
    title: 'Architectural patterns',
    content:
      "Architectural patterns are design templates used in software development to solve common problems.<ul><li>• MVC. Model: the data and business logic. View: the user interface elements and presentation logic. Controller: an intermediary between the Model and View, handling user input and updating the Model and View accordingly.</li><li>• <a href='13#79'>Microservices</a></li></ul>",
    topic: {
      name: 'Patterns',
    },
  },
  {
    title: 'Interface vs Type',
    content:
      "<ul><li>• Interfacef ocuses on object shapes and is best for object-related structures</li><li>• Used for defining properties and methods of an object</li><li>• Suited for extending or implementing interfaces and for declaration merging.</li></ul><br><ul><li>• Type used for creating type aliases, including primitive, union, and intersection types.</li><li>• Ideal for representing types unrelated to objects, like custom type aliases for calculations.</li><li>• Doesn't support declaration merging.</li></ul>",
    topic: {
      name: 'TypeScript',
    },
  },
  {
    title: 'Main Features',
    content:
      '<ul><li>• Decoupling: Microservices operate independently, with changes to one service not affecting others, allowing for easy building, modification, and monitoring.</li><li>• Componentization: Software is divided into components that work together via network connections, enabling easy component replacement and specialization.</li><li>• Business Capabilities: Microservices are aligned with specific business capabilities, executing individual functions efficiently.</li><li>• Responsibility: Developers take responsibility for their microservices, gaining better understanding and control.</li><li>• Continuous Delivery: Codes are developed in advance and can be deployed quickly without delays, streamlining updates.</li><li>• Decentralized Governance: Microservices governance is flexible, allowing developers to choose various solutions and resources.</li><li>• Agility: Microservices provide agility, enabling rapid adjustments to changing demands and easy acceptance or rejection of updates.</li></ul>',
    topic: {
      name: 'Microservices',
    },
  },
  {
    title: 'Main Components',
    content:
      '<ul><li>• Service Discovery: Helps services find and connect to each other dynamically - Services register in a central registry, and others query it to locate needed services.</li><li>• Load Balancer: Distributes incoming traffic across service instances for load distribution and fault tolerance - Routes client requests to service instances based on predefined rules.</li><li>• API Gateway: Sits between the clients and services and acts as a reverse proxy to route requests from clients to the APIs behind the dataway. It encapsulates the internal structure of the application and hides it from the outside the world, so the client need not know the ip adresses or domain names of each APIs of microservices. Also it provides security, authenticatoin, monitoring, load-balancing, caching and more.</li><li>• Service Registry: Maintains a database of available services for dynamic discovery - Services self-register and query the registry to find others.</li><li>• Circuit Breaker: Enhances fault tolerance by preventing repeated calls to failing services - Monitors service health and opens the circuit if consistently failing, with a timeout for reevaluation.</li><li>• Service Monitoring: Tracks microservice health, performance, and behavior for troubleshooting and optimization - Collects metrics, logs, and traces from microservices using monitoring tools.</li><li>• Service Orchestration: Coordinates multiple microservices to complete complex workflows - Defines and manages the sequence of microservice executions.</li><li>• Configuration Server: Centralizes dynamic configuration settings for microservices - Stores configuration data in a central repository, allowing microservices to fetch updates without restarts.</li></ul>',
    topic: {
      name: 'Microservices',
    },
  },
  {
    title: 'Security',
    content:
      'Security involves implementing authentication, authorization, and data encryption at various levels. Tools like OAuth2, JWT, and API gateways play a crucial role in securing microservices.<br>Regular security audits, code reviews, and penetration testing are essential for maintaining a secure microservices architecture.',
    topic: {
      name: 'Microservices',
    },
  },
  {
    title: 'Monitoring',
    content:
      'Monitoring microservices is crucial for ensuring their availability and performance.<br>Tools like Prometheus, Grafana, and ELK (Elasticsearch, Logstash, Kibana) are commonly used for monitoring.<br>Metrics, logs, and tracing are collected from each service to detect issues and optimize performance.',
    topic: {
      name: 'Microservices',
    },
  },
  {
    title: 'Deploying',
    content:
      'Microservices can be deployed independently using containerization technologies like Docker. Kubernetes is a popular choice for orchestrating the deployment of microservices. Continuous Deployment pipelines and Infrastructure as Code (IaC) tools such as Terraform or Ansible help automate deployment processes.',
    topic: {
      name: 'Microservices',
    },
  },
  {
    title: 'PACT',
    content:
      'Pact is a contract testing tool that ensures the compatibility and reliability of interactions between microservices.<br>It allows you to define contracts for expected interactions between services and then verifies that each service adheres to its contract.<br>Pact helps catch integration issues early and promotes collaboration between teams responsible for different services.',
    topic: {
      name: 'Microservices',
    },
  },
  {
    title: 'RabbitMQ',
    content:
      'RabbitMQ is an open-source message broker software that provides a way for different applications or services to communicate with each other by passing messages.<br>It is often used as a middleware solution to facilitate asynchronous communication between components of a distributed system.<br>RabbitMQ implements the Advanced Message Queuing Protocol (AMQP), which is a standardized protocol for messaging.<ul><li>• Producer: The sender of the message is known as the producer. Producers send messages to RabbitMQ exchanges.</li><li>• Exchange: An exchange receives messages from producers and routes them to one or more queues based on routing rules and message properties.</li><li>• Queue: Queues are where messages are stored until they are consumed by consumers (subscribers). Multiple consumers can subscribe to the same queue, allowing load distribution.</li><li>• Consumer: Consumers are applications or services that subscribe to queues and process messages. They can acknowledge the successful processing of a message, which removes it from the queue.</li><li>• Bindings: Bindings define the relationship between exchanges and queues.</li></ul>',
    topic: {
      name: 'Microservices',
    },
  },
  {
    title: 'What is DynamoDB',
    content:
      "DynamoDB is a managed NoSQL database service by AWS.<br>It's designed for high availability, scalability, and low-latency data access.<br>It's schema-less and suitable for various data structures and use cases, such as real-time and low-latency apps.<br>It automatically scales to handle traffic and data volume.<br>It offers flexible consistency models, encryption, and access control.<br>But limited querying capabilities compared to some other databases, as it's optimized for key-based access.<br>And limited support for complex transactions.",
    topic: {
      name: 'DynamoDB',
    },
  },
  {
    title: 'Primary key',
    content:
      'The primary key is used to uniquely identify items in a DynamoDB table. There are two types of primary keys:<br>Partition Key (Hash Key): It is a single attribute that is used to partition the data across multiple servers for scalability.<br>Composite Key (Partition Key + Sort Key): It consists of two attributes - a partition key and a sort key. Together, they uniquely identify items within a partition and allow for efficient querying.',
    topic: {
      name: 'DynamoDB',
    },
  },
  {
    title: 'Global Secondary Indexes',
    content:
      'Global Secondary Indexes are additional indexes that you can create on DynamoDB tables to enable efficient querying on non-primary key attributes.<br>They provide flexibility in querying your data in different ways without impacting the performance of the main table.',
    topic: {
      name: 'DynamoDB',
    },
  },
  {
    title: 'Partition Key vs Sort Key',
    content:
      'The Partition Key is used to distribute data across multiple servers for scalability and load balancing.<br>It must be specified for every item in the table and is used as the primary method for querying data.<br>The Sort Key, if used, allows for range queries within a Partition Key.',
    topic: {
      name: 'DynamoDB',
    },
  },
  {
    title: 'Streams',
    content:
      'DynamoDB Streams capture changes made to items in a table and make them available in near real-time.<br>They are often used for building event-driven applications, auditing changes, and triggering actions in response to data modifications.',
    topic: {
      name: 'DynamoDB',
    },
  },
  {
    title: 'LSI vs GSI',
    content:
      ' A Local Secondary Index is an index that has the same Partition Key as the table but a different Sort Key.<br>It can only be used to query data within the same Partition Key.<br>A Global Secondary Index, on the other hand, can have different Partition and Sort Keys and can be used to query across all Partition Keys in a table.',
    topic: {
      name: 'DynamoDB',
    },
  },
  {
    title: 'Database Scaling',
    content:
      "Database scaling is the process of increasing a database system's capacity and performance to handle growing data and traffic.<ul><li>• Vertical Scaling (Scaling Up): Upgrade server hardware for more capacity. It's straightforward but has limitations due to physical constraints.</li><li>• Horizontal Scaling (Scaling Out): Add more servers through techniques like sharding and replication.</li><li>- Sharding: Data is divided among multiple servers, greatly improving capacity, but can add complexity in managing data distribution and consistency. </li><li>- Replication: Create copies of data from one database to multiple databases for load balancing and fault tolerance. Requires careful management for data consistency. </li><li>• Caching: Store frequently accessed data in memory to boost read performance and reduce database load.</li><li>• Database Partitioning: Divide large tables into smaller partitions on different storage devices or servers to enhance query performance and data management.</li><li>• Optimizing Queries and Indexing: Review and optimize your queries and indexing to alleviate strain on your database server caused by poorly written queries.",
    topic: {
      name: 'Databases',
    },
  },
  {
    title: 'SQL Locks',
    content:
      'SQL locks are mechanisms used to control access to data and ensure data consistency in multi-user environments. <ul><li>• Shared Lock (S): Allows multiple read operations simultaneously but blocks writes.</li><li>• Exclusive Lock (X): Ensures exclusive write access to a resource.</li><li>• Intent Locks (IS and IX): Indicate intentions to acquire shared or exclusive locks on lower-level resources.</li><li>• Update Lock (U): Used for read-then-update scenarios, compatible with other update locks.</li><li>• Schema Locks (Sch-M and Sch-S): Control schema changes and read access to schema.</li><li>• Bulk Update Lock (BU): Optimizes concurrent bulk updates.</li><li>• Shared Intent Exclusive (SIX) Lock: Combines shared and intent exclusive locks for reading and updating.</li><li>• Key-Range Locks: Lock specific key or row ranges for fine-grained control.</li><li>• Table and Row-Level Locks: Lock entire tables or individual rows for more precise control.',
    topic: {
      name: 'Databases',
    },
  },
  {
    title: 'Composite indexes',
    content:
      'A composite index, also called a multi-column index, involves multiple table columns.<br>It optimizes queries that filter, sort, or group by multiple columns.<br>The order of columns in the index matters for query optimization.<br>Composite indexes can improve query performance but require careful design and consideration of storage and maintenance overhead.<br>Most relational databases and MongoDB support them.',
    topic: {
      name: 'Databases',
    },
  },
  {
    title: 'EXPLAIN ANALYZE',
    content:
      'SQL command used to analyze how a database query will be executed and to obtain performance statistics. It generates an execution plan, estimates resource costs, and provides actual execution statistics after running the query. This helps with query optimization and performance tuning in relational databases.',
    topic: {
      name: 'Databases',
    },
  },
  {
    title: 'Schema',
    content:
      'SQL schema is a container that holds related database objects. It typically includes tables for data storage, views for customized data presentation, indexes for query performance, constraints for data integrity, stored procedures and functions for code logic, triggers for automated actions, and roles/permissions for access control.',
    topic: {
      name: 'Databases',
    },
  },
  {
    title: 'Temporary tables',
    content:
      "Temporary tables in SQL are short-lived tables used for tasks like storing intermediate results or isolating data within a session. They exist only during the session and are automatically dropped when it ends (e.g., the user logs out or the query is completed). They're created with CREATE TEMPORARY TABLE and can help manage complex operations and isolate data. Use them wisely to avoid unnecessary overhead.",
    topic: {
      name: 'Databases',
    },
  },
  {
    title: 'Aggregate Functions',
    content:
      "<ul><li>• COUNT(): Returns the number of rows in a result set. Example: SELECT COUNT(*) FROM orders;</li><li>• SUM(): Calculates the sum of a numeric column's values. Example: SELECT SUM(salary) FROM employees;</li><li>• AVG(): Computes the average value of a numeric column. Example: SELECT AVG(price) FROM products;</li><li>• MIN(): Retrieves the minimum value in a column. Example: SELECT MIN(age) FROM customers;</li><li>• MAX(): Retrieves the maximum value in a column. Example: SELECT MAX(score) FROM exams;",
    topic: {
      name: 'Databases',
    },
  },
  {
    title: 'Fault tolerance',
    content:
      "ault tolerance means a system's ability to keep working, even when parts of it fail. It uses redundancy, error detection, and recovery to maintain functionality.<br><br>To follow fault tolerance:<ul><li>• Handle errors with try...catch or then ... catch, validation and error-handling middleware.</li><li>• Use retry mechanisms for network and database interactions.</li><li>• Monitor and log app health and performance.</li><li>• Balance traffic with load balancers.</li><li>• Use the cluster module for multi-core machines.</li><li>• Implement health checks and backups.</li><li>• Use fault-tolerant libraries and test for resilience.",
    topic: {
      name: 'Principles',
    },
  },
  {
    title: 'Gateway vs Gateway API vs Reverse proxy',
    content:
      'Gateway: Manages traffic between networks or services.<br>Gateway API: Provides a structured interface for external systems to interact with services.<br>Reverse Proxy: Serves as an intermediary between clients and servers, often for load balancing and security.',
    topic: {
      name: 'Microservices',
    },
  },
  {
    title: 'Utility Types',
    content:
      'Partial<T>: Makes all properties of T optional.<br>Required<T>: Makes all properties of T required.<br>Readonly<T>: Makes all properties of T read-only.<br>Record<K, T>: Creates an object type with keys of type K and values of type T.<br>Pick<T, K>: Selects specific properties K from type T.<br>Omit<T, K>: Excludes specific properties K from type T.<br>Exclude<T, U>: Excludes all types in U from T.<br>Extract<T, U>: Extracts all types in U from T.<br>NonNullable<T>: Removes null and undefined from T.',
    topic: {
      name: 'TypeScript',
    },
  },
  {
    title: 'Pub/Sub vs Event Emitter',
    content:
      "Pub/Sub and Event Emitter are both communication patterns used in software development to manage the exchange of information between components or modules.<br><br>Publish/Subscribe:<br>Loose Coupling: In a Pub/Sub pattern, publishers (those who send messages) don't need to know anything about subscribers (those who receive messages). It promotes loose coupling between components.<br>Scalability: Pub/Sub is well-suited for scenarios where there are multiple publishers and multiple subscribers, making it scalable.<br>Asynchronous: Messages are typically sent asynchronously, which can help in building responsive systems.<br>Event Type Agnostic: Subscribers can listen to specific topics or events of interest, and there can be various types of events.<br>Message Broker: Often, a message broker or intermediary (like RabbitMQ, Redis Pub/Sub) is used to manage and distribute messages.<br><br>Event Emitter:<br>Tight Coupling: Event Emitters are usually tied to a specific object or module. The emitter and its listeners are closely coupled.<br>Synchronous: Events are typically emitted synchronously, meaning the emitter will execute all event listeners one after another before continuing.<br>Intra-object Communication: Event Emitters are commonly used for communication within a single object, such as in Node.js for building custom event-driven classes.<br>Limited Event Types: Event Emitters are typically associated with a specific set of event types predefined by the emitter class.",
    topic: {
      name: 'Patterns',
    },
  },
  {
    title: 'High-level Design vs Low-level Design',
    content:
      'Low-level design and high-level design are two stages in the software development process that focus on different aspects of a software system.<br><br>High-Level Design (HLD) outlines the overall structure and purpose of a software system without diving into specifics. It defines major components, modules, and their interactions using architectural concepts, producing architectural diagrams and documentation.<br>HLD components: System Architecture, Module Design, Data Flow Diagrams (DFD), User Interface Design, Database Design, Security Design<br><br>Low-Level Design (LLD) delves into technical details, specifying how each component/module from HLD will be implemented. It covers data structures, algorithms, APIs, and more, resulting in detailed code-level documentation, diagrams, and schemas to guide implementation.<br>LLD components: Detailed Module Design, Class Diagrams, Sequence Diagrams, Data Structure Design, Database Schema, Code Modules, Input/Output Design, Testing Strategy',
    topic: {
      name: 'Patterns',
    },
  },
  {
    title: ' Software Development Life Cycle',
    content:
      'SDLC is a process used for planning, creating, testing, and deploying software. It typically includes phases like requirements gathering, design, implementation, testing, deployment, and maintenance.',
    topic: {
      name: 'Principles',
    },
  },
  {
    title: 'Abstraction vs Encapsulation',
    content:
      'Abstraction is the process of simplifying complex systems by breaking them into smaller, more manageable parts. Encapsulation, on the other hand, is the practice of hiding the internal details of an object and providing a controlled interface to interact with it.',
    topic: {
      name: 'Principles',
    },
  },
  {
    title: 'Abstract class vs Interface',
    content:
      "Abstract classes and interfaces are both mechanisms in object-oriented programming that allow you to define a shape for classes to implement,<br><br>Abstract Class:<br>Can have both abstract and concrete methods.<br>Supports constructors.<br>Allows single inheritance.<br>Provides partial abstraction.<br>Used for a common base with shared implementation.<br><br>Interface:<br>Has only abstract method declarations.<br>Doesn't support constructors.<br>Allows multiple inheritance.<br>Provides full abstraction.<br>Used to define contracts for unrelated classes to implement.",
    topic: {
      name: 'TypeScript',
    },
  },
  {
    title: 'Stored Procedure',
    content:
      'A SQL Stored Procedure is a precompiled collection of SQL statements stored in a database. They offer advantages such as code modularity, reusability, security, parameterization, and transaction control. Stored Procedures encapsulate complex logic, making them useful for various database operations like inserts, updates, and more.',
    topic: {
      name: 'Databases',
    },
  },
  {
    title: 'Message Queue',
    content:
      "A message queue is a communication system that allows different parts of a software system or applications to exchange data asynchronously. Message queues decouple components, enable load balancing, provide fault tolerance, and support scalable and ordered message processing.<br><br>Components:<br>Message: contains information to be communicated between different parts of a system. Messages can take various forms, such as commands, events, requests, or notifications.<br>Queue: stores messages in the order they're received from producers. It processes messages in a first-in, first-out manner.<br>Producer: creates and sends messages to the message queue.<br>Consumer: receives and processes messages from the message queue.<br>Message Broker (Optional): intermediary between producers and consumers manages the routing, delivery, and possibly filtering of messages.",
    topic: {
      name: 'Microservices',
    },
  },
  {
    title: 'Publish-Subscribe',
    content:
      'Pros:<br>Decouples publishers and subscribers, allowing for scalability and flexibility.<br>Supports broadcasting messages to multiple subscribers.<br>Cons:<br>Complex to implement in distributed systems.<br>May lead to message overload if not properly managed.<br>Suitable for:<br>Event-driven architectures and real-time changes, where multiple consumers need to be notified of updates (e.g., news feeds, IoT systems).',
    topic: {
      name: 'Patterns',
    },
  },
  {
    title: 'Peer-to-Peer',
    content:
      'Pros:<br>Direct communication between peers without intermediaries.<br>Efficient for small-scale systems with low latency requirements.<br>Cons:<br>Difficult to manage in large networks.<br>May require more effort to establish connections.<br>Suitable for:<br>Small-scale file sharing, chat applications, and decentralized networks (e.g., BitTorrent).',
    topic: {
      name: 'Patterns',
    },
  },
  {
    title: 'Request-Reply',
    content:
      'Pros:<br>Synchronous communication with clear request-response semantics.<br>Easier to implement and debug.<br>Cons:<br>Can lead to blocking and reduced responsiveness in distributed systems.<br>May not be suitable for real-time or highly concurrent applications.<br>Suitable for:<br>Traditional client-server architectures, database queries, and situations where a clear response is required (e.g., web APIs).',
    topic: {
      name: 'Patterns',
    },
  },
  {
    title: 'BASE',
    content:
      "BASE is often associated with NoSQL databases and distributed systems that prioritize availability and partition tolerance over strict consistency. It's suitable for systems where a slight delay in consistency is acceptable, such as social media platforms or content delivery networks.<br>Basically Available: The system remains available for reads and writes, even in the presence of network partitions or failures. Availability is prioritized over consistency.<br>Soft State: The system's state may change over time due to eventual consistency. It doesn't guarantee that all nodes in a distributed system will see the same data at the same time.<br>Eventually Consistent: Over time, the system will converge to a consistent state, but it may not be immediately consistent. It's a trade-off for high availability and partition tolerance.",
    topic: {
      name: 'Databases',
    },
  },
  {
    title: 'GRASP',
    content:
      "General Responsibility Assignment Software Patterns, is a set of principles in object-oriented software design. It helps developers assign responsibilities to classes and objects:<br>Information Expert: Assign responsibility to the class with the most information.<br>Creator: Assign creation responsibility to the class that contains or aggregates an object.<br>Controller: Assign responsibility for handling system events or use cases to specific classes (controllers).<br>Low Coupling: Minimize dependencies between classes for flexibility.<br>High Cohesion: Keep related responsibilities together within a class.<br>Polymorphism: Use interfaces and abstract classes to allow interchangeability.<br>Pure Fabrication: Create new classes for responsibilities with no natural fit.<br>Indirection: Use intermediary classes to reduce direct dependencies.<br>Protected Variations: Shield a class's internal structure from external influence.",
    topic: {
      name: 'Patterns',
    },
  },
  {
    title: 'Classes vs Interfaces',
    content:
      'Classes:<br>Blueprint for Objects: Used to encapsulate data and behavior.<br>Can be Instantiated: const myDog = new Dog();<br>Members: Contains properties, methods, constructors, and accessors.<br>Supports Inheritance: Uses extends keyword.<br>Access Modifiers: Has private, protected, and public.<br>Has Storage: Memory allocation for instances.<br><br>Interfaces:<br>Shape Definition: Defines the structure or contract of an object.<br>No Instantiation: Only for type-checking.<br>Members: Describes properties and methods, but no implementations.<br>Extensibility: Can extend other interfaces.<br>Can be Combined: Multiple interfaces with the same name merge.<br>No Runtime Presence: Disappears during JavaScript compilation.',
    topic: {
      name: 'TypeScript',
    },
  },
  {
    title: 'Private and protected',
    content:
      'TypeScript introduces access modifiers like private, protected, and public for class properties in order to control their visibility and access.',
    topic: {
      name: 'TypeScript',
    },
  },
  {
    title: 'Accessors',
    content:
      "Accessors in JavaScript refer to 'get' (Getters) and 'set' (Settors) methods that allow to define object methods as a properties that are accessed and set using traditional property syntax, but with additional features:<br><br>Encapsulation: While JavaScript doesn't have private properties, by convention, developers use underscores for it (_propertyName). Getters allow access to such properties without allowing direct modification.<br>Validation or Transformation: With setters, can check or transform data before setting a property.<br>Computed Properties: With getters, values can be computed based on other properties.<br><br>Getters works when you read a property.<br>Set works when you write a property",
    topic: {
      name: 'JavaScript',
    },
  },
  {
    title: 'Additional Data Structures',
    content:
      'Set (ES6): Represents a collection of values where each value must be unique.<br>Map (ES6): Represents a collection of key-value pairs where any value can be used as a key (not just strings).<br>WeakSet and WeakMap (ES6): Similar to Set and Map, but they do not prevent their elements (or key-value pairs) from being garbage-collected.',
    topic: {
      name: 'JavaScript',
    },
  },
  {
    title: 'Super keyword',
    content:
      "In JavaScript, the super keyword is used in the context of classes, especially when dealing with inheritance. It refers to the parent class (or superclass). Here are the primary ways super is used:<br>When extending a class, if you want to call the constructor of the parent class, you use super() in the constructor of the derived class.<br>Accessing Parent Class Methods:If a derived class has a method with the same name as a method in its parent class, you can use super to refer to the parent class's method.<br>Using super in Object Literals: You can also use super to reference methods on an object's prototype.<br>It's crucial to understand that super is context-dependent. When used inside a constructor, super() refers to the parent class's constructor. When used inside a method, it refers to the parent class's methods.",
    topic: {
      name: 'JavaScript',
    },
  },
  {
    title: 'Separation of Concerns',
    content:
      'Separation of Concerns (SoC) is a design principle that recommends dividing a software application into distinct sections, with each addressing a specific functionality or responsibility. <br>Common implementations of SoC include:<br>Layered Architectures: Dividing software into layers like user interface, business logic, and data access.<br>Modular Programming: Breaking applications into smaller, independent modules.<br>Microservices Architecture: Building software as small, independent services.<br>Model-View-Controller (MVC): Separating data (Model), display (View), and actions (Controller) in web development.',
    topic: {
      name: 'Principles',
    },
  },
  {
    title: 'CQRS',
    content:
      'Command-Query Responsibility Segregation (CQRS) is an architectural pattern that suggests to separate the responsibility for handling read operations (queries) from write operations (commands). The most common strategies for synchronizing is Eventual Consistency. Commands emit events; queries update read models later. A small delay might occur between writes and reads.<br><br>Pros:<br>Separation of concerns. The model separates the read and write operations into separate models.<br>Scalability. The read and write operations can be scaled independently.<br>Flexibility. The model allows for the use of different data stores for read and write operations.<br>Performance. The model allows for the use of different data stores optimized for read and write operations.<br><br>Cons:<br>Longer Development Time: Setting up routing login, business login, several data stores can extend initial development.<br>Data Consistency: Achieving consistency and synchronization between separate data stores can be challenging.<br>Event Versioning: Managing changes to events over time can be complex.<br>Higher Costs: Running multiple data storage systems can increase expenses.<br>Testing Challenges: Eventual consistency and event handling complicate testing.<br>Not Always Suitable: Overkill for small applications.',
    topic: {
      name: 'Patterns',
    },
  },
  {
    title: 'Idempotence',
    content:
      "Idempotence design principle ensures that executing an operation multiple times has the same effect as executing it once.<br>?Implementation can be achieved with Middlewares and Unique Identifiers (ID) and : before processing a command, the system can check if this ID has been processed before. If it has, the command can be safely ignored.<br>Examples:<br>HTTP Methods: GET, PUT, and DELETE should not change the state of a resource irrespective of how many times they're executed.<br>Database Operations: Repeatedly setting a database field to a specific value.<br>Pros:<br>Reliability: Easier recovery from failures.<br>Simplicity: Predictable system behavior.<br>Scalability: Idempotent operations can be easily parallelized.<br>Cons:<br>Overhead: Additional infrastructure to ensure idempotence.<br>Complexity: Ensuring idempotency can be complex for sequences of operations.<br>Performance: Possible implications due to added checks.",
    topic: {
      name: 'Principles',
    },
  },
  {
    title: 'Execution Order',
    content:
      "1. Synchronous Code: Node.js runs the synchronous code in Call Stack  from top to bottom (LIFO).<br>2. Event Loop Initialization: When the synchronous code completes, Node.js initializes its event loop.<br>3. Task Queue: responds for execution order of asynchronous code (Callback Queue).<br>4. Microtasks: Promises have a first priority of executing<br>5. Timers: Checks and executes any set timers (setTimeout, setInterval).<br>6. I/O Callbacks: Executes callbacks from I/O operations (like network requests or ?file system actions).<br>7. Idle, Prepare: Internal phases used by Node.js for optimizations.<br>8. I/O Poll: Checks for new I/O events, executes their callbacks.<br>9. Check Handlers: Executes setImmediate callbacks.<br>10. Close Callbacks: Executes callbacks for closing operations, like socket.on('close', ...).<br>11. Loop Back: If there are more tasks in any phase, Node.js loops back to that phase.<br>12. Exit: If no tasks are left, Node.js exits the event loop and the process terminates.",
    topic: {
      name: 'Node.js',
    },
  },
  {
    title: 'Reactor Pattern',
    content:
      'The Reactor Pattern is a design pattern to handle concurrent requests in an event-driven architecture.<br>Reactor: Manages the event loop, dispatching events when they occur. The libuv library acts as the reactor.<br>Event Demultiplexer: Monitors asynchronous I/O operations and informs the reactor about ready events. Libuv handles this.<br>Event Handlers: Callback functions registered to respond to specific events.',
    topic: {
      name: 'Node.js',
    },
  },
  {
    title: 'What is SOAP?',
    content:
      "Protocol: SOAP can operate over multiple protocols such as HTTP, SMTP, TCP, and more. However, in practice, it's most commonly used with HTTP.<br>Message Format: Uses XML for its message format.<br>Error Handling: Provides specific error-handling through the use of fault elements in the XML.<br>Complexity: Generally considered more complex due to its strict standards and extensive XML enveloping.<br>Security: Has built-in security known as WS-Security.<br>Remote Procedure Calls (RPC): Often used to implement networked function calls.<br>Use Cases: Preferred for enterprise-level web services, especially where security and ACID-compliant transactions are required.",
    topic: {
      name: 'Principles',
    },
  },
  {
    title: 'Mutex vs Semaphore',
    content:
      'Mutex and semaphore are synchronization primitives used in concurrent programming to ensure that multiple threads or processes can safely access shared resources or execute specific sections of code without conflicts. <br>Mutex:<br>Purpose: Ensures only one thread accesses a section of code or resource at a time.<br>Functionality: Provides lock and unlock operations. If locked, other threads are blocked until unlocked.<br>Ownership: Only the thread that locked the mutex can unlock it.<br>Use: Protecting shared data like global variables, ensuring single access to a shared resource (like a file), or making critical sections of code thread-safe.<br>Semaphore:<br>Purpose: A signaling mechanism controlling access to shared resources by multiple threads.<br>Functionality: Uses wait and signal operations. Manages a count, allowing multiple threads access based on its value.<br>Types:<br>- Binary: Acts like a mutex.<br>- Counting: Manages multiple resource instances.<br>Ownership: No specific owner. Any thread can signal.<br>Use: Coordinates multiple threads, manages resource pools.',
    topic: {
      name: 'Principles',
    },
  },
  {
    title: 'What is gRPC?',
    content:
      'An open-source remote procedure call (RPC) framework by Google. Uses HTTP/2 and Protocol Buffers (protobuf).<br>Pros:<br>Efficiency: uses HTTP/2, which supports multiplexing (multiple requests for multiple services over a single connection) and binary data transmission which is faster and more efficient than textual formats like JSON or XML. <br>Bi-directional Streaming: supports real-time data exchange<br>Built-in Features: Offers integrated authentication, load balancing, and more.<br>Cons:<br>Complexity: For simple use-cases, gRPC can be overkill. It can introduce more complexity than traditional REST.<br>Debugging: Being a binary protocol, it can be less intuitive to test and debug than textual ones.<br>Use Cases:<br>Microservices Communication: With its lightweight protocol and built-in features, gRPC is commonly used for inter-service communication in microservices architectures.<br>Real-time Applications: With bi-directional streaming capabilities, gRPC can support real-time updates, making it suitable for applications like chat services, live updates, etc.<br>High-performance Applications',
    topic: {
      name: 'Microservices',
    },
  },
  {
    title: 'Tuples',
    content:
      'In TypeScript, tuples are array-like structures where each element can have a specified type.<br>Tuples enable storing a fixed collection of values of varied types, and the syntax for defining a tuple type involves writing the types of elements within square brackets, in order.',
    topic: {
      name: 'TypeScript',
    },
  },
  {
    title: 'SLAP',
    content:
      'The Single Level of Abstraction Principle in software engineering asserts that a function or method should operate at a single level of abstraction. This approach ensures that all the statements within a function are at the same level of detail, enhancing readability and maintainability. It separates high-level logic from low-level details, making the code more cohesive, understandable, and easier to modify.',
    topic: {
      name: 'Principles',
    },
  },
];
