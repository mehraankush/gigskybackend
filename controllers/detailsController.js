const Detail = require('../models/detailsModel');

const createDetails = async (req, res) => {
    try {

      const newDetail = new Detail({
        senderName: req.body.senderName,
        UPI_number:req.body.UPI_number,
        UPI_ID: req.body.UPI_ID
      });
  
      const savedPost = await newDetail.save();
      res.status(200).json(savedPost);
    } catch (err) {
      res.status(500).json(err);
    }
  };

  const checkDetails = async (req, res) =>{
    try{
      const detail = await Detail.findOne({UPI_ID: req.params.UPI_ID}).select('-_id  ');
      if(detail){
        res.status(200).json({
          isFound: true,
          message: `UPI_ID ${req.params.UPI_ID} is reported as fraud`,
          detail: detail
        })
      }
      else{
        res.status(200).json({
          isFound: false,
          message: `UPI_ID ${req.params.UPI_ID} is not reported as fraud yet`
        })

      }

    }
    catch(err){

    }
  }


  module.exports = {
    createDetails,
    checkDetails
  }