import { CLOUDFRONT_URL } from '../consts/staticConsts';

const getImageFromCdn = (imageName: string): string => {
    const imageUrl = `${CLOUDFRONT_URL}${imageName}`;
    return imageUrl;
};

export default getImageFromCdn;