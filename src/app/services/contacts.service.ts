import { Injectable } from '@angular/core';

import { Contacts } from '../models/contacts';

@Injectable({
  providedIn: 'root'
})

export class ContactsService {
  contacts: Contacts[] = [
      
      {
        firstName: 'Alfred', 
        lastName: 'Planter',
        phoneNumber: '234-345-4567', 
        email: 'alfredtheplanter@gmail.com'
      },

      {
        firstName: 'Brandon',
        lastName: 'Beck',
        phoneNumber: '2934822342',
        email: 'brandon.beck@yahoo.com'
      },

      {
        firstName: 'Daisy',
        lastName: 'Harvey',
        phoneNumber: '8392834583',
        email: 'daisyharvey22@gmail.com'
      },

      {
        firstName: 'Patrick',
        lastName: 'Wilson',
        phoneNumber: '2834723891',
        email: 'patrickwilson19@yahoo.com'
      }
  ]

  constructor() { }
}
