import './styles.css';
import { useState } from 'react';

const Form = () => {
const [name, setName] = useState('');
const handleName = (e) => setName(e.target.value); /* name target screning near "username: " */
// const handleName = (e) => console.log(e.target.value);     //target displaying on console screen


  return (
    <div style={{ height: '110vh' }}>
      <form>
        <div>
          <p></p>
          <label>
            <strong>Username: {name}</strong>
          </label>
          <br />
          <input type="text" placeholder="name" defaultValue="Felix" onChange={handleName} />
        </div>
        <div>
          <p></p>
          <label>
            <strong>E-mail:</strong>
          </label>
          <br />
          <input type="email" placeholder="email" />
        </div>
        <div>
          <p></p>
          <label>
            <strong>Password: </strong>
          </label>
          <br />
          <input type="password" placeholder="pass" />
        </div>
        <div style={{ margin: '10px auto' }}>
          <p></p>
          <label>
            <strong>Country: </strong>
          </label>
          <select
            style={{ marginTop: '10px', width: '100px', padding: '10px' }}
          >
            <option value="">Country</option>
            <option value="Turkey">Turkey</option>
            <option value="Germany">Germany</option>
            <option value="Netherland">Netherland</option>
            <option value="France">France</option>
          </select>
        </div>
        <button className="btn__click" type="submit">
          submit
        </button>
      </form>
    </div>
  );
};

export default Form;
