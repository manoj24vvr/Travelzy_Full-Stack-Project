const Campground = require('../models/campground');
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapBoxToken = "pk.eyJ1IjoiZ293dGhhbTgxMSIsImEiOiJja3pwODdwbWgwajMyMnhwZW44dmozc25rIn0.G-d1Za2h3clACRhqpsUEuw";
const geoCoder =  mbxGeocoding({ accessToken: mapBoxToken})
const { cloudinary } = require('../cloudinary');

module.exports.index = async (req,res) => {
    const campgrounds = await Campground.find({});
    res.render('campgrounds/index', { campgrounds });
}

module.exports.renderNewForm = (req,res) => 
{
        
    res.render('campgrounds/new');
}

module.exports.createCampground = async (req,res) => 
{

    const geoData = await geoCoder.forwardGeocode({
        query: req.body.location,
        limit: 1
    }).send()
    const newCamp = new Campground(req.body);
    newCamp.geometry = geoData.body.features[0].geometry;
    newCamp.images = req.files.map(f => ({ url: f.path, filename: f.filename }));
    newCamp.author = req.user._id;
    await newCamp.save();
    req.flash('success', 'Successfully made a new Place!');
    res.redirect(`/campgrounds/${newCamp._id}`);
}

module.exports.showCampground = async (req,res) => 
{

    const { id } = req.params;
    const foundCamp = await Campground.findById(id).populate({
        path: 'reviews',
        populate: {
            path: 'author'
        }
    }).populate('author');
    if(!foundCamp) {
        req.flash('error', 'Cannot find that campground!');
        return res.redirect('/campgrounds');
    }
    res.render('campgrounds/view', { foundCamp });
}

module.exports.renderEditForm = async (req, res) => 
{

    const { id } = req.params;
    const foundCamp = await Campground.findById(id);
    if(!foundCamp) {
        req.flash('error', 'Cannot find that campground!');
        res.redirect('/campgrounds');
    }    
    res.render('campgrounds/edit', { foundCamp });
}

module.exports.updateCampground = async (req,res) => {
    const { id } = req.params;
    const foundCamp = await Campground.findByIdAndUpdate(id, req.body, {runValidators: true, new: true});
    const imgs = req.files.map(f => ({ url: f.path, filename: f.filename }));
    foundCamp.images.push(...imgs);
    await foundCamp.save();
    if(req.body.deleteImages) {
        for (let filename of req.body.deleteImages) 
        {
            await cloudinary.uploader.destroy(filename);
        }
        await foundCamp.updateOne({ $pull: { images: {filename: { $in: req.body.deleteImages}}}});
    }
    req.flash('success', 'Successfully updated Tourist Place!');
    res.redirect(`/campgrounds/${foundCamp.id}`)
}

module.exports.deleteCampground = async (req, res) => 
{
    const { id } = req.params;
    await Campground.findByIdAndDelete(id);
    req.flash('success', 'Successfully deleted Tourist Place!');
    res.redirect('/campgrounds');
}