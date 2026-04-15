export const base44 = {
  entities: {
    QuoteRequest: {
      create: async (data) => {
        console.log('Quote request:', data);
        return data;
      }
    }
  }
};
