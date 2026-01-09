![SharpAPI GitHub cover](https://sharpapi.com/sharpapi-github-php-bg.jpg "SharpAPI Node.js Client")

# Product Intro Generator API for Node.js

## 🛍️ Generate compelling product introductions — powered by SharpAPI AI.

[![npm version](https://img.shields.io/npm/v/@sharpapi/sharpapi-node-product-intro.svg)](https://www.npmjs.com/package/@sharpapi/sharpapi-node-product-intro)
[![License](https://img.shields.io/npm/l/@sharpapi/sharpapi-node-product-intro.svg)](https://github.com/sharpapi/sharpapi-node-client/blob/master/LICENSE.md)

**SharpAPI Product Intro Generator** creates engaging, conversion-focused product introductions that highlight key features and benefits. Perfect for e-commerce, marketing, and product pages.

---

## 📋 Table of Contents

1. [Requirements](#requirements)
2. [Installation](#installation)
3. [Usage](#usage)
4. [API Documentation](#api-documentation)
5. [Examples](#examples)
6. [License](#license)

---

## Requirements

- Node.js >= 16.x
- npm or yarn

---

## Installation

### Step 1. Install the package via npm:

```bash
npm install @sharpapi/sharpapi-node-product-intro
```

### Step 2. Get your API key

Visit [SharpAPI.com](https://sharpapi.com/) to get your API key.

---

## Usage

```javascript
const { SharpApiProductIntroService } = require('@sharpapi/sharpapi-node-product-intro');

const apiKey = process.env.SHARP_API_KEY; // Store your API key in environment variables
const service = new SharpApiProductIntroService(apiKey);

const productName = 'Wireless RGB Gaming Mouse';
const features = [
  '16000 DPI optical sensor',
  'Customizable RGB lighting',
  'Ergonomic design',
  '8 programmable buttons'
];

async function generateIntro() {
  try {
    // Submit intro generation job
    const statusUrl = await service.generateProductIntro(productName, features, 'English');
    console.log('Job submitted. Status URL:', statusUrl);

    // Fetch results (polls automatically until complete)
    const result = await service.fetchResults(statusUrl);
    console.log('Generated intro:', result.getResultJson());
  } catch (error) {
    console.error('Error:', error.message);
  }
}

generateIntro();
```

---

## API Documentation

### Methods

#### `generateProductIntro(productName: string, features: string[], language?: string, voiceTone?: string, context?: string, maxLength?: number): Promise<string>`

Generates a compelling product introduction based on features.

**Parameters:**
- `productName` (string, required): The name of the product
- `features` (array, required): List of product features and benefits
- `language` (string, optional): Output language (default: 'English')
- `voiceTone` (string, optional): Tone of voice (e.g., 'Professional', 'Casual', 'Enthusiastic')
- `context` (string, optional): Additional context about target audience or use case
- `maxLength` (number, optional): Maximum length in words (default: 100)

**Returns:**
- Promise<string>: Status URL for polling the job result

**Example:**
```javascript
const statusUrl = await service.generateProductIntro(
  'Smart Fitness Watch',
  ['Heart rate monitoring', 'GPS tracking', '7-day battery'],
  'English',
  'Enthusiastic',
  'Target audience: fitness enthusiasts aged 25-40'
);
const result = await service.fetchResults(statusUrl);
```

### Response Format

The API returns a professionally crafted product introduction:

```json
{
  "product_intro": "Elevate your game with our Wireless RGB Gaming Mouse. Featuring a precision 16000 DPI optical sensor and customizable RGB lighting, this ergonomic powerhouse puts victory at your fingertips. With 8 programmable buttons, customize your gameplay and dominate the competition.",
  "word_count": 42,
  "tone": "Enthusiastic"
}
```

---

## Examples

### Basic Product Intro

```javascript
const { SharpApiProductIntroService } = require('@sharpapi/sharpapi-node-product-intro');

const service = new SharpApiProductIntroService(process.env.SHARP_API_KEY);

const product = 'Premium Noise-Canceling Headphones';
const features = [
  'Active noise cancellation',
  '40-hour battery life',
  'Bluetooth 5.0',
  'Comfortable over-ear design'
];

service.generateProductIntro(product, features)
  .then(statusUrl => service.fetchResults(statusUrl))
  .then(result => {
    const intro = result.getResultJson();
    console.log('📝 Product Introduction:');
    console.log(intro.product_intro);
  })
  .catch(error => console.error('Generation failed:', error));
```

### Tone-Specific Intro

```javascript
const service = new SharpApiProductIntroService(process.env.SHARP_API_KEY);

const productName = 'Professional Chef Knife Set';
const features = [
  'High-carbon stainless steel',
  'Ergonomic handles',
  'Full-tang construction',
  'Includes 8 essential knives'
];

const statusUrl = await service.generateProductIntro(
  productName,
  features,
  'English',
  'Professional',
  'Target audience: professional chefs and culinary students',
  80
);

const result = await service.fetchResults(statusUrl);
console.log('Professional intro:', result.getResultJson().product_intro);
```

### Batch Product Intro Generation

```javascript
const service = new SharpApiProductIntroService(process.env.SHARP_API_KEY);

const products = [
  {
    name: 'Smart Water Bottle',
    features: ['Hydration tracking', 'Temperature sensor', 'LED reminders']
  },
  {
    name: 'Yoga Mat Pro',
    features: ['Extra thick cushioning', 'Non-slip surface', 'Eco-friendly']
  },
  {
    name: 'Portable Blender',
    features: ['USB rechargeable', 'BPA-free', 'One-touch operation']
  }
];

const intros = await Promise.all(
  products.map(async (product) => {
    const statusUrl = await service.generateProductIntro(
      product.name,
      product.features,
      'English',
      'Enthusiastic'
    );
    const result = await service.fetchResults(statusUrl);
    return {
      product: product.name,
      intro: result.getResultJson().product_intro
    };
  })
);

intros.forEach(item => {
  console.log(`\n${item.product}:`);
  console.log(item.intro);
});
```

---

## Use Cases

- **E-commerce Product Pages**: Create compelling product descriptions
- **Marketing Campaigns**: Generate attention-grabbing product pitches
- **Email Marketing**: Craft product introductions for newsletters
- **Social Media**: Create engaging product posts
- **Catalog Creation**: Auto-generate introductions for large product catalogs
- **A/B Testing**: Generate multiple versions for conversion testing
- **Marketplace Listings**: Optimize product listings on marketplaces

---

## Voice Tones

Choose from various voice tones to match your brand:

- **Professional**: Formal, authoritative, business-focused
- **Casual**: Friendly, conversational, approachable
- **Enthusiastic**: Energetic, exciting, motivational
- **Luxury**: Sophisticated, premium, exclusive
- **Technical**: Detailed, specification-focused, precise
- **Humorous**: Lighthearted, fun, entertaining

---

## API Endpoint

**POST** `/ecommerce/product_intro`

For detailed API specifications, refer to:
- [Postman Documentation](https://documenter.getpostman.com/view/31106842/2sBXVeGsa7)
- [Product Page](https://sharpapi.com/en/catalog/ai/e-commerce/product-intro-generator)

---

## Related Packages

- [@sharpapi/sharpapi-node-product-description](https://www.npmjs.com/package/@sharpapi/sharpapi-node-product-description) - Full product descriptions
- [@sharpapi/sharpapi-node-product-categories](https://www.npmjs.com/package/@sharpapi/sharpapi-node-product-categories) - Product categorization
- [@sharpapi/sharpapi-node-seo-tags](https://www.npmjs.com/package/@sharpapi/sharpapi-node-seo-tags) - SEO optimization
- [@sharpapi/sharpapi-node-client](https://www.npmjs.com/package/@sharpapi/sharpapi-node-client) - Full SharpAPI SDK

---

## License

This project is licensed under the MIT License. See the [LICENSE.md](LICENSE.md) file for details.

---

## Support

- **Documentation**: [SharpAPI.com Documentation](https://sharpapi.com/documentation)
- **Issues**: [GitHub Issues](https://github.com/sharpapi/sharpapi-node-client/issues)
- **Email**: contact@sharpapi.com

---

**Powered by [SharpAPI](https://sharpapi.com/) - AI-Powered API Workflow Automation**
