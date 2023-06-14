import "./index.css";
import Todo from "../todo/Todo";


const TodoList = ({data}) => {
    return (
        <div className="todolist"  >
            {data.map((todo) => (
                <Todo data={todo} key={data.id}/>
            ))}
        </div>
    );
}

export default TodoList;