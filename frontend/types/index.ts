export interface Cat {
  id: number;
  name: string;
  age: number;
  image: string;
  breed: string;
  location: string;
  description: string;
  starred: boolean;
}

export interface FilterSettings {
  breed: string;
  maxAge: number;
  onlyStarred: boolean;
}
