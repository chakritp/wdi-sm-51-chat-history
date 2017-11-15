## What is Mongo?

A database management system.

## SQL: *Tables* vs Mongo: *Collections*

## SQL is relational, Mongo is non-relational

## SQL tables contain Rows, Mongo collections contain documents

## Mongo documents are written in JSON (javascript object notation)



## Active Record is an example of an ORM (object-relational-mapping)

```ruby
User.all
# translates into an SQL SELECT
# translates results into a Ruby object
```

## Mongoose is an example of ODM (object-document-mapping)

```javascript
User.find({}, function(err, users) {
    // translates into a mongo find in the users collection, and returns 'users' as a javascript object
})
```



