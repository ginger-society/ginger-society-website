
# Usage

## Commands

`ginger-db` supports the following commands:

- **Init**: Initialize a new database project.
- **Up**: Bring up the database similar to `docker-compose`.
- **Configure**: Configure a new database connection in a project.
- **Render**: Generate ORM model files as per the configuration.

### Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Docker](https://www.docker.com/products/docker-desktop)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Running Commands

### Initialize a Database Project


```sh
ginger-db init
```
This command initializes a new database project. You will be prompted to enter various details such as port, studio port, database name, username, and password.

Bring Up the Database. Before this you should copy the schema definition from the studio and paste it in `db.design.json`

One sample DB schema is given below, please copy paste it in db.design.json for a quick test

```javascript

[{"id":"student","position":{"top":108,"left":77},"rows":[{"data":{"name":"pk","field_name":"pk","type":"BigAutoField"},"id":"pk"},{"id":"name","data":{"type":"CharField","max_length":"150","id":"name","name":"name","null":false,"field_name":"name"}},{"id":"roll_number","data":{"name":"roll number","max_length":"40","id":"roll_number","field_name":"roll_number","type":"CharField"}},{"id":"on_scholarship","data":{"id":"on_scholarship","field_name":"on_scholarship","default":true,"name":"on scholarship","type":"BooleanField"}},{"id":"father_name","data":{"null":true,"type":"CharField","max_length":"100","id":"father_name","field_name":"father_name","name":"father name"}},{"data":{"max_length":"500","type":"TextField","field_name":"address","name":"address","id":"address"},"id":"address"},{"id":"data_of_birth","data":{"name":"data of birth","type":"DateField","field_name":"data_of_birth","null":true,"auto_now_add":false,"id":"data_of_birth"}},{"id":"created_at","data":{"type":"DateTimeField","id":"created_at","name":"created at","auto_now_add":true,"field_name":"created_at"}},{"data":{"id":"updated_at","type":"DateField","auto_now":true,"name":"updated at","field_name":"updated_at"},"id":"updated_at"},{"id":"has_cab_service","data":{"name":"has cab service","default":false,"id":"has_cab_service","field_name":"has_cab_service","null":true,"type":"BooleanField"}}],"data":{"id":"student","name":"Student","table_name":"student","docs":"Lorem ipsum dolem text"},"type":"table"},{"id":"course_type","position":{"left":1035,"top":272},"rows":[],"data":{"name":"course type","options":[{"value":"compulsary","label":"Compulsary"},{"value":"elective","label":"Elective"}],"table_name":"course_type","id":"course_type"},"type":"enum"},{"id":"enrollment","position":{"top":559,"left":1075},"rows":[{"data":{"name":"pk","type":"BigAutoField","field_name":"pk"},"id":"pk"},{"data":{"name":"student","on_delete":"DO_NOTHING","related_name":"courses","field_name":"student","target":"student","type":"ForeignKey","id":"student"},"id":"student"},{"id":"course","data":{"null":true,"on_delete":"SET_NULL","type":"ForeignKey","id":"course","name":"course","field_name":"course","target":"course"}}],"data":{"table_name":"enrollment","id":"enrollment","name":"Enrollment","docs":"Once again the lorem ipsum text"},"type":"table"},{"id":"course","position":{"top":678,"left":365},"rows":[{"id":"pk","data":{"type":"BigAutoField","field_name":"pk","name":"pk"}},{"id":"name","data":{"type":"CharField","max_length":"100","field_name":"name","name":"name","id":"name"}},{"id":"course_type","data":{"options_target":"course_type","id":"course_type","type":"CharField","field_name":"course_type","default":"compulsary","max_length":"50","name":"course_type"}},{"id":"duration","data":{"id":"duration","null":true,"default":"45","type":"PositiveIntegerField","field_name":"duration","name":"duration"}}],"data":{"id":"course","name":"Course","table_name":"course","docs":"Another lorem ipsum dolem text"},"type":"table"},{"id":"exam","position":{"left":624,"top":1016},"rows":[{"data":{"type":"BigAutoField","field_name":"pk","name":"pk"},"id":"pk"},{"id":"date","data":{"id":"date","name":"date","type":"DateField","auto_now_add":true,"field_name":"date"}},{"id":"subject","data":{"field_name":"subject","id":"subject","type":"CharField","name":"subject","options_target":"subject","max_length":"50"}}],"data":{"name":"Exam","id":"exam","docs":"to store the docs","table_name":"exam"},"type":"table"},{"id":"subject","position":{"top":1068,"left":1145},"rows":[],"data":{"options":[{"label":"English","value":"english"},{"label":"Hindi","value":"hindi"},{"label":"Maths","value":"maths"},{"value":"science","label":"Science"},{"label":"Social Studies","value":"social_studies"}],"table_name":"subject","name":"Subject","id":"subject"},"type":"enum"}]
```

```sh
db-compose up
```

This command brings up the database using a docker-compose setup. Ensure you have docker-compose installed and configured on your system.

Two things will be available post sucessful run of this command. 
    1. Data Studio ( http://localhost:STUDIO_PORT , eg. http://localhost:8000 by default ),
    2. A postgres SQL server with the username , password , port you entered earlier,
    3. MongoDB Data Studio ( http://localhost:MONGO_STUDIO_PORT , eg. http://localhost:4321 by default ),
    4. MongoDB server. 
    5. Redis server

Screenshots:



# Configure a New Database Connection

```sh
db-compose configure
```
This command configures a new database connection in your project. You will be prompted to select the language, ORM, and schema server details.

```sh
db-compose render
```
This command generates ORM model files based on the configuration. It reads the configuration from database.toml and fetches the schema from the specified schema server.

# Configuration File

The configuration file `database.toml` should be placed in the root of your project directory. Here is an example:

```toml
[schema]
url = "http://localhost:8000"
lang = "Python"
orm = "DjangoORM"
root = "path/to/models"

[tables]
names = ["table1", "table2"]
```

## Fields

- **url**: The URL of the schema server.
- **lang**: The programming language used (Python, Rust, or TypeScript).
- **orm**: The ORM used (SQLAlchemy, DjangoORM, Diesel, or TypeORM).
- **root**: The path where the generated models will be saved.
- **names**: The list of tables to include in the project.
