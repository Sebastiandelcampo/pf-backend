const express = require('express')
const path = require('path')
const productRouter = require('.stc/routes/products.router')
const productsRouter = require('.stc/routes/cart.router')
const app = express();
const PORT = 8080;

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(express.static(path.join(__dirname, 'public')))

app.use('/', productsRouter);
app.use('/', cartsRouter);

app.get('/', (req,res) =>{
    res.sendFile(path.join(__dirname, './src/public', 'index.html'))
})

app.listen(PORT,()=> {
    console.log(`Server is running on port ${PORT}`);
})

