import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks';
import { useState } from 'react';
import { addPlayer, deletePlayer, reversePlayer } from 'store/playerSlice';

export const PlayerSetting = () => {
  const [direction, setDirection] = useState(true);
  const [playerName, setPlayerName] = useState('');
  const player = useAppSelector((state) => state.player);

  const dispatch = useAppDispatch();

  const addBtnClick = () => {
    dispatch(addPlayer(playerName));
    setPlayerName('');
  };

  const deleteBtnClick = (index: number) => {
    dispatch(deletePlayer(index));
  };

  const reverse = () => {
    dispatch(reversePlayer());
  };

  const shuffleTipMsg = () => {
    if (player.length === 0) {
      return '2인 이상이어야 진행이 가능합니다.';
    }
    let n: number = 0;
    switch (player.length) {
      case 2:
        n = 9;
        break;
      case 3:
        n = 6;
        break;
      case 4:
        n = 4;
        break;
      case 5:
        n = 3;
        break;
      case 6:
        n = 3;
        break;
    }
    let msg = `한 사람이 ${n}장의 카드를 받습니다.`;
    if (player.length === 4 || player.length === 5) msg += ' 남은 카드는 모두에게 공개한 상태로 진행합니다.';

    return msg;
  };

  return (
    <>
      <div>
        <div>⭐본인을 포함해서 카드를 보여주는 방향대로 입력해주세요.</div>
        <input
          onChange={(e) => setPlayerName(e.target.value)}
          value={playerName}
          onKeyDown={(e) => {
            if (e.key === 'Enter') addBtnClick();
          }}
          placeholder='플레이어 입력'
        ></input>
        <button onClick={addBtnClick}>➕</button>
      </div>
      <div>💡{shuffleTipMsg()}</div>
      {player.map((value, index) => (
        <div key={value}>
          {index + 1}. {value}
          <button onClick={() => deleteBtnClick(index)}>🗑️</button>
        </div>
      ))}
      <div>
        ⭐카드를 보여주는 방향 <button onClick={reverse}>🔄️</button>
        <div>{player.join(' ➡️ ')}</div>
        {2 < player.length && (
          <div>
            예시 : {player[0]}님이 추리하는 카드가 {player[1]}님에게 있다면 보여줍니다. {player[1]}님에게 없다면 다음
            차례인 {player[2]}님에게 카드가 있다면 보여줍니다. 같은 방식으로 해당하는 카드를 가진 사람이 나올때까지
            순서가 넘어갑니다.
          </div>
        )}
      </div>
      {/* <PageMoveBtn></PageMoveBtn> */}
    </>
  );
};
