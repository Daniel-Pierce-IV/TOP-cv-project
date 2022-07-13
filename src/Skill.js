import { v4 as uuid } from "uuid";

export default function SkillFactory() {
  return {
    id: uuid(),
    text: null,
  };
}
