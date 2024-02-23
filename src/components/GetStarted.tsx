import { useState } from 'react';
import styles from 'style/GetStarted.module.css';

export const GetStarted = () => {
  const [showTable, setShowTable] = useState(false);

  const Table = () => (
    <>
      <table>
        <thead>
          <tr>
            <th>인원</th>
            <th>카드</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2명</td>
            <td>9장</td>
          </tr>
          <tr>
            <td>3명</td>
            <td>6장</td>
          </tr>
          <tr>
            <td>4명</td>
            <td>4장</td>
          </tr>
          <tr>
            <td>5명</td>
            <td>3장</td>
          </tr>
          <tr>
            <td>6명</td>
            <td>3장</td>
          </tr>
        </tbody>
      </table>
      <p>남는 카드가 있다면 모두에게 공개합니다.</p>
    </>
  );
  return (
    <div>
      <div className={styles.subject}>시작하는 방법</div>
      <div className={styles.list}>
        <p>용의자 카드, 도구 카드, 장소 카드를 각각 모아 뒤집어 잘 섞습니다.</p>
        <p>용의자 카드, 도구 카드, 장소 카드를 한장씩 뽑아 봉투에 넣습니다.(아무도 확인할 수 없어요!)</p>
        <p>
          남은 카드를 모두 모아 잘 섞은 후, 모두 같은 갯수로 나누어 갖습니다.{' '}
          <button onClick={() => setShowTable(!showTable)}>{showTable ? '알겠어요!' : '몇장씩요?'}</button>
        </p>
        {showTable && <Table></Table>}
      </div>
    </div>
  );
};
