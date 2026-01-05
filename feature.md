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
