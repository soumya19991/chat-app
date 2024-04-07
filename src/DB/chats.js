const chats = [
    {
      id: 1,
      name: "John Doe",
      avatar: "https://i.pravatar.cc/100",
      messages: [
        { id: 1, text: "Hey there!", time: "09:30", isSent: true },
        { id: 2, text: "Hi!", time: "09:31", isSent: false },
        { id: 3, text: "How's it going?", time: "09:32", isSent: true },
        { id: 4, text: "Not bad, thanks!", time: "09:33", isSent: false },
      ],
    },
    {
      id: 2,
      name: "Jane Smith",
      avatar: "https://i.pravatar.cc/100",
      messages: [
        { id: 1, text: "Good morning!", time: "08:45", isSent: true },
        { id: 2, text: "Morning!", time: "08:46", isSent: false },
        { id: 3, text: "How was your weekend?", time: "08:47", isSent: true },
        { id: 4, text: "It was great, thanks!", time: "08:48", isSent: false },
      ],
    },
    {
      id: 3,
      name: "Emily Wilson",
      avatar: "https://i.pravatar.cc/100",
      messages: [
        { id: 1, text: "Hello!", time: "11:15", isSent: true },
        { id: 2, text: "Hi!", time: "11:16", isSent: false },
        { id: 3, text: "How have you been?", time: "11:17", isSent: true },
        {
          id: 4,
          text: "I've been busy, but good!",
          time: "11:18",
          isSent: false,
        },
      ],
    },
    {
      id: 4,
      name: "David Anderson",
      avatar: "https://i.pravatar.cc/100",
      messages: [
        { id: 1, text: "Hey!", time: "14:20", isSent: true },
        { id: 2, text: "Hey there!", time: "14:21", isSent: false },
        { id: 3, text: "What's up?", time: "14:22", isSent: true },
        { id: 4, text: "Not much, just chilling.", time: "14:23", isSent: false },
      ],
    },
    {
      id: 5,
      name: "Sarah Wilson",
      avatar: "https://i.pravatar.cc/100",
      messages: [
        { id: 1, text: "Hi!", time: "16:00", isSent: true },
        { id: 2, text: "Hello!", time: "16:01", isSent: false },
        { id: 3, text: "How are you?", time: "16:02", isSent: true },
        { id: 4, text: "I'm doing well, thanks!", time: "16:03", isSent: false },
      ],
    },
  ];
  
  export default chats;