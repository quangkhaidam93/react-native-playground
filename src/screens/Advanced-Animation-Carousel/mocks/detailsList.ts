export const detailList: string[] = ['prepTime', 'exp', 'skill', 'cousine', 'type'];
export const iconsByType: {[key: string]: string} = {
  prepTime: 'fire',
  exp: 'badge',
  skill: 'energy',
  cousine: 'chemistry',
  type: 'drop',
};

// interface DataType {
//   image: string;
//   title: string;
//   description: string;
//   prepTime: string;
//   exp: number;
//   skill: string;
//   cousine: string;
//   type: string;
// }

export const datas: {[key: string]: string | number}[] = [
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png',
    title: 'San pham 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    prepTime: '1 hour',
    exp: 10,
    skill: 'easy',
    cousine: 'Vegan',
    type: 'dehydrated'
  },
  {
    image: 'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80',
    title: 'San pham 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    prepTime: '1 hour',
    exp: 10,
    skill: 'easy',
    cousine: 'Vegan',
    type: 'dehydrated'
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg',
    title: 'San pham 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    prepTime: '1 hour',
    exp: 10,
    skill: 'easy',
    cousine: 'Vegan',
    type: 'dehydrated'
  },
]
