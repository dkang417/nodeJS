# nodeJS
A simple NodeJS Web Service 
1.Capable of responding to HTTP GET requests
2.The endpoint "/posts" makes a request to https://jsonplaceholder.typicode.com/posts and renders an EJS view using the returned data.
  Only the title and body of all the posts are displayed on the DOM.
3. The endpoint "/aboutme" responds data in JSON format for questions.
4.  Parameter: description. Returns response for question: Tell me a little bit about yourself?
    Parameter: tech. Returns response for question: What excites you about technology? 
    Parameter: techstack . Returns response for question: What is your preferred technology stack?
    Parameter: hobbies. Returns response for question: What are your favorite hobbies?
5. Any request to an endpoint that is not defined returns 'Not Found' as plain text
