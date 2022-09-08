


exports.home = async (req, res, next) => {
    try{
        let statusCode;
        statusCode = 200;
        res.status(statusCode).json({
            "message": "This is the main controllers home API",
            "status": "success",
            "statusCode": statusCode
        })
        return;
    }catch(err){
        console.log(err);
        next(err);
    }
}