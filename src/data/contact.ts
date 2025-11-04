export type ContactInfo = {
  email: string;
  phone: {
    number: string;
    display: string;
  };
};

export const contactInfo: ContactInfo = {
  email: "info@artusacademy.com",
  phone: {
    number: "+917034353580",
    display: "+91 7034 3535 80",
  },
};
