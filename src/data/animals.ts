export interface Animal {
  id: number;
  name: string;
  img: string;
}

const animals: Animal[] = [
  {
    id: 1,
    name: 'Dog',
    img: 'https://picsum.photos/id/237/400/300',
  },
  {
    id: 2,
    name: 'Cat',
    img: 'https://loremflickr.com/400/300/cat',
  },
  {
    id: 3,
    name: 'Bird',
    img: 'https://fastly.picsum.photos/id/200/400/300.jpg?hmac=lGKSofs7PgZo646BbRSOhTNhEuRS-FISyNTNUm14rsQ',
  },
];

console.log(animals);
