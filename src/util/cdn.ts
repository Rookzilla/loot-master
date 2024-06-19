import { CLOUDFRONT_URL } from '../consts/staticConsts';

const getImageFromCdn = (imageName: string): string => {
    // Use the CloudFront distribution URL
    const imageUrl = `${CLOUDFRONT_URL}${imageName}`;
    return imageUrl;
};

export default getImageFromCdn;