import { v4 as uuidv4 } from 'uuid';

export interface Post {
  id: string;
  avatar: string;
  altText: string;
  author: string;
  video: string;
}

export const posts: Post[] = [
  {
    id: uuidv4(),
    avatar:
      'https://res.cloudinary.com/dooohqlhy/image/upload/v1673727453/foxtok/images/nasa_official_ceaq4t.jpg',
    altText: 'Nasa official',
    author: 'nasa_official',
    video:
      'https://res.cloudinary.com/dooohqlhy/video/upload/v1673727539/foxtok/videos/nasa_official_rnmztr.mp4',
  },
  {
    id: uuidv4(),
    avatar:
      'https://res.cloudinary.com/dooohqlhy/image/upload/v1673727453/foxtok/images/national_geographic_fbsdir.jpg',
    altText: 'National Geographic',
    author: 'national_geographic',
    video:
      'https://res.cloudinary.com/dooohqlhy/video/upload/v1673727523/foxtok/videos/national_geographic_aggb8m.mp4',
  },
  {
    id: uuidv4(),
    avatar:
      'https://res.cloudinary.com/dooohqlhy/image/upload/v1673727454/foxtok/images/emily_ko_h3vcug.jpg',
    altText: 'Emily Ko',
    author: 'emily_ko',
    video:
      'https://res.cloudinary.com/dooohqlhy/video/upload/v1673727541/foxtok/videos/emily_ko_vrdpcj.mp4',
  },
  {
    id: uuidv4(),
    avatar:
      'https://res.cloudinary.com/dooohqlhy/image/upload/v1673727453/foxtok/images/happy_family_rri1xs.jpg',
    altText: 'Happy family',
    author: 'happy_family',
    video:
      'https://res.cloudinary.com/dooohqlhy/video/upload/v1673727528/foxtok/videos/happy_family_uxw4nx.mp4',
  },
];
