import React from "react";
import FlexLayout from "../../components/FlexLayout/FlexLayout";
import styles from "./ParkingPage.module.scss";

const ParkingPage = () => {
  return (
    <FlexLayout>
      <FlexLayout.Top>
        <header className={styles.Header}>
          <h1>주차관리</h1>
        </header>
      </FlexLayout.Top>
      <FlexLayout.Body>
        <div className={styles.ParkingPage}>
          <Card />
          <div className={styles.TextWrapper}>
            <span>연락처가 없어도,</span>
            <span>차주와 연락이 가능한가요?</span>
          </div>
          <List />
          <TextCard
            lines={[
              <div key="1">
                우리아파트 <span>주차관리</span>로
              </div>,
              <div key="2">즉시 해결하세요.</div>,
            ]}
          />
          {/* <TextCard
            lines={[
              <div>단지에 차량정보가 등록되어 있으면</div>,
              <div>입주민 분들은 바로 이용가능합니다.</div>,
            ]}
          /> */}
        </div>
      </FlexLayout.Body>
      <FlexLayout.Bottom>
        <BottomButton />
      </FlexLayout.Bottom>
    </FlexLayout>
  );
};

export default ParkingPage;

const Card: React.FC = function Card() {
  return (
    <div className={styles.Card}>
      <div className={styles.CardTextWrapper}>
        <span>차량이동이 필요하세요?</span>
        <h1>관리사무소 전화하기</h1>
      </div>
      <div className={styles.Circle} />
    </div>
  );
};

const List: React.FC = function List() {
  return (
    <div className={styles.List}>
      <div>이중주차된 차에 연락처가 없어서 지각했어요!</div>
      <div>주차하다가 문콕했는데 연락처가 없어요.</div>
      <div>늦은 시간이라 관리사무소에 연락할 수가 없어요.</div>
      <div>차주랑 직접 연락하고 싶은데 연락처가 없어요.</div>
    </div>
  );
};

const BottomButton: React.FC = function BottomButton() {
  return (
    <div className={styles.BottomButton}>
      <button>주차관리 써보고 싶어요</button>
    </div>
  );
};

interface TextCardProps {
  lines?: React.ReactNode[];
}

const TextCard: React.FC<TextCardProps> = function TextCard({ lines }) {
  return <div className={styles.TextCardWrapper}>{lines}</div>;
};
