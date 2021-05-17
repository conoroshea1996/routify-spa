export type Todo = {
    id: number
    userId: number
    title: string
    completed: boolean
} 

export interface Loading {
    loading: boolean;
}

export interface TodoState extends Loading{
    data: Array<Todo>;
} 

export interface TodoContext extends Loading {
    todos: Array<Todo>
    deleteTodo(todoToRemove: Todo): void
    updateTodo(todoToUpdate: Todo): void
    toggleTodo(todoToToggle: Todo): void
} 