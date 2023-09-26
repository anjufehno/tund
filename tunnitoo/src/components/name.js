const Name =()=> {
    return (
      <header>
          <h1>˚ ༘♡ ·˚꒰Jelizaveta꒱ ₊˚ˑ༄</h1>
          <ul>
              <li>Youtube</li>
              <li>Twitch</li>
              <li>Laulmine</li>
              <li>Joonistamine</li>
              <li>Gym</li>
              <li>Tansimine</li>
              <li>Korvpall</li>
              <li>Pildistamine</li>
              <li>Tattoo</li>
              <li>Food</li>
              <li>Instagram</li>
              <li>Ukulele</li>
            </ul>
  
  
          <form method="POST" action="/~krugjeli/js2/leht.html">
          <label for="first_name_input">Eesnimi:</label><br/>
          <input name="first_name_input" id="first_name_input" type="text" value=""/><span></span><br/>
          <label for="lastname_input">Perekonnanimi:</label><br/>
          <input name="last_name_input" id="last_name_input" type="text" value=""/><span></span><br/>
          <label for="email_input">E-mail:</label><br/>
          <input name="email_input" id="email_input" type="text" value=""/><span></span><br/>
          <input name="user_data_submit" type="submit" value="Call To Action"/>
      </form>
      </header>
    );
  }
  export default Name;