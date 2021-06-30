# ucb2021_base
Drupal 9 Base theme for CU Boulder web properties

## Installation
Add below to `composer.json` require section:
````
"cu-boulder/ucb2021_base" : "dev-main"
````

Add to repositories section:
````
{
    "type": "git",
    "url" : "https://github.com/CuBoulder/ucb2021_base.git"
}
````

**Note:** This theme is installed and set as the default with the profile

## Linting

We are using stylelint and eslint

````
npm install          # install linters
npm run stylelint    # lint css
npm run eslint       # lint js
````
Linting is run automatically on all pull requests
