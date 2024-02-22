import { useAppSelector } from 'hooks/reduxHooks';
import { ReactNode, useState } from 'react';

export const MyCardSetting = () => {
  const card = useAppSelector((state) => state.card);
  const [selectedCard, setSelectedCard] = useState<string[]>([]);
  //   console.log(card);
  const [category, setCategory] = useState<'인물' | '장소' | '무기'>('인물');

  /** 카드 선택시 배열에 추가해주는 함수. 이미 배열에 있다면 제거 */
  const selectCard = (card: string) => {
    if (selectedCard.includes(card)) {
      setSelectedCard(selectedCard.filter((value) => value !== card));
    } else {
      setSelectedCard([...selectedCard, card]);
    }
  };

  const showCards = (category: '인물' | '장소' | '무기') => {
    const mapping = (value: string) => {
      if (selectedCard.includes(value)) {
        return (
          <p key={value} onClick={() => selectCard(value)}>
            {value}✅
          </p>
        );
      } else {
        return (
          <p key={value} onClick={() => selectCard(value)}>
            {value}
          </p>
        );
      }
    };
    if (category === '인물') {
      return card.character.map((value) => mapping(value));
    } else if (category === '장소') {
      return card.place.map((value) => mapping(value));
    } else if (category === '무기') {
      return card.weapon.map((value) => mapping(value));
    }
  };
  return (
    <div>
      <hr></hr>
      <div>내 손에 든 카드를 선택합니다.</div>
      <div>
        <button onClick={() => setCategory('인물')}>인물</button>
        <button onClick={() => setCategory('장소')}>장소</button>
        <button onClick={() => setCategory('무기')}>무기</button>
        <h3>{category}</h3>
        {showCards(category)}
      </div>
      <div>⭐내가 든 카드</div>
      <div>{selectedCard.join(' ')}</div>
    </div>
  );
};
