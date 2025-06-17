import CarType from "./CarType";

type DataType = {
  meta?: {
    page?: number;
    last_page?: number;
  };
  data?: Array<CarType>;
};

export default DataType;
