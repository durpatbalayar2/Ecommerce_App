
const Collection = () => {
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    setTimeout(()=>{
      const fetchedProducts = [
        {
          _id: 1,
          name: "Product 1",
          price: 100,
          images: [
            {
              url: "https://picsum.photos/500/500?random=1",
            },
          ],
        },

        {
          _id: 2,
          name: "Product 2",
          price: 200,
          images: [
            {
              url: "https://picsum.photos/500/500?random=2",
            },
          ],
        },
        {
          _id: 3,
          name: "Product 3",
          price: 100,
          images: [
            {
              url: "https://picsum.photos/500/500?random=3",
            },
          ],
        },
        {
          _id: 4,
          name: "Product 4",
          price: 200,
          images: [
            {
              url: "https://picsum.photos/500/500?random=4",
            },
          ],
        },

        {
          _id: 5,
          name: "Product 5",
          price: 200,
          images: [
            {
              url: "https://picsum.photos/500/500?random=5",
            },
          ],
        },

        {
          _id: 6,
          name: "Product 6",
          price: 200,
          images: [
            {
              url: "https://picsum.photos/500/500?random=6",
            },
          ],
        },
        {
          _id: 7,
          name: "Product 7",
          price: 200,
          images: [
            {
              url: "https://picsum.photos/500/500?random=7",
            },
          ],
        },
        {
          _id: 8,
          name: "Product 8",
          price: 200,
          images: [
            {
              url: "https://picsum.photos/500/500?random=8",
            },
          ],
        },
      ];
    })
  })
  return (
    <div>

      
     
    </div>
  )
}

export default Collection