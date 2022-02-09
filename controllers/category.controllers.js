const {images1} = require("../modal")

exports.createCategory = (req, res) => {
    let imageDataId =req.body.imageDataId
    let imageId = req.body.imageId
    let name = req.body.name
    let image = req.file.path
    console.log(name, image)
    const category = new images1({
        imageDataId:imageDataId,
        imageId:imageId,
        name: name,
        image: image
    })
    category.save((err, category) => {
        if (err) {
            console.log(err)
            return res.status(400).json({
                errors: err.meesage
            })
        }
        return res.json({
            message: "Created category successfully",
            category
        })
    })

}