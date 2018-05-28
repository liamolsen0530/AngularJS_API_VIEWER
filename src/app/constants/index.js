const AppConstants = {
  omdbDetail: {
    apiUrl: 'https://www.omdbapi.com',
    apiKey: '98270d06',
  },
  LOCAL_STORAGE_PREFIX: 'lucid_test',
  fushionDetail: {
    fushionUrl: 'http://localhost:8764/api/apps/LucidAdvanceTest/query/LucidAdvanceTest',
    basicDetail: 'Item_Description_s,Store_Name_s',
    advanceDetail: [
      "Vendor_Name_s",
      "Store_Name_s",
      "County_s",
      "City_s",
      "Address_s",
      "Zip_Code_s",
      "Item_Description_s",
      "Category_Name_s",
      "State_Bottle_Cost_s",
      "State_Bottle_Retail_s",
      "Bottles_Sold_s",
    ]    
  }
};

export { AppConstants };
