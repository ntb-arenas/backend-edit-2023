# Final project for backend module

The goal is to create an API for managing tasks ("todos").  
Each task has an ID (generated automatically by MongoDB), a description (string between 2 and 50 characters), a boolean indicating whether the task is done or not, and a due date (which needs to be transformed to be used in JSON). The API should allow the following operations:

- GET /api/todos - retrieve a list of all tasks, with optional query parameters for pagination and sorting
- GET /api/todos/{id} - retrieve a specific task by its ID
- POST /api/todos/ - create a new task
- PUT /api/todos/{id} - update an existing task by its ID
- DELETE /api/todos/{id} - delete a task by its ID
- GET /api/todos/search?description - search for tasks by their description, with optional query parameters for pagination and sorting

The API template implemented in this project is a creation of [Gerardo Lima](https://github.com/gerardolima).  
You can explore it [here](https://github.com/gerardolima/edit-2023-jan)
