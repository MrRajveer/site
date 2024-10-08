const mongoose = require('mongoose');
const Product = require('./models/product');

const products = [
    {
        name:"Comera",
        img:'https://images.unsplash.com/photo-1516852294404-5423eaa0d4a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGNhbWVyYXxlbnwwfHwwfHx8MA%3D%3D',
        price: 6000,
        desc: "very high qaulity"
    },
    {
        name:"EarBirds",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS-Icz8AmCHm91ZjR0Wg2j3_ALbnXIbsAPEg&s",
        price: 1999,
        desc: "nice product"
    },
    {
        name:"New iphone 16 pro Max",
        img:'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQf3vOSuR5CLch83L1aBfQqK_OI4AqeKIMbxD0WlusZWKn8FEagFC-dN-errj80Kcwh9WdRTS_DoBCMuGtJX8G3-Am0kh_MPEW9BgD4mdQZwf0w4nvPkBhaJ7erAVtMob4sOqvToppZbA&usqp=CAc',
        price: 144900,
        desc: "Aukat se bahar"
    },
    {
        name:"mack book",
        img:'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSiU2UxB7o2BCgb8-bD-fsDIulLLWfiAwXw0XQT9xLSP6P3jNUFPFygFR6cZVtfpZJpKeHa9FpwlpF3ghTPPkdpDVMH4zYR3zwJyp0W_OIp2HfaAi6bXWb9UgGw_nMc79px4tp7KLo&usqp=CAc',
        price: 88000,
        desc: "badiya cheez"
    },
    {
        name:"i pad",
        img:'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS3V4WxtqeQ3la0vAzpeHwrUsfMRCwawWOBK8-Hh35OizB5Id4ILcV4pjIUmGRDvsdNcvD-oAD-XmfvalCWKrSuRG2Jldq49n4tcssAzLXN-RSUVjXL8qExqbnbMcpGMsNIY82FuA&usqp=CAc',
        price: 30000,
        desc: "high qaulity"
    }
]

async function seedDB(){
    // await Product.deleteMany({});
    await Product.insertMany(products);
    console.log("data seeded successfully")
}

module.exports = seedDB;