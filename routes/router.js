const express = require('express')
const router = express.Router()
const Customer = require('../models/customer')
const multer = require('multer')

const storage = multer.diskStorage({
    destination:function(req,file,cb) {
        cb(null,'./public/images/customers')
    },
    filename: function(req,file,cb){
        cb(null,Date.now()+".jpg")
    }
})

const upload = multer({
    storage: storage
})

router.get('/',(req,res) => {
    const title = "Home";
    Customer.find().exec((err,data)=> {
        res.render('index', {title:title , customers: data})
    })
})
router.get('/addForm',(req,res) => {
    const title = "Add";
    res.render('form', {title:title})
})
router.get('/editForm',(req,res) => {
    const title = "Edit";
    Customer.find().exec((err,data)=> {
        res.render('manage', {title:title , customers: data})
    })
})

router.get('/delete/:id',(req,res) => {
    console.log(req.params.id)
    Customer.findByIdAndDelete(req.params.id, {useFindAndModify:false}).exec(err=>{
        if(err) console.log(err)
        res.redirect('/')
    })
})



router.post('/insert',upload.single("image"),(req,res) => {
    let data = new Customer({
        first_name : req.body.first_name,
        last_name : req.body.last_name,
        address : req.body.address,
        phone_number : req.body.phone_number,
        image : req.file.filename,
    })
    
    Customer.saveCustomer(data,(err)=>{ 
        if(err) console.log(err)
        res.redirect('/')
    })
  
})

router.post('/edit',(req,res) => {
    const title = "Edit";
    const edit_id = req.body.edit_id
    Customer.findOne({_id:edit_id}).exec((err,data)=> {
        console.log(data)
        res.render('edit',{title:title,customers:data})
    })
})

router.post('/update',(req,res) => {
    const update_id = req.body.update_id;
    let data = {
        first_name : req.body.first_name,
        last_name : req.body.last_name,
        address : req.body.address,
        phone_number : req.body.phone_number,
    }

    Customer.findByIdAndUpdate(update_id,data,{useFindAndModify:false}).exec( err=>{
        if(err) console.log(err)
        res.redirect('/')
    })
  
})

module.exports = router