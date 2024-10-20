# DB Designer

DB studio is a GUI based schema designer. You can think if it as UML diagram of your database

## Login

You can create / login with an email ID and password. There is no validation on the email, you can just use any personal / official email ID we dont care.

You can then enter a password. 

    1. For creating a new account, just click on sign up
    2. For login into an existing account , click on sign in

## Dashboard

This shows a list of DB schema definitions. Click on `Create Schema` and give a name and description to add a new schema. To edit an existing one / newly create one. Click on the pencil icon on the schema Card UI. To go the studio , click anywhere on the card.

## Studio UI overview

On the header you have a `Save` button and a `Copy schema to clipboard` button.

## Adding a block

There are two types of blocks you can place. `Enum` and `Table`.

Right click anywhere and select the approperiate option to add. You can move the block on the canvas for better organization.

1. *Enum* : Its a list of string enums. Start by giving a name, doc string and then you can provide options , Enter anything and press enter
    a. Edit an existing option by clicking on the disaplay name
    b. You can delete an option by clicking on the delete icon
    c. To delete a block, just click on the edit button on the button and then on the top right corner you will have a delete option

2. *Table*: Similar to enum, you can add a Table block, edit button will open the editor. Start by giving a name and doc string.

    a. Once the basic details of the Table is given, you can add a column to this table by clicking on `Add new row` in the card UI.
    b. Click on the newly added row to define the properties of the table Column. 
    c. There are fields which are required for each of the field type and some are not. 
    d. Just fill as much as possible.
    e. Click on the overlay area to dismiss the editor. This will also save it in browser. 
    f. To save the schema itself , click on `Save` button in the header.

## Using this schema with ginger-db
While running `ginger-db up` you should paste the schema JSON that you will get by clicking `Copy Schema to clipboard` button in the header into your db.design.json file


