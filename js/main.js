

document.addEventListener('DOMContentLoaded', () => {  
    console.log('DOM loaded doing stuff');

    var card_2019 = document.getElementById('card_2019');
    var card_2020 = document.getElementById('card_2020');
    var card_2021 = document.getElementById('card_2021');
    var card_2022 = document.getElementById('card_2022');


    new LeaderLine(card_2019, card_2020, {color: '#708090', size: 2, path: 'straight'});
    new LeaderLine(card_2020, card_2021, {color: '#708090', size: 2, path: 'straight'});
    new LeaderLine(card_2021, card_2022, {color: '#708090', size: 2, path: 'straight'});


  });