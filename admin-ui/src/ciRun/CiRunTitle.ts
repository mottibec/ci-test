import { CiRun as TCiRun } from "../api/ciRun/CiRun";

export const CIRUN_TITLE_FIELD = "id";

export const CiRunTitle = (record: TCiRun) => {
  return record.id;
};
