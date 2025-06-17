type CarType = {
  unique_id: string;
  mark_id: string;
  folder_id: string;
  price: string;
  images: {
    image: Array<string>;
  };
};

export default CarType;
