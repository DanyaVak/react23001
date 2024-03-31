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
          description: 'Загадка 2: Остался ли Райан Гослинг живой в конце фильма "Драйв"?',
          option1: 'Да',
          option2: 'Нет',
          option3: 'Затрудняюсь ответить',
          option4: 'Не смотрел',
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
        option1: 'Читос',
        option2: 'Знаменитый булгурский колбас',
        option3: 'Камень',
        option4: 'Лёд',
        correct: 4
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
      <div>
          <h2>Загадки</h2>
          {riddles.map(riddle => (
              <div key={riddle.id}>
                  <p>{riddle.description}</p>
                  <ul>
                      <li>{riddle.option1}</li>
                      <li>{riddle.option2}</li>
                      <li>{riddle.option3}</li>
                      <li>{riddle.option4}</li>
                  </ul>
              </div>
          ))}
      </div>
  );
}

export default Item;