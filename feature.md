# Feature

## Notificaions

```json
{
    "data": [
        {
        "id": "uuid",
        "user_id": "intern_123",
        "title": "New Task Assigned",
        "subtitle": "TL Raj assigned you 'Fix Login Bug'",
        "type": "TASK_ASSIGNED",
        "entity_id": "task_456",
        "is_read": false,
        "created_at": "2026-01-05T10:30:00Z"
        }
    ]
}
```

1. task
2. expense
3. meeting

## Chat

### Chat List

```json
{
  "data": [
    {
      "chatId": "chat_001",
      "user": {
        "id": "user_02",
        "name": "Rahul Sharma",
        "avatar": "https://picsum.photos/200/200?1"
      },
      "lastMessage": {
        "type": "text",
        "text": "Bro, did you check the build?",
        "createdAt": "2026-01-05T14:12:00.000Z"
      },
      "unreadCount": 3
    },
    {
      "chatId": "chat_002",
      "user": {
        "id": "user_03",
        "name": "Amit Patel",
        "avatar": "https://picsum.photos/200/200?2"
      },
      "lastMessage": {
        "type": "image",
        "text": "📷 Image",
        "createdAt": "2026-01-04T20:45:00.000Z"
      },
      "unreadCount": 0
    }
  ]
}
```

### 1 to 1 conversation

```json
{
  "data": {
    "messages": [
      {
        "id": "msg_001",
        "senderId": "user_01",
        "receiverId": "user_02",
        "type": "text",
        "text": "Hey Rahul 👋",
        "createdAt": "2026-01-05T14:00:00.000Z"
      },
      {
        "id": "msg_002",
        "senderId": "user_02",
        "receiverId": "user_01",
        "type": "text",
        "text": "Hey! What’s up?",
        "createdAt": "2026-01-05T14:01:30.000Z"
      },
      {
        "id": "msg_003",
        "senderId": "user_01",
        "receiverId": "user_02",
        "type": "image",
        "media": {
          "url": "https://picsum.photos/400/300",
          "fileName": "design.png"
        },
        "createdAt": "2026-01-05T14:05:00.000Z"
      },
      {
        "id": "msg_004",
        "senderId": "user_02",
        "receiverId": "user_01",
        "type": "audio",
        "media": {
          "url": "https://example.com/audio.mp3",
          "duration": 12
        },
        "createdAt": "2026-01-05T14:06:40.000Z"
      }
    ],
    "nextCursor": "2026-01-05T13:59:59.000Z"
  }
}

```

## Profile

=> user profile related data

- user avatar
- user first name
- user last name
- user job role
- user DOB
- address country
- address state
- address city
- full address

=> office assets

- list of asset
- details of asset

=> payroll & tax list

```json
[
  {
    id: "payroll-sep-2024",
     payPeriod: {
    startDate: "2024-09-01",
    endDate: "2024-09-30",
  },
    totalHours: "40:00:00",
    amountReceived: 800,
    paidOn: "2024-09-30",
  },
  {
    id: "payroll-aug-2024",
      payPeriod: {
    startDate: "2024-09-01",
    endDate: "2024-09-30",
  },  workingHours: {
    totalWorkingHours: "40:00 Hrs",
    overtimeHours: "00:00 Hrs",
  },
    amountReceived: 800,
    paidOn: "2024-08-30",
    currency: "USD",
  },
]
```

=> payroll & tax details

```json
 {
  id: "payroll-sep-2024",
  payPeriod: {
    startDate: "2024-09-01",
    endDate: "2024-09-30",
  },
  workingHours: {
    totalWorkingHours: "40:00 Hrs",
    overtimeHours: "00:00 Hrs",
  },
  payrollDetails: {
    basicSalary: 700.0,
    tax: -70.0,
    reimbursement: 70.0,
    bonus: 100.0,
    overtimePay: 0.0,
  },
  totalSalary: 800.0,
  currency: "USD",
  paidOn: "2024-09-30",
};
```

## Leave

```json
[
  {
    "id": "leave_001",
    "category": "Annual Leave / Vacation Leave",
    "leaveDate": "20 Sept - 22 Sept",
    "totalDays": 2,
    "status": "APPROVED",
    "submittedAt": "18 September 2024"
  },
  {
    "id": "leave_002",
    "category": "Sick Leave",
    "leaveDate": "10 Nov - 17 Nov",
    "totalDays": 7,
    "status": "REVIEW",
    "submittedAt": "10 November 2024"
  },
  {
    "id": "leave_003",
    "category": "Personal Leave",
    "leaveDate": "11 Nov - 13 Nov",
    "totalDays": 2,
    "status": "REJECTED",
    "submittedAt": "9 November 2024"
  }
]
```

## Task Management

-> To Do 5 : 5 number of task
-> In Progess 2 : 2 number of in progess
-> Done 1: 1 task is done
-> all tab: all task partial details list
-> in progress tab: all progress task partial details list
-> finish tab: all finish task partial details list
->

### Create Task

- at max 3 attachment {any format file, img, vdo, audio }
- task title
- task description
- assign to which user {all employee list}
- priority {low, medium, high}
- difficuly {Very Easy (Less Than a Day)
Easy (A Day)
Moderate (3 Days)
Intermediate (5 Days)
Advanced (1 Week)}

## Task details

- task details {exist in create task}
- task status
- task created date
- who is assignee {employee details}
- comment section
