# DemoIrdian


## Project Description

This project is an application developed in Angular version 16. The main objective of this application is to provide an intuitive and efficient user interface using Angular Material as the UI component library. The application also includes generic services for CRUD operations in LocalStorage and for consuming a local JSON file.

## Development Decisions

### Choice of Angular 16

I chose Angular version 16 for several reasons:

1. **Stability and Support**: Angular is a mature framework with broad support, an active community, and excellent documentation.
2. **Reusable Components**: Angular's component-based architecture allows for high code reuse and easy maintenance of the project.
3. **Updates and New Features**: Angular 16 includes various improvements and new features that optimize performance and enhance the development experience.

### Use of Angular Material

For the user interface, I opted for Angular Material for the following reasons:

1. **Predefined UI Components**: Angular Material provides a wide range of predefined UI components that are easy to use and customize.
2. **Design Consistency**: It helps maintain design consistency throughout the application, ensuring that all components look and behave coherently.
3. **Design Best Practices**: Angular Material components are designed following Google's best design practices, providing an excellent user experience.

### Generic Services

I implemented generic services to manage CRUD operations in LocalStorage and to consume a local JSON file:

1. **Code Reuse**: Generic services allow code reuse in different parts of the application, reducing duplication and improving maintainability.
2. **Business Logic Abstraction**: Encapsulating business logic in services keeps component code clean and focused on presentation.
3. **Ease of Testing**: Services are easily testable, which improves code quality and makes it easier to detect errors.

### No Use of Additional Libraries

I opted not to include additional libraries for the following reasons:

1. **Simplicity**: Keeping the project simple and free of unnecessary dependencies makes it easier to maintain and update.
2. **Performance**: Reducing the number of external libraries can improve application performance by reducing code and potential conflicts.
3. **Full Control**: Having full control over the code and implemented functionalities allows for greater customization and adaptability to specific project requirements.

## Installation and Usage

1. Clone this repository:
   ```bash
   git clone https://github.com/Seghino13/demoudian



## How run project in local?


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.14.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
