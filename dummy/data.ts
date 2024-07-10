type newType = {
  image: string;
  title: string;
  desc: string;
  id: number;
};

export const newsData: newType[] = [
  {
    image: "https://svscoin.org/wp-content/uploads/2024/07/medi2-scaled-1.jpg",
    title: "Events",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium voluptatibus maiores tempore, rerum soluta voluptates labore libero amet perferendis quam distinctio in consequuntur iste omnis illum blanditiis exercitationem odit dolor!",
    id: 1,
  },
  {
    image: "https://svscoin.org/wp-content/uploads/2024/07/media3-scaled-1.jpg",
    title: "Media",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium voluptatibus maiores tempore, rerum soluta voluptates labore libero amet perferendis quam distinctio in consequuntur iste omnis illum blanditiis exercitationem odit dolor!",
    id: 2,
  },
  {
    image: "https://svscoin.org/wp-content/uploads/2024/07/medi1-scaled-1.jpg",

    title: "News",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium voluptatibus maiores tempore, rerum soluta voluptates labore libero amet perferendis quam distinctio in consequuntur iste omnis illum blanditiis exercitationem odit dolor!",
    id: 3,
  },
];

export type memberType = {
  image: string;
  name: string;
  position: string;
  id: number;
  desc?: string;
  socialMedia: {
    twitter?: string;
    linkedin?: string;
    facebook?: string;
    instagram?: string;
  };
};

export const teamData: memberType[] = [
  {
    name: "NADER SAID",
    position: "CEO | Chief Executive Officer",
    image:
      "https://svscoin.org/wp-content/uploads/2024/07/WhatsApp-Image-2024-06-29-at-12.28.50-AM-ct-person.jpeg",
    id: 1,
    desc: "A visionary business owner with over a decade of experience in the cryptocurrency market. As a founder and CEO of SVS Coin, a leading company in blockchain technology and digital asset management, Nader has established himself as a prominent figure in the industry, His deep expertise, innovative approach, and strategic vision have driven SVS Coin to the forefront of the cryptocurrency revolution, making it a trusted name in the global market.",
    socialMedia: {
      twitter: "https://x.com/naderjsaid?s=11",
      linkedin: "https://www.linkedin.com/in/nader-said-1a146546/",
      facebook: "https://www.facebook.com/kingshark71",
      instagram: " https://www.instagram.com/naderjsaid/",
    },
  },
  {
    name: "YAZAN ABASSI",
    position: "CTO | Chief Technology Officer",
    image:
      "https://svscoin.org/wp-content/uploads/2024/07/WhatsApp-Image-2024-06-28-at-9.27.51-PM-ct-person.jpeg",

    id: 2,
    desc: "Seasoned Chief Technology Officer with over 15 years of experience in driving technology innovation and excellence. His extensive expertise, strategic vision and leadership skills have been instrumental in advancing the company’s mission and achieving significant milestones",
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/yazanabbasi",
    },
  },
  {
    name: "MARY PELGONE",
    position: "Developer",
    image:
      "https://svscoin.org/wp-content/uploads/2024/07/WhatsApp-Image-2024-06-28-at-9.27.54-PM-ct-person.jpeg",
    id: 3,
    desc: "With years of experience in creating high- quality software solutions. Known for her proficiency in various digital development frameworks. Making her a versatile and valuable team member.",
    socialMedia: {
      linkedin: " http://linkedin.com/in/marypelgone",
    },
  },
];
