# todomvc-automated-testing-js
Todos application is quite a nice application to practice your automation skills.


## Testing Approach 

The first step you can do, when get an application for testing without documented requirements is to detect boundaries where you may found expected results by providing some exploratory testing.

### Exploratory testing results

Exploratory testing revealed that application hasn't boundaries: 
 * it allows to input lots of todo items (after 1000 items I stopped my investigation, since 1000 todo items looks like un-realistic production scenario. I don't think that someone will plan 5 years of his life ahead without an ability to save it for the time being. Cookies store this data, but 6 months only);
 * it allows to enter string that is long enough to detect some limits: I tried a string that was 15000 chars in length and it takes 225 seconds to generate it from the list of random values. Such long strings also look like un-realistic production scenario;
 * it accepts different charsets, like emodji, Arabic scripts, Russian/Ukrainian/Greek/Japanese/Chinese letters (characters). And everything is displayed in the same way as it is sent;
 * leading spaces are trimmed before submission;
 * empty strings are not allowed

 ### Observations

 Though the application hasn't strict validation rules, couple of observations are worth to be mentioned:
 * Most probable during item editing, when the value is removed or is replaced with spaces, item should be removed (or it makes no sense to keep empty item without a name). But the empty row appears instead;
 * when item is in the editing mode (after double clicking) and another item is double-clicked, the edition of the first editing item should be canceled and editing focus should be moved to the next field. But, both item are available for editing. And every item can be added in the editing mode.
 * item edition doesn't work on Android mobile browser, since double-click leads to the zooming functionality; item submission doesn't work on the Safari mobile browser on iPhone;
 * a bit weired is to be able to edit the todo name after item is completed

 ## Automation approach

 The critical path of the application consists of the following steps:
 add item(s) -> complete item(s)/update if necessary -> hide completed item(s) -> delete item(s)
 The tests, allowing to ensure this workflow works, should be automated. Since the 4 tests only should be covered, I think that the less critical functionality to skip is "hide completed item(s)". 
 Thus, the test cases, those are automated:
  - add items to the list (including counter check)
  - complete items in the list (including counter check)
  - update/edit items in the list
  - delete items from the list

## Deliverables

The following deliverables are available:
* automated application tests, available in `cypress/cypress/integration/todos`
* instructions and motivation, available in `README.md`
* test cases, describing automated scenarios are in ODS and PDF versions (the same file): `todomvc-test-cases.ods` and `todomvc-test-cases.pdf`

# How to run automated tests

To run the tests the npm package needs to be installed.

## Installing the project

1. Install node.js from official website (https://nodejs.org/en/download/)
2. Clone / download repository -> https://github.com/oleg--manzhos/todomvc-automated-testing-js
3. Open terminal (available for your operation system)
4. Navigate to cloned directory (cd - change folder that you are in )
5. Run command `npm install` or `npm i`

## Tests execution

There are 2 options used for automation test execution:
- execution via the OS terminal
- execution via Cypress UI

### Running from command line
 
To run tests via terminal:
 * Use `npx cypress run --browser chrome` to run in Chrome browser
 * add headless flag to run in a headless mode: npx cypress run --browser chrome --headless
 * use another supported browser e.g. chromium, edge : `npx cypress run --browser edge`
 
To run specific specification, put its explicit name:
* `npx cypress run --spec 'cypress/integration/todos/add_items.spec.js' --browser chrome`
* `npx cypress run --spec 'cypress/integration/todos/complete_items.spec.js' --browser chrome`
* `npx cypress run --spec 'cypress/integration/todos/delete_items.spec.js' --browser chrome`
* `npx cypress run --spec 'cypress/integration/todos/update_items.spec.js' --browser chrome`

## GUI mode execution

1. In project directory run command `npx cypress open`
2. Start preferred test file by clicking its name