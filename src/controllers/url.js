const randomize = require('randomatic');
const {Url} = require('../models/url');
const baseUrl = process.env.API_BASE_URL

const generateLink = ()=>{
    const slug = randomize('a',5)
    const newLink = `${baseUrl}/${slug}`
    return {newLink,slug}
}

const shortenRoute = async (req,res) => {
const oldLink = req.body.link;
const {newLink, slug} = generateLink()
const shortened = await new Url({long:oldLink,short:slug}).save();
if (shortened){
    res.status(201).json({shortenedlink:newLink})
}
else{
    res.status(500).json('Something went wrong, Please try again')
}

}

const getLink = async(req,res)=>{
    const slug = req.params.slug;
    const savedUrl = await Url.findOne({short:slug});
    console.log(savedUrl);
    if (savedUrl){
        res.redirect(savedUrl.long)
    }
    else{
        res.status(404).json({message: 'Link not found'})
    }
}


module.exports = {shortenRoute, getLink}