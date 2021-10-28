
let ul = document.querySelectorAll('li');;
const letters= ["A", "B", "C", "D", "E", "F", "G", "H", ""]

function setUp() {
    llenarGrilla(ul, letters);
    idSet(ul)

    state.content = obtenerEstado(ul);
    state.dimension = obtenerDimension(state);
    // set up the droppable and dragabble contents
    setDroppable(ul) ;
    setDraggable(ul);

}

const state = {}
state.content = letters;


const obtenerEstado = (items) => {
    const content = [];
    items.forEach((item, i) => {
        content.push(item.innerText)
    });
    return content;
}

const obtenerCeldaVacia = () => {
    const numeroCeldaVacia = state.emptyCellIndex+1;
    const celdaVaciaFila = Math.ceil(numeroCeldaVacia/3);
    const celdaVaciaColumna = 3 - (3 * celdaVaciaFila - numeroCeldaVacia);
    return [celdaVaciaFila-1, celdaVaciaColumna-1]
}


const obtenerDimension = (state) => {
    let j = 0;
    let arr = [];
    const {content} = state;
    for(let i = 0; i < 3; i++) {
        arr.push(content.slice(j, j+3));
        j+=3;
    }

    return arr;
}


const setDroppable = (items) => {
    items.forEach((item, i) => {
        if(!item.innerText) {
            state.emptyCellIndex = i;
            item.setAttribute("ondrop", "drop_handler(event);");
            item.setAttribute("ondragover", "dragover_handler(event);");
            item.setAttribute("class", "empty");
            item.setAttribute("draggable", "false");
            item.setAttribute("ondragstart", "");
            item.setAttribute("ondragend", "")
        }
        return;
        
    })
}


const removeDroppable = (items) => {
    items.forEach((item) => {
        item.setAttribute("ondrop", "");
        item.setAttribute("ondragover", "");
        item.setAttribute("draggable", "false");
        item.setAttribute("ondragstart", "");
        item.setAttribute("ondragend", "");
    })
}

const setDraggable = (items) => {
    const [row, col] = obtenerCeldaVacia();

    let left, right, top, bottom = null;
    if(state.dimension[row][col-1]) left = state.dimension[row][col-1];
    if(state.dimension[row][col+1]) right = state.dimension[row][col+1];

    if(state.dimension[row-1] != undefined) top = state.dimension[row-1][col];
    if(state.dimension[row+1] != undefined) bottom = state.dimension[row+1][col];



    items.forEach(item => {
        if(item.innerText == top || 
            item.innerText == bottom || 
            item.innerText == right ||
            item.innerText == left) {
                item.setAttribute("draggable", "true");
                item.setAttribute("ondragstart", "dragstart_handler(event)");
                item.setAttribute("ondragend", "dragend_handler(event)")
            }
        
    })
}


const idSet = (items) => {
    for(let i = 0; i < items.length; i++) {
        items[i].setAttribute("id", `li${i}`)
    }
}

const esSolucionable = (arr) => {
    let number_of_inv = 0;
    
    for(let i =0; i<arr.length; i++){
        
        for(let j = i+1; j < arr.length; j++) {
            
            if((arr[i] && arr[j]) && arr[i] > arr[j]) number_of_inv++;
        }
    }
    return (number_of_inv % 2 == 0);
}

const esCorrecto = (solution, content) => {
    if(JSON.stringify(solution) == JSON.stringify(content)) return true;
    return false;
}

const llenarGrilla = (items, letters) => {
    let mezclard = mezclar(letters);
    
    while(!esSolucionable(mezclard)) {
        mezclard = mezclar(letters);
    }

    items.forEach((item, i) => {
        item.innerText = mezclard[i];
    })
}


const mezclar = (arr) => {
    const copy = [...arr];
    
    for(let i = 0; i < copy.length; i++) {
        
        let j = parseInt(Math.random()*copy.length);
       
        let temp = copy[i];
        copy[i] = copy[j];
        copy[j] = temp;
    }   
    return copy;
 }


const dragstart_handler = ev => {
    console.log("dragstart")
    ev.dataTransfer.setData("text/plain", ev.target.id)
    ev.dataTransfer.dropEffect = "move";
}

const dragover_handler = ev => {
    console.log("dragOver");
    ev.preventDefault();
}

const drop_handler = ev => {
    console.log("drag")
    ev.preventDefault();
    
    const data = ev.dataTransfer.getData("text/plain");
    ev.target.innerText = document.getElementById(data).innerText;
    
    
    ev.target.classList.remove("empty")
    ev.target.setAttribute("ondrop", "");
    ev.target.setAttribute("ondragover", "");
    document.getElementById(data).innerText = "";

    
    state.content = obtenerEstado(ul);
    
    state.dimension = obtenerDimension(state);
}

const dragend_handler = ev => {
  console.log("dragEnd");
  
  ev.dataTransfer.clearData();
  
  removeDroppable(document.querySelectorAll('li'));

  
  setDroppable(document.querySelectorAll('li'));
  setDraggable(document.querySelectorAll('li'))

   
    if(esCorrecto(letters, state.content)) {
        modalesMostrar();
    }
}

const modalesMostrar = () => {
    document.getElementById('message').innerText = "You Won!";
    document.getElementById('modal').classList.remove("hide");

}

const ocultarModal = () => {
    document.getElementById('modal').classList.add("hide");
}
