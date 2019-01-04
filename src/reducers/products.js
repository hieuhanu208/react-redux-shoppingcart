import productImage from '../config/images/1.png';
var initialState = [ {
    id:1,
    name:'Iphone 7',
    image:productImage,
    description:'Sản phẩm do Apple sản ',
    price:500,
    inventory:10

},
    {
        id:2,
        name:'Iphone 8',
        image:productImage,
        description:'Sản phẩm do Apple sản ',
        price:700,
        inventory:10

    },
    {
        id:3,
        name:'Iphone ',
        image:productImage,
        description:'Sản phẩm do Apple sản ',
        price:7500,
        inventory:10

    }
]


const products = (state = initialState ,action  ) => {
    
    switch (action.type) {
        default:return [...state];
    }

}

export default products;