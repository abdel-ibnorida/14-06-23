import "./index.css";

const Todo = ({ data }) => {
    const handleTodoCick = () => {
        data.completed = !data.completed;
        console.log(data.completed);
    }
    function handleClassname() {
        if (data.completed)
        {
            return "todo_completed";
        }
        else
        {
            return "todo_notcompleted"
        }
    }
    let status = "";
    if (data.completed.toString() === "true") {
        status = "Completed";
        return (
            <div className={handleClassname()} onClick={handleTodoCick}>
                <h4>Todo: {data.todo}</h4>
                <h4>Status: {status} </h4>
            </div>
        );
    }
    else {
        status = "Not Completed";
        return (
            <div className={handleClassname()} onClick={handleTodoCick}>
                <h4>Todo: {data.todo}</h4>
                <h4>Status: {status} </h4>
            </div>
        );
    }

};

export default Todo;