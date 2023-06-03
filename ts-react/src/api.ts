import axios,{AxiosResponse} from "axios"
import { Todo } from "./constants";


export const addTodo= async(newTodo: Todo)=>{
     let res: AxiosResponse<Todo>= await axios.post
     ("http://localhost:8080/posts", newTodo);
};

export const getTodo= async()=>{
    let res:AxiosResponse<Todo[]>=await axios.get
    ("http://localhost:8080/posts");
    return res.data;
}

export const toggleTodo =async( status:boolean, id?:number)=>{

  let res:AxiosResponse<Todo[]>= await axios.patch
  (`http://localhost:8080/posts/${id}`,{status: !status })
  return res;
}