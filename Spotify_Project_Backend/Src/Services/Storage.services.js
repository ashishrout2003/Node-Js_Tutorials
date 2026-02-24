const {ImageKit} = require('@imagekit/nodejs')

const imagekitClint = new ImageKit({
    privatekey: process.env.IMAGEKIT_PRIVATE_KEY
})
async function uploadFile(file){
    const result = await imagekitClint.files.upload({
        file,
        fileName: 'music' + Date.now(),
        folder: 'complete-backend/music'
    })
    return result
}
module.exports = {uploadFile}