import 'regenerator-runtime/runtime';
import axios from "axios";

// Defining the Get request

const base_URL = "https://jsonplaceholder.typicode.com";

// It is used to fetch all the items from the API
const getToDoItems = async() =>{
    try{
        const response = await axios.get(`${base_URL}/todos?_limit=10`);  // we can specify the limit of entries after todos.
        const toDoItems = response.data;
        console.log(`Here are my list of items`,toDoItems);
        return toDoItems;
    }
    catch(errors) {
        console.error(errors);
    }
};
// It is used to display the items in LI

const createToDoElement = item =>{
    const toDoElements = document.createElement("li");
    toDoElements.appendChild(document.createTextNode(item.title));
    return toDoElements;
};

// Displying all the titles in LI one after another

const updateToDoList = toDoItems =>{
    const toDoList = document.querySelector("ul");
    if(Array.isArray(toDoItems) && toDoItems.length>0){
        toDoItems.map(toDoItem => {
            toDoList.appendChild(createToDoElement(toDoItem));
        });
    }else if(toDoItems){
        toDoList.appendChild(createToDoElement(toDoItems));
    }
};

const main = async() =>{
    updateToDoList(await getToDoItems())
};

main();

// Using Post Request

const form = document.querySelector('form');
form.addEventListener('submit', async event => {
    event.preventDefault();
    const title = document.querySelector("#newTitle").value;

    const toDo = {
        userId:1,
        title:title,
        completed:false
    };
    const submitToDoItem = await addToDoItem(toDo);
    updateToDoList(submitToDoItem);
});

export const addToDoItem = async toDo => {
    try {
        const response = await axios.post(`${base_URL}/todos`, toDo);
        const newToDoItem = response.data;
        console.log(`added a new item`, newToDoItem);
        return newToDoItem;
    } catch (errors){
        console.error(errors);
    }
};