# Keee Inventory Frontend Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.20.

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

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Structure

src/
  app/
    core/               <-- servicios comunes, guards, interceptors
    shared/             <-- componentes reutilizables
    auth/               <-- login, autenticación
    layout/             <-- dashboard, sidebar, navbar
    features/
      products/         <-- vista productos
      categories/       <-- vista categorías
    app-routing.module.ts
    app.component.ts

## Estudio

# ¿Qué es un módulo en Angular?

Un módulo en Angular es una clase que organiza y agrupa funcionalidades relacionadas de una aplicación. Actúa como un contenedor que encapsula componentes, servicios, directivas, pipes, etc., para facilitar la modularidad y la escalabilidad del proyecto.

Todo para:
-Organizar el código en bloques lógicos.
-Facilitar la reutilización y el mantenimiento.
-Gestionar la inyección de dependencias.
-Dividir la aplicación en partes más manejables (por ejemplo, módulos para autenticación, dashboard, etc.).

# ¿Qué es un componente en Angular?

Un componente es la unidad básica de construcción de una aplicación Angular. Representa una parte de la interfaz de usuario (UI), que puede ser desde una pantalla completa hasta una pequeña vista reutilizable.

-HTML: La plantilla que describe la estructura de la vista.
-CSS/SCSS: Los estilos específicos del componente (encapsulados por defecto).
-TypeScript (TS): La lógica del componente, incluyendo propiedades, métodos y manejo de eventos.
-Spec.ts: Archivo para pruebas unitarias (usado con frameworks como Jasmine o Karma).

Todo para:
-Crear vistas reutilizables y modulares.
-Gestionar la lógica y los datos específicos de una parte de la UI.
-Encapsular la funcionalidad para mantener el código organizado.
