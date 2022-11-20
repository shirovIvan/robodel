import "./form.scss";
import arrow from "../../resources/icon/arrow-left.svg";
import Button from "../../subComponent/button/button";
import Input from "../../subComponent/input/input";

const Form = () => {
  return (
    <div className="App">
      <form action="" className="form">
        <div className="form-container">
          <a href="" className="step-back">
            <img src={arrow} alt="arrow-left" /> Назад
          </a>

          <div className="form-container__adress">
            <h2>Куда доставить заказ?</h2>
            <div className="form-container__adress__inputs">
              <Input placeholder="Адрес доставки" />
              <div className="form-container__adress__inputs__home">
                <Input placeholder="Дом" />
                <Input placeholder="Подъед" />
              </div>
            </div>
          </div>

          <div className="form-container__contacts">
            <h2>Ваши данные</h2>
            <div className="form-container__contacts__inputs">
              <Input placeholder="Имя" />
              <Input placeholder="Фамилия" />
              <Input placeholder="Номер телефона" />
            </div>
          </div>
        </div>
        <Button textBtn="Оформить заказ" />
      </form>
    </div>
  );
};

export default Form;
