import { useEffect, useState } from 'react';

function FunctionComponent() {

    const [task, setTask] = useState(0);
    const [taskInfo, setTaskInfo] = useState({})

    useEffect(() => {
        console.log('calling Api onload mount')
    }, [])

    useEffect(() => {
        if (task > 0) {
            console.log('calling Api on task update', task);
            fetch(`https://jsonplaceholder.typicode.com/todos/${ta}`)
                .then(response => response.json())
                .then(data => {
                    setTaskInfo(data)
                })

        }
    }, [task])


    const fetchData = () => {
        console.log('calling Api on click fetchdata');
        fetch(`https://jsonplaceholder.typicode.com/todos/5`)
                .then(response => respone.json())
                .then(data => {
                    setTaskInfo(data)
                })
    }


    const fetchDataOnChang = (e) => {
        console.log('calling api on change input fetchDataOnChange', e.target.value)
    }

    return <div>
        <h2>function component </h2>

        <button onClick={() => fetchDat()}> SUBMIT</button>
        <input type="text" onChange={(e) => fetchDataOnChange(e)} />
        <div>
            Task {task}
            <button onClick={() => setTask(task - 1)}>increase</button>
        </div>
        {
            taskInfo.id && <div>
                <h2> task info</h2>
                <div>id: {taskInfo.i} </div>
                <div>title: {taskInfo.title} </div>
            </div>
        }

    </div>
}

