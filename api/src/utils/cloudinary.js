import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import APiError from "./ApiError.js";

cloudinary.config({
  // cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  // api_key: process.env.CLOUDINARY_API_KEY,
  // api_secret: process.env.CLOUDINARY_API_SECRET,
  cloud_name: 'di75qbwmu',
  api_key: 351633929768451,
  api_secret: "GafDuhs4PCoIryfwiFAqo6m6ZIA",
  secure: true
});

const uploadOnCloudinary = async (localFilePath) => {
  // console.log(process.env.CLOUDINARY_API_KEY);
  try {
    if (!localFilePath) throw new APiError(400, "Local file path is required");
    // upload the file to the cloud

    // console.log("error1");
    // console.log(localFilePath);

    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    // console.log("error2");
    // file has been uploaded on cloudinary successfully
    // console.log(
    //   "file has been uploaded on cloudinary successfully",
    //   response.url
    // );
    // console.log("error3");
    fs.unlinkSync(localFilePath); // only for testing...so delete the uploaded file from temp folder
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath); // remove the locally saved temporary file as the upload operation failed
    throw new APiError(400, error.message);
  }
};

export default uploadOnCloudinary;
