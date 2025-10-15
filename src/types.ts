export interface Painting {
  id: string;
  title: string;
  artist: string;
  year: number;
  price: number;
  description: string;
  imageUrl: string;
  dimensions: {
    width: number;
    height: number;
  };
  medium: string;
}