export type AccomplishmentModel = {
  id: string;
  name: string;
  duration?: {
    start: string;
    end: string;
  };
  authority?: string;
};

export type Profile = {
  id: string;
  name: string;
  headline?: string;
  connection: {
    relationship: "1st" | "2nd" | "3rd";
    addConnectionInvitationSent: boolean;
  };
  profileImgUrl?: string;
};
