const items = [
  {
  name: 'Day 1',
  toDoList: [
    'Breakfast',
    'Practice Meditation',
    'Read Rich dad poor dad',
    'Lunch',
    'play Basketball',
    'Watch the Intern',
    'Snack' 
  ]
},
{
  name: 'Day 2',
  toDoList: [
    'Take a walk 45min',
    'Breakfast',
    'Read newpaper',
    'Lunch',
    'Yoga 2',
    'Read article 1',
    'Dinner',
  ]
},
{
  name: 'Day 3',
  toDoList: [
    'Breakfast',
    'Workout 1 to get in shape',
    'rich dad poor dad',
    'Lunch ',
    'Watch the pursuit of happiness',
    'Snack ',
  ]
},
{
  name: 'Day 4',
  toDoList: [
  'Ride a bike 35 min',
  'Breakfast ',
  'read article 2',
  'Lunch ',
  'Practice meditation 4',
  'Online chess',
  'Dinner ',
  ]
},
{ 
  name: 'Day 5',
  toDoList: [
  'Practice grattitude 5 min',
  'breakfast ',
  'read newpaper 5',
  'Lunch ',
  'play Basketball',
  'Dinner ',
  ]
},
{ 
  name: 'Day 6',
  toDoList: [
  'Take a walk 45 min',
  'Breakfast ',
  'rich dad poor dad 20 min',
  'Lunch ',
  'yoga ',
  'Watch Forrest gump',
  'Snack ',
  ]
},
{
   name: 'Day 7',
   toDoList: [
  'Breakfast ',
  'Workout 2 to get in shape',
  'Read article 7',
  'Lunch ',
  'onligne chess',
  'Hang out with a friend',
  'Dinner ',
  'Rich dad poor dad 10 min',
  ]
},
]
   
const toDoItems = document.getElementsByClassName
("to-do-items")[0];
const input = document.getElementById("input");
const trashIcon = document.getElementById("trash");

input.addEventListener("keydown", function(event){
    if(event.key === "Enter")
     addItem();
})

var divParent = document.createElement("select");
divParent.id = 'days'
divParent.className = 'select'
var toDosList = document.createElement("ul");

toDoItems.appendChild(divParent);
toDoItems.appendChild(toDosList);

divParent.addEventListener('change', function () {
  toDosList.innerHTML = "";
  items[this.selectedIndex].toDoList.forEach(toDo => {
    displayItem(toDo);
  })
})

function displayItems() {
  items.forEach(item => {
    var dayItem = document.createElement("option");
    dayItem.value = item.name;
    dayItem.textContent = item.name
    divParent.appendChild(dayItem);
  })

  items[0].toDoList.forEach(toDo => {
    displayItem(toDo)
  })
}

function displayItem(toDo) {
  var toDoElement = document.createElement("li");
  var divChild = document.createElement("div");
  var checkIcon = document.createElement("i");
  var trashIcon = document.createElement("i");
  checkIcon.className = "fas fa-check-square";
  checkIcon.style.color = "lightgray";
  checkIcon.addEventListener("click", function(){
    checkIcon.style.color = "limegreen";
  })

  trashIcon.className = "fas fa-trash";
  trashIcon.style.color = "darkgray";
  trashIcon.addEventListener("click", function(){
     toDoElement.remove();
  })
  divChild.appendChild(checkIcon);
  divChild.appendChild(trashIcon);
  toDoElement.className = 'item';
  toDoElement.textContent = toDo;
  toDoElement.appendChild(divChild);
  toDosList.appendChild(toDoElement);
}

function addItem(){
  displayItem(input.value)
}