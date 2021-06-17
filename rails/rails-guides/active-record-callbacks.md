# Active Record Callbacks

## What are callbacks?

Active Record objects have a *life cycle* in which they may be:
  - created
  - updated
  - destroyed

Callbacks are methods that get called at various moments in an object's life cycle:
  - created
  - saved
  - deleted
  - validated
  - loaded

Register your callbacks in the model file:

`before_validation :reset_session_token!`

# Available callbacks

### Creating an Object
  - before_validation
  - after_validation
  - before_save
  - around_save
  - before_create
  - around_create
  - after_create
  - after_save
  - after_commit / after_rollback

### Updating an Object
  - before_validation
  - after_validation
  - before_save
  - around_save
  - before_update
  - around_update
  - after_update
  - after_save
  - after_commit / after_rollback

### Destroying an Object
  - before_destroy
  - around_destroy
  - after_destroy
  - after_commit / after_rollback

### Other
  - after_initialize
  - after_find
  - after_touch

## Running Callbacks
Callback are triggered by ActiveRecord methods like `create`, `destroy`, and `save`. See [Running Callbacks](https://guides.rubyonrails.org/active_record_callbacks.html#running-callbacks) for a full list.

## How do callbacks work in practice?
Callbacks are queued for execution, along with the model's validations and the database operation to executed. This is called the **callback chain** and is wrapped in a transaction.

If any callback raises an exception, the execution chain is halted and a ROLLBACK is issued.

## Conditional callbacks
Use `:if` and `:unless` options with a symbol corresponding to the conditional method:

`before_save :normalize_card_number, if: :paid_with_card?`

## Use examples

  - Destroy an image file after a record is destroyed:
    `after_commit :delete_picture_file_from_disk, on: [:destroy]`
  - Generate a User's session token, if none already exists, before validation:
    `before_validation :ensure_session_token`
  - Logging and testing
    `after_commit :log_user_saved_to_db, on: [:create, :update]`
  
## TODO
Outline more examples of when to use callbacks.