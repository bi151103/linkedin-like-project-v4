export type AccomplishmentModel = {
  id: string;
  name: string;
  duration?: {
    start: string;
    end: string;
  };
  authority?: string;
};
