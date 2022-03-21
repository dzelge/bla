import { Bla as TBla } from "../api/bla/Bla";

export const BLA_TITLE_FIELD = "id";

export const BlaTitle = (record: TBla): string => {
  return record.id || record.id;
};
