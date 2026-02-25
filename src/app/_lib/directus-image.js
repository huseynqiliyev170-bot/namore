export const getDirectusImageURL = (image) => {
    return ( process.env.NEXT_PUBLIC_ASSETS + image.id + '/' + image.filename_download )
};