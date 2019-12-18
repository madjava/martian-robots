# martian-robots challenge

The martian-robots challenge has been implemented as a REST service that recieves instructions from a client and executes those instrcutions to move the robots to requested location.

## Getting set up

1. Clone the git repository at [martian-robots](https://github.com/madjava/martian-robots.git)
2. Nagivate into the repo and execute the following command

    ```bash
    npm i
    ```
    It is assumed that [Node](https://nodejs.org/en/download/) and [npm](https://www.npmjs.com) has be installed on your machine
3. To start the service run the command:
    
    ```bash
    npm start
    ```
    Service should start on the default port which is set to `3000`. If you prefare to use another port then specify your desired port like so:

    ```bash
    PORT=<your port> npm start
    ```

## The Application Endpoints

The service has two endpoints only

`GET /`

Will return some basic instructions on the expected payload

`POST /basestation`

Will expect a payload with commands for the robots, what orientation to take and how many points to move

Any other route would return a `404`

## Test
To run all test cases

```bash
npm test
```

This would execute all existing tests. [Jest](https://jestjs.io/en/) was used are the test runner

# Instructions

After the service is up and running, navigate to `/` path for futher information e.g `http://localhost:3000` or whatever port you may have specified
