import React, {useState} from "react"
import {Task} from "./Types";

type Props = {
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>
    tasks: Task[]
}

export const TaskInput = ({setTasks, tasks}: Props) => {
    const [inputTitle, setInputTitle] = useState<string>("")
    const [count, setCount] = useState<number>(tasks.length + 1)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
        console.log(count)
        setInputTitle(e.target.value)
    }

    const handleSubmit = () => {
        setCount(count + 1)

        const newTask: Task = {
            id: count,
            title: inputTitle,
            done: false
        }

        setTasks([newTask, ...tasks])
        setInputTitle("")
    }

    return (
        <div>
            <div className="inputForm">
                <div className="inner">
                    <input type="text" className="input" value={inputTitle} onChange={handleInputChange}/>
                    <button onClick={handleSubmit} className="btn is-primary">追加</button>
                </div>
            </div>
        </div>
    );
}
