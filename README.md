This is a base node js project template, which anyone can use as it has been prepared, by keeping some of the most important code principles and project management recommendations. 
Feel free to change anything.
### Setup the project
- Download this template from Git Hub and open it in a text editor of your choice.
- In the root directory create a .env file and add the following env variables :
  ```
    PORT=<port number of your choice>
  ```
  ex:
  ```
    PORT=3000
  ```
Inside the src/config folder create a file named as config.json and write the
following code:
```{
  "development": {
  "username": "root",
  "password": "mypassword",
  "database": "database_development",
  "host": "127.0.0.1",
  "dialect": "mysql"
  },
  "test": {
  "username": "root",
  "password": null,
  "database": "database_test",
  "host": "127.0.0.1",
  "dialect": "mysql"
  },
  "production": {
  "username": "root",
  "password": null,
  "database": "database_production",
  "host": "127.0.0.1",
  "dialect": "mysql"
  }
}
```
