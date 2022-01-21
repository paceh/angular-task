# AngularTask

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.10.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:8888/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Linting

Run `ng lint` to execute [ESLint](https://github.com/typescript-eslint/typescript-eslint).

## Available routes:
home page (default route: `/`)    
user profile page (route: `/profile`)

# Assignment details

## Instructions:

Fork this repo and complete the following task. *Please do not spend more than 2 hours on this project.* Please submit a pull request with your work once finished.

### Task
One of the goals of this task is to measure your understanding of ngrx and the redux pattern.  
Use ngrx and create or modify appropriate actions, reducers, and selectors.

1. The user profile page is currently loaded with dummy data. Use the public API at [Random User Generator](https://randomuser.me/)
to pull in a random user and populate the profile page. You should get the relevant data from the API to fill a `ProfileStore`.

2. Create a new page, a profile list. Pull in 10 random profiles to populate this list, storing them in the state, and make each profile list item clickable, sending the user to a user details page with that user data. The user profile page route should be adjusted to take an optional id param, which if missing will show a random user (step 1)

The UI is up to you, although it is recommended to use Angular Material components. 
