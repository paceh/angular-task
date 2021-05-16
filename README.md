# Assumptions

It is reasonable to assume the following so we can limit the scope of this exercise.

1. Given the small number of pages and size of this application, we do not need to implement lazy loading of modules.

2. The random list of users for the user profile list page should be genereated once and stored in the Store for the life cycle of the application.  A hard page refresh will regenerate another random list of users. It is a normal use case for end-users to navigate between user profile list and profile details page for the same set of users.

3. The user profile list page will display users sorted by last name in ascending order and then first name in ascending orders.

4. We will not need to implement any responsive layout or design based on different screen sizes and devices.

5. We will not need to implement any loaders due to small reccord size.  Therefore, there is no need to have a loading flag in the Ngrx Store.

# AngularTask

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.10.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:8888/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

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
