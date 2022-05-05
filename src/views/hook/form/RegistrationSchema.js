export const registrationSchema = {
  address: "",
  description: '',
  storeName: "",
  sellerPreference: null,
  sellerCategories: [],
  storeOpenTimeStatus: 0,
  makerBiography: {
    pictureProfile: "",
    makerBio: "",
    personalWebsite: [],
    isIncludePortfolio: false,
    makerProfilePicturesUrl: [],
  },
  payerBillingInfo: {
    billingCycle: 0,
    shippingAddress: {
      city: "",
      state: "",
    },
    wallet: {
      bankCardId: "",
      firstName: "",
      lastName: "",
      telephone: "",
    },
  },
};
