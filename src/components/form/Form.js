import './styles.css';
import { useState } from 'react';

const Form = () => {
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [pass, setPass] = useState('');
const [country, setCountry] = useState('');

const handleEmail = (e) => setEmail(e.target.value); 
const handleName = (e) => setName(e.target.value); /* name target screning near "username: " */
const handlePassword = (e) => setPass(e.target.value);
const handleCountry = (e) => setCountry(e.target.value);

const handleSubmit = (e) => {
  alert(
    `
    userName: ${name}
    email: ${email}
    pass: ${pass}
    country: ${country}
    `

  );
};

// const handleName = (e) => console.log(e.target.value);     //target displaying on console screen


  return (
    <div style={{ height: '110vh' }}>
      <form onSubmit={handleSubmit}>
        <div>
          <p></p>
          <label>
            <strong>Username: {name}</strong>
          </label>
          <br />
          <input type="text" placeholder="name" defaultValue="Please enter your name" onChange={handleName} />
        </div>
        <div>
          <p></p>
          <label>
            <strong>E-mail: {email}</strong>
          </label>
          <br />
          <input type="email" placeholder="email" onChange={handleEmail}/>
        </div>
        <div>
          <p></p>
          <label>
            <strong>Password: {pass} </strong>
          </label>
          <br />
          <input type="password" placeholder="pass" onChange={handlePassword} />
        </div>
        <div style={{ margin: '10px auto' }}>
          <p></p>
          <label>
            <strong>Country: {country} </strong>
          </label>
          <select onChange={handleCountry}
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
