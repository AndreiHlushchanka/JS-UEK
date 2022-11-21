computer=Math.floor(Math.random() * 5)+1;
let guess= prompt('Number from 1 to 5: ');
if(guess == computer) {
    alert('You guessed');
}
else {
    alert(':(');
}