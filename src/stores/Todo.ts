import {derived, get, Writable, writable} from "svelte/store";
import type { Todo } from "../types/List";

export function createTodos() {
    const todos: Writable<Array<Todo>> = writable([]);
    const loading: Writable<boolean> = writable(false);
    
    async function getTodos() {
        loading.set(true)
    
        let response = await fetch('https://jsonplaceholder.typicode.com/todos');
        let data : Array<Todo> = await response.json();
    
        todos.set(data);
        loading.set(false);
    }

    async function deleteTodo(todoId: number){
        todos.update((currentTodos) => currentTodos.filter(t => t.userId !== todoId))
    }

    return {
        todos,
        loading,
        getTodos,
        deleteTodo,
    }
} 

export const todoStore = createTodos();


export function createCustomArrayStore<T>(){
    const {subscribe,set, update}: Writable<Array<T>> = writable([]); 
    const prevState: Writable<Array<T>> = writable([]);
    const push = (newItem : T) => {
        update(c => {
          prevState.set(c);  
         return [...c, newItem]
        })
    }

    const removeItem = (newItem: T) => {
        update(c => { 
            prevState.set(c);
            return c = c.filter(x => x !== newItem)
        })
    }

    const undoLast = () => {
        set(get(prevState))
    }

    return {
        subscribe,
        push,
        removeItem,
        set,
        undoLast
    }
}

export function customSet<T>(inital: T){
    const {set, subscribe}:Writable<T> = writable(inital);    
    const states: Writable<Array<T>>  = writable([inital]);
    const currentStateIndex: Writable<number> = writable(0);

    const undo = () => {
        if(get(currentStateIndex) === 0) return;
        let newIndex: number= 0;
        currentStateIndex.update(n => {
            newIndex = n--
            return newIndex;
        })
        let allStates = get(states);

        set(allStates[newIndex]);
    }


    return {
        subscribe,
        set:(newValue: T) => {
            states.update(c => [...c, newValue])
            set(newValue)
        },
        undo,
        states
    }
}




export interface Arrays<T>{
   data: Array<T>;
   count: number;
   add(newItem: T): void;
   delete(newItem: T): void;
   edit(newItem: T): void;  
}