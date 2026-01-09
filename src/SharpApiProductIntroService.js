const { SharpApiCoreService, SharpApiJobTypeEnum } = require('@sharpapi/sharpapi-node-core');

/**
 * Service for generating product introductions using SharpAPI.com
 */
class SharpApiProductIntroService extends SharpApiCoreService {
  /**
   * Creates a new SharpApiProductIntroService instance
   * @param {string} apiKey - Your SharpAPI API key
   * @param {string} [apiBaseUrl='https://sharpapi.com/api/v1'] - API base URL
   */
  constructor(apiKey, apiBaseUrl = 'https://sharpapi.com/api/v1') {
    super(apiKey, apiBaseUrl, '@sharpapi/sharpapi-node-product-intro/1.0.1');
  }

  /**
   * Generates a shorter version of the product description.
   * Provide as many details and parameters of the product to get the best marketing introduction possible.
   * Comes in handy with populating product catalog data and bulk products processing.
   *
   * @param {string} productData
   * @param {string|null} language
   * @param {number|null} maxLength
   * @param {string|null} voiceTone
   * @returns {Promise<string>} - The status URL.
   */
  async generateProductIntro(productData, language = null, maxLength = null, voiceTone = null) {
    const data = { content: productData };
    if (language) data.language = language;
    if (maxLength) data.max_length = maxLength;
    if (voiceTone) data.voice_tone = voiceTone;

    const response = await this.makeRequest('POST', SharpApiJobTypeEnum.ECOMMERCE_PRODUCT_INTRO.url, data);
    return this.parseStatusUrl(response);
  }
}

module.exports = { SharpApiProductIntroService };