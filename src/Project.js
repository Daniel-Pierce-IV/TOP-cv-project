import { v4 as uuid } from "uuid";

export default function ProjectFactory() {
  return {
    id: uuid(),
    projectTitle: null,
    url: null,
    description: null,
  };
}
