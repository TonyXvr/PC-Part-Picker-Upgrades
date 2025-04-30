// This file contains functions for scraping prices from various retailers

export interface RetailerPrice {
  retailer: string;
  price: number;
  url: string;
  inStock: boolean;
  shippingCost?: number;
  lastUpdated: Date;
}

// List of supported retailers
export const retailers = [
  'Amazon',
  'Newegg',
  'Best Buy',
  'Micro Center',
  'B&H Photo',
  'Walmart',
  'eBay',
];

// Mock function to simulate scraping prices from retailers
// In a real implementation, this would use web scraping or APIs
export async function scrapePricesForComponent(
  brand: string,
  model: string,
  category: string
): Promise<RetailerPrice[]> {
  // In a real implementation, this would make HTTP requests to retailer websites
  // or use their APIs to get real-time pricing data
  
  // For now, we'll generate mock data
  const basePrice = getBasePrice(brand, model, category);
  const prices: RetailerPrice[] = [];
  
  // Generate random prices for each retailer
  for (const retailer of retailers) {
    // Not all retailers will have every item
    if (Math.random() > 0.3) {
      // Generate a price variation between -15% and +15% of the base price
      const variation = (Math.random() * 0.3) - 0.15;
      const price = basePrice * (1 + variation);
      
      // Some items might be out of stock
      const inStock = Math.random() > 0.2;
      
      // Add shipping cost for some retailers
      const shippingCost = retailer === 'Amazon' ? 0 : Math.random() > 0.5 ? 0 : Math.floor(Math.random() * 15) + 5;
      
      prices.push({
        retailer,
        price: Math.round(price * 100) / 100, // Round to 2 decimal places
        url: generateMockUrl(retailer, brand, model),
        inStock,
        shippingCost,
        lastUpdated: new Date(),
      });
    }
  }
  
  // Sort by total price (price + shipping)
  return prices.sort((a, b) => {
    const totalA = a.price + (a.shippingCost || 0);
    const totalB = b.price + (b.shippingCost || 0);
    return totalA - totalB;
  });
}

// Helper function to get a base price for a component
function getBasePrice(brand: string, model: string, category: string): number {
  // In a real implementation, this would be based on MSRP or historical data
  // For now, we'll use a simple mapping
  const categoryBasePrices: Record<string, number> = {
    'cpu': 300,
    'motherboard': 200,
    'memory': 100,
    'video-card': 500,
    'storage': 120,
    'case': 100,
    'power-supply': 120,
    'cpu-cooler': 80,
    'monitor': 300,
  };
  
  // Add some variation based on brand
  const brandMultipliers: Record<string, number> = {
    'AMD': 0.9,
    'Intel': 1.1,
    'NVIDIA': 1.2,
    'ASUS': 1.1,
    'MSI': 1.05,
    'Gigabyte': 1.0,
    'Corsair': 1.1,
    'G.Skill': 1.0,
    'Crucial': 0.9,
    'Western Digital': 1.0,
    'Seagate': 0.95,
    'NZXT': 1.1,
    'Fractal Design': 1.05,
    'Lian Li': 1.15,
    'EVGA': 1.05,
    'Seasonic': 1.0,
    'be quiet!': 1.1,
    'Noctua': 1.2,
    'LG': 1.1,
    'Dell': 1.0,
  };
  
  const basePrice = categoryBasePrices[category] || 100;
  const brandMultiplier = brandMultipliers[brand] || 1.0;
  
  return basePrice * brandMultiplier;
}

// Generate a mock URL for a retailer
function generateMockUrl(retailer: string, brand: string, model: string): string {
  const formattedBrand = brand.toLowerCase().replace(/[^a-z0-9]/g, '-');
  const formattedModel = model.toLowerCase().replace(/[^a-z0-9]/g, '-');
  
  const retailerDomains: Record<string, string> = {
    'Amazon': 'amazon.com',
    'Newegg': 'newegg.com',
    'Best Buy': 'bestbuy.com',
    'Micro Center': 'microcenter.com',
    'B&H Photo': 'bhphotovideo.com',
    'Walmart': 'walmart.com',
    'eBay': 'ebay.com',
  };
  
  const domain = retailerDomains[retailer] || 'example.com';
  
  return `https://www.${domain}/product/${formattedBrand}-${formattedModel}`;
}

// Get the best price for a component across all retailers
export function getBestPrice(prices: RetailerPrice[]): RetailerPrice | null {
  if (prices.length === 0) {
    return null;
  }
  
  // Filter for in-stock items
  const inStockPrices = prices.filter(p => p.inStock);
  
  if (inStockPrices.length === 0) {
    return null;
  }
  
  // Sort by total price (price + shipping)
  return inStockPrices.sort((a, b) => {
    const totalA = a.price + (a.shippingCost || 0);
    const totalB = b.price + (b.shippingCost || 0);
    return totalA - totalB;
  })[0];
}

// Calculate the total price with shipping
export function getTotalPrice(price: RetailerPrice): number {
  return price.price + (price.shippingCost || 0);
}
