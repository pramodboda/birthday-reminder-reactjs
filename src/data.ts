export interface Person{
    id:number;
    name:string;
    age: number;
    date:string;
    image: string;
}

const data: Person[] = [
    {
        id: 1,
        name: 'Bertie Yates',
        age: 29,
        date: '1994-05-12',
        image:
          'https://mighty.tools/mockmind-api/content/human/44.jpg',
      },
      {
        id: 2,
        name: 'Hester Hogan',
        age: 32,
        date: '1994-05-12',
        image:
          'https://mighty.tools/mockmind-api/content/human/57.jpg',
      },
      {
        id: 3,
        name: 'Larry Little',
        age: 36,
        date: '1994-05-12',
        image:
          'https://mighty.tools/mockmind-api/content/human/38.jpg',
      },
      {
        id: 4,
        name: 'Sean Walsh',
        age: 34,
        date: '1994-05-12',
        image:
          'https://mighty.tools/mockmind-api/content/human/41.jpg',
      },
      {
        id: 5,
        name: 'Lola Gardner',
        age: 29,
        date: '1994-05-12',
        image:
          'https://mighty.tools/mockmind-api/content/human/54.jpg',
      },
];

export default data;