function createHtml(html) {
    let template = document.createElement("template");
    template.innerHTML = html.trim();

    return template.content.firstElementChild;
}


function createCard()
{
    const cardTemplate = createHtml('<div class="card"><input type="button" value="❌" class="card__closer" onclick="deleteCard(this)"><textarea class="card__title" placeholder="Tytuł..." oninput=\'this.style.height = "";this.style.height = this.scrollHeight + "px"\'></textarea><textarea class="card__description" placeholder="Opis..." oninput=\'this.style.height = "";this.style.height = this.scrollHeight + "px"\'></textarea><div class="card__list"><input type="button" value="Dodaj zadanie" class="card__addTaskButton" onclick="createTask(this)"></div></div>');
    document.getElementsByClassName("cardContainer")[0].appendChild(cardTemplate);
}
function deleteCard(button)
{
    console.log("idk")
    const card = button.parentNode;
    card.remove();
}

function createTask(button)
{
     const taskTemplate = createHtml('<div class="task"><textarea class="task__desc" placeholder="Zadanie..." oninput=\'this.style.height = "";this.style.height = this.scrollHeight + "px"\'></textarea><input type="button" class="task__checkbox" onclick="makeTaskDone(this)" value="❌"></div>')
     console.log(button.parentNode);
     button.parentNode.appendChild(taskTemplate);    
}

function makeTaskDone(button)
{
    const task = button.parentNode;
    task.remove();
}





