import React from 'react';

export interface PriceItem {
  stage: string;
  price: string;
  desc: string;
}

export interface OrderForm {
  name: string;
  contactNumber: string;
  location: string;
  inquiryType: string;
  quantity: string;
  message: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface AdvantageItem {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

export interface ResellerPerk {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

export interface EggBenefit {
  icon: React.ReactNode;
  title: string;
  desc: string;
}