export interface Mosquee{
      id: String;
      nomMosquee: String,
      adresse: string;
      telephone: String;
      siteWeb: String;
      associationMosquee: String;
      imamMosquee: String;
      lat: String;
      lng: String;
      openingHours: String;
      imageUrl: String;
      municipality: String;
      street: String,
      area: String,
      plus_code: String,
      business_categories: String,
      claimed_google_my_business: String,
      telephone1: String,
      email: { type: String, unique: true },
      facebook: String,
      google_search_url: String,
      linkedin_url: String,
      twitter_url: String,
      instagram_url: String,
      youtube_url: String,
      pinterest_url: String,
      facebook_pixel: String,
      google_manager: String,
      google_analytics: String,
      domain: String,
      average_rating: String,
      count_reviews: String,
      ouvertureMosquee: String,
}
