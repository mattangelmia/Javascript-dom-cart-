console.log("heyyyy")

let filter = document.querySelector("#filter")


let addForm = document.querySelector("#addForm");

let itemList = document.querySelector("#items");

itemList.addEventListener('click', removeItem)

filter.addEventListener('keyup', filterItems)

addForm.addEventListener('submit', addItem);

function addItem(e) {
    e.preventDefault();

    let newItem = document.querySelector("#item").value

    let li = document.createElement('li')
    li.className = "list-group-item"


    li.appendChild(document.createTextNode(newItem))


    let deleteBtn = document.createElement('button');

    deleteBtn.className = "delete"


    deleteBtn.appendChild(document.createTextNode('X'));

    li.appendChild(deleteBtn)




    itemList.appendChild(li)


}



function removeItem(e) {

    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure?')) {
            var li = e.target.parentElement;
            itemList.removeChild(li)
        }
        console.log("delete")
        console.log(e)
    }


}


function filterItems(e) {
    let text = e.target.value.toLowerCase()
    let items = itemList.getElementsByTagName('li')
    //convert to array 

    Array.from(items).forEach(function (item) {
        var itemName = item.firstChild.textContent
        if (itemName.toLocaleLowerCase().indexOf(text) != -1) {
            item.style.display = 'block'

        }
        else {
            item.style.display = 'none'
        }

    })

}