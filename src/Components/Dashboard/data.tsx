const image =require("../../assets/image/image1.jpg");
const image1 =require("../../assets/image/image2.jpg");
const image2 =require("../../assets/image/image4.jpg");
const image4 =require("../../assets/image/image5.jpg");
const image3=require("../../assets/image/image6.jpg");
const image6=require("../../assets/image/image18.jpg");
const image5 =require("../../assets/image/image12.jpg");
const image8 =require("../../assets/image/image13.jpg");
const image7 =require("../../assets/image/image2.jpg");
const image9 =require("../../assets/image/image11.jpg");

const image10 =require("../../assets/post/1.jpeg")
const image11 =require("../../assets/post/2.jpeg")
const image12 =require("../../assets/post/3.jpeg")
const image13 =require("../../assets/post/4.jpeg")
const image14 =require("../../assets/post/5.jpeg")
const image15 =require("../../assets/post/6.jpeg")
const image16 =require("../../assets/post/7.jpeg")
const image17 =require("../../assets/post/8.jpeg")
const image18 =require("../../assets/post/9.jpeg")
const image19 =require("../../assets/post/10.jpeg")



export const Users = [
  {
    id:1,
    profilePicture: image ,
    username: "Safak Kocaoglu",
  },
  {
    id:2,
    profilePicture: image1,
    username: "Janell Shrum",
  },
  {
    id:3,
    profilePicture: image2,
    username: "Alex Durden",
  },
  {
    id:4,
    profilePicture: image3,
    username: "Dora Hawks",
  },
  {
    id:5,
    profilePicture:image4,
    username: "Thomas Holden",
  },
  {
    id:6,
    profilePicture: image5,
    username: "Shirley Beauchamp",
  },
  {
    id:7,
    profilePicture: image6,
    username: "Travis Bennett",
  },
  {
    id:8,
    profilePicture: image7,
    username: "Kristen Thomas",
  },
  {
    id:9,
    profilePicture: image8,
    username: "Gary Duty",
  },
  {
    id:10,
    profilePicture: image9,
    username: "Safak Kocaoglu",
  },
];

export const Posts = [
  {
    id: 1,
    desc: "Love For All, Hatred For None.",
    photo: image10,
    date: "5 mins ago",
    userId: 1,
    like: 32,
    comment: 9,
  },
  {
    id: 2,
    photo: image11,
    date: "15 mins ago",
    userId: 2,
    like: 2,
    comment: 1,
  },
  {
    id: 3,
    desc: "Every moment is a fresh beginning.",
    photo: image12,
    date: "1 hour ago",
    userId: 3,
    like: 61,
    comment: 2,
  },
  {
    id: 4,
    photo: image13,
    date: "4 hours ago",
    userId: 4,
    like: 7,
    comment: 3,
  },
  {
    id: 5,
    photo:image14,
    date: "5 hours ago",
    userId: 5,
    like: 23,
    comment: 5,
  },
  {
    id: 6,
    photo: image15,
    date: "1 day ago",
    userId: 6,
    like: 44,
    comment: 6,
  },
  {
    id: 7,
    desc: "Never regret anything that made you smile.",
    photo: image16,
    date: "2 days ago",
    userId: 7,
    like: 52,
    comment: 3,
  },
  {
    id: 8,
    photo: image17,
    date: "3 days ago",
    userId: 8,
    like: 15,
    comment: 1,
  },
  {
    id: 9,
    desc: "Change the world by being yourself.",
    photo: image18,
    date: "5 days ago",
    userId: 9,
    like: 11,
    comment: 2,
  },
  {
    id: 10,
    photo: image19,
    date: "1 week ago",
    userId: 10,
    like: 104,
    comment: 12,
  },
];
