[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## URL SHORTENER API
1. Clone the repository
2. npm install
3. npm run startdev

# REQUEST 
In development, The API exposes http://localhost:3000/shorten for shortening urls.
To shorten a URL, make a POST request to the above URL
The JSON request body should have the key 'link' with the URL to be shortened as its value. See example below

{"link":"https://www.google.com/storytimesforkids"}

# RESPONSE
The API will return a JSON response object with the shortened link. See example below
{"shortenedlink": "localhost:3000/gjpgq"}

## PRODUCTION
Before deploying this application to production, include environment variables in the config.env file that is located in the src/config folder.
Ive left a config-example.env to guide you.
