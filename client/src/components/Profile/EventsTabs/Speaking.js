import React from 'react';

const Speaking = () => (
  <div
    className="tab-pane fade active show"
    id="events-lect-tab"
    role="tabpanel"
    aria-labelledby="nav-events-lect-tab"
  >
    <table className="table">
      <thead className="thead-light">
        <tr>
          <th scope="col">Название опции</th>
          <th scope="col">Стоимость</th>
          <th scope="col">Добавить в счет</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Взнос за участие в конференции</td>
          <td>5 000 р.</td>
          <td>
            <div className="form-check">
              <input
                className="form-check-input position-static mx-auto"
                type="checkbox"
                name="participationCheck1"
                id="participationCheck1"
                disabled=""
              />
            </div>
          </td>
        </tr>
        <tr>
          <td>Гостиница</td>
        </tr>
        <tr>
          <td>Hotel Kempinski Plaza</td>
          <td>10 000 р./2 ночи</td>
          <td>
            <div className="form-check">
              <input
                className="form-check-input position-static mx-auto"
                type="checkbox"
                name="participationCheck1"
                id="participationCheck1"
              />
            </div>
          </td>
        </tr>
        <tr>
          <td>Four Seasons Moscow</td>
          <td>12 000 р./2 ночи</td>
          <td>
            <div className="form-check">
              <input
                className="form-check-input position-static mx-auto"
                type="checkbox"
                name="participationCheck2"
                id="participationCheck2"
              />
            </div>
          </td>
        </tr>
        <tr>
          <td>Radison Украина</td>
          <td>15 000 р./2 ночи</td>
          <td>
            <div className="form-check">
              <input
                className="form-check-input position-static mx-auto"
                type="checkbox"
                name="participationCheck3"
                id="participationCheck3"
              />
            </div>
          </td>
        </tr>
        <tr>
          <td>Меню</td>
        </tr>
        <tr>
          <td>Стандартное меню банкета</td>
          <td>2 000 р.</td>
          <td>
            <div className="form-check">
              <input
                className="form-check-input position-static mx-auto"
                type="checkbox"
                name="menuCheck1"
                id="menuCheck1"
              />
            </div>
          </td>
        </tr>
        <tr>
          <td>Трансфер из/в аэропорт</td>
          <td>1 500 р.</td>
          <td>
            <div className="form-check">
              <input
                className="form-check-input position-static mx-auto"
                type="checkbox"
                name="transferCheck1"
                id="transferCheck1"
              />
            </div>
          </td>
        </tr>
        <tr>
          <td>Итог:</td>
          <td>5 000 р.</td>
        </tr>
      </tbody>
    </table>
    <div className="col">
      <form>
        <div className="form-check text-center">
          <input className="form-check-input" type="radio" name="payChoose1" id="payChoose1" value="option1" />
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label className="form-check-label" htmlFor="payChoose1">
            Выставление банковского счета
          </label>
        </div>
        <div className="form-check text-center">
          <input
            className="form-check-input"
            type="radio"
            name="payChoose2"
            id="payChoose2"
            value="option2"
          />
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label className="form-check-label" htmlFor="payChoose2">
            Оплата картой онлайн
          </label>
        </div>
        <div className="form-group text-center">
          <button type="submit" className="btn btn-secondary mx-auto">Перейти к оплате</button>
        </div>
      </form>
    </div>
  </div>
);

export default Speaking;
