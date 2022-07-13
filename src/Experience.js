import { v4 as uuid } from "uuid";

export default function ExperienceFactory() {
  return {
    id: uuid(),
    jobTitle: null,
    employer: null,
    timeframe: null,
    highlights: [null],
  };
}
