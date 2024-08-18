
export const fetchProducts = async () => {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    return res.json();
  } catch (error) {
    console.error(error);
  }
};


export const fetchProductByID=async(id)=>{
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    return res.json()
  } catch (error) {
    console.error(error)
  }
}