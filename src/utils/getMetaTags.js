export const getMetaTags = (route) => {
    const DEFAULT_SITE_TITLE = "AWYETU";
    const DEFAULT_SITE_DESCRIPTION = "Timeless Tradition";
    const DEFAULT_SITE_KEYWORDS = "Awyetu, Safari, Kaftan, Bespoke";
    const DEFAULT_SITE_IMAGE = "assets/img/logo1B.svg";
    const DEFAULT_SITE_URL = process.env.SITE_URL || "https://awyetu.com";
    
    if (route === '/product') {
        return {
        title: DEFAULT_SITE_TITLE + 'Product Page',
        description: 'Detailed information about the product',
        keywords: 'product, details, buy',
        image: 'https://example.com/product-image.jpg',
        url: 'https://example.com/product',
        ogTitle: 'Product | Example',
        // ... other og and twitter meta tags
        };
    } else if (route === '/blog') {
        // ... other meta tag data for the blog page
    }

    // Default meta tags
    return {
        title: DEFAULT_SITE_TITLE,
        description: DEFAULT_SITE_DESCRIPTION,
        keywords: DEFAULT_SITE_KEYWORDS,
        image: DEFAULT_SITE_IMAGE,
        url: DEFAULT_SITE_URL,
        // ... other default meta tags
    };
};