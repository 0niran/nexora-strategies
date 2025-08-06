// Utility to ensure Unsplash images load with proper parameters
export function getUnsplashUrl(photoId: string, width: number = 800, quality: number = 80): string {
  return `https://images.unsplash.com/photo-${photoId}?w=${width}&q=${quality}&auto=format&fit=crop`;
}

// Common professional business images that work well
export const businessImages = {
  modernOffice: '1486406146926-c627a92ad1ab',
  teamMeeting: '1521737711867-e3b97375f902',
  dataAnalysis: '1460925895917-afdab827c52f',
  businessStrategy: '1556761175-5973dc0f32e7',
  financialCharts: '1504868584819-f8e8b4b6d7e3',
  cityscape: '1449034446853-66c5b2e99f60',
  consulting: '1454165804606-c3d57bc86b40',
  technology: '1451187580459-9c42d1b10fee',
};