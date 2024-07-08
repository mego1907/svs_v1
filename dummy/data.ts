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
    image: "https://svscoin.org/wp-content/uploads/2024/07/medi1-scaled-1.jpg",
    title: "Media",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium voluptatibus maiores tempore, rerum soluta voluptates labore libero amet perferendis quam distinctio in consequuntur iste omnis illum blanditiis exercitationem odit dolor!",
    id: 2,
  },
  {
    image: "https://svscoin.org/wp-content/uploads/2024/07/media3-scaled-1.jpg",
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
    twitter: string;
    linkedin: string;
    facebook: string;
    instagram: string;
  };
};

export const teamData: memberType[] = [
  {
    name: "Nader said",
    position: "CEO",
    image:
      "https://svscoin.org/wp-content/uploads/2024/07/WhatsApp-Image-2024-06-29-at-12.28.50-AM-ct-person.jpeg",
    id: 1,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed bibendum, lectus vel dign Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque maxime sunt velit, et, recusandae iste quaerat voluptate nisi cupiditate corporis minus saepe explicabo reiciendis odio necessitatibus commodi voluptatibus ipsa quis.",
    socialMedia: {
      twitter: "https://twitter.com/nadersaid",
      linkedin: "https://www.linkedin.com/in/nadersaid/",
      facebook: "https://www.facebook.com/nadersaid/",
      instagram: "https://www.instagram.com/nadersaid/",
    },
  },
  {
    name: "Mary Pelgone",
    position: "Developer",
    image:
      "https://svscoin.org/wp-content/uploads/2024/07/WhatsApp-Image-2024-06-28-at-9.27.54-PM-ct-person.jpeg",
    id: 2,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed bibendum, lectus vel dign Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque maxime sunt velit, et, recusandae iste quaerat voluptate nisi cupiditate corporis minus saepe explicabo reiciendis odio necessitatibus commodi voluptatibus ipsa quis.",
    socialMedia: {
      twitter: "https://twitter.com/marypelgone",
      linkedin: "https://www.linkedin.com/in/marypelgone/",
      facebook: "https://www.facebook.com/marypelgone/",
      instagram: "https://www.instagram.com/marypelgone/",
    },
  },
  {
    name: "Omar said",
    position: "COO",
    image:
      "https://svscoin.org/wp-content/uploads/2024/07/WhatsApp-Image-2024-06-28-at-9.27.51-PM-ct-person.jpeg",
    id: 3,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed bibendum, lectus vel dign Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque maxime sunt velit, et, recusandae iste quaerat voluptate nisi cupiditate corporis minus saepe explicabo reiciendis odio necessitatibus commodi voluptatibus ipsa quis.",
    socialMedia: {
      twitter: "https://twitter.com/omarsaid",
      linkedin: "https://www.linkedin.com/in/omarsaid/",
      facebook: "https://www.facebook.com/omarsaid/",
      instagram: "https://www.instagram.com/omarsaid/",
    },
  },
  {
    name: "Mohand said",
    position: "CFO",
    image:
      "https://svscoin.org/wp-content/uploads/2024/07/WhatsApp-Image-2024-06-29-at-12.28.50-AM-ct-person.jpeg",
    id: 4,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed bibendum, lectus vel dign Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque maxime sunt velit, et, recusandae iste quaerat voluptate nisi cupiditate corporis minus saepe explicabo reiciendis odio necessitatibus commodi voluptatibus ipsa quis.",
    socialMedia: {
      twitter: "https://twitter.com/sarasaid",
      linkedin: "https://www.linkedin.com/in/sarasaid/",
      facebook: "https://www.facebook.com/sarasaid/",
      instagram: "https://www.instagram.com/sarasaid/",
    },
  },
  {
    name: "Hassan said",
    position: "Head of Marketing",
    image:
      "https://svscoin.org/wp-content/uploads/2024/07/WhatsApp-Image-2024-06-29-at-12.28.50-AM-ct-person.jpeg",
    id: 5,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed bibendum, lectus vel dign Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque maxime sunt velit, et, recusandae iste quaerat voluptate nisi cupiditate corporis minus saepe explicabo reiciendis odio necessitatibus commodi voluptatibus ipsa quis.",
    socialMedia: {
      twitter: "https://twitter.com/hassansaid",
      linkedin: "https://www.linkedin.com/in/hassansaid/",
      facebook: "https://www.facebook.com/hassansaid/",
      instagram: "https://www.instagram.com/hassansaid/",
    },
  },
  {
    name: "Mohamed said",
    position: "Head of Finance",
    image:
      "https://svscoin.org/wp-content/uploads/2024/07/WhatsApp-Image-2024-06-29-at-12.28.50-AM-ct-person.jpeg",
    id: 6,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed bibendum, lectus vel dign Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque maxime sunt velit, et, recusandae iste quaerat voluptate nisi cupiditate corporis minus saepe explicabo reiciendis odio necessitatibus commodi voluptatibus ipsa quis.",
    socialMedia: {
      twitter: "https://twitter.com/mohamedsaid",
      linkedin: "https://www.linkedin.com/in/mohamedsaid/",
      facebook: "https://www.facebook.com/mohamedsaid/",
      instagram: "https://www.instagram.com/mohamedsaid/",
    },
  },
  {
    name: "Amr said",
    position: "Head of Legal",
    image:
      "https://svscoin.org/wp-content/uploads/2024/07/WhatsApp-Image-2024-06-29-at-12.28.50-AM-ct-person.jpeg",
    id: 7,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed bibendum, lectus vel dign Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque maxime sunt velit, et, recusandae iste quaerat voluptate nisi cupiditate corporis minus saepe explicabo reiciendis odio necessitatibus commodi voluptatibus ipsa quis.",
    socialMedia: {
      twitter: "https://twitter.com/aminesaid",
      linkedin: "https://www.linkedin.com/in/aminesaid/",
      facebook: "https://www.facebook.com/aminesaid/",
      instagram: "https://www.instagram.com/aminesaid/",
    },
  },
];
