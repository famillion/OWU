import {Pipe, PipeTransform} from '@angular/core';
import {User} from '../models/user';

@Pipe({
  name: 'myPipe'
})
export class MyPipePipe implements PipeTransform {

  transform(users: User[]): void {
    const outerDiv = document.createElement('div');
    outerDiv.classList.add('list-group', 'list-group-flush', 'rounded', 'shadow', 'pr-0', 'jumbotron');

    users.forEach(user => {
      const innerDiv = document.createElement('div');
      innerDiv.classList.add('mt-3', 'shadow', 'rounded', 'col-8', 'offset-2', 'p-0');
      outerDiv.appendChild(innerDiv);
      innerDiv.innerHTML += `
 <h1 class="display-3">User ID: ${user.id}</h1>
  <div class="list-group-item">Name: ${user.name}</div>
  <div class="list-group-item">Username: ${user.username}</div>
  <div class="list-group-item">Email: ${user.email}</div>
  <div class="list-group-item">Address:
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Street: ${user.address.street}</li>
      <li class="list-group-item">Suite: ${user.address.suite}</li>
      <li class="list-group-item">City: ${user.address.city}</li>
      <li class="list-group-item">Zipcode: ${user.address.zipcode}</li>
      <li class="list-group-item">Geo:
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Lat: ${user.address.geo.lat}</li>
          <li class="list-group-item">Lng: ${user.address.geo.lng}</li>
        </ul>
      </li>
    </ul>
  </div>
  <div class="list-group-item">Phone: ${user.phone}</div>
  <div class="list-group-item">Website: ${user.website}</div>
  <div class="list-group-item">Company:
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Name: ${user.company.name}</li>
      <li class="list-group-item">catchPhrase: ${user.company.catchPhrase}</li>
      <li class="list-group-item">BS: ${user.company.bs}</li>
    </ul>
  </div>
`;

      window.document.body.appendChild(outerDiv);
    });

  }

}
