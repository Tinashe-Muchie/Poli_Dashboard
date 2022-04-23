import { useReducer } from 'react';
import { MdAttractions } from 'react-icons/md';

const initialState = {
  first_name: '',
  last_name: '',
  title: '',
  date_of_birth: '',
  mailing_address: '',
  home_phone: '',
  work_phone: '',
  cell_phone: '',
  email_address: ''
}

type ACTIONTYPE =
  | { type: 'first_name', payload: string }
  | { type: 'last_name', payload: string }
  | { type: 'title', payload: string }
  | { type: 'date_of_birth', payload: number | string}
  | { type: 'mailing_address', payload: number | string}
  | { type: 'home_phone', payload: number | string}
  | { type: 'work-phone', payload: number | string}
  | { type: 'cell_phone', payload: number | string}
  | { type: 'email_address', payload: number | string};

const reducer = (state: typeof initialState, action: ACTIONTYPE) => {
  switch (action.type) {
    case 'first_name':
      return {first_name: action.payload};
    case 'last_name':
      return {last_name: action.payload};
    case 'title': 
      return {title: action.payload};
    default: 
      throw new Error('Bad input')
  }
}

export const REGISTRATION = () => {

  const [ state, dispatch ] = useReducer(reducer, initialState);

  return <div className="registration_wrapper">
    <form>
      <div>
        <label>
          First Name:
          <input 
            name="first_name"
            type="text"
          />
        </label>
        <label>
          Last Name: 
          <input
            name="last_name"
            type="text"
          />
        </label>
        <label>
          Title: 
          <input
            name="title"
            type="text"
          />
        </label>
      </div>
      <div>
        <label>
          Date of Birth: 
            <input
              name="date_of_birth"
              type="date"
            />
        </label>
        <label>
          Gender: 
            <select value="">
              <option value="male"> Male </option>
              <option value="female"> Female </option>
            </select>
        </label>
      </div>
      <label>
        Mailing Adress:
          <input
            name="mailing_address" 
            type="text"
          />
      </label>
      <label>
        Home Phone: 
          <input
            name="home_phone"
            type="tel"
          />
      </label>
      <label>
        Work Phone:
          <input 
            name="work_phone"
            type="tel"
          />
      </label>
      <label>
        Cell Phone:
          <input
            name="cell_phone" 
            type="tel"
          />
      </label>
      <label>
        Marital Status:
          <select value="" onChange={()=> {}}>
            <option value="single"> Single </option>
            <option value="married"> Married </option>
            <option value="separated"> Separated </option>
            <option value="divorced"> Divorced </option>
            <option value="widowed"> Widowed </option>
            <option value="unknown"> Unknown </option>
          </select>
      </label>
      <label>
        email address:
          <input
            name="email_address" 
            type="text"
          />
      </label>
      <input type="submit" value="Submit" />
    </form>
  </div>;
};
