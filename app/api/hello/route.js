import { NextResponse } from "next/server";

export const users=[
  {
    "id": 1,
    "roll": "CS2021001",
    "name": "Rahul Sharma",
    "phone": "9876543210",
    "branch": "Computer Science"
  },
  {
    "id": 2,
    "roll": "ECE2021045",
    "name": "Priya Patel",
    "phone": "9876543211",
    "branch": "ECE"
  },
  {
    "id": 3,
    "roll": "ME2021089",
    "name": "Amit Kumar",
    "phone": "9876543212",
    "branch": "Mechanical Engineering"
  },
  {
    "id": 4,
    "roll": "CV2021023",
    "name": "Sneha Reddy",
    "phone": "9876543213",
    "branch": "Civil"
  },
  {
    "id": 5,
    "roll": "CS2021067",
    "name": "Arjun Singh",
    "phone": "9876543214",
    "branch": "Computer Science"
  },
  {
    "id": 6,
    "roll": "ECE2021102",
    "name": "Kavya Iyer",
    "phone": "9876543215",
    "branch": "ECE"
  },
  {
    "id": 7,
    "roll": "ME2021134",
    "name": "Vikram Joshi",
    "phone": "9876543216",
    "branch": "Mechanical Engineering"
  },
  {
    "id": 8,
    "roll": "CV2021078",
    "name": "Anjali Gupta",
    "phone": "9876543217",
    "branch": "Civil"
  },
  {
    "id": 9,
    "roll": "CS2021156",
    "name": "Rohan Verma",
    "phone": "9876543218",
    "branch": "Computer Science"
  },
  {
    "id": 10,
    "roll": "ECE2021189",
    "name": "Meera Nair",
    "phone": "9876543219",
    "branch": "ECE"
  }
]

export async function GET() {
    return NextResponse.json({
        sucess:"true",
        data :users,
        len:users.length
    },{status:201})
}