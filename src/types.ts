/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  category: 'residencial' | 'comercial' | 'industrial' | 'emergência';
  price: string;
  features: string[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  tags: string[];
}

export interface TestimonialItem {
  id: string;
  author: string;
  role: string;
  rating: number;
  content: string;
  imageUrl?: string;
  projectTag?: string;
  googleReviewUrl: string;
}

export interface ContactInfo {
  phone: string;
  phoneDisplay: string;
  whatsappUrl: string;
  email: string;
  address: string;
  addressMapUrl: string;
  googleReviewsUrl: string;
  hours: string;
}
