import "./steps.scss";

const Steps = () => {
  return (
    <div className="App">
      <div className="steps">
        <div className="steps__container">
          <div className="steps__container__block">
            <div className="steps__container__block__item active">1</div>
            <p>Формирование заказа</p>
          </div>
          <span className="steps-line"></span>
          <div className="steps__container__block">
            <div className="steps__container__block__item ">2</div>
            <p>Ожидание</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
