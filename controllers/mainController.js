const metaplex = require("../helpers/getMetaplex");
const isEmpty = require("../helpers/isEmpty");


exports.home = async (req, res, next) => {
    try{
        let statusCode;
        statusCode = 200;
        res.status(statusCode).json({
            message : "This is the main controllers home API",
            status : "success",
            statusCode
        })
        return;
    }catch(err){
        console.log(err);
        err.status = 500;
        next(err);
    }
}




exports.createNFT = async (req, res, next) => {
    try{
        //create a new nft with the data sent by the user
        const {uri, name, fee} = req.body;
        console.log({uri, name, fee});
        if(isEmpty(uri) || isEmpty(name) || isEmpty(fee)){
            let err;
            if(isEmpty(uri)) {
                err = new Error("NFT uri must be indicated");
                err.status = 402;
            }else if(isEmpty(name)){
                err = new Error("NFT must have a name");
                err.status = 402;
            }else if(isEmpty(fee)){
                err = new Error("Please indicate the price for the NFT");
                err.status = 403;
            }
            next(err);
        }else {
            const {nft} = await metaplex.nfts().create({
                uri,
                name,
                sellerFeeBasisPoints: fee
            }).run();
            console.log(nft);
            let statusCode = 201;
            res.status(statusCode);
            res.json({
                message: "NFT created successfully",
                status: "success",
                statusCode,
                data: nft
            })
        }

    }catch(err){
        console.log(err);
        err.status = 500;
        next(err);
    }
}