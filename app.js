const firstName = "Prince";
const lastName = "Azu-Okeke";

let html;

html = `<ul>
            <li>First Name: ${firstName}</li>
            <li> Last Name: ${lastName}</li>
        </ul>
        `;

document.body.innerHTML = html;