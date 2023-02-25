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
      'https://res.cloudinary.com/intellectfox/image/upload/v1661189222/cdn/foxtok/images/nasa_official.jpg',
    altText: 'Nasa official',
    author: 'nasa_official',
    video:
      'https://res.cloudinary.com/du2abnrek/video/upload/v1676672040/foxtok/videos/nasa_official_nwbftf.mp4',
  },
  {
    id: uuidv4(),
    avatar:
      'https://res.cloudinary.com/intellectfox/image/upload/v1661189222/cdn/foxtok/images/national_geographic.jpg',
    altText: 'National Geographic',
    author: 'national_geographic',
    video:
      'https://res.cloudinary.com/du2abnrek/video/upload/v1676672035/foxtok/videos/national_geographic_gheksi.mp4',
  },
  {
    id: uuidv4(),
    avatar:
      'https://res.cloudinary.com/intellectfox/image/upload/v1661189222/cdn/foxtok/images/emily_ko.jpg',
    altText: 'Emily Ko',
    author: 'emily_ko',
    video:
      'https://res.cloudinary.com/du2abnrek/video/upload/v1676672054/foxtok/videos/emily_ko_dzzd3e.mp4',
  },
  {
    id: uuidv4(),
    avatar:
      'https://res.cloudinary.com/intellectfox/image/upload/v1661189222/cdn/foxtok/images/happy_family.jpg',
    altText: 'Happy family',
    author: 'happy_family',
    video:
      'https://res.cloudinary.com/du2abnrek/video/upload/v1676672036/foxtok/videos/happy_family_xnrgzd.mp4',
  },
];
