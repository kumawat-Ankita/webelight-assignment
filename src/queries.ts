import { useQuery } from 'react-query';
import axios from 'axios';
//need to be integrate to backend
const fetchProducts = async () => {
  // const { data } = await axios.get('/api/products');
 
  //return data;
};

export const useProducts = () => {
  const data = [{
    name: "Suit",
    price:1200,
    id:124,
    },{
      name: "Top",
      price:500,
      id:125,
      },{
        name: "Jeans",
        price:800,
        id:126,
        },
        {
          name: "Lipstick",
          price:600,
          id:127,
          },
          {
            name: "Ankel Jeans",
            price:1500,
            id:128,
            },{
              name: "Dennim Jeans",
              price:1300,
              id:129,
              },
              {
                name: "Crop Top",
                price:700,
                id:130,
                }]
  return {data,error : false,isLoading:false};
};
