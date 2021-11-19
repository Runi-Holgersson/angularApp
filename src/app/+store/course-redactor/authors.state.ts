import {Authors} from "../../common/interfaces/authors.interface";


export interface AuthorsState{
  data: Authors[];
}

export const InitialAuthorsState: AuthorsState = {
  data: [
    {
      id: "5b7a846290d6ff6894377fb511",
      name: "Astrid Lindgren"
    },
    {
      id: "5b7a846290d6ff6894377fb512",
      name: "John Tolkien"
    },
    {
      id: "5b7a846290d6ff6894377fb513",
      name: "Jane Austen"
    },
  ]
}
