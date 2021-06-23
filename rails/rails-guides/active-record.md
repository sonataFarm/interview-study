# Active Record

## What is Active Record?
Active Record is an ORM that abstracts viewing and interacting with your data.

## Naming Conventions

  - Model is singular, CamelCase; DB table is plural, snake_case:
    - BookClub : book_clubs

## CRUD Operations

### Create

  - `new` returns a new ActiveRecord object
  - `save` saves to DB
  - `create` creates, saves and returns a new AR object 

### Read
  - `::all` returns all records of a given model type
  - `::first` returns first record
  - `::find_by(key: value)` 
  - `::where(key: value)` 

### Update
  - `update(key: value)`

### Delete
  - `destroy`
  - `::destroy_by(key: value)`
  - `::destroy_all`

## Validations

Validations allow you to validate the state of a model before persisting to the DB. They're triggered by `save` and `update`, which return false if the model fails validation.

Using `save!` and `update!` instead raise exceptions.

## Callbacks

Callbacks enable you to attach methods to various lifecycle events, such as validation, save, create and destroy.

## Migrations

Rails uses a domain-specific language for managing database schemas. This allows developers to easily roll back and forward changes to the DB schema. 