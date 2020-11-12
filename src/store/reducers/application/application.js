// import offers from '../../../mocks/offers';
import {extend} from "../../../utils";
import {ActionType} from "../../action";
import {Sorting} from '../../../const';
import {CITIES} from '../../../mocks/offers';

// const initialOffers = offers.filter((offer) => offer.hotelCity.name === CITIES[0]);

const initialState = {
  hoveredOffer: -1,
  currentCity: CITIES[0],
  offersForCity: [],
  sortType: Sorting.POPULAR,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // Корректнее CHANGE_CITY
    case ActionType.CITY_CHANGE:
      return extend(state, {
        currentCity: action.payload,
      });
    case ActionType.RESET_SORT_TYPE:
      return extend(state, {
        sortType: Sorting.POPULAR,
      });
    case ActionType.RESET_HOVERED_OFFER:
      return extend(state, {
        hoveredOffer: -1, // Если чего-то нет, то лучше присваивать ему null или undefined, а не -1
      });
    // Почему GET, если ты наоборот записываешь данные в стор
    case ActionType.GET_HOVERED_OFFER:
      return extend(state, {
        hoveredOffer: action.payload,
      });
    // Ты же не сортируешь предложения, а устанавливаешь тип сортировки, значит правильно будет SET_SORT_TYPE
    case ActionType.SORT_OFFERS:
      return extend(state, {
        sortType: action.payload,
      });
    // Вообще код был бы намного более читаемым если бы в actionType содержалось бы имя поля которое ты меняешь в сторе,
    // т.е если в экшен меняет поле offersForCity, то правильнее было бы назвать actionType set_offers_for_city
    case ActionType.SET_CITY_OFFERS:
      return extend(state, {
        offersForCity: action.payload,
      });
  }

  return state;
};

export default reducer;
