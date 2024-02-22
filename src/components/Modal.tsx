export const Modal = (props: { context: string | JSX.Element; display: boolean }) => {
  return (
    // 화면 전체를 덮을 div
    <div>
      {/* 모달창 영역 */}
      <div>
        <div>{props.context}</div>
        <div>
          <button>닫기</button>
        </div>
      </div>
    </div>
  );
};
