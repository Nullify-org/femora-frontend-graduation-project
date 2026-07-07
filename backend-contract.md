Get Courses Request
GET /api/courses?pageNumber=1&pageSize=10

Response 
{
  "data": [
    {
      "id": "guid",
      "title": "Furniture Decoration",
      "description": "...",
      "thumbnailUrl": "...",
      "price": 99.99,
      "category": "Decoupage & Painting",
      "language": "English",
      "level": "Beginner",
      "instructorName": "Ahmed Ali",
      "enrollmentsCount": 52
    }
  ],
  "page": 1,
  "pageSize": 10,
  "totalCount": 100,
  "totalPages": 10,
  "hasNext": true,
  "hasPrev": false
}

GET Course Details Request
GET /api/courses/{id}

Response
{
  "id": "guid",
  "title": "Furniture Decoration",
  "description": "...",
  "thumbnailUrl": "...",
  "price": 99.99,
  "category": "Decoupage & Painting",
  "language": "English",
  "level": "Beginner",
  "instructorName": "Ahmed Ali",
  "enrollmentsCount": 52,
  "totalLessons": 35,
  "modules": [
    {
      "id": "guid",
      "title": "Introduction",
      "orderIndex": 1,
      "lessonsCount": 5
    }
  ]
}
