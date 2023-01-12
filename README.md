## CRUD API WITH NESTJS

### Intoduction
```
This a simple API that includes endpoints for Create, Read, Update and Delete an item resource. 
```

### Technologies
- NestJS
- MongoDB

## Development
<hr>

### To clone this repository
```
git clone https://github.com/OgeHub/crud-nest-api.git
```

### Install dependencies
```
npm install
```

### Running the app
```
# development
$ npm run start

# watch mode
$ npm run start:dev
```

***Base URL***: `localhost:3000`

### Routes
```
Create Item:  
POST `Base_URL`/items  
Content-Type: application/json  
req.body:  
{
"name": "Test item",
"description": "This is test item",
"qty": 100,
}  

Get All Items:  
GET `Base_URL`/items  

Get One Item:  
GET `Base_URL`/items/:id  

Update Item:  
PUT `Base_URL`/items/:id 
req.body:  
{
"name": "Test item",
"description": "This is test item",
"qty": 100,
}  

Delete Item:  
DELETE `Base_URL`/items/:id  
```

