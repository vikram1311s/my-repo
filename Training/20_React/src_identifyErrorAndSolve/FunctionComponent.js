import { useEffect, useState } from 'react';

function FunctionComponent() {

    const [task, setTask] = useState(0);
    const [taskInfo, setTaskInfo] = useState({})
    const [myVar, setMyVar] = useState(false);

    useEffect(() => {
        console.log('calling Api onload mount')
    }, [])

    useEffect(() => {
        if (task > 0) {
            console.log('calling Api on task update', task);
            fetch(`https://jsonplaceholder.typicode.com/todos/${task}`)
                .then(response => response.json())
                .then(data => {
                    setTaskInfo(data)
                })

        }
    }, [task])


    const fetchData = () => {
        console.log('calling Api on click fetchdata');
        fetch(`https://jsonplaceholder.typicode.com/todos/5`)
                .then(response => response.json())
                .then(data => {
                    setTaskInfo(data)
                })
    }


    const fetchDataOnChange = (e) => {
        console.log('calling api on change input fetchDataOnChange', e.target.value)
        setTask(e.target.value)
    }

    
    return <div>
        <h2>function component </h2>

        <button onClick={() => fetchData()}> SUBMIT</button>
        <input type="text" onChange={(e) => fetchDataOnChange(e)} />
        <div>
            Task {task}
            <button onClick={() => setTask(task + 1)}>increase</button>
            <button onClick={() => setMyVar(true)}>myvar</button>
        </div>
        {
            taskInfo.id && myVar && <div>
                <h2> task info</h2>
                <div>id: {taskInfo.id} </div>
                <div>title: {taskInfo.title} </div>
            </div>
        }

    </div>
}

export default FunctionComponent;

