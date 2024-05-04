function truncate(str, max) {
    if (str.length <= max) {
        return str;
    } else {
        return str.slice(0, max) + '...';
    }
}

const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
console.log(truncate(text, 20)); 
