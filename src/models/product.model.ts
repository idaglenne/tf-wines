export interface Product {
  productId: string;
  productNumber: number;
  productNameBold: string;
  productNameThin?: string;
  category: string;
  productNumberShort: number;
  producerName: string;
  supplierName: string;
  isKosher: boolean;
  bottleText: string;
  restrictedParcelQuantity: number;
  isOrganic: boolean;
  isSustainableChoice: boolean;
  isClimateSmartPackaging: boolean;
  isEthical: boolean;
  ethicalLabel?: string;
  isWebLaunch: boolean;
  productLaunchDate: number;
  isCompletelyOutOfStock: boolean;
  isTemporaryOutOfStock: boolean;
  alcoholPercentage: number;
  volumeText: string;
  volume: number;
  price: number;
  country: string;
  originLevel1: string;
  originLevel2: string;
  categoryLevel1: string;
  categoryLevel2: string;
  categoryLevel3?: string;
  categoryLevel4?: string;
  customCategoryTitle: string;
  assortmentText: string;
  usage: string;
  taste: string;
  tasteSymbols: string[];
  tasteClockGroupBitter?: string;
  tasteClockGroupSmokiness?: string;
  tasteClockBitter: number;
  tasteClockFruitacid: number;
  tasteClockBody: number;
  tasteClockRoughness: number;
  tasteClockSweetness: number;
  tasteClockSmokiness: number;
  tasteClockCasque: number;
  assortment: string;
  recycleFee: number;
  isManufacturingCountry: boolean;
  isRegionalRestricted: boolean;
  packagingLevel1: string;
  isNews: boolean;
  images: [
    {
      imageUrl: string;
      fileType?: string;
      size?: string;
    }
  ];
  isDiscontinued: boolean;
  isSupplierTemporaryNotAvailable: boolean;
  sugarContent: number;
  sugarContentGramPer100ml: number;
  seal: string[];
  vintage?: number;
  grapes: string[];
  otherSelections?: string;
  tasteClocks: [
    {
      key: string;
      value: number;
    },
    {
      key: string;
      value: number;
    },
    {
      key: string;
      value: number;
    }
  ];
  color: string;
  dishPoints?: string;
}
