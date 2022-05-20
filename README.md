# Typescript-BoilerPlate-AAT

```
### Running Locally

You can follow below steps to run the application locally
```

```
npm install
```
```
npm run start
```
The application will be running on http://localhost:8000

API Details

1: Get All users

  URL: http://localhost:8000/
  
  Response: {
    "httpStatusCode": 200,
    "appCode": 1,
    "message": "",
    "data": [
        {
            "group_name": "portal_customization",
            "id": 1,
            "name": "Shalini Jain",
            "email": "s.jain@test.com",
            "address": "7778897584",
            "age": 25,
            "gender": "Female"
        },
        {
            "group_name": "portal_customization",
            "id": 2,
            "name": "Dhruv Verma",
            "email": "d.verma@test.com",
            "address": "",
            "phoneNo": "7776685782",
            "age": 24,
            "gender": "Male"
        },
        {
            "group_name": "organizer",
            "id": 3,
            "name": "Prajwal Murthy",
            "email": "p.murthy@test.com",
            "address": "",
            "phoneNo": "7776685782",
            "age": 24,
            "gender": "Male"
        },
        {
            "group_name": "organizer",
            "id": 4,
            "name": "Avneet Singh",
            "email": "a.singh@test.com",
            "address": "",
            "phoneNo": "7776685782",
            "age": 24,
            "gender": "Male"
        },
        {
            "group_name": "organizer",
            "id": 5,
            "name": "Tushara Reddy",
            "email": "t.reddy@test.com",
            "address": "",
            "phoneNo": "7776685782",
            "age": 28,
            "gender": "Female"
        }
    ]
}

2: Get User By Id:

  URL: http://localhost:8000/user/:id
  
  Response: 
  
  {
    "httpStatusCode": 200,
    "appCode": 1,
    "message": "",
    "data": {
        "group_name": "portal_customization",
        "id": 1,
        "name": "Shalini Jain",
        "email": "s.jain@test.com",
        "address": "7778897584",
        "age": 25,
        "gender": "Female"
    }
}

3: Filter user based on group

  URL: http://localhost:8000/search/:groupname
  
  Response:
  
  {
    "httpStatusCode": 200,
    "appCode": 1,
    "message": "",
    "data": [
        {
            "group_name": "organizer",
            "id": 3,
            "name": "Prajwal Murthy",
            "email": "p.murthy@test.com",
            "address": "",
            "phoneNo": "7776685782",
            "age": 24,
            "gender": "Male"
        },
        {
            "group_name": "organizer",
            "id": 4,
            "name": "Avneet Singh",
            "email": "a.singh@test.com",
            "address": "",
            "phoneNo": "7776685782",
            "age": 24,
            "gender": "Male"
        },
        {
            "group_name": "organizer",
            "id": 5,
            "name": "Tushara Reddy",
            "email": "t.reddy@test.com",
            "address": "",
            "phoneNo": "7776685782",
            "age": 28,
            "gender": "Female"
        }
    ]
}
  
  
