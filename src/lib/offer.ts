// Every shop item is a digital download, so Google's merchant listing fields
// describe that: free instant delivery and no returns. Search Console flags
// offers without shippingDetails and hasMerchantReturnPolicy.
const countries = ["US", "GB", "CA", "ES", "MX", "AU", "DE", "FR"];

const shippingDetails = {
  "@type": "OfferShippingDetails",
  shippingRate: { "@type": "MonetaryAmount", value: "0", currency: "USD" },
  shippingDestination: countries.map((addressCountry) => ({
    "@type": "DefinedRegion",
    addressCountry,
  })),
  deliveryTime: {
    "@type": "ShippingDeliveryTime",
    handlingTime: { "@type": "QuantitativeValue", minValue: 0, maxValue: 0, unitCode: "DAY" },
    transitTime: { "@type": "QuantitativeValue", minValue: 0, maxValue: 0, unitCode: "DAY" },
  },
};

const hasMerchantReturnPolicy = {
  "@type": "MerchantReturnPolicy",
  applicableCountry: countries,
  returnPolicyCategory: "https://schema.org/MerchantReturnNotPermitted",
};

export const digitalOffer = (price: number, url: string) => ({
  "@type": "Offer",
  price: price.toFixed(2),
  priceCurrency: "USD",
  availability: "https://schema.org/InStock",
  url,
  shippingDetails,
  hasMerchantReturnPolicy,
});
