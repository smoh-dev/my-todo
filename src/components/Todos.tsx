import TodoHeader from "./TodoHeader";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import TodoFooter from "./TodoFooter";
import { TodoProvider } from "../contexts/todo";
import {Todo} from "../App";

interface Props{
    readonly input: string;
    readonly todos: Todo[];
    readonly onRemove: (id: number)=>void;
    readonly onToggle: (id: number)=> void;
    readonly onClearAll: ()=>void;
    readonly onInsert: (input: string)=>void;
    readonly onChangeInput: (input: string)=>void;
}

const Todos = ({input, todos, onRemove, onToggle, onClearAll, onInsert, onChangeInput}: Props) => {
    return(
        <TodoProvider>
            <TodoHeader/>
            <TodoInput input={input} onInsert={onInsert} onChangeInput={onChangeInput}/>
            <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
            <TodoFooter onClearAll={onClearAll}/>
        </TodoProvider>
    );
};

export default Todos;