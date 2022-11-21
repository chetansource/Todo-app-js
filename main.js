
window.addEventListener("load", () => {  /* the load event is fired when the page is completely loaded with all depedent resoure */
    const form = document.querySelector('#new-form')
    const input = document.querySelector('#new-task')
    const list_elements = document.querySelector('#loaded-tasks')

    // console.log(form)
    const myArray = []
    form.addEventListener('submit', (e) => {
        e.preventDefault() //this will stop from refreshing the page by deafult
        let task = input.value
        // console.log(task)
        if (!task) {                        // let and const reference types refer it , use const instead ad check it , preventdefault action
            alert('please fill out the task')       //functions to create delete element for each element
            return
        }
        const task_ele = document.createElement('div')


        const task_input_ele = document.createElement('input')
        task_input_ele.type = 'text'
        task_input_ele.value = task
        task_ele.appendChild(task_input_ele)
        list_elements.appendChild(task_ele)

        const task_actions = document.createElement('div')
        const task_edit_ele = document.createElement('button')
        task_edit_ele.innerHTML = "Edit"
        const task_delete_ele = document.createElement('button')
        task_delete_ele.innerHTML = "Delete"


        task_actions.appendChild(task_edit_ele)
        task_actions.appendChild(task_delete_ele)
        task_ele.appendChild(task_actions)

        input.value = ""

        task_delete_ele.addEventListener('click', () => {
            list_elements.removeChild(task_ele)
        })


        let myObj = {
            myTask: task
        }
        myArray.push(myObj)

        // storing in localstorage
        let myObj_string = JSON.stringify(myArray)
        localStorage.setItem('myData', myObj_string)
        console.log(localStorage)




    })

});