export class Article {
  id: string;
  source: {
    enriched: {
      url: {
        image: string;
        imageKeywords: any;
        text: string;
        title: string;
        url: string;
      }
    }
  };
  timestamp: number;
}
