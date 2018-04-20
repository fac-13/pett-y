# PETTYGRAM

## TO RUN THE PROGRAM:
```
$ npm git clone
$ cd pett-y
$ npm i (or npm install)
```

You will need to create a local postgres database

Create a config.env file in the root of the project add a **secret variable** (a series of random characters and numbers) and a **DB_URL** and set it equal to your database information in the following format:
```
DB_URL = postgres://USERNAME:PASSWORD@localhost:5432/DATABASE_NAME
SECRET = fdsajlkr43u89dsajklfgj43t43fds (whatever you want to make this)
```

In your terminal, run a build script
```
$ npm run build
```

You should now be ready to start the project

``` 
$ npm run dev
```

In your browser, navigate to localhost:3000! You should see something like this:
![home page of Pettygram](https://i.imgur.com/B5yr2Br.png)


## USER STORIES

#### As a user:
- I can visit the page to see photos posted by others
- I can post my own photo to share along with a caption
- I can receive confirmation that my picture has been posted
- I can click on a photo and see the individual photo and caption on another page

### STRETCH GOALS
- Utilizing session-cookie module
- Photo categories


## THE PROCESS

### Coming up with the idea
![Software architecting of views and file structure](https://i.imgur.com/NdSVJmV.jpg)

### Dividing tasks
![Planning division of tasks](https://i.imgur.com/glBVB6Y.jpg)
