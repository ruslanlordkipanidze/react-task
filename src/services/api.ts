  // api.ts
  const BASE_URL = 'https://testbackend.nc-one.com';

  export const fetchProducts = async () => {
    const response = await fetch(`${BASE_URL}/image`);
    return response.json();
  };

  export const fetchProductById = async (id: number) => {
    const response = await fetch(`${BASE_URL}/image?id=${id}`);
    return response.json();
  };
