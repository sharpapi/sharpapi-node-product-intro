![SharpAPI GitHub cover](https://sharpapi.com/sharpapi-github-php-bg.jpg "SharpAPI Node.js Client")

# Product Intro Generator API for Node.js

## 🎁 Generate compelling product introductions — powered by SharpAPI AI.

[![npm version](https://img.shields.io/npm/v/@sharpapi/sharpapi-node-product-intro.svg)](https://www.npmjs.com/package/@sharpapi/sharpapi-node-product-intro)
[![License](https://img.shields.io/npm/l/@sharpapi/sharpapi-node-product-intro.svg)](https://github.com/sharpapi/sharpapi-node-client/blob/master/LICENSE.md)

**SharpAPI Product Intro Generator** creates engaging, concise product introductions that capture attention and highlight key features. Perfect for product listings and marketing materials.

---

## 📋 Table of Contents

1. [Requirements](#requirements)
2. [Installation](#installation)
3. [Usage](#usage)
4. [API Documentation](#api-documentation)
5. [Examples](#examples)
6. [Use Cases](#use-cases)
7. [API Endpoint](#api-endpoint)
8. [Related Packages](#related-packages)
9. [License](#license)

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

const productInfo = { name: 'Smart Watch', features: ['GPS', 'Heart Rate Monitor'] };

async function processText() {
  try {
    // Submit processing job
    const statusUrl = await service.generateProductIntro(productInfo);
    console.log('Job submitted. Status URL:', statusUrl);

    // Fetch results (polls automatically until complete)
    const result = await service.fetchResults(statusUrl);
    console.log('Result:', result.getResultJson());
  } catch (error) {
    console.error('Error:', error.message);
  }
}

processText();
```

---

## API Documentation

### Methods

The service provides methods for processing content asynchronously. All methods return a status URL for polling results.

**Parameters:**
- `content` (string, required): The content to process
- `language` (string, optional): Output language
- `voice_tone` (string, optional): Desired tone (e.g., professional, casual)
- `context` (string, optional): Additional context for better results

For complete API specifications, see the [Postman Documentation](https://documenter.getpostman.com/view/31106842/2sBXVeGsa7).

### Response Format

The API returns structured JSON data. Response format varies by endpoint - see documentation for details.

---

## Examples

### Basic Example

```javascript
const { SharpApiProductIntroService } = require('@sharpapi/sharpapi-node-product-intro');

const service = new SharpApiProductIntroService(process.env.SHARP_API_KEY);

// Customize polling behavior if needed
service.setApiJobStatusPollingInterval(10);  // Poll every 10 seconds
service.setApiJobStatusPollingWait(180);     // Wait up to 3 minutes

// Use the service
// ... (implementation depends on specific service)
```

For more examples, visit the [Product Page](https://sharpapi.com/en/catalog/ai/e-commerce/product-intro-generator).

---

## Use Cases

- **Product Listings**: Create attention-grabbing opening lines
- **Email Marketing**: Generate product previews for campaigns
- **Social Media**: Create compelling product teasers
- **Catalog Pages**: Add engaging introductions to products
- **Landing Pages**: Craft persuasive product headlines
- **Marketplace Optimization**: Stand out with better product intros

---

## API Endpoint

**POST** `/ecommerce/product_intro`

For detailed API specifications, refer to:
- [Postman Documentation](https://documenter.getpostman.com/view/31106842/2sBXVeGsa7)
- [Product Page](https://sharpapi.com/en/catalog/ai/e-commerce/product-intro-generator)

---

## Related Packages

- [@sharpapi/sharpapi-node-product-description](https://www.npmjs.com/package/@sharpapi/sharpapi-node-product-description)
- [@sharpapi/sharpapi-node-product-categories](https://www.npmjs.com/package/@sharpapi/sharpapi-node-product-categories)
- [@sharpapi/sharpapi-node-thank-you-email](https://www.npmjs.com/package/@sharpapi/sharpapi-node-thank-you-email)

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
