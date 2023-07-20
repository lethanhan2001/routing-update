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
import Violet from "../images/aboutImg/violet.png";
import TourBg from "../images/galleryImg/videotour.png";
import BlogBg from "../images/blogImg/blog.png";
import Phone from "../images/contactImg/phone.png";
import bgWhite from "../images/aboutImg/white.png";
import bgPlay from "../images/Play_button.png";
import BgFace from "../images/aboutImg/theface.png";
import Logo1 from "../images/aboutImg/LOGO1.png";
import Logo2 from "../images/aboutImg/LOGO2.png";
import Logo3 from "../images/aboutImg/LOGO3.png";
import Logo4 from "../images/aboutImg/LOGO4.png";
import Logo5 from "../images/aboutImg/LOGO5.png";
import Vision1 from "../images/aboutImg/vision1.png";
import Vision2 from "../images/aboutImg/vision2.png";
import Img1 from "../images/galleryImg/img1.png";
import Img2 from "../images/galleryImg/img2.png";
import Img3 from "../images/galleryImg/img3.png";
import Img4 from "../images/galleryImg/img4.png";
import Img5 from "../images/galleryImg/img5.png";
import Img6 from "../images/galleryImg/img6.png";
import Img7 from "../images/galleryImg/img7.png";
import Img8 from "../images/galleryImg/img8.png";
import Img9 from "../images/galleryImg/img9.png";
import { Profess } from "../types";
import MapBg from "../../images/contactImg/map.png";
import PlayBtn from "../images/Play_button.png";
import HomeBg from "../images/home.png";
import Caret from "../images/blogImg/caret-right.png";
import Facebook from "../../images/Facebook.png";
import Twitter from "../../images/Twitter (1).png";
import Instagram from "../../images/Instagram.png";
import CustomerBgs from "../../images/serviceImg/customer.png";
import AngleBg from "../../images/serviceImg/angle-up.png";
import AngleDownBg from "../../images/serviceImg/angle-down.png";
import bgQuestion from "../../images/serviceImg/faq.png";
import btnRight from "../../images/serviceImg/angle-double-right.png";

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
  Violet,
  TourBg,
  BlogBg,
  bgPlay,
  bgWhite,
  BgFace,
  Logo1,
  Logo2,
  Logo3,
  Logo4,
  Logo5,
  Vision1,
  Vision2,
  Caret,
  MapBg,
  Img1,
  Img2,
  Img3,
  Img4,
  Img5,
  Img6,
  Img7,
  Img8,
  Img9,
  PlayBtn,
  HomeBg,
  Facebook,
  Instagram,
  Twitter,
  CustomerBgs,
  AngleBg,
  AngleDownBg,
  bgQuestion,
  btnRight,
};
