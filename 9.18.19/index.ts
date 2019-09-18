function getElement<T extends HTMLElement>(id: string): T {
    const element = document.getElementById(id);

    if(element){
        return element as T;
    }

    throw new Error('Element with id ${id} was not found');
}

function getRandomNumber(min: number, max: number): number{
    return Math.round(Math.random() * (max - min)) + min;
}

const myFunction = () => {
    
}

function compute() {
    
}