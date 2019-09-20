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
    getElement<HTMLInputElement>("a").value = getRandomNumber(1,1000).toString();
    getElement<HTMLInputElement>("b").value = getRandomNumber(1,1000).toString();

}

function compute() {
    const a = getElement<HTMLInputElement>("a").valueAsNumber || 0;
    const b = getElement<HTMLInputElement>("b").valueAsNumber || 0;
    const total = a + b;
    getElement<HTMLSpanElement>("total").innerText = total.toString();
}