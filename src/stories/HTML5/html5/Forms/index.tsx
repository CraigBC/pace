export default function Forms() {
  return (
    <section id="forms">
      <header>
        <h2>Form elements</h2>
      </header>
      <form className="stack">
        <fieldset id="forms__input">
          <legend>Input fields</legend>
          <div className="stack">
            <label htmlFor="input__text">Text Input</label>
            <input id="input__text" type="text" placeholder="Text Input" />
          </div>
          <div>
            <label htmlFor="input__password">Password</label>
            <input
              id="input__password"
              type="password"
              placeholder="Type your Password"
            />
          </div>
          <div>
            <label htmlFor="input__webaddress">Web Address</label>
            <input
              id="input__webaddress"
              type="url"
              placeholder="https://yoursite.com"
            />
          </div>
          <div>
            <label htmlFor="input__emailaddress">Email Address</label>
            <input
              id="input__emailaddress"
              type="email"
              placeholder="name@email.com"
            />
          </div>
          <div>
            <label htmlFor="input__phone">Phone Number</label>
            <input id="input__phone" type="tel" placeholder="(999) 999-9999" />
          </div>
          <div>
            <label htmlFor="input__search">Search</label>
            <input
              id="input__search"
              type="search"
              placeholder="Enter Search Term"
            />
          </div>
          <div>
            <label htmlFor="input__text2">Number Input</label>
            <input
              id="input__text2"
              type="number"
              placeholder="Enter a Number"
            />
          </div>
          <div>
            <label htmlFor="input__file">File Input</label>
            <input id="input__file" type="file" />
          </div>
        </fieldset>
        <div>
          <a href="#top">[Top]</a>
        </div>
        <fieldset id="forms__select">
          <legend>Select menus</legend>
          <div>
            <label htmlFor="select">Select</label>
            <select id="select">
              <optgroup label="Option Group">
                <option>Option One</option>
                <option>Option Two</option>
                <option>Option Three</option>
              </optgroup>
            </select>
          </div>
          <div>
            <label htmlFor="select_multiple">Select (multiple)</label>
            <select id="select_multiple" multiple={true}>
              <optgroup label="Option Group">
                <option>Option One</option>
                <option>Option Two</option>
                <option>Option Three</option>
              </optgroup>
            </select>
          </div>
        </fieldset>
        <div>
          <a href="#top">[Top]</a>
        </div>
        <fieldset id="forms__checkbox">
          <legend>Checkboxes</legend>
          <ul>
            <li>
              <label htmlFor="checkbox1">
                <input
                  id="checkbox1"
                  name="checkbox"
                  type="checkbox"
                  defaultChecked={true}
                />{" "}
                Choice A
              </label>
            </li>
            <li>
              <label htmlFor="checkbox2">
                <input id="checkbox2" name="checkbox" type="checkbox" /> Choice
                B
              </label>
            </li>
            <li>
              <label htmlFor="checkbox3">
                <input id="checkbox3" name="checkbox" type="checkbox" /> Choice
                C
              </label>
            </li>
          </ul>
        </fieldset>
        <div>
          <a href="#top">[Top]</a>
        </div>
        <fieldset id="forms__radio">
          <legend>Radio buttons</legend>
          <ul>
            <li>
              <label htmlFor="radio1">
                <input
                  id="radio1"
                  name="radio"
                  type="radio"
                  defaultChecked={true}
                />{" "}
                Option 1
              </label>
            </li>
            <li>
              <label htmlFor="radio2">
                <input id="radio2" name="radio" type="radio" /> Option 2
              </label>
            </li>
            <li>
              <label htmlFor="radio3">
                <input id="radio3" name="radio" type="radio" /> Option 3
              </label>
            </li>
          </ul>
        </fieldset>
        <div>
          <a href="#top">[Top]</a>
        </div>
        <fieldset id="forms__textareas">
          <legend>Textareas</legend>
          <div>
            <label htmlFor="textarea">Textarea</label>
            <textarea
              id="textarea"
              rows={8}
              cols={48}
              placeholder="Enter your message here"
              defaultValue={""}
            />
          </div>
        </fieldset>
        <div>
          <a href="#top">[Top]</a>
        </div>
        <fieldset id="forms__html5">
          <legend>HTML5 inputs</legend>
          <div>
            <label htmlFor="ic">Color input</label>
            <input type="color" id="ic" defaultValue="#000000" />
          </div>
          <div>
            <label htmlFor="in">Number input</label>
            <input type="number" id="in" min={0} max={10} defaultValue={5} />
          </div>
          <div>
            <label htmlFor="ir">Range input</label>
            <input type="range" id="ir" defaultValue={10} />
          </div>
          <div>
            <label htmlFor="idd">Date input</label>
            <input type="date" id="idd" defaultValue="1970-01-01" />
          </div>
          <div>
            <label htmlFor="idm">Month input</label>
            <input type="month" id="idm" defaultValue="1970-01" />
          </div>
          <div>
            <label htmlFor="idw">Week input</label>
            <input type="week" id="idw" defaultValue="1970-W01" />
          </div>
          <div>
            <label htmlFor="idt">Datetime input</label>
            <input
              type="datetime"
              id="idt"
              defaultValue="1970-01-01T00:00:00Z"
            />
          </div>
          <div>
            <label htmlFor="idtl">Datetime-local input</label>
            <input
              type="datetime-local"
              id="idtl"
              defaultValue="1970-01-01T00:00"
            />
          </div>
          <div>
            <label htmlFor="idl">Datalist</label>
            <input type="text" id="idl" list="example-list" />
            <datalist id="example-list">
              <option value="Example #1"></option>
              <option value="Example #2"></option>
              <option value="Example #3"></option>
            </datalist>
          </div>
        </fieldset>
        <div>
          <a href="#top">[Top]</a>
        </div>
        <fieldset id="forms__action">
          <legend>Action buttons</legend>
          <div>
            <input type="submit" defaultValue="SUBMIT" />
            <input type="button" defaultValue="BUTTON" />
            <input type="reset" defaultValue="RESET" />
            <input type="submit" defaultValue="DISABLED" disabled={true} />
          </div>
          <div>
            <button type="submit">SUBMIT</button>
            <button type="button">BUTTON</button>
            <button type="reset">RESET</button>
            <button type="button" disabled={true}>
              DISABLED
            </button>
          </div>
        </fieldset>
        <div>
          <a href="#top">[Top]</a>
        </div>
      </form>
    </section>
  );
}
