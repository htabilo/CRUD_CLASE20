//la importacion es desde model
const Category = require('../models/Category.model')


const createCategory = async(req, res) => {
    try{
const category = new Category(req.body);
const resp = await category.save()
return res.json({
    message: 'Category was created successfully', 
    detail: resp
})
    } catch (err) {
        return res.json({
            message: 'Error', 
            detail: err.message
        });
    }
}

const getCategories = async(req, res)=> {
    try{
        const resp = await Category.find()
        return res.json({
            message: "Categories",
            detail: resp
        })
    } catch(err){
        return res.json({
            message: 'Error', 
            detail: err.message 
        })
    }
}


const updateCategory = async(req, res) => {
    try{
        const newData = req.body
        const resp = await Category.findByIdAndUpdate(
        newData.categoryId,
        { $set: newData },
        { new: true })
        
        return res.json({
            message: "Category update successfully",
            detail: resp
        })
    } catch(err){
        return res.json({
            message: 'Error', 
            detail: err
        })
    }
}


const deleteCategory = async(req, res) => {
    try{
        const resp = await Category.findByIdAndDelete(req.body.categoryId)
        return res.json({
            message: "Category deleted successfully",
            detail: resp
        })
    } catch(err){
        return res.json({
            message: 'Error', 
            detail: err
        })
    }
}

module.exports = {
   createCategory,
   getCategories,
   updateCategory,
   deleteCategory
  
}


