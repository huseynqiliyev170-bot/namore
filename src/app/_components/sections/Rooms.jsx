import RoomItem from "@components/rooms/RoomItem";

const RoomsSection = ({
    subtitle,
    title,
    text,
    rooms = [],
    button_label,
    button_link,
}) => {
    const showExtraBlock = rooms && rooms.length % 3 === 2;

    return (
        <section className="mil-rooms mil-rooms-lux">
            <div className="mil-rooms-lux__bg" />
            <div className="mil-rooms-lux__orb mil-rooms-lux__orb--left" />
            <div className="mil-rooms-lux__orb mil-rooms-lux__orb--right" />

            <div className="container">
                <div className="mil-rooms-lux__inner">
                    <div className="mil-rooms-lux__head mil-text-center">
                        {subtitle && (
                            <div
                                className="mil-suptitle mil-rooms-lux__suptitle mil-fade-up"
                                dangerouslySetInnerHTML={{ __html: subtitle }}
                            />
                        )}

                        {title && (
                            <h2
                                className="mil-rooms-lux__title mil-fade-up"
                                dangerouslySetInnerHTML={{ __html: title }}
                            />
                        )}
                    </div>

                    {rooms && (
                        <div className="row mil-rooms-lux__grid">
                            {rooms.map((item, key) => (
                                <div
                                    className="col-md-6 col-xl-4 mil-rooms-lux__col"
                                    key={`rooms-item-${key}`}
                                >
                                    <RoomItem item={item} index={key} />
                                </div>
                            ))}

                            {showExtraBlock && (
                                <div className="col-md-6 col-xl-4 mil-rooms-lux__col">
                                    <div className="mil-room-concierge-card mil-fade-up">
                                        <div className="mil-room-concierge-card__shine" />

                                        <div className="mil-room-concierge-card__content">
                                            <span>Concierge service</span>

                                            <h3>
                                                Поможем выбрать
                                                <br />
                                                идеальный номер
                                            </h3>

                                            <p>
                                                Подберём лучший вариант под ваши даты, количество гостей
                                                и формат отдыха — спокойно, быстро и без лишних вопросов.
                                            </p>

                                            <div className="mil-room-concierge-card__chips">
                                                <div className="mil-clr">
                                                    <strong >5</strong>
                                                    <small>категорий</small>
                                                </div>
                                                <div className="mil-clr">
                                                    <strong>семьи
                                                    </strong>
                                                    <small>пары и компании
                                                    </small>
                                                </div>
                                                <div className="mil-clr">
                                                    <strong>0 ₽</strong>
                                                    <small>консультация</small>
                                                </div>

                                                <div className="mil-clr">
                                                    <strong>2 мин</strong>
                                                    <small>на подбор</small>
                                                </div>
                                            </div>
                                        </div>

                                        <a href="/contact" className="mil-room-concierge-card__button">
                                            Получить помощь
                                            <i>→</i>
                                        </a>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}

                    {(text || button_label) && (
                        <div className="mil-rooms-lux__bottom">
                            {text && (
                                <div
                                    className="mil-rooms-lux__text mil-fade-up"
                                    dangerouslySetInnerHTML={{ __html: text }}
                                />
                            )}

                            {button_label && (
                                <a href={button_link} className="mil-rooms-lux__button mil-fade-up">
                                    <span>{button_label}</span>
                                    <i>→</i>
                                </a>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default RoomsSection;