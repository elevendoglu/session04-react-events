import './styles.css';
import { useState } from 'react';

const Form = () => {
// const [name, setName] = useState('');
// const [email, setEmail] = useState('');
// const [pass, setPass] = useState('');
// const [country, setCountry] = useState('');
const [values, setValues] = useState({
  name: '', 
  email: '', 
  pass: '', 
  country: '',
})

// const handleEmail = (e) => setEmail(e.target.value); 
// const handleName = (e) => setName(e.target.value); /* name target screning near "username: " */
// const handlePassword = (e) => setPass(e.target.value);
// const handleCountry = (e) => setCountry(e.target.value);
const handleValues = (e) => {
  setValues({...values, [e.target.name]: e.target.value});
};

const handleSubmit = (e) => {
  e.preventDefault();
  // alert(
  //   `
  //   userName: ${name}
  //   email: ${email}
  //   pass: ${pass}
  //   country: ${country}
  //   `

  // );

    alert(
      `
      userName: ${values.name}
      email: ${values.email}
      pass: ${values.pass}
      country: ${values.country}
      `

  );

  // setName("");
  // setEmail("");
  // setPass("");
  // setCountry("");
};

// const handleName = (e) => console.log(e.target.value);     //target displaying on console screen


  return (
    <div style={{ height: '110vh' }}>
      <form onSubmit={handleSubmit}>
        <div>
          <p></p>
          <label>
            <strong>
              {/* Username: {name} */}
              Username: {values.name}
              </strong>
          </label>
          <br />
          <input 
          type="text"
          name="name" 
          placeholder="name" 
          // value={name}
          value={values.name}
          // defaultValue="Please enter your name" 
          // onChange={handleName} 
          onChange={handleValues} 
          />
        </div>
        <div>
          <p></p>
          <label>
            <strong>
              {/* E-mail: {email} */}
              E-mail: {values.email}
              </strong>
          </label>
          <br />
          <input type="email" 
          name="email"
          placeholder="email" 
          value={values.email} 
          // value={email} 
          // onChange={handleEmail}
          onChange={handleValues} 
          />      
        </div>
        <div>
          <p></p>
          <label>
            <strong>
              {/* Password: {pass}  */}
              Password: {values.pass} 
              </strong>
          </label>
          <br />
          <input type="password" 
          name="pass"
          placeholder="pass" 
          value={values.pass} 
          // value={pass} 
          // onChange={handlePassword} 
          onChange={handleValues} 
          />
        </div>
        <div style={{ margin: '10px auto' }}>
          <p></p>
          <label>
            <strong>
              {/* Country: {country}  */}
              Country: {values.country} 
              </strong>
          </label>
          <select 
          // onChange={handleCountry} 
          onChange={handleValues} 
          name="country"
          // value={country}
          value={values.country}
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
