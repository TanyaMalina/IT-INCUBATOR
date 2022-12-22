let count = 0;

function cc(card) {
    // Only change code below this line
    if (card >= 2 && card <= 6) count++;

    switch (card) {
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
            break;
    }

    let text = (count > 0) ? "Bet" : "Hold";
    return count + " " + text;
    // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');