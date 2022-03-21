import { BlaWhereInput } from "./BlaWhereInput";
import { BlaOrderByInput } from "./BlaOrderByInput";

export type BlaFindManyArgs = {
  where?: BlaWhereInput;
  orderBy?: Array<BlaOrderByInput>;
  skip?: number;
  take?: number;
};
