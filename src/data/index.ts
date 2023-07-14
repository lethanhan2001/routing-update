import Image1 from "../images/Animation1.png";
import Image2 from "../images/Animation2.png";
import Image3 from "../images/Animation3.png";
import { Blog, Contact, Services, Services2, Team } from "../types";
import Image4 from "../images/logo4.png";
import Image5 from "../images/logo5.png";
import Image6 from "../images/logo6.png";
import ServiceImg1 from "../images/serviceImg/service1.png";
import ServiceImg2 from "../images/serviceImg/service2.png";
import ServiceImg3 from "../images/serviceImg/service3.png";
import team1Img from "../images/teamImg/team1.png";
import team2Img from "../images/teamImg/team2.png";
import team3Img from "../images/teamImg/team3.png";
import blog1Bg from "../images/blogImg/doctor.png";
import blog2Bg from "../images/blogImg/doctor2.png";
import blog3Bg from "../images/blogImg/doctor3.png";
import folder1Bg from "../images/blogImg/Categories.png";
import folder2Bg from "../images/blogImg/Categories2.png";
import folder3Bg from "../images/blogImg/Categories3.png";
import recent1Img from "../images/blogImg/blog1.png";
import recent2Img from "../images/blogImg/blog2.png";
import FB from "../images/blogImg/fb.png";
import TW from "../images/blogImg/tw.png";
import IG from "../images/blogImg/ig.png";
import LK from "../images/blogImg/lk.png";
import recent3Img from "../images/blogImg/blog3.png";
import Address from "../images/contactImg/address.png";
import Mail from "../images/contactImg/mail.png";

import Phone from "../images/contactImg/phone.png";

import { Profess } from "../types";
export const servicesData: Services[] = [
  {
    id: 1,
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id magnis at placerat pulvinar euismod neque.",
    name: "Beauty consultation",
    image: Image1,
  },
  {
    id: 2,
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id magnis at placerat pulvinar euismod neque.",
    name: "Skin treatments",
    image: Image2,
  },
  {
    id: 3,
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id magnis at placerat pulvinar euismod neque.",
    name: "Beauty product",
    image: Image3,
  },
];

export const servicesData2: Services2[] = [
  {
    id: 1,
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero.",
    name: "Beauty consultation",
    text: "We services beauty consultation",
    image: ServiceImg1,
  },
  {
    id: 2,
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero.",
    name: "Skin Treatements",
    text: `Skin care and  treatment by expert`,
    image: ServiceImg2,
  },
  {
    id: 3,
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero.",
    name: "Beauty product",
    text: "We present quality beauty products",
    image: ServiceImg3,
  },
];

export const professData: Profess[] = [
  {
    id: 1,
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit",
    name: "Surgeon",
    image: Image4,
    username: "Briyan Nevalli",
  },
  {
    id: 2,
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit",
    name: "Dermatologist",
    image: Image5,
    username: "Bella sebastian",
  },
  {
    id: 3,
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit",
    name: "Stylist expert",
    image: Image6,
    username: "Lilly Adams",
  },
];

export const teamData: Team[] = [
  {
    id: 1,
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id magnis at placerat pulvinar euismod neque.",
    name: "Lina Gustav",
    image: team1Img,
    text: "Pharmacist",
  },
  {
    id: 2,
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id magnis at placerat pulvinar euismod neque.",
    name: "Adam White",
    image: team2Img,
    text: "Finance",
  },
  {
    id: 3,
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id magnis at placerat pulvinar euismod neque.",
    name: "Jane Doe",
    image: team3Img,
    text: "Marketer",
  },
];

export const blogDta: Blog[] = [
  {
    id: 1,
    image: blog1Bg,
    title: "How much does a consultation cost at our clinic?",
    folder: folder1Bg,
  },
  {
    id: 2,
    image: blog2Bg,
    title: "Watch out! don't choose the wrong beauty product",
    folder: folder2Bg,
  },
  {
    id: 3,
    image: blog3Bg,
    title: "About skin care you need to know",
    folder: folder3Bg,
  },
];

export const contactData: Contact[] = [
  {
    id: 1,
    image: Address,
    title: "101 Baker Street, NY",
    text: "Address",
  },
  {
    id: 2,
    image: Phone,
    title: "+896 120 5889",
    text: "Phone",
  },
  {
    id: 3,
    image: Mail,
    title: "mail@company.com",
    text: "Mail",
  },
];

export {
  blog1Bg,
  blog2Bg,
  blog3Bg,
  folder1Bg,
  folder2Bg,
  folder3Bg,
  recent1Img,
  recent2Img,
  recent3Img,
  FB,
  LK,
  IG,
  TW,
};
