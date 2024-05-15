export type ProfileType = {
  id: string;
  avatar: {
    id: number;
    image_high_url: string;
    image_medium_url: string;
    image_low_url: string;
  },
  name: string;
  last_name: string;
  email: string;
  role: {
    value: number;
    label: string;
  },
  last_login: string;
  staff_role: {
    value: number;
    label: string;
  }
};
