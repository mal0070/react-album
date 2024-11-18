export interface ImageCardType {
  alt_description: string;
  alternative_slugs: {
    ko: string;
  }
  asset_type: string;
  created_at: string;
  description: string;
  height: number;
  id: string;
  liked_by_user: boolean;
  likes: number;
  links: {
    self: string;
    html: string;
    download: string;
    download_location: string;
  };
  promoted_at: string;
  updated_at: string;
  user: {
    id: string;
    updated_at: string;
    username: string;
    name: string;
    first_name: string;
  };
  width: number;
  urls: {
    full: string;
    raw: string;
    regular: string;
    small: string;
    small_s3: string;
    thumb: string;
  };
}
