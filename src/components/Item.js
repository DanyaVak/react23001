import React from 'react'

const Item = () => {
    // Массив объектов с загадками
  const riddles = [
    {
        id: 1,
        description: 'Загадка 1: Кто проживает на дне океана?',
        option1: 'Губкабоб',
        option2: 'Рыбы',
        option3: 'Водолазы',
        option4: 'Птицы',
        correct: 1
    },
    {
        id: 2,
        description: 'Загадка 2: Оно везде: в почве, в небе, в воздухе, в реке, в море, в овощах, во фруктах и даже в человеке.',
        option1: 'Воздух',
        option2: 'Вода',
        option3: 'Витамины',
        option4: 'Свет',
        correct: 2
    },
    {
        id: 3,
        description: 'Загадка 3: Вот с иголками клубок. Подкатился на порог. Глаза-бусинки глядят, Молочка они хотят.',
        option1: 'Ёжик',
        option2: 'Шишка',
        option3: 'Котик',
        option4: 'Верблюд',
        correct: 1
    },
    {
      id: 4,
      description: 'Загадка 4:По какому животному ходят люди и проезжают машины? ',
      option1: 'Зебра',
      option2: 'Лань',
      option3: 'Колибри',
      option4: 'Жираф',
      correct: 1
  },
  {
      id: 5,
      description: 'Загадка 5: Сколько месяцев в году имеют 28 дней?',
      option1: '1',
      option2: '5',
      option3: '6',
      option4: '12',
      correct: 4
  },
  {
      id: 6,
      description: 'Загадка 6: Что в огне не горит и в воде не тонет?',
      option1: 'Бензин',
      option2: 'Камень',
      option3: 'Лёд',
      option4: 'Масло',
      correct: 3
  },
  {
      id: 7,
      description: 'Загадка 7: Сколько будет 2+2*2?',
      option1: '8',
      option2: '42',
      option3: '24',
      option4: '6',
      correct: 4
  },
  {
      id: 8,
      description: 'Загадка 8: Каких камней в море нет?',
      option1: 'Плоских',
      option2: 'Мокрых',
      option3: 'Больших',
      option4: 'Сухих',
      correct: 4
  },
];

return (
    <form>
    <div>
        <h2>Загадки</h2>
        {riddles.map(riddle => (
            <div key={riddle.id}>
                <p className="question">{riddle.description}</p>
                <input type="radio" name={riddle.id} id={riddle.id + '.1'}></input>{riddle.option1}<br/>
                <input type="radio" name={riddle.id} id={riddle.id + '.2'}></input>{riddle.option2}<br/>
                <input type="radio" name={riddle.id} id={riddle.id + '.3'}></input>{riddle.option3}<br/>
                <input type="radio" name={riddle.id} id={riddle.id + '.4'}></input>{riddle.option4}
            </div>
        ))}
        <button type="submit" className="submit">Отправить</button>
    </div>
    </form>
);
    
}

export default Item;