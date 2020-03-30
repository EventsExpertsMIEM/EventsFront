/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import classNames from 'classnames';
import Services from './Services';

const hotelOptions = [
  { info: 'Заказ гостиницы', id: 'hotelChoose' },
  { info: 'Бронирование номеров', id: 'hotelBook' },
  { info: 'Выбор меню', id: 'menuChoose' },
];

const transferTable = [
  {
    name: 'Выбор гостиницы из списка доступных',
    status: 'Выполнено',
  },
  {
    name: 'Заказ номеров',
    status: 'Выполнено',
  },
  {
    name: 'Утверждение меню',
    status: 'Выполнено',
  },
  {
    name: 'Заказ трансфера',
    status: 'Не выполнено',
  },
];

const typographyContent = `Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
                squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa
                nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
                single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
                lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you
                probably haven't heard of them accusamus labore sustainable VHS.`;

const Organization = () => {
  const [hotelTabOpened, openHotelTab] = useState(false);
  const [transferTabOpened, openTransferTab] = useState(false);
  const [typographyTabOpened, openTypographyTab] = useState(false);

  const toggleHotelTab = () => openHotelTab(!hotelTabOpened);
  const toggleTransferTab = () => openTransferTab(!transferTabOpened);
  const toggleTypographyTab = () => openTypographyTab(!typographyTabOpened);

  const hotelClassname = classNames({
    collapse: true,
    show: hotelTabOpened,
  });

  const transferClassname = classNames({
    collapse: true,
    show: transferTabOpened,
  });

  const typographyClassname = classNames({
    collapse: true,
    show: typographyTabOpened,
  });


  const main = [{
    name: 'Проживание и питание',
    onClick: toggleHotelTab,
    className: hotelClassname,
    content: hotelOptions.map(({ id, info }) => (
      <Services.Hotel key={id}>
        {info}
      </Services.Hotel>
    )),
  },
  {
    name: 'Трансфер',
    onClick: toggleTransferTab,
    className: transferClassname,
    content:
  <Services.Transfer>
    {transferTable.map(({ name, status }) => (
      <tr key={name}>
        <td>{name}</td>
        <td>{status}</td>
      </tr>
    ))}
  </Services.Transfer>,
  },
  {
    name: 'Услуги типографии',
    onClick: toggleTypographyTab,
    className: typographyClassname,
    content:
  <Services.Typography>
    {typographyContent}
  </Services.Typography>,
  }];

  return (
    <div className="tab-content" id="nav-tabContent">
      <div
        className="tab-pane fade active show"
        id="events-org-tab"
        role="tabpanel"
        aria-labelledby="nav-events-org-tab"
      >
        <h3>Выберите необходимые для проведения мероприятия услуги:</h3>
        <div id="accordion">
          {main.map(({
            name, className, onClick, content,
          }) => (
            <div
              key={name}
              className="card"
              onClick={onClick}
              role="button"
            >
              <div className="card-header" id="headingOne">
                <h5 className="mb-0">
                  <button className="btn btn-link" type="button">{name}</button>
                </h5>
              </div>
              <div
                id="chooseHotel"
                className={className}
                aria-labelledby="headingOne"
              >
                <div className="card-body">
                  {content}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Organization;
