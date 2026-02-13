export const hello = () => 'Салам я библеотека vakula. Я многое могу если хозяин захочет'

export const zad1 = (mas) => {let utog = 0
for(let i = 0; i < mas.length; i++) {let j = mas[i]
utog += j.tasksCompleted}return utog}

export const zad2 = (mas) => {
const utog = [{age: 100}, {age: 100}, {age: 100}]
for (let i = 0; i< mas.length; i++) {
    let j = mas[i]
    for (let l = 0; l < utog.length; l++) {
        if (utog[l].age > j.age) {utog[l + 1] = utog[l] 
            utog[l] = j
            break}}}utog.pop()
        return utog}
    
export const zad3 = (mas) => {
const hasAdmin = mas.some(c => c.email === 'admin@example.com'); return hasAdmin ? "Да" : "Нет"}
    
export const zad4 = (stock) => {
    const result = {};
    for (const item of stock) {
        result[item.name] = item.quantity;
    }
    return result;
};
    
export const zad5 = (users) => {
    const over30 = users.filter(u => u.age >= 30);
    const under30 = users.filter(u => u.age < 30);
    return { over30, under30 };
};

export const zad6 = (articles) => {
    return articles.filter(a => 
        a.title.includes('CSS') || a.content.includes('CSS')
    ).length;
};









