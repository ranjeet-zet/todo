import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { store } from './Redux/store/Store';
import { deleteTodo } from './Redux/Features/Todo.slice';
function TodoShow() {

    const todo = useSelector((store) => store.todos)
    const dispatch = useDispatch();

    return (
        <div className="w-[100%] h-[100%] mt-[2vh] flex justify-center ">

            <div className='w-[50%] max-h-[80vh] m-auto  bg-green-800 px-4 overflow-y-auto rounded' >
                {todo.length === 0 && <p className='text-white text-center p-4'>No Todo Found</p>}
                {todo?.map((ele, i) => (
                    <div className={` ${i != todo.length - 1 ? "border-b-[1px]" : ""}  m-1 flex justify-between p-2 `}>
                        <p className='text-white'>{ele.data}</p>
                        <button onClick={() =>
                            dispatch(deleteTodo(i))
                        } className='bg-red-700 w-[15%] rounded-md p-1 text-white uppercase'>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TodoShow;
