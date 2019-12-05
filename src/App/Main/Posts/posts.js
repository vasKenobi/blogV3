const posts = [
    {
        id:1,
        name:"iPhone 11",
        description:"This is iPhone 11",
        capacity:64,
        type:"phone",
        initRating:1,
        image:"/images/ipad.png"
    },
    {
        id:2,
        name:"iPhone X",
        description:"This is iPhone X",
        capacity:256,
        type:"phone",
        initRating:1,
        image:"/images/iphone.png"
    },
    {
        id:3,
        name:"iPhone XS",
        description:"This is iPhone XS",
        capacity:128,
        type:"phone",
        initRating:1,
        image:"/images/ipad.png"
    },
    {
        id:4,
        name:"iPhone 8",
        description:"This is iPhone 8",
        capacity:64,
        type:"phone",
        initRating:1,
        image:"/images/iphone.png"
    },
]

export const getPostsMap = (array) => {
    return array.reduce((map,product)=>({
        ...map,
        [product.id]:product,
    }),{})
    
}

export default posts