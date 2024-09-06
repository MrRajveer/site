const express = require("express");
const { isLoggedIn } = require("../middleware");
const User = require("../models/User");
const Product = require("../models/product");
const router = express.Router();
const stripe = require('stripe')('sk_test_51PrchlRucMgmMbQ3MHIpHVYqPK1wRPV4rCaXxYmzbvIQdwH6iFWs7NyuF8V7oUm7XXXJ4081SMndc0Avfc1S19M400odFlRvdG');


router.get("/user/cart", isLoggedIn, async (req, res) => {
  let userId = req.user._id;
  let user = await User.findById(userId).populate("cart");
  //   console.log(user, "sam");
  let totalAmount = user.cart.reduce((sum, curr) => sum + curr.price, 0);
  //   console.log(totalAmount);

  res.render("cart/cart", { user, totalAmount });
});


router.post("/user/:productId/add", isLoggedIn, async (req, res) => {
  let { productId } = req.params;
  let userId = req.user._id;
  let user = await User.findById(userId);
  //   console.log(user, "sam");
  let product = await Product.findById(productId);
  user.cart.push(product);
  await user.save();
  res.redirect("/user/cart");
});


router.get('/payment/:id',async(req,res)=>{
  let id = req.params.id;
  let data = await User.findById(id).populate('cart');
  let cart = [...data.cart]
  let g = cart.map((items)=>{
    return items;
  })
console.log(g)
router.get('/success',async(req,res)=>{
  let id = req.params.id;
  let data = await User.findById(id).populate('cart');
  res.send("payment successfully")
})
router.get('/cancel',(req,res)=>{
  res.send("payment cancel");
})
  const session = await stripe.checkout.sessions.create({
    line_items: 
      g.map((item)=>{
        return  {
          price_data: {
            currency: 'inr',
            product_data: {
              name: item.name,
            },
            unit_amount:item.price,
          },
          quantity: 1,
        }
      }),
    
    mode: 'payment',
    success_url: 'http://localhost:8080/success',
    cancel_url: 'http://localhost:8080/cancel',
  });

  res.redirect(303, session.url);
});

  

module.exports = router;