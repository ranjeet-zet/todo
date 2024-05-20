import { useRef } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from "./Redux/Features/Todo.slice"
const AddTodo = () => {
    const dispatch = useDispatch();

    const inputRef = useRef("")
    const handelInputSubmit = () => {
        if (inputRef.current.value === "") return alert("Please write something")
        dispatch(addTodo({
            id: Math.random(),
            data: inputRef.current.value
        }))
        inputRef.current.value = ""
    }

    return (
        <div className="w-[100%] h-[100%] mt-[2vh] flex justify-center ">
            <div className='w-[50%] h-[10vh] m-auto  bg-yellow-500 px-4 overflow-y-auto p-4 flex justify-between rounded'  >
                <input onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                        handelInputSubmit()
                    }
                }} type="text" ref={inputRef} min={0} placeholder="Write Todo..." className="p-1 w-[80%] rounded" />
                <button onClick={handelInputSubmit} className='bg-green-800 rounded-md p-1 w-[15%] text-white uppercase'>Create</button>
            </div>
        </div>
    )
}
export default AddTodo